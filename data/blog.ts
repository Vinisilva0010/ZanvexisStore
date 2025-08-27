export interface BlogPost {
  id: string;
  titulo: string;
  slug: string;
  resumo: string;
  conteudo: string;
  imagem: string;
  dataPublicacao: string;
  autor: string;
  categoria: string;
  tempoLeitura: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    titulo: 'O Futuro dos Smartphones: IA e Realidade Aumentada',
    slug: 'futuro-smartphones-ia-realidade-aumentada',
    resumo: 'Descubra como a inteligência artificial e a realidade aumentada estão revolucionando a experiência mobile.',
    conteudo: `
# O Futuro dos Smartphones: IA e Realidade Aumentada

A evolução dos smartphones tem sido impressionante nas últimas décadas, mas estamos apenas começando a ver o verdadeiro potencial dessas pequenas máquinas que carregamos no bolso.

## Inteligência Artificial Integrada

A IA não é mais apenas um recurso adicional - ela se tornou o coração dos smartphones modernos. Desde assistentes virtuais mais inteligentes até câmeras que reconhecem automaticamente cenas e objetos, a IA está transformando como interagimos com nossos dispositivos.

### Principais Avanços:
- Fotografia computacional avançada
- Tradução em tempo real
- Assistentes virtuais mais contextuais
- Otimização automática de bateria

## Realidade Aumentada: O Novo Paradigma

A AR está saindo dos laboratórios e chegando ao mainstream. Com hardware cada vez mais poderoso e sensores mais precisos, os smartphones estão se tornando portais para mundos virtuais sobrepostos à realidade.

### Aplicações Práticas:
- Compras virtuais com visualização 3D
- Navegação com sobreposição de informações
- Jogos imersivos no mundo real
- Educação interativa

## O Que Esperar

Os próximos anos prometem avanços ainda mais dramáticos, com processadores dedicados à IA, displays holográficos e interfaces neurais diretas.
    `,
    imagem: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=400&fit=crop',
    dataPublicacao: '2024-01-15',
    autor: 'Zanvexis Tech Team',
    categoria: 'Smartphones',
    tempoLeitura: '5 min',
  },
  {
    id: '2',
    titulo: 'PWAs: O Futuro das Aplicações Web',
    slug: 'pwas-futuro-aplicacoes-web',
    resumo: 'Progressive Web Apps estão revolucionando como desenvolvemos e distribuímos aplicações.',
    conteudo: `
# PWAs: O Futuro das Aplicações Web

As Progressive Web Apps (PWAs) representam uma evolução natural das aplicações web, combinando o melhor dos mundos web e mobile.

## O Que São PWAs?

PWAs são aplicações web que utilizam tecnologias modernas para proporcionar uma experiência similar à de aplicativos nativos, mas com a flexibilidade e alcance da web.

### Características Principais:
- Funcionamento offline
- Instalação no dispositivo
- Notificações push
- Interface responsiva
- Carregamento rápido

## Vantagens para Desenvolvedores

- **Desenvolvimento único**: Uma base de código para todas as plataformas
- **Distribuição simplificada**: Sem necessidade de app stores
- **Atualizações automáticas**: Como sites tradicionais
- **Custo reduzido**: Menor complexidade de manutenção

## Vantagens para Usuários

- **Menor uso de dados**: Carregamento otimizado
- **Funcionalidade offline**: Acesso mesmo sem internet
- **Experiência nativa**: Interface fluida e responsiva
- **Menos espaço ocupado**: Menor que apps nativos

## Cases de Sucesso

Empresas como Twitter, Pinterest e Starbucks já demonstraram o potencial das PWAs, com aumentos significativos no engajamento e conversão.
    `,
    imagem: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    dataPublicacao: '2024-01-10',
    autor: 'Zanvexis Dev Team',
    categoria: 'Desenvolvimento',
    tempoLeitura: '7 min',
  },
  {
    id: '3',
    titulo: 'Sustentabilidade Tech: Como a Tecnologia Pode Salvar o Planeta',
    slug: 'sustentabilidade-tech-tecnologia-planeta',
    resumo: 'Explore como inovações tecnológicas estão contribuindo para um futuro mais sustentável.',
    conteudo: `
# Sustentabilidade Tech: Como a Tecnologia Pode Salvar o Planeta

A tecnologia tem o poder de ser tanto problema quanto solução para os desafios ambientais do nosso planeta. Cada vez mais, vemos inovações que prometem um futuro mais verde.

## Energia Renovável e Eficiência

### Inovações em Energia Solar
- Painéis solares mais eficientes
- Baterias de armazenamento avançadas
- Redes inteligentes de distribuição

### Computação Verde
- Data centers alimentados por energia renovável
- Processadores mais eficientes
- Algoritmos otimizados para menor consumo

## IoT para Sustentabilidade

A Internet das Coisas está revolucionando como monitoramos e otimizamos o uso de recursos:

- **Smart Cities**: Semáforos inteligentes, iluminação adaptativa
- **Agricultura de Precisão**: Sensores para otimizar uso de água
- **Gestão de Resíduos**: Lixeiras inteligentes e rotas otimizadas

## Economia Circular Digital

A tecnologia está facilitando modelos de negócio mais sustentáveis:
- Plataformas de compartilhamento
- Marketplaces de produtos usados
- Sistemas de rastreamento de produtos

## O Papel dos Consumidores

Como consumidores conscientes, podemos:
- Escolher produtos com certificações ambientais
- Participar da economia de compartilhamento
- Apoiar empresas comprometidas com a sustentabilidade
- Reciclar adequadamente dispositivos eletrônicos

## Futuro Verde

O futuro da tecnologia será inevitavelmente verde, com inovações que não apenas reduzem o impacto ambiental, mas ativamente restauram nosso planeta.
    `,
    imagem: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop',
    dataPublicacao: '2024-01-05',
    autor: 'Zanvexis Sustainability Team',
    categoria: 'Sustentabilidade',
    tempoLeitura: '6 min',
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.dataPublicacao).getTime() - new Date(a.dataPublicacao).getTime());
}

