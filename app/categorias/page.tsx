'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiDeviceMobile, HiDesktopComputer } from 'react-icons/hi'
import { FaHeadphones } from 'react-icons/fa'
import { categories, getProductsByCategory } from '@/data/products'
export default function CategoriesPage() {
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

  const categoryDescriptions = {
    smartphones: 'Os smartphones mais avançados do mercado com tecnologia de ponta.',
    gadgets: 'Gadgets inovadores para facilitar seu dia a dia tecnológico.',
    acessorios: 'Acessórios essenciais para complementar seus dispositivos.',
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-dark-300">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nossas <span className="neon-text">Categorias</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore nossos produtos organizados por categoria e encontre exatamente o que você procura.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => {
            const Icon = categoryIcons[category.slug as keyof typeof categoryIcons]
            const gradient = categoryGradients[category.slug as keyof typeof categoryGradients]
            const description = categoryDescriptions[category.slug as keyof typeof categoryDescriptions]
            const productCount = getProductsByCategory(category.slug).length

            return (
              <Link key={category.slug} href={`/categoria/${category.slug}`}>
                <div className="card h-80 flex flex-col justify-between group cursor-pointer relative overflow-hidden hover:border-neon-blue transition-all duration-300">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-neon-blue transition-colors duration-300">
                      {category.nome}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {description}
                    </p>

                    <div className="text-neon-blue text-sm font-medium">
                      {productCount} produtos disponíveis
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="relative z-10 flex justify-end">
                    <div className="text-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="glass rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold neon-text mb-2">8+</div>
              <div className="text-gray-400 text-sm">Produtos Totais</div>
            </div>
            <div>
              <div className="text-3xl font-bold neon-text mb-2">3</div>
              <div className="text-gray-400 text-sm">Categorias Ativas</div>
            </div>
            <div>
              <div className="text-3xl font-bold neon-text mb-2">100%</div>
              <div className="text-gray-400 text-sm">Qualidade Garantida</div>
            </div>
            <div>
              <div className="text-3xl font-bold neon-text mb-2">24h</div>
              <div className="text-gray-400 text-sm">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
