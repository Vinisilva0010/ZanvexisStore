'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiDeviceMobile, HiDesktopComputer } from 'react-icons/hi'
import { FaHeadphones } from 'react-icons/fa'
import { categories } from '@/data/products'

export default function CategoriesSection() {
  const categoryIcons = {
    smartphones: HiDeviceMobile,
    gadgets: HiDesktopComputer,
    acessorios: FaHeadphones,
  }

  const categoryGradients = {
    smartphones: 'from-blue-500 to-cyan-500',
    gadgets: 'from-green-500 to-teal-500',
    acessorios: 'from-purple-500 to-pink-500',
  }

  return (
    <section className="py-20 bg-dark-300">
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
            Categorias <span className="neon-text">Populares</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore nossas categorias e encontre exatamente o que você precisa para se conectar ao futuro.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = categoryIcons[category.slug as keyof typeof categoryIcons]
            const gradient = categoryGradients[category.slug as keyof typeof categoryGradients]

            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/categoria/${category.slug}`}>
                  <motion.div
                    className="card h-64 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <motion.div
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-blue transition-colors duration-300">
                      {category.nome}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4">
                      Descubra os melhores produtos em {category.nome.toLowerCase()}
                    </p>

                    {/* Arrow */}
                    <motion.div
                      className="text-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 glass rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold neon-text mb-2">8+</div>
              <div className="text-gray-400 text-sm">Produtos Ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold neon-text mb-2">3</div>
              <div className="text-gray-400 text-sm">Categorias</div>
            </div>
            <div>
              <div className="text-3xl font-bold neon-text mb-2">100%</div>
              <div className="text-gray-400 text-sm">Satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold neon-text mb-2">24h</div>
              <div className="text-gray-400 text-sm">Suporte</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

