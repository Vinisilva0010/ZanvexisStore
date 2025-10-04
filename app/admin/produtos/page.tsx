import { supabase } from '@/lib/supabaseClient';
import type { Product } from '@/types';
import CategoriesSection from '@/components/CategoriesSection';
import ProductGrid from '@/components/ProductGrid';



// A página agora recebe 'searchParams' como propriedade para o filtro
export default async function PaginaDeProdutos({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const categoria = searchParams?.categoria;

  // Criamos uma consulta base
  let query = supabase.from('produtos').select('*');

  // Se uma categoria for especificada na URL, adicionamos um filtro
  if (categoria) {
    query = query.eq('categoria', categoria);
  }

  // Executamos a consulta final, ordenando pelos mais recentes
  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) {
    console.error("Erro ao buscar produtos:", error);
    return <p className="text-center text-red-500">Erro ao carregar produtos.</p>;
  }

  const produtos: Product[] = data || [];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 neon-text">
        Nossos Produtos
      </h1>
      <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
        Explore nossa seleção de tecnologia de ponta. Filtre por categoria para encontrar exatamente o que você procura.
      </p>

      {/* Passamos a categoria atual para os botões de filtro */}
      <CategoriesSection currentCategory={categoria} />

      {/* O ProductGrid agora apenas exibe os produtos que a página buscou */}
      <ProductGrid products={produtos} />
    </div>
  );
}

