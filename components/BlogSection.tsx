'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiArrowRight, HiClock, HiUser } from 'react-icons/hi'
import { getAllBlogPosts } from '@/data/blog'

export default function BlogSection() {
  const blogPosts = getAllBlogPosts().slice(0, 3) // Show only first 3 posts

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Blog de <span className="neon-text">Tecnologia</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fique por dentro das últimas tendências, reviews e novidades do mundo tech.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                  <div className="absolute top-4 left-4 bg-neon-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.categoria}
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
                      <span>{post.tempoLeitura}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white group-hover:text-neon-blue transition-colors duration-300 line-clamp-2">
                    {post.titulo}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 line-clamp-3">
                    {post.resumo}
                  </p>

                  {/* Date */}
                  <p className="text-sm text-gray-500">
                    {formatDate(post.dataPublicacao)}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center text-neon-blue group-hover:text-neon-purple transition-colors duration-300">
                    <span className="text-sm font-medium">Ler mais</span>
                    <HiArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/blog">
            <motion.button
              className="btn-secondary flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Ver Todos os Artigos</span>
              <HiArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

