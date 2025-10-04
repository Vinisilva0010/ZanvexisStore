'use client'

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import type { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20"
      >
        <div className="max-w-md mx-auto">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="text-8xl mb-6"
          >
            📦
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-white mb-3"
          >
            Nenhum produto encontrado
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mb-8"
          >
            Não encontramos produtos para esta categoria.
            <br />
            Tente ajustar seus filtros ou explorar outras categorias.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="/produtos"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300"
          >
            <span>Ver Todos os Produtos</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="relative">
      {/* Products Count Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-8"
      >
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/30 rounded-full px-5 py-2.5">
          <span className="text-sm text-gray-400">Mostrando</span>
          <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {products.length}
          </span>
          <span className="text-sm text-gray-400">produtos</span>
        </div>

        {/* Sort Options (opcional - pode adicionar funcionalidade depois) */}
        <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-400">
          <span>Ordenar por:</span>
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-blue-500 focus:outline-none transition-colors">
            <option>Mais Recentes</option>
            <option>Menor Preço</option>
            <option>Maior Preço</option>
            <option>Mais Vendidos</option>
          </select>
        </div>
      </motion.div>

      {/* Grid Container com Animação Stagger */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut"
                }
              }
            }}
          >
            <ProductCard product={product} index={index} />
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Indicator (se precisar de paginação futura) */}
      {products.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500 text-sm">
            Mostrando todos os {products.length} produtos disponíveis
          </p>
        </motion.div>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
    </div>
  );
}