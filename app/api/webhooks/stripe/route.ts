// app/api/webhooks/stripe/route.ts

import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';
import { Resend } from 'resend';
import ConfirmacaoPedidoEmail from '@/components/emails/ConfirmacaoPedido';
import NotificacaoAdminEmail from '@/components/emails/NotificacaoAdmin';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL!;

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature') as string;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

    try {
      const { data: pedidoData, error: dbError } = await supabaseServer
        .from('pedidos')
        .insert({
          nome_cliente: session.customer_details?.name,
          email_cliente: session.customer_details?.email,
          valor_total: (session.amount_total || 0) / 100,
          status_pagamento: 'pago',
          stripe_checkout_id: session.id,
          produtos: lineItems.data.map(item => ({
            nome: item.description,
            quantidade: item.quantity,
            valor: (item.amount_total || 0) / 100
          }))
        })
        .select()
        .single();

      if (dbError) throw dbError;

      console.log('✅ Pedido salvo no banco de dados.');

      if (pedidoData && session.customer_details?.email) {
        const produtosParaEmail = lineItems.data.map(item => ({
            nome: item.description || 'Produto',
            quantidade: item.quantity || 0,
            valor: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((item.amount_total || 0) / 100)
        }));

        // Envia e-mail para o CLIENTE
        await resend.emails.send({
          from: 'Zanvexis Store <onboarding@resend.dev>',
          to: [session.customer_details.email],
          subject: `Confirmação do seu Pedido #${pedidoData.id.substring(0, 8)}`,
          react: ConfirmacaoPedidoEmail({
            nomeCliente: session.customer_details.name || 'Cliente',
            pedidoId: pedidoData.id,
            valorTotal: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pedidoData.valor_total),
            produtos: produtosParaEmail
          })
        });
        console.log('✅ E-mail de confirmação enviado para o cliente!');

        // Envia e-mail para o ADMIN
        await resend.emails.send({
            from: 'Alerta de Venda <onboarding@resend.dev>',
            to: [adminEmail],
            subject: `🎉 Novo Pedido na Loja! #${pedidoData.id.substring(0, 8)}`,
            react: NotificacaoAdminEmail({
                pedidoId: pedidoData.id,
                valorTotal: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pedidoData.valor_total),
                nomeCliente: session.customer_details.name || 'N/A',
                emailCliente: session.customer_details.email,
                produtos: lineItems.data.map(item => ({
                    nome: item.description || 'Produto',
                    quantidade: item.quantity || 0
                }))
            })
        });
        console.log('✅ E-mail de notificação enviado para o admin!');
      }

    } catch (error) {
      console.error("Erro no processamento do webhook:", error);
      return new NextResponse('Erro interno ao processar o webhook.', { status: 500 });
    }
  }

  return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
}