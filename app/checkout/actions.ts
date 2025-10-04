// app/checkout/actions.ts

"use server";

import { redirect } from 'next/navigation';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in the environment variables.');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createCheckoutSession(formData: FormData) {
  const cartItems = JSON.parse(formData.get('cart_items') as string);
  const customerEmail = formData.get('email') as string;

  const lineItems = cartItems.map((item: any) => ({
    price_data: {
      currency: 'brl',
      product_data: {
        name: item.nome,
      },
      unit_amount: Math.round(item.preco * 100),
    },
    quantity: item.quantidade,
  }));

  const origin = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://sua-url-de-producao.com';

  const successUrl = `${origin}/pedido/sucesso?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${origin}/carrinho`;

  let session: Stripe.Checkout.Session;

  try {
    // O try...catch agora protege APENAS a chamada para a Stripe
    session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'boleto'],
      customer_email: customerEmail,
      line_items: lineItems,
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
    });
  } catch (error) {
    console.error("Erro ao se comunicar com a Stripe:", error);
    throw new Error('Não foi possível iniciar o processo de pagamento.');
  }

  // Se a sessão foi criada, o redirect acontece aqui FORA do try...catch
  if (session?.url) {
    redirect(session.url);
  } else {
    // Caso raro onde a Stripe não retorna uma URL
    throw new Error('Falha ao obter a URL de checkout da Stripe.');
  }
}