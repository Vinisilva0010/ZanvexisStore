'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiExternalLink, HiStar } from 'react-icons/hi'
import type { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'smartphones':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'acessorios':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'gadgets':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <motion.div
      className="card group cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Product Image */}
      <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-800">
        <Image
          src={product.imagem}
          alt={product.nome}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Destaque Badge */}
        {product.destaque && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-semibold px-2 py-1 rounded-full">
            Destaque
          </div>
        )}

        {/* Category Badge */}
        <div className={`absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full border ${getCategoryColor(product.categoria)}`}>
          {product.categoria}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg text-white group-hover:text-neon-blue transition-colors duration-300 line-clamp-2">
          {product.nome}
        </h3>
        
        <p className="text-gray-400 text-sm line-clamp-2">
          {product.descricao}
        </p>

        {/* Rating (Mock) */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <HiStar
              key={i}
              className={`w-4 h-4 ${
                i < 4 ? 'text-yellow-400' : 'text-gray-600'
              }`}
            />
          ))}
          <span className="text-gray-400 text-sm ml-2">(4.0)</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold neon-text">
              {formatPrice(product.preco)}
            </p>
            <p className="text-gray-500 text-sm line-through">
              {formatPrice(product.preco * 1.2)}
            </p>
          </div>
        </div>

        {/* Buy Button */}
        <motion.a
          href={product.linkAfiliado}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Comprar Agora</span>
          <HiExternalLink className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  )
}

