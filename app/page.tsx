// app/page.tsx

import HeroSection from '@/components/HeroSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import CategoriesSection from '@/components/CategoriesSection'
import BlogSection from '@/components/BlogSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import EmailCapture from '@/components/EmailCapture'
import { supabase } from '@/lib/supabaseClient' // 1. Importamos o Supabase

// 2. A página agora é 'async' para poder buscar dados
export default async function HomePage() {
  
  // 3. Buscamos os produtos em destaque diretamente do Supabase
  const { data: featuredProducts, error } = await supabase
    .from('produtos')
    .select('*')
    .eq('destaque', true)
    .limit(4);

  // Se houver um erro, logamos no terminal. Se não houver produtos, passamos um array vazio.
  if (error) {
    console.error("Erro ao buscar produtos em destaque:", error);
  }
  const productsToShow = featuredProducts || [];

  return (
    <div>
      <HeroSection />
      {/* 4. Passamos os produtos buscados como uma prop para o componente */}
      <FeaturedProducts products={productsToShow} />
      <WhyChooseUs />
      <CategoriesSection />
      <EmailCapture />
      <BlogSection />
    </div>
  )
}