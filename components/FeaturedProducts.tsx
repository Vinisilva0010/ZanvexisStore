'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiSparkles } from 'react-icons/hi'
import ProductCard from './ProductCard'
import type { Product } from '@/data/products'

export default function FeaturedProducts({ products }: { products: Product[] }) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-[#0a0a0f] to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/5 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/30 rounded-full px-5 py-2 mb-8"
          >
            <HiSparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-blue-300">Seleção Especial</span>
          </motion.div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Destaques
            </span>
            <span className="text-white"> da Semana</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Produtos selecionados especialmente para você, com as{' '}
            <span className="text-blue-400 font-semibold">melhores ofertas</span> e{' '}
            <span className="text-purple-400 font-semibold">tecnologia de ponta</span>
          </p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"
          />
        </motion.div>

        {/* Products Grid com Animação Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
            >
              <ProductCard
                product={product}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* Seção de Vídeo Promocional */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden border-2 border-blue-500/20 shadow-[0_0_60px_rgba(59,130,246,0.15)] bg-gradient-to-br from-gray-900 to-gray-800">
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10 z-10 pointer-events-none" />
            
            {/* Container do Vídeo */}
            <div className="aspect-video flex items-center justify-center p-8">
              {/* SUBSTITUA COM SEU VÍDEO */}
              {/* Exemplo:
              <video 
                className="w-full h-full object-cover rounded-2xl"
                controls
                poster="/images/video-thumbnail.jpg"
                src="/videos/produto-showcase.mp4"
              />
              */}
              
              <div className="text-center max-w-2xl">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_40px_rgba(59,130,246,0.5)] mb-6"
                >
                  <span className="text-4xl">🎥</span>
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Área para Vídeo Promocional
                </h3>
                <p className="text-gray-400 mb-6">
                  Coloque aqui seus vídeos demonstrando produtos, tecnologia IA ou robótica.
                  <br />
                  <span className="text-sm text-gray-500 mt-2 inline-block">
                    Recomendado: MP4, 1920x1080, máx 50MB
                  </span>
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Demonstração', 'Unboxing', 'Review', 'Tutorial'].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-xs font-semibold bg-white/5 border border-blue-500/30 text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10 p-4 z-20">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span>Live Demo</span>
                </span>
                <span>4K Ultra HD</span>
                <span>Dolby Atmos</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* View All Button Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/produtos">
            <motion.button
              className="group relative inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated Background */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shimmer Effect */}
              <span className="absolute inset-0 shimmer" />
              
              <span className="relative z-10 text-lg">Ver Todos os Produtos</span>
              <HiArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </Link>

          {/* Info Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mt-6"
          >
            Mais de <span className="text-blue-400 font-semibold">500+ produtos</span> disponíveis
          </motion.p>
        </motion.div>

        {/* Features Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {[
            { icon: '🚀', title: 'Entrega Rápida', desc: 'Receba em até 48h' },
            { icon: '🔒', title: 'Compra Segura', desc: 'Pagamento 100% protegido' },
            { icon: '💎', title: 'Garantia Premium', desc: '12 meses de cobertura' },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}