// components/emails/NotificacaoAdmin.tsx

import {
  Body, Container, Head, Heading, Hr, Html, Preview, Text, Section,
} from '@react-email/components';
import * as React from 'react';

interface NotificacaoAdminProps {
  pedidoId: string;
  valorTotal: string;
  nomeCliente: string;
  emailCliente: string;
  // Futuramente, podemos adicionar o endereço de entrega aqui
  produtos: Array<{
    nome: string;
    quantidade: number;
  }>;
}

export const NotificacaoAdminEmail = ({
  pedidoId,
  valorTotal,
  nomeCliente,
  emailCliente,
  produtos,
}: NotificacaoAdminProps) => (
  <Html>
    <Head />
    <Preview>🎉 Novo Pedido na Zanvexis Store!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>🎉 Novo Pedido Recebido!</Heading>
        <Text style={text}>
          Parabéns! Um novo pedido foi realizado na sua loja.
        </Text>
        
        <Section style={box}>
          <Heading as="h2" style={h2}>Detalhes do Pedido #{pedidoId.substring(0, 8)}</Heading>
          <Hr style={hr} />
          <Text style={infoText}><strong>Cliente:</strong> {nomeCliente}</Text>
          <Text style={infoText}><strong>E-mail:</strong> {emailCliente}</Text>
          <Text style={infoText}><strong>Valor Total:</strong> {valorTotal}</Text>
          <Hr style={hr} />
          <Heading as="h3" style={h3}>Itens Comprados:</Heading>
          {produtos.map((produto, index) => (
            <Text key={index} style={productText}>
              - {produto.nome} (x{produto.quantidade})
            </Text>
          ))}
        </Section>
        
        <Text style={text}>
          <strong>Próximo passo:</strong> Realize o pedido com seu fornecedor de dropshipping para o endereço do cliente que está salvo no banco de dados.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default NotificacaoAdminEmail;

// --- ESTILOS ---
// (Estilos são os mesmos da confirmação do cliente, para consistência)
const main = { backgroundColor: '#0a0a0a', fontFamily: 'sans-serif', color: '#ffffff' };
const container = { margin: '0 auto', padding: '20px 0 48px', width: '580px' };
const h1 = { fontSize: '32px', fontWeight: 'bold', textAlign: 'center' as const, color: '#00e676' }; // Verde para sucesso
const h2 = { fontSize: '24px', fontWeight: 'bold', color: '#00e676' };
const h3 = { fontSize: '20px', fontWeight: 'bold', color: '#cccccc' };
const text = { fontSize: '16px', lineHeight: '26px', color: '#cccccc' };
const infoText = { ...text, margin: '2px 0' };
const productText = { ...text, margin: '0 0 0 16px' };
const box = { padding: '24px', border: 'solid 1px #333', borderRadius: '5px', backgroundColor: '#111' };
const hr = { borderColor: '#333', margin: '20px 0' };