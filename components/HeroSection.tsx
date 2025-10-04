'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiStar, HiPlay } from 'react-icons/hi'
import { useState } from 'react'

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-gray-900 to-[#0a0a0f]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-purple-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-blue-600/10" />
      </div>

      {/* Efeito de Grid Animado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite',
        }} />
      </div>

      {/* Orbes Flutuantes Fixos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          style={{ top: '10%', left: '10%' }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{ bottom: '10%', right: '10%' }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
          style={{ top: '50%', right: '20%' }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Pattern de Fundo */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge Premium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-blue-500/30 rounded-full px-5 py-2.5 mb-8 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <HiStar className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                #1 em Tecnologia Futurista
              </span>
            </motion.div>

            {/* Main Heading com Efeito Premium */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block text-white mb-2">Tecnologia que</span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient text-shadow-glow">
                conecta você
              </span>
              <span className="block text-white mt-2">ao futuro</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Descubra produtos inovadores e prepare-se para uma experiência tecnológica <span className="text-blue-400 font-semibold">sem limites</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
            >
              <Link href="/produtos">
                <motion.button
                  className="btn-primary flex items-center space-x-3 text-lg px-10 py-4 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explorar Produtos</span>
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <Link href="/blog">
                <motion.button
                  className="btn-secondary text-lg px-10 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Blog Tech
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats com Efeitos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { value: '500+', label: 'Produtos', delay: 0 },
                { value: '50k+', label: 'Clientes', delay: 0.1 },
                { value: '24/7', label: 'Suporte', delay: 0.2 },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + stat.delay, duration: 0.5 }}
                  className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Video Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Container de Vídeo Premium */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-blue-500/30 shadow-[0_0_60px_rgba(59,130,246,0.3)] group">
              {/* Overlay com Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20 z-10 pointer-events-none" />
              
              {/* Scan Line Effect */}
              <div className="scan-line" />
              
              {/* Vídeo com Autoplay */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative overflow-hidden rounded-xl">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/videos/video1.mp4"
                  onError={(e) => {
                    console.error('Erro ao carregar vídeo:', e);
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Fallback se o vídeo não carregar */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 pointer-events-none">
                  <div className="text-center p-8 opacity-50">
                    <div className="text-blue-400 mb-4 text-lg font-semibold">
                      🎬 Vídeo de IA e Robótica
                    </div>
                    <p className="text-gray-400 text-sm">
                      Coloque seu vídeo em: /public/videos/video-ia-robotica.mp4
                    </p>
                  </div>
                </div>
                
                {/* Elementos Decorativos */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full animate-pulse z-10" />
                <div className="absolute top-4 left-10 text-xs text-red-400 font-mono z-10">LIVE</div>
              </div>

              {/* Tech Badges */}
              <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                {['IA', 'Robótica', 'Tech'].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md border border-blue-500/30 text-blue-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Elementos Decorativos ao Redor do Vídeo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 border-2 border-blue-500/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-purple-500/20 rounded-full"
            />

            {/* Floating Tech Icons */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <span className="text-2xl">🤖</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 bottom-1/4 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl border border-purple-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              <span className="text-2xl">⚡</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator Premium */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-xs text-gray-400 font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-blue-500/40 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}