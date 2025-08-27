'use client'

import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import type { Product } from '@/data/products'

interface ProductGridProps {
  products: Product[]
  loading?: boolean
}

export default function ProductGrid({ products, loading = false }: ProductGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="card animate-pulse"
          >
            <div className="aspect-square bg-gray-700 rounded-lg mb-4" />
            <div className="space-y-3">
              <div className="h-4 bg-gray-700 rounded w-3/4" />
              <div className="h-3 bg-gray-700 rounded w-1/2" />
              <div className="h-8 bg-gray-700 rounded" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Nenhum produto encontrado
        </h3>
        <p className="text-gray-400">
          Tente ajustar seus termos de busca ou explore nossas categorias.
        </p>
      </motion.div>
    )
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6 text-gray-400"
      >
        {products.length === 1 ? '1 produto encontrado' : `${products.length} produtos encontrados`}
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
          />
        ))}
      </div>
    </>
  )
}

