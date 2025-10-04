// app/prazos-de-entrega/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prazos de Entrega | Zanvexis Store',
  description: 'Entenda nossos prazos de processamento e envio para receber seus produtos de tecnologia.',
  robots: {
    index: false,
  },
};

export default function PaginaPrazosDeEntrega() {
  const nomeDaLoja = "Zanvexis Store";
  const emailDeContato = "contato@zanvexis.com";
  const prazoProcessamento = "3 a 7 dias úteis";
  const prazoEntregaEstimado = "15 a 30 dias úteis";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 md:p-12">
        <article className="prose prose-invert lg:prose-lg max-w-none">
          <h1>Prazos de Entrega</h1>
          
          <h2>Como Funciona o Nosso Envio?</h2>
          <p>
            Na {nomeDaLoja}, trabalhamos com o modelo de dropshipping, o que significa que seus produtos são enviados diretamente de centros de distribuição de nossos parceiros internacionais. Isso nos permite oferecer a você produtos inovadores com preços competitivos.
          </p>

          <h2>1. Processamento do Pedido</h2>
          <p>
            Após a confirmação do seu pagamento, seu pedido entra na fase de processamento. Esta etapa, que inclui a separação do produto, embalagem e despacho para a transportadora, leva em média de **{prazoProcessamento}**.
          </p>

          <h2>2. Prazo de Entrega</h2>
          <p>
            Uma vez que o pedido é despachado, o prazo de entrega estimado para o Brasil é de **{prazoEntregaEstimado}**.
          </p>
          <p>
            É importante ressaltar que este é um prazo estimado. A entrega pode ocorrer antes ou sofrer pequenos atrasos, principalmente devido a fatores como:
          </p>
          <ul>
            <li>Liberação na alfândega brasileira.</li>
            <li>Greves ou feriados nos Correios.</li>
            <li>Condições climáticas e logísticas regionais.</li>
          </ul>

          <h2>3. Código de Rastreio</h2>
          <p>
            Assim que seu pedido for despachado pelo nosso fornecedor, você receberá um e-mail com o código de rastreio. A atualização das informações no sistema de rastreamento pode levar alguns dias para aparecer. Com este código, você poderá acompanhar o status da sua entrega diretamente no site dos Correios ou em outras plataformas de rastreamento internacional.
          </p>

          <h2>4. Alfândega e Taxas</h2>
          <p>
            Na maioria dos casos, os produtos de baixo valor não são taxados pela alfândega. No entanto, de acordo com a legislação brasileira, qualquer compra internacional está sujeita à fiscalização aduaneira e a uma possível tributação. Caso ocorra qualquer cobrança de taxas, a responsabilidade pelo pagamento é do cliente.
          </p>
          
          <h2>5. Endereço de Entrega</h2>
          <p>
            É de responsabilidade do cliente o preenchimento correto do endereço de entrega. Não nos responsabilizamos por pedidos que não puderam ser entregues devido a endereços incorretos ou incompletos.
          </p>

          <h2>6. Contato</h2>
          <p>
            Se o seu pedido não chegar após o prazo máximo estipulado ou se tiver qualquer dúvida, por favor, entre em contato conosco pelo e-mail: <a href={`mailto:${emailDeContato}`}>{emailDeContato}</a>.
          </p>
        </article>
      </div>
    </div>
  );
}