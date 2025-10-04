// app/politica-de-troca/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Troca e Devolução | Zanvexis Store',
  description: 'Conheça nossa política de troca e devolução para garantir sua satisfação na Zanvexis Store.',
  robots: {
    index: false,
  },
};

export default function PaginaPoliticaDeTroca() {
  const nomeDaLoja = "Zanvexis Store";
  const emailDeContato = "contato@zanvexis.com"; // Verifique se este é o seu e-mail de contato
  const prazoArrependimento = "7 (sete) dias corridos";
  const prazoDefeito = "30 (trinta) dias corridos";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 md:p-12">
        <article className="prose prose-invert lg:prose-lg max-w-none">
          <h1>Política de Troca e Devolução</h1>
          
          <h2>1. Direito de Arrependimento</h2>
          <p>
            Conforme o Artigo 49 do Código de Defesa do Consumidor, o cliente pode desistir da compra no prazo de {prazoArrependimento}, a contar do ato de recebimento do produto. Para exercer seu direito de arrependimento, a comunicação deve ser feita através do nosso e-mail de atendimento, **{emailDeContato}**, dentro do prazo estipulado.
          </p>

          <h2>2. Condições para Troca ou Devolução</h2>
          <p>Para que a troca ou devolução seja aceita, o produto deverá atender às seguintes condições:</p>
          <ul>
            <li>O produto deve ser devolvido em sua embalagem original.</li>
            <li>Não deve conter indícios de uso.</li>
            <li>Deve ser devolvido com todas as etiquetas, manuais e acessórios que o acompanham.</li>
          </ul>
          <p>
            Não aceitaremos a devolução de produtos que não atendam a essas condições.
          </p>

          <h2>3. Procedimento para Devolução</h2>
          <p>
            Para solicitar uma troca ou devolução, por favor, envie um e-mail para **{emailDeContato}** informando o número do seu pedido e o motivo da devolução. Nossa equipe irá analisar sua solicitação e fornecer as instruções para o envio do produto. Os custos de envio para devolução por arrependimento são de responsabilidade do cliente.
          </p>

          <h2>4. Produto com Defeito</h2>
          <p>
            Caso o produto apresente algum defeito de fabricação, o cliente tem o prazo de {prazoDefeito} a partir da data de recebimento para entrar em contato. Solicitaremos o envio de fotos e vídeos que comprovem o defeito. Se constatado o defeito, a {nomeDaLoja} arcará com os custos de frete e providenciará a troca por um novo produto ou o reembolso integral do valor pago.
          </p>

          <h2>5. Reembolso</h2>
          <p>
            Após o recebimento e a inspeção do produto devolvido, enviaremos um e-mail para notificá-lo sobre a aprovação ou rejeição do seu reembolso. Se aprovado, o reembolso será processado e o crédito será automaticamente aplicado ao seu método de pagamento original (cartão de crédito ou outro) dentro de um prazo estipulado pela administradora do cartão e pelo gateway de pagamento.
          </p>
          
          <h2>6. Contato</h2>
          <p>
            Para qualquer dúvida relacionada a trocas e devoluções, entre em contato conosco pelo e-mail: <a href={`mailto:${emailDeContato}`}>{emailDeContato}</a>.
          </p>
        </article>
      </div>
    </div>
  );
}