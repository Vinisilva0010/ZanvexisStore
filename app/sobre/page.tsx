'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiShieldCheck, HiHeart, HiStar } from 'react-icons/hi'
import EmailCapture from '@/components/EmailCapture'

export default function SobrePage() {
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
            Sobre a <span className="neon-text">Zanvexis Store</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conectando você ao futuro da tecnologia desde 2024
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card mb-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-6">
              <HiStar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Na Zanvexis Store, acreditamos que a tecnologia deve ser acessível, confiável e transformadora. 
              Nossa missão é conectar pessoas aos produtos mais inovadores do mercado, oferecendo uma experiência 
              de compra única que combina curadoria especializada, preços competitivos e atendimento excepcional.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="card text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <HiShieldCheck className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Confiança</h3>
            <p className="text-gray-400">
              Produtos originais, garantia estendida e suporte especializado para uma compra segura.
            </p>
          </div>

          <div className="card text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <HiStar className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Inovação</h3>
            <p className="text-gray-400">
              Sempre na vanguarda, trazendo os produtos mais avançados e tecnologias emergentes.
            </p>
          </div>

          <div className="card text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <HiHeart className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Paixão</h3>
            <p className="text-gray-400">
              Nosso time é apaixonado por tecnologia e dedicado a oferecer a melhor experiência.
            </p>
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <EmailCapture />
        </motion.div>

        {/* Links Úteis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Informações Importantes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/politica-cookies" 
              className="text-neon-blue hover:text-neon-purple transition-colors duration-300"
            >
              📄 Política de Cookies
            </Link>
            <Link 
              href="/politica-privacidade" 
              className="text-neon-blue hover:text-neon-purple transition-colors duration-300"
            >
              🔒 Política de Privacidade
            </Link>
            <Link 
              href="/termos-uso" 
              className="text-neon-blue hover:text-neon-purple transition-colors duration-300"
            >
              📋 Termos de Uso
            </Link>
            <Link 
              href="/blog/top-10-eletronicos-2025" 
              className="text-neon-blue hover:text-neon-purple transition-colors duration-300"
            >
              🚀 Top 10 Eletrônicos 2025
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              <strong>Aviso:</strong> Os links desta página podem conter links de afiliados. 
              Isso nos ajuda a manter a plataforma funcionando sem custo extra para você.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
