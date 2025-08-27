export interface Product {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
  linkAfiliado: string;
  categoria: string;
  descricao: string;
  destaque: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    nome: 'iPhone 15 Pro Max',
    preco: 7999.99,
    imagem: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    linkAfiliado: 'https://amazon.com.br/iphone-15-pro-max',
    categoria: 'smartphones',
    descricao: 'O mais avançado iPhone já criado, com chip A17 Pro e câmera de 48MP.',
    destaque: true,
  },
  {
    id: '2',
    nome: 'Samsung Galaxy S24 Ultra',
    preco: 6999.99,
    imagem: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop',
    linkAfiliado: 'https://amazon.com.br/galaxy-s24-ultra',
    categoria: 'smartphones',
    descricao: 'Galaxy S24 Ultra com S Pen integrada e IA avançada.',
    destaque: true,
  },
  {
    id: '3',
    nome: 'AirPods Pro 3ª Geração',
    preco: 2499.99,
    imagem: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop',
    linkAfiliado: 'https://amazon.com.br/airpods-pro-3',
    categoria: 'acessorios',
    descricao: 'Cancelamento de ruído adaptativo e áudio espacial personalizado.',
    destaque: false,
  },
  {
    id: '4',
    nome: 'MacBook Pro M3 14"',
    preco: 19999.99,
    imagem: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    linkAfiliado: 'https://amazon.com.br/macbook-pro-m3',
    categoria: 'gadgets',
    descricao: 'MacBook Pro com chip M3, performance revolucionária para profissionais.',
    destaque: true,
  },
  {
    id: '5',
    nome: 'Apple Watch Series 9',
    preco: 4299.99,
    imagem: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=400&fit=crop',
    linkAfiliado: 'https://amazon.com.br/apple-watch-series-9',
    categoria: 'acessorios',
    descricao: 'O smartwatch mais avançado, com recursos de saúde e fitness.',
    destaque: false,
  },
  {
    id: '6',
    nome: 'PlayStation 5 Slim',
    preco: 3999.99,
    imagem: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
    linkAfiliado: 'https://amazon.com.br/playstation-5-slim',
    categoria: 'gadgets',
    descricao: 'Console de última geração com gráficos 4K e carregamento ultrarrápido.',
    destaque: true,
  },
  {
    id: '7',
    nome: 'Samsung Galaxy Buds Pro 2',
    preco: 1299.99,
    imagem: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    linkAfiliado: 'https://amazon.com.br/galaxy-buds-pro-2',
    categoria: 'acessorios',
    descricao: 'Fones true wireless com cancelamento de ruído inteligente.',
    destaque: false,
  },
  {
    id: '8',
    nome: 'iPad Pro M2 12.9"',
    preco: 12999.99,
    imagem: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    linkAfiliado: 'https://amazon.com.br/ipad-pro-m2',
    categoria: 'gadgets',
    descricao: 'iPad Pro com chip M2, tela Liquid Retina XDR e suporte ao Apple Pencil.',
    destaque: false,
  },
];

export const categories = [
  { slug: 'smartphones', nome: 'Smartphones', icon: '📱' },
  { slug: 'acessorios', nome: 'Acessórios', icon: '🎧' },
  { slug: 'gadgets', nome: 'Gadgets', icon: '💻' },
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.categoria === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.destaque);
}

export function searchProducts(query: string): Product[] {
  return products.filter(product =>
    product.nome.toLowerCase().includes(query.toLowerCase()) ||
    product.categoria.toLowerCase().includes(query.toLowerCase())
  );
}

