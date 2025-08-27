'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiDeviceMobile, HiDesktopComputer } from 'react-icons/hi'
import { FaHeadphones } from 'react-icons/fa'
import SearchBar from '@/components/SearchBar'
import ProductGrid from '@/components/ProductGrid'
import { categories, getProductsByCategory } from '@/data/products'
import type { Product } from '@/data/products'

interface CategoryPageClientProps {
  category: {
    slug: string
    nome: string
    icon: string
  }
  products: Product[]
  slug: string
}

export default function CategoryPageClient({ category, products, slug }: CategoryPageClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return products
    }
    
    // Search within category products
    return products.filter(product =>
      product.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.descricao.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery, products])

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
    smartphones: 'Descubra os smartphones mais avançados com tecnologia de última geração, câmeras profissionais e performance incomparável.',
    gadgets: 'Explore gadgets inovadores que revolucionam sua produtividade e conectam você ao futuro da tecnologia.',
    acessorios: 'Complemente seus dispositivos com acessórios premium que elevam sua experiência tecnológica ao próximo nível.',
  }

  const Icon = categoryIcons[slug as keyof typeof categoryIcons]
  const gradient = categoryGradients[slug as keyof typeof categoryGradients]
  const description = categoryDescriptions[slug as keyof typeof categoryDescriptions]

  return (
    <div className="pt-24 pb-16 min-h-screen bg-dark-300">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/categorias">
            <motion.button
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ x: -5 }}
            >
              <HiArrowLeft className="w-5 h-5" />
              <span>Voltar para Categorias</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Category Icon */}
          <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mx-auto mb-6`}>
            <Icon className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {category.nome} <span className="neon-text">Premium</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          
          {/* Category Stats */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold neon-text">{products.length}</div>
              <div className="text-gray-400 text-sm">Produtos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold neon-text">★ 4.8</div>
              <div className="text-gray-400 text-sm">Avaliação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold neon-text">24h</div>
              <div className="text-gray-400 text-sm">Entrega</div>
            </div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <SearchBar
          onSearch={setSearchQuery}
          placeholder={`Buscar em ${category.nome}...`}
        />

        {/* Results Info */}
        {searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <p className="text-gray-400">
              Resultados para: <span className="text-white font-medium">&quot;{searchQuery}&quot;</span>
              {' '}em <span className="text-neon-blue">{category.nome}</span>
            </p>
          </motion.div>
        )}

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ProductGrid products={filteredProducts} />
        </motion.div>

        {/* Related Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            Explore Outras <span className="neon-text">Categorias</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories
              .filter(cat => cat.slug !== slug)
              .map((otherCategory) => {
                const OtherIcon = categoryIcons[otherCategory.slug as keyof typeof categoryIcons]
                const otherGradient = categoryGradients[otherCategory.slug as keyof typeof categoryGradients]
                const otherProductCount = getProductsByCategory(otherCategory.slug).length

                return (
                  <Link key={otherCategory.slug} href={`/categoria/${otherCategory.slug}`}>
                    <motion.div
                      className="card group cursor-pointer"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${otherGradient} flex items-center justify-center`}>
                          <OtherIcon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold group-hover:text-neon-blue transition-colors duration-300">
                            {otherCategory.nome}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {otherProductCount} produtos disponíveis
                          </p>
                        </div>
                        <div className="text-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )
              })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
