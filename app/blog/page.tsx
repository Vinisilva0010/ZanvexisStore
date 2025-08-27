'use client'

import { motion } from 'framer-motion'
import BlogCard from '@/components/BlogCard'
import { getAllBlogPosts } from '@/data/blog'
export default function BlogPage() {
  const blogPosts = getAllBlogPosts()

  const categories = Array.from(new Set(blogPosts.map(post => post.categoria)))

  return (
    <div className="pt-24 pb-16 min-h-screen bg-dark-300">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog de <span className="neon-text">Tecnologia</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubra as últimas tendências, reviews detalhados e insights do mundo tecnológico que molda o futuro.
          </p>
        </div>

        {/* Featured Article */}
        {blogPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Artigo em <span className="neon-text">Destaque</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <BlogCard post={blogPosts[0]} />
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Categorias do <span className="neon-text">Blog</span>
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <div
                key={category}
                className="px-4 py-2 bg-dark-200 border border-gray-700 rounded-full text-gray-300 text-sm"
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Todos os <span className="neon-text">Artigos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="glass rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Receba as <span className="neon-text">Novidades</span>
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Assine nossa newsletter e seja o primeiro a saber sobre novos artigos, reviews e tendências tecnológicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="search-input flex-1"
            />
            <button className="btn-primary whitespace-nowrap">
              Inscrever-se
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Sem spam. Apenas conteúdo de qualidade sobre tecnologia.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 glass rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold neon-text mb-2">{blogPosts.length}</div>
              <div className="text-gray-400 text-sm">Artigos Publicados</div>
            </div>
            <div>
              <div className="text-3xl font-bold neon-text mb-2">{categories.length}</div>
              <div className="text-gray-400 text-sm">Categorias</div>
            </div>
            <div>
              <div className="text-3xl font-bold neon-text mb-2">10k+</div>
              <div className="text-gray-400 text-sm">Leitores Mensais</div>
            </div>
            <div>
              <div className="text-3xl font-bold neon-text mb-2">Weekly</div>
              <div className="text-gray-400 text-sm">Novos Artigos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
