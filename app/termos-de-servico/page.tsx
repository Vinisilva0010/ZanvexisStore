// app/termos-de-servico/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Serviço | Zanvexis Store',
  description: 'Leia os termos e condições de uso do site e serviços da Zanvexis Store.',
  robots: {
    index: false,
  },
};

export default function PaginaTermosDeServico() {
  const nomeDaLoja = "Zanvexis Store";
  const emailDeContato = "contato@zanvexis.com";
  const dataDeVigencia = "27 de Setembro de 2025";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 md:p-12">
        <article className="prose prose-invert lg:prose-lg max-w-none">
          <h1>Termos de Serviço</h1>
          <p><strong>Última atualização:</strong> {dataDeVigencia}</p>

          <h2>1. Visão Geral</h2>
          <p>
            Bem-vindo à {nomeDaLoja}. Ao acessar e utilizar nosso site, você concorda em cumprir e aceitar os seguintes termos e condições. Por favor, leia-os com atenção. Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
          </p>

          <h2>2. Natureza do Serviço</h2>
          <p>
            A {nomeDaLoja} atua como uma intermediadora de vendas no modelo de dropshipping. Nós conectamos você a produtos de fornecedores internacionais. Ao realizar uma compra em nosso site, você está ciente de que o produto será enviado diretamente do estoque do nosso fornecedor parceiro localizado no exterior.
          </p>

          <h2>3. Responsabilidades do Usuário</h2>
          <p>
            Ao utilizar nosso site, você se compromete a:
          </p>
          <ul>
            <li>Fornecer informações verdadeiras, precisas e completas durante o cadastro e o processo de checkout.</li>
            <li>Manter a confidencialidade de sua conta e senha, caso aplicável.</li>
            <li>Utilizar o site para fins lícitos, sem violar quaisquer leis aplicáveis.</li>
          </ul>

          <h2>4. Pedidos, Pagamentos e Preços</h2>
          <p>
            Todos os preços dos produtos estão sujeitos a alterações sem aviso prévio. Nos reservamos o direito de recusar ou cancelar qualquer pedido a nosso critério, incluindo, mas não se limitando a, pedidos que pareçam ser fraudulentos ou feitos por revendedores. Todos os pagamentos são processados através de gateways de pagamento seguros de terceiros, como a Stripe.
          </p>

          <h2>5. Envio e Prazos de Entrega</h2>
          <p>
            Os produtos são enviados diretamente por nossos fornecedores internacionais. Os prazos de entrega são estimativas e podem variar devido a processos alfandegários e logísticos. Para informações detalhadas sobre os prazos, consulte nossa página de <a href="/prazos-de-entrega">Prazos de Entrega</a>. A {nomeDaLoja} não se responsabiliza por eventuais taxas alfandegárias que possam ser aplicadas ao seu pedido.
          </p>

          <h2>6. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo presente neste site, incluindo textos, gráficos, logos, imagens e software, é propriedade da {nomeDaLoja} ou de seus fornecedores de conteúdo e é protegido pelas leis de direitos autorais.
          </p>

          <h2>7. Limitação de Responsabilidade</h2>
          <p>
            A {nomeDaLoja} atua como intermediária e não se responsabiliza por defeitos de fabricação dos produtos, os quais são de responsabilidade do fabricante. Nossa responsabilidade em caso de problemas com o pedido está limitada ao valor total da compra.
          </p>
          
          <h2>8. Alterações nos Termos de Serviço</h2>
          <p>
            Reservamo-nos o direito de atualizar ou modificar estes Termos de Serviço a qualquer momento, sem aviso prévio. A versão mais atual estará sempre disponível em nosso site.
          </p>

          <h2>9. Lei Aplicável</h2>
          <p>
            Estes Termos de Serviço e quaisquer acordos separados por meio dos quais fornecemos serviços serão regidos e interpretados de acordo com as leis do Brasil.
          </p>

          <h2>10. Contato</h2>
          <p>
            Dúvidas sobre os Termos de Serviço devem ser enviadas para nós através do e-mail: <a href={`mailto:${emailDeContato}`}>{emailDeContato}</a>.
          </p>
        </article>
      </div>
    </div>
  );
}