import { notFound } from 'next/navigation'
import { categories, getProductsByCategory } from '@/data/products'
import CategoryPageClient from './CategoryPageClient'

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = categories.find(cat => cat.slug === slug)
  
  if (!category) {
    notFound()
  }

  const categoryProducts = getProductsByCategory(slug)

  return <CategoryPageClient category={category} products={categoryProducts} slug={slug} />
}

// Generate static params for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

// Generate metadata for each category
export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = categories.find(cat => cat.slug === slug)
  
  if (!category) {
    return {
      title: 'Categoria não encontrada - Zanvexis Store',
    }
  }

  return {
    title: `${category.nome} - Zanvexis Store`,
    description: `Explore nossa seleção de ${category.nome.toLowerCase()} com os melhores produtos tecnológicos.`,
    keywords: [category.nome.toLowerCase(), 'tecnologia', 'produtos', 'zanvexis'],
  }
}