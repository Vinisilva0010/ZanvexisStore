'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiHome, HiArrowLeft } from 'react-icons/hi'

export default function NotFound() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-dark-300 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* 404 Number */}
          <div className="mb-8">
            <motion.h1 
              className="text-8xl md:text-9xl font-bold neon-text mb-4"
              animate={{ 
                textShadow: [
                  '0 0 20px #3b82f6',
                  '0 0 40px #a855f7',
                  '0 0 20px #3b82f6'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              404
            </motion.h1>
            <div className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Página não encontrada
            </div>
            <p className="text-gray-400 text-lg">
              A página que você está procurando não existe ou foi movida para outro lugar.
            </p>
          </div>

          {/* Animated Robot/Tech Icon */}
          <motion.div
            className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <motion.button
                className="btn-primary flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiHome className="w-5 h-5" />
                <span>Voltar ao Início</span>
              </motion.button>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="btn-secondary flex items-center space-x-2"
            >
              <HiArrowLeft className="w-5 h-5" />
              <span>Página Anterior</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 mb-4">Talvez você esteja procurando por:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/produtos" className="text-neon-blue hover:text-neon-purple transition-colors duration-300">
                Produtos
              </Link>
              <Link href="/categorias" className="text-neon-blue hover:text-neon-purple transition-colors duration-300">
                Categorias
              </Link>
              <Link href="/blog" className="text-neon-blue hover:text-neon-purple transition-colors duration-300">
                Blog
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
