// types/index.ts

export interface Product {
  id: string;
  created_at: string;
  nome: string;
  slug: string;
  descricao: string | null;
  preco: number;
  imagens: string | null; // A URL da imagem que pode ser nula
  categoria: string;
  destaque: boolean;
  // Adicione outros campos que você tem, como estoque, etc.
  estoque: number;
  preco_promocional: number | null;
  fornecedor_id: string | null;
}