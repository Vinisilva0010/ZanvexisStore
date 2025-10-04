'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiClock, HiUser, HiShare } from 'react-icons/hi'
import BlogCard from '@/components/BlogCard'
import type { BlogPost } from '@/data/blog'

interface BlogPostClientProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'smartphones':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'desenvolvimento':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'sustentabilidade':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
      default:
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    }
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-dark-300">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300">
              <HiArrowLeft className="w-5 h-5" />
              <span>Voltar para o Blog</span>
            </button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="relative aspect-video mb-8 overflow-hidden rounded-2xl bg-gray-800">
            <Image
              src={post.imagem}
              alt={post.titulo}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Category Badge */}
            <div className={`absolute top-6 left-6 text-sm font-medium px-4 py-2 rounded-full border ${getCategoryColor(post.categoria)}`}>
              {post.categoria}
            </div>
          </div>

          {/* Article Meta */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.titulo}
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <HiUser className="w-5 h-5" />
                  <span>{post.autor}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HiClock className="w-5 h-5" />
                  <span>{post.tempoLeitura}</span>
                </div>
                <div>
                  {formatDate(post.dataPublicacao)}
                </div>
              </div>
              
              <button className="flex items-center space-x-2 text-neon-blue hover:text-neon-purple transition-colors duration-300">
                <HiShare className="w-5 h-5" />
                <span>Compartilhar</span>
              </button>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              {post.resumo}
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="text-gray-300 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ 
                __html: post.conteudo.replace(/\n/g, '<br />') 
              }}
            />
          </div>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center font-bold text-white">
                  {post.autor.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-white">{post.autor}</div>
                  <div className="text-gray-400 text-sm">Autor</div>
                </div>
              </div>
              
              <button className="btn-secondary">
                Seguir Autor
              </button>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-center mb-8">
              Artigos <span className="neon-text">Relacionados</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-20 glass rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Gostou do <span className="neon-text">Artigo</span>?
          </h3>
          <p className="text-gray-400 mb-6">
            Receba conteúdos exclusivos sobre tecnologia diretamente no seu e-mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="search-input flex-1"
            />
            <button className="btn-primary whitespace-nowrap">
              Inscrever-se
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


