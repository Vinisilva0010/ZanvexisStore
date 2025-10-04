"use client";

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiShoppingCart, HiStar, HiHeart, HiEye } from 'react-icons/hi'
import { useCart } from "@/contexts/CartContext";
import type { Product } from '@/types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'smartphones':
        return 'from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/40'
      case 'acessorios':
        return 'from-purple-500/20 to-purple-600/20 text-purple-400 border-purple-500/40'
      case 'gadgets':
        return 'from-green-500/20 to-green-600/20 text-green-400 border-green-500/40'
      default:
        return 'from-gray-500/20 to-gray-600/20 text-gray-400 border-gray-500/40'
    }
  }

  const discount = product.preco_promocional 
    ? Math.round(((product.preco - product.preco_promocional) / product.preco) * 100)
    : 0;

  return (
    <motion.div
      className="product-card relative h-full flex flex-col p-5 rounded-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-500 pointer-events-none" />

      {/* Product Image Container */}
      <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 cursor-pointer group/image">
        <Link href={`/produto/${product.slug}`}>
          <Image
            src={product.imagens ? product.imagens[0] : '/placeholder.png'}
            alt={product.nome}
            fill
            className="object-cover transition-all duration-500 group-hover/image:scale-110 group-hover/image:rotate-2"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
          
          {/* Quick View Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 shadow-lg">
              <HiEye className="w-5 h-5" />
              <span>Ver Detalhes</span>
            </div>
          </motion.div>
        </Link>

        {/* Badges Top */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {product.destaque && (
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-1"
            >
              <HiStar className="w-3 h-3" />
              <span>Destaque</span>
            </motion.div>
          )}
          {discount > 0 && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
            >
              -{discount}%
            </motion.div>
          )}
        </div>

        {/* Category Badge */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1.5 rounded-full border backdrop-blur-md bg-gradient-to-r ${getCategoryColor(product.categoria)} z-10 shadow-lg`}
        >
          {product.categoria}
        </motion.div>

        {/* Favorite Button */}
        <motion.button
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
          className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-10"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <HiHeart className={`w-5 h-5 transition-colors duration-300 ${isLiked ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
        </motion.button>
      </div>

      {/* Product Info */}
      <div className="space-y-3 flex-grow flex flex-col relative z-10">
        {/* Product Name */}
        <Link href={`/produto/${product.slug}`}>
          <motion.h3 
            className="font-bold text-lg text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2 cursor-pointer"
            whileHover={{ x: 2 }}
          >
            {product.nome}
          </motion.h3>
        </Link>
        
        {/* Description */}
        <p className="text-gray-400 text-sm line-clamp-2 flex-grow leading-relaxed">
          {product.descricao}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-1 py-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i }}
              >
                <HiStar
                  className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-600'}`}
                />
              </motion.div>
            ))}
          </div>
          <span className="text-gray-400 text-sm ml-2 font-medium">(4.0)</span>
          <span className="text-gray-600 text-xs">• 128 avaliações</span>
        </div>

        {/* Price Section */}
        <div className="!mt-auto space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {formatPrice(product.preco_promocional || product.preco)}
              </p>
              {product.preco_promocional && (
                <div className="flex items-center space-x-2 mt-1">
                  <p className="text-gray-500 text-sm line-through">
                    {formatPrice(product.preco)}
                  </p>
                  <span className="text-green-400 text-xs font-semibold bg-green-500/10 px-2 py-0.5 rounded-full">
                    Economize {formatPrice(product.preco - product.preco_promocional)}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Stock Info */}
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 font-medium">Em estoque</span>
          </div>

          {/* Add to Cart Button */}
          <motion.button
            onClick={() => addToCart(product)}
            className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 group/button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Shimmer Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-700" />
            
            <HiShoppingCart className="w-5 h-5 relative z-10 group-hover/button:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Adicionar ao Carrinho</span>
          </motion.button>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}