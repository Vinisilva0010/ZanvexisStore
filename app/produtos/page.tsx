// app/produtos/page.tsx

import { supabase } from '@/lib/supabaseClient';
import ProductGrid from '@/components/ProductGrid';
import CategoriesSection from '@/components/CategoriesSection';
import type { Product } from '@/types';

// CORREÇÃO: searchParams agora é uma Promise
export default async function PaginaDeProdutos({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>; // ✅ Tipo corrigido
}) {
  
  const resolvedParams = await searchParams; // ✅ Await adicionado
  const categoria = resolvedParams?.categoria as string;

  // Criamos uma consulta base
  let query = supabase.from('produtos').select('*');

  // Se uma categoria foi passada na URL, adicionamos um filtro à consulta
  if (categoria) {
    query = query.eq('categoria', categoria);
  }

  // Executamos a consulta final
  const { data: produtos, error } = await query.order('created_at', { ascending: false });

  if (error) {
    console.error("Erro ao buscar produtos:", error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0a0a0f] to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/30 rounded-full px-5 py-2 mb-6">
            <span className="text-sm font-semibold text-blue-300">✨ Catálogo Completo</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Nossos </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Produtos
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore nossa coleção de{' '}
            <span className="text-blue-400 font-semibold">tecnologia de ponta</span>
            {' '}com os melhores preços do mercado
          </p>

          {/* Decorative Line */}
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
            <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-white mb-1">{produtos?.length || 0}+</div>
              <div className="text-sm text-gray-400">Produtos</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-white mb-1">50k+</div>
              <div className="text-sm text-gray-400">Clientes</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-white mb-1">4.8⭐</div>
              <div className="text-sm text-gray-400">Avaliação</div>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <CategoriesSection />
        </div>

        {/* Active Filter Indicator */}
        {categoria && (
          <div className="mb-8 flex items-center justify-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 flex items-center space-x-3">
              <span className="text-sm text-gray-300">Filtrando por:</span>
              <span className="text-sm font-semibold text-blue-400 capitalize">{categoria}</span>
              <a
                href="/produtos"
                className="ml-2 text-xs text-gray-400 hover:text-white transition-colors underline"
              >
                Limpar filtro
              </a>
            </div>
          </div>
        )}

        {/* Products Grid */}
        {produtos && produtos.length > 0 ? (
          <ProductGrid products={produtos} />
        ) : (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">Nenhum produto encontrado</h3>
            <p className="text-gray-400 mb-8">
              Não encontramos produtos para esta categoria.
            </p>
            <a
              href="/produtos"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300"
            >
              <span>Ver Todos os Produtos</span>
            </a>
          </div>
        )}

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 pt-12 border-t border-gray-800">
          {[
            {
              icon: '🚀',
              title: 'Entrega Expressa',
              desc: 'Receba seus produtos em até 48h',
              color: 'from-blue-500/10 to-blue-600/10 border-blue-500/30',
            },
            {
              icon: '🔒',
              title: 'Pagamento Seguro',
              desc: 'Suas transações 100% protegidas',
              color: 'from-purple-500/10 to-purple-600/10 border-purple-500/30',
            },
            {
              icon: '💎',
              title: 'Garantia Premium',
              desc: 'Cobertura completa de 12 meses',
              color: 'from-green-500/10 to-green-600/10 border-green-500/30',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} backdrop-blur-sm border hover:scale-105 transition-all duration-300 group`}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}