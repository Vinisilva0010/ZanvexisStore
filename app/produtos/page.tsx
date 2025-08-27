'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import SearchBar from '@/components/SearchBar'
import ProductGrid from '@/components/ProductGrid'
import ProductCompare from '@/components/ProductCompare'
import { products, categories, searchProducts } from '@/data/products'
export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredProducts = useMemo(() => {
    let result = products

    // Filter by search query
    if (searchQuery.trim()) {
      result = searchProducts(searchQuery)
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter(product => product.categoria === selectedCategory)
    }

    return result
  }, [searchQuery, selectedCategory])

  const handleCategoryFilter = (categorySlug: string | null) => {
    setSelectedCategory(categorySlug)
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-dark-300">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="neon-text">Produtos</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubra nossa seleção completa de produtos tecnológicos de última geração.
          </p>
        </motion.div>

        {/* Search Bar */}
        <SearchBar
          onSearch={setSearchQuery}
          placeholder="Buscar produtos, categorias..."
        />

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <motion.button
            onClick={() => handleCategoryFilter(null)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-neon-blue text-white border-neon-blue shadow-neon-blue'
                : 'border-gray-600 text-gray-400 hover:border-neon-blue hover:text-neon-blue'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Todos
          </motion.button>
          
          {categories.map((category) => (
            <motion.button
              key={category.slug}
              onClick={() => handleCategoryFilter(category.slug)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                selectedCategory === category.slug
                  ? 'bg-neon-blue text-white border-neon-blue shadow-neon-blue'
                  : 'border-gray-600 text-gray-400 hover:border-neon-blue hover:text-neon-blue'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon} {category.nome}
            </motion.button>
          ))}
        </motion.div>

        {/* Results Info */}
        {searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <p className="text-gray-400">
              Resultados para: <span className="text-white font-medium">&quot;{searchQuery}&quot;</span>
              {selectedCategory && (
                <>
                  {' '}em <span className="text-neon-blue">{categories.find(c => c.slug === selectedCategory)?.nome}</span>
                </>
              )}
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

        {/* Product Compare Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <ProductCompare 
            products={[
              {
                nome: "iPhone 15 Pro Max",
                preco: 7999.99,
                frete: 0,
                garantia: "1 ano",
                loja: "Amazon",
                link: "https://amazon.com.br/iphone-15"
              },
              {
                nome: "iPhone 15 Pro Max",
                preco: 8199.99,
                frete: 29.90,
                garantia: "1 ano",
                loja: "Shopee",
                link: "https://shopee.com.br/iphone-15"
              },
              {
                nome: "iPhone 15 Pro Max",
                preco: 7899.99,
                frete: 15.00,
                garantia: "1 ano",
                loja: "MercadoLivre",
                link: "https://mercadolivre.com.br/iphone-15"
              }
            ]}
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 glass rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold neon-text mb-2">{products.length}</div>
              <div className="text-gray-400 text-sm">Produtos Disponíveis</div>
            </div>
            <div>
              <div className="text-3xl font-bold neon-text mb-2">{categories.length}</div>
              <div className="text-gray-400 text-sm">Categorias</div>
            </div>
            <div>
              <div className="text-3xl font-bold neon-text mb-2">24h</div>
              <div className="text-gray-400 text-sm">Entrega Rápida</div>
            </div>
            <div>
              <div className="text-3xl font-bold neon-text mb-2">100%</div>
              <div className="text-gray-400 text-sm">Garantia</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
