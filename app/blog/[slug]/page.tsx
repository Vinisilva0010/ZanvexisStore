import { notFound } from 'next/navigation'
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blog'
import BlogPostClient from './BlogPostClient'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  const allPosts = getAllBlogPosts()
  const relatedPosts = allPosts
    .filter(p => p.id !== post.id && p.categoria === post.categoria)
    .slice(0, 2)

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Artigo não encontrado - Zanvexis Store',
    }
  }

  return {
    title: `${post.titulo} - Blog Zanvexis Store`,
    description: post.resumo,
    keywords: [post.categoria, 'tecnologia', 'blog', 'zanvexis'],
    openGraph: {
      title: post.titulo,
      description: post.resumo,
      images: [post.imagem],
      type: 'article',
      publishedTime: post.dataPublicacao,
      authors: [post.autor],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.titulo,
      description: post.resumo,
      images: [post.imagem],
    },
  }
}