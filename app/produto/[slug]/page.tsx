// app/produto/[slug]/page.tsx

import { supabaseServer } from "@/lib/supabaseServer";
import { notFound } from "next/navigation";
import Image from "next/image";
import StarRating from "@/components/StarRating";
import AddToCartButton from "@/components/AddToCartButton";
import ReviewForm from "@/components/ReviewForm";
import type { Metadata } from 'next';

// CORREÇÃO: params agora é uma Promise
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; // ✅ Await adicionado

  const { data: produto } = await supabaseServer
    .from('produtos')
    .select('nome, descricao, imagens')
    .eq('slug', slug)
    .single();

  if (!produto) {
    return {
      title: 'Produto não encontrado',
      description: 'Este produto não existe ou foi removido.',
    };
  }

  return {
    title: `${produto.nome} | Zanvexis Store`,
    description: produto.descricao || `Compre ${produto.nome} com o melhor preço na Zanvexis Store.`,
    openGraph: {
      title: produto.nome,
      description: produto.descricao,
      images: produto.imagens ? [produto.imagens[0]] : [],
    },
  };
}

// Função para buscar o produto pelo slug
async function getProduto(slug: string) {
  const { data: produto, error } = await supabaseServer
    .from('produtos')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !produto) {
    console.error('Produto não encontrado ou erro na busca:', error);
    notFound();
  }
  
  console.log('Produto encontrado:', produto.nome);
  return produto;
}

// Função para buscar as avaliações de um produto
async function getAvaliacoes(produtoId: string) {
  const { data: avaliacoes, error } = await supabaseServer
    .from('avaliacoes')
    .select('*')
    .eq('produto_id', produtoId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Erro ao buscar avaliações:", error);
    return [];
  }
  return avaliacoes;
}

// CORREÇÃO: params agora é uma Promise
export default async function PaginaProduto({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ Await adicionado
  const produto = await getProduto(slug);
  const avaliacoes = await getAvaliacoes(produto.id);

  const totalReviews = avaliacoes.length;
  const averageRating = totalReviews > 0
    ? avaliacoes.reduce((sum, review) => sum + review.avaliacao, 0) / totalReviews
    : 0;
  
  const formatPrice = (price: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0a0a0f] to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center space-x-2 text-sm text-gray-400">
          <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
          <span>/</span>
          <a href="/produtos" className="hover:text-blue-400 transition-colors">Produtos</a>
          <span>/</span>
          <span className="text-white">{produto.nome}</span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-800 hover:border-blue-500/30 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              <Image
                src={produto.imagens?.[0] || '/placeholder.png'}
                alt={produto.nome}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            {/* Thumbnail Gallery */}
            {produto.imagens && produto.imagens.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {produto.imagens.slice(0, 4).map((img: string, index: number) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all cursor-pointer">
                    <Image src={img} alt={`${produto.nome} - ${index + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badge */}
            {produto.destaque && (
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-blue-400">⭐ Produto em Destaque</span>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {produto.nome}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-4 py-2">
              <StarRating rating={averageRating} totalReviews={totalReviews} />
              <span className="text-gray-400">|</span>
              <span className="text-sm text-gray-400">{totalReviews} avaliações</span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-blue-500/30 pl-4 py-2">
              {produto.descricao}
            </p>

            {/* Price Section */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 space-y-4">
              <div className="flex items-baseline space-x-4">
                <p className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {formatPrice(produto.preco_promocional || produto.preco)}
                </p>
                {produto.preco_promocional && (
                  <div className="space-y-1">
                    <p className="text-gray-500 text-xl line-through">{formatPrice(produto.preco)}</p>
                    <p className="text-green-400 text-sm font-semibold bg-green-500/10 px-3 py-1 rounded-full inline-block">
                      Economize {formatPrice(produto.preco - produto.preco_promocional)}
                    </p>
                  </div>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">Em estoque - Pronto para envio</span>
              </div>

              {/* Add to Cart */}
              <div className="pt-4">
                <AddToCartButton product={produto} />
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span className="text-xl">🚚</span>
                  <span>Frete Grátis</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span className="text-xl">🔒</span>
                  <span>Compra Segura</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span className="text-xl">↩️</span>
                  <span>7 dias para trocar</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span className="text-xl">💎</span>
                  <span>Garantia 12 meses</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Avaliações de <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clientes</span>
            </h2>
            <div className="text-right">
              <div className="text-4xl font-bold text-white">{averageRating.toFixed(1)}</div>
              <div className="text-sm text-gray-400">{totalReviews} avaliações</div>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            {totalReviews > 0 ? (
              avaliacoes.map(avaliacao => (
                <div key={avaliacao.id} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-white text-lg">{avaliacao.nome_cliente}</h3>
                    <StarRating rating={avaliacao.avaliacao} />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{avaliacao.comentario}</p>
                  <p className="text-xs text-gray-500 mt-3">
                    {new Date(avaliacao.created_at).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">💬</div>
                <p className="text-gray-400 text-lg">
                  Este produto ainda não tem avaliações.<br />
                  <span className="text-blue-400 font-semibold">Seja o primeiro a avaliar!</span>
                </p>
              </div>
            )}
          </div>

          {/* Review Form */}
          <div className="border-t border-gray-700 pt-8">
            <h3 className="text-2xl font-bold text-white mb-6">Deixe sua avaliação</h3>
            <ReviewForm productId={produto.id} productSlug={produto.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}