'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiClock, HiUser, HiArrowRight } from 'react-icons/hi'
import type { BlogPost } from '@/data/blog'

interface BlogCardProps {
  post: BlogPost
  index?: number
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
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
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card group cursor-pointer overflow-hidden"
      whileHover={{ y: -5 }}
    >
      <Link href={`/blog/${post.slug}`}>
        {/* Featured Image */}
        <div className="relative aspect-video mb-6 overflow-hidden rounded-lg bg-gray-800">
          <Image
            src={post.imagem}
            alt={post.titulo}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <div className={`absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-full border ${getCategoryColor(post.categoria)}`}>
            {post.categoria}
          </div>

          {/* Reading Time */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
            {post.tempoLeitura}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* Meta */}
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <HiUser className="w-4 h-4" />
              <span>{post.autor}</span>
            </div>
            <div className="flex items-center space-x-1">
              <HiClock className="w-4 h-4" />
              <span>{formatDate(post.dataPublicacao)}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white group-hover:text-neon-blue transition-colors duration-300 line-clamp-2">
            {post.titulo}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-400 line-clamp-3 leading-relaxed">
            {post.resumo}
          </p>

          {/* Read More */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            <div className="flex items-center text-neon-blue group-hover:text-neon-purple transition-colors duration-300">
              <span className="text-sm font-medium">Ler artigo completo</span>
              <HiArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            
            <div className="text-xs text-gray-500">
              {post.tempoLeitura}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

