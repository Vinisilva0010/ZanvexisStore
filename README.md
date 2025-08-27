# 🚀 Zanvexis Store

Uma loja online futurista e minimalista construída com **Next.js 15+** e **App Router**. A Zanvexis Store conecta você ao futuro da tecnologia com um design moderno, PWA habilitado e animações impressionantes.

![Zanvexis Store](https://via.placeholder.com/1200x600/0a0a0a/3b82f6?text=Zanvexis+Store+-+Tecnologia+que+conecta+você+ao+futuro)

## ✨ Características

### 🎨 Design & UI/UX
- **Design futurista e minimalista** com dark mode por padrão
- **Cores neon** (azul #3b82f6 e roxo #a855f7) para efeitos visuais impressionantes
- **100% responsivo** - perfeito em desktop, tablet e mobile
- **Animações suaves** com Framer Motion
- **Tipografia moderna** e interface clean

### 🏗️ Tecnologia
- **Next.js 15+** com App Router
- **TailwindCSS** para estilização
- **TypeScript** para type safety
- **Framer Motion** para animações
- **PWA Ready** - instalável no celular
- **SEO otimizado** com meta tags dinâmicas

### 📱 PWA (Progressive Web App)
- Instalável em dispositivos móveis
- Funciona offline (estrutura básica)
- Ícones personalizados para todas as plataformas
- Manifest.json configurado

### 🛍️ Funcionalidades da Loja
- **Catálogo de produtos** com 8+ produtos tecnológicos
- **Sistema de busca** em tempo real
- **Filtros por categoria** (Smartphones, Gadgets, Acessórios)
- **Links de afiliados** para Amazon, Shopee, etc.
- **Cards de produtos** com preços, imagens e descrições

### 📝 Blog de Tecnologia
- **3 artigos** sobre tecnologia e inovação
- **Sistema de categorias** para organização
- **Roteamento dinâmico** para posts individuais
- **Design otimizado** para leitura

## 🚀 Instalação e Uso

### Pré-requisitos
- Node.js 18+ instalado
- npm, yarn ou pnpm

### 1. Clone o repositório
```bash
git clone <repository-url>
cd zanvexis-store
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Execute o projeto em desenvolvimento
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

### 4. Acesse no navegador
Abra [http://localhost:3000](http://localhost:3000) para ver a aplicação.

### 5. Build para produção
```bash
npm run build
npm run start
# ou
yarn build
yarn start
```

## 📁 Estrutura do Projeto

```
zanvexis-store/
├── app/                    # App Router (Next.js 13+)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx          # Página inicial
│   ├── loading.tsx       # Loading component
│   ├── not-found.tsx     # Página 404
│   ├── produtos/         # Página de produtos
│   ├── categorias/       # Página de categorias
│   ├── categoria/[slug]/ # Páginas dinâmicas de categoria
│   └── blog/            # Blog pages
├── components/           # Componentes reutilizáveis
│   ├── Header.tsx       # Cabeçalho com navegação
│   ├── Footer.tsx       # Rodapé
│   ├── HeroSection.tsx  # Banner principal
│   ├── ProductCard.tsx  # Card de produto
│   ├── SearchBar.tsx    # Barra de busca
│   └── ...
├── data/                # Dados mock
│   ├── products.ts      # Produtos da loja
│   └── blog.ts         # Posts do blog
├── public/             # Arquivos estáticos
│   ├── manifest.json   # PWA manifest
│   ├── favicon.ico     # Favicon
│   └── icons/         # Ícones PWA
└── ...
```

## 🛠️ Tecnologias Utilizadas

- **[Next.js 15+](https://nextjs.org/)** - Framework React
- **[TailwindCSS](https://tailwindcss.com/)** - Framework CSS
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca de animações
- **[React Icons](https://react-icons.github.io/react-icons/)** - Ícones
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[next-pwa](https://github.com/shadowwalker/next-pwa)** - PWA para Next.js

## 📋 Páginas Disponíveis

- **`/`** - Página inicial com hero banner, produtos em destaque, categorias e blog
- **`/produtos`** - Catálogo completo com busca e filtros
- **`/categorias`** - Listagem de todas as categorias
- **`/categoria/[slug]`** - Produtos filtrados por categoria
- **`/blog`** - Blog de tecnologia
- **`/blog/[slug]`** - Artigos individuais do blog

## 🎨 Customização

### Cores
As cores principais estão definidas no `tailwind.config.js`:
```javascript
colors: {
  neon: {
    blue: '#3b82f6',
    purple: '#a855f7',
  },
  dark: {
    100: '#1a1a1a',
    200: '#121212',
    300: '#0a0a0a',
  }
}
```

### Produtos
Edite o arquivo `data/products.ts` para adicionar/modificar produtos:
```typescript
{
  id: 'unique-id',
  nome: 'Nome do Produto',
  preco: 999.99,
  imagem: 'https://image-url.jpg',
  linkAfiliado: 'https://affiliate-link.com',
  categoria: 'smartphones',
  descricao: 'Descrição do produto',
  destaque: true
}
```

### Blog
Edite o arquivo `data/blog.ts` para adicionar/modificar artigos:
```typescript
{
  id: 'unique-id',
  titulo: 'Título do Artigo',
  slug: 'titulo-do-artigo',
  resumo: 'Resumo do artigo...',
  conteudo: 'Conteúdo completo...',
  // ...
}
```

## 📱 PWA - Instalação no Celular

1. Acesse a loja no navegador móvel
2. Toque no menu do navegador
3. Selecione "Adicionar à tela inicial" ou "Instalar app"
4. A Zanvexis Store será instalada como um app nativo

## 🌐 Deploy

### Vercel (Recomendado)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Deploy pasta 'out' ou '.next'
```

### Outros Provedores
A aplicação é 100% estática e pode ser hospedada em qualquer provedor que suporte Next.js.

## 🔧 Configurações Adicionais

### Environment Variables
Crie um arquivo `.env.local` para variáveis de ambiente:
```bash
NEXT_PUBLIC_SITE_URL=https://zanvexis-store.vercel.app
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### SEO
O SEO está pré-configurado com:
- Meta tags dinâmicas
- Open Graph
- Twitter Cards
- Structured data ready

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🎯 Próximas Features

- [ ] Carrinho de compras
- [ ] Sistema de favoritos
- [ ] Newsletter funcional
- [ ] Integração com APIs de pagamento
- [ ] Sistema de reviews
- [ ] Chat de suporte
- [ ] Modo offline completo
- [ ] Notificações push

## 💡 Créditos

Desenvolvido com ❤️ pela equipe **Zanvexis**.

- **Website:** [zanvexis.com](https://zanvexis.com)
- **Imagens:** [Unsplash](https://unsplash.com)
- **Ícones:** [React Icons](https://react-icons.github.io/react-icons/)

---

**Tecnologia que conecta você ao futuro!** 🚀

