'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiStar } from 'react-icons/hi'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-300 via-dark-200 to-dark-300">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-transparent to-neon-purple/10" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-blue rounded-full opacity-30"
            initial={{
              x: (i * 60) % 1200,
              y: (i * 40) % 800,
            }}
            animate={{
              x: ((i * 60) + 200) % 1200,
              y: ((i * 40) + 200) % 800,
            }}
            transition={{
              duration: 15 + (i % 5),
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 4) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8"
          >
            <HiStar className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">
              Loja #1 em Tecnologia Futurista
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="block text-white">Tecnologia que</span>
            <span className="block neon-text text-shadow-glow">
              conecta você
            </span>
            <span className="block text-white">ao futuro</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Descubra os produtos mais inovadores e prepare-se para uma experiência tecnológica sem limites.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/produtos">
              <motion.button
                className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explorar Produtos</span>
                <HiArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            
            <Link href="/blog">
              <motion.button
                className="btn-secondary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Blog de Tecnologia
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold neon-text mb-2">500+</div>
              <div className="text-gray-400 text-sm">Produtos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold neon-text mb-2">50k+</div>
              <div className="text-gray-400 text-sm">Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold neon-text mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Suporte</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
