// components/emails/ConfirmacaoPedido.tsx

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
  Section,
} from '@react-email/components';
import * as React from 'react';

interface ConfirmacaoPedidoProps {
  nomeCliente: string;
  pedidoId: string;
  valorTotal: string;
  produtos: Array<{
    nome: string;
    quantidade: number;
    valor: string;
  }>;
}

export const ConfirmacaoPedidoEmail = ({
  nomeCliente,
  pedidoId,
  valorTotal,
  produtos,
}: ConfirmacaoPedidoProps) => (
  <Html>
    <Head />
    <Preview>Confirmação do seu pedido na Zanvexis Store</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Obrigado pela sua compra!</Heading>
        <Text style={text}>
          Olá {nomeCliente},
        </Text>
        <Text style={text}>
          Seu pedido foi confirmado e está sendo processado. Aqui estão os detalhes:
        </Text>
        <Section style={box}>
          <Heading as="h2" style={h2}>Resumo do Pedido #{pedidoId.substring(0, 8)}</Heading>
          {produtos.map((produto, index) => (
            <div key={index}>
              <Text style={productText}>
                <strong>{produto.nome}</strong> (x{produto.quantidade}) - <strong>{produto.valor}</strong>
              </Text>
            </div>
          ))}
          <Hr style={hr} />
          <Text style={totalText}>
            <strong>Total: {valorTotal}</strong>
          </Text>
        </Section>
        <Text style={text}>
          Você receberá uma nova notificação assim que seu pedido for enviado.
        </Text>
        <Text style={text}>
          Atenciosamente,
          <br />
          Equipe Zanvexis Store
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ConfirmacaoPedidoEmail;

// --- ESTILOS PARA O E-MAIL ---
const main = {
  backgroundColor: '#0a0a0a',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  color: '#ffffff',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const h1 = {
  fontSize: '32px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  color: '#a855f7', // Roxo neon
};

const h2 = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#a855f7',
};

const text = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#cccccc',
};

const productText = {
  ...text,
  margin: '2px 0',
}

const totalText = {
  ...text,
  fontSize: '20px',
  fontWeight: 'bold',
  marginTop: '20px',
}

const box = {
  padding: '24px',
  border: 'solid 1px #333',
  borderRadius: '5px',
  backgroundColor: '#111',
};

const hr = {
  borderColor: '#333',
  margin: '20px 0',
};