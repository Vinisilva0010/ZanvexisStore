// app/politica-de-privacidade/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Zanvexis Store',
  description: 'Entenda como a Zanvexis Store coleta, usa e protege seus dados pessoais.',
  robots: {
    index: false,
  },
};

export default function PaginaPoliticaDePrivacidade() {
  // 👇 ALTERAÇÕES FEITAS AQUI 👇
  const nomeDaLoja = "Zanvexis Store";
  const emailDeContato = "contato@zanvexis.com"; // Sinta-se à vontade para mudar se for outro e-mail
  const dataDeVigencia = "27 de Setembro de 2025"; // Data de hoje já atualizada

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 md:p-12">
        <article className="prose prose-invert lg:prose-lg max-w-none">
          <h1>Política de Privacidade</h1>
          <p><strong>Última atualização:</strong> {dataDeVigencia}</p>
          
          {/* O resto do texto da política continua aqui, sem alterações... */}
          <h2>1. Introdução</h2>
          <p>
            Bem-vindo à {nomeDaLoja}. A sua privacidade é de extrema importância para nós. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações pessoais quando você visita e utiliza nosso site, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>

          <h2>2. Quais Dados Coletamos?</h2>
          <p>Nós coletamos as seguintes informações:</p>
          <ul>
            <li><strong>Informações de Identificação Pessoal:</strong> Nome, e-mail, CPF e número de telefone, fornecidos durante o processo de checkout.</li>
            <li><strong>Informações de Entrega:</strong> Endereço completo (CEP, rua, número, bairro, cidade, estado) para o envio dos produtos.</li>
            <li><strong>Informações de Pagamento:</strong> Nós **NÃO** armazenamos os dados do seu cartão de crédito. O pagamento é processado por nosso parceiro, a Stripe, um gateway de pagamento seguro e reconhecido mundialmente. Apenas recebemos a confirmação de que o pagamento foi aprovado.</li>
            <li><strong>Dados de Navegação:</strong> Informações como endereço IP, tipo de navegador, páginas visitadas e tempo de permanência, coletadas automaticamente para melhorar sua experiência.</li>
          </ul>

          <h2>3. Como Usamos Seus Dados?</h2>
          <p>Seus dados são utilizados para as seguintes finalidades:</p>
          <ul>
            <li><strong>Processar e Gerenciar Seu Pedido:</strong> Para confirmar o pagamento, registrar a compra e garantir que o produto seja entregue no endereço correto.</li>
            <li><strong>Comunicação:</strong> Para enviar e-mails de confirmação de pedido, atualizações sobre o envio e responder a suas solicitações de suporte.</li>
            <li><strong>Cumprimento de Obrigações Legais:</strong> Para emissão de notas fiscais e cumprimento de outras exigências legais e fiscais.</li>
            <li><strong>Segurança:</strong> Para prevenir fraudes e garantir a segurança do nosso site e dos nossos clientes.</li>
          </ul>

          <h2>4. Com Quem Compartilhamos Seus Dados?</h2>
          <p>
            Como uma loja que opera no modelo de dropshipping, o compartilhamento de certas informações é essencial para o funcionamento do nosso negócio. Seus dados são compartilhados apenas quando necessário e com as seguintes partes:
          </p>
          <ul>
            <li><strong>Fornecedores de Dropshipping:</strong> Compartilhamos suas informações de entrega (nome, endereço e telefone) com nossos fornecedores para que eles possam enviar o produto diretamente a você.</li>
            <li><strong>Gateways de Pagamento:</strong> Informações de pagamento são processadas diretamente pela Stripe para autorizar a transação.</li>
            <li><strong>Serviços de E-mail:</strong> Usamos plataformas como a Resend para enviar e-mails de confirmação de pedido.</li>
            <li><strong>Autoridades Legais:</strong> Em caso de requisição judicial ou obrigação legal.</li>
          </ul>

          <h2>5. Seus Direitos (LGPD)</h2>
          <p>Você, como titular dos dados, tem o direito de:</p>
          <ul>
            <li>Confirmar a existência de tratamento de seus dados.</li>
            <li>Acessar seus dados.</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
            <li>Solicitar a portabilidade dos seus dados a outro fornecedor.</li>
            <li>Revogar o consentimento.</li>
          </ul>
          <p>Para exercer seus direitos, entre em contato conosco através do e-mail: <a href={`mailto:${emailDeContato}`}>{emailDeContato}</a>.</p>

          <h2>6. Cookies</h2>
          <p>
            Nosso site utiliza cookies para funcionalidades essenciais, como manter os produtos no seu carrinho de compras e analisar o tráfego para melhorar sua experiência. Você pode gerenciar o uso de cookies através das configurações do seu navegador.
          </p>
          
          <h2>7. Alterações a Esta Política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível nesta página, com a data da última atualização no topo.
          </p>

          <h2>8. Contato</h2>
          <p>
            Se tiver qualquer dúvida sobre esta política ou sobre como seus dados são tratados, por favor, entre em contato pelo e-mail: <a href={`mailto:${emailDeContato}`}>{emailDeContato}</a>.
          </p>
        </article>
      </div>
    </div>
  );
}