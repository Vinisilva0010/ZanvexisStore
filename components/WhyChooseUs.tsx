'use client'

import { motion } from 'framer-motion'
import { HiSparkles, HiShieldCheck, HiUserGroup } from 'react-icons/hi'

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: HiSparkles,
      title: 'Ofertas Inteligentes',
      description: 'IA avançada identifica as melhores ofertas do mercado, garantindo sempre o melhor preço para você.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      iconColor: 'text-blue-400'
    },
    {
      id: 2,
      icon: HiShieldCheck,
      title: 'Produtos de Qualidade',
      description: 'Curadoria rigorosa garante apenas produtos premium e de marcas confiáveis em nosso catálogo.',
      gradient: 'from-emerald-500 to-green-500',
      bgGradient: 'from-emerald-500/10 to-green-500/10',
      iconColor: 'text-emerald-400'
    },
    {
      id: 3,
      icon: HiUserGroup,
      title: 'Recomendações Personalizadas',
      description: 'Sistema inteligente analisa suas preferências para sugerir produtos perfeitos para seu perfil.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      iconColor: 'text-purple-400'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  }

  return (
    <section className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Por que comprar na{' '}
            <span className="neon-text">Zanvexis Store</span>?
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Descubra os diferenciais que tornam nossa loja a escolha ideal para suas compras tecnológicas
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                
                {/* Card */}
                <motion.div
                  className="relative card h-full bg-dark-300/50 backdrop-blur-sm border-gray-800 group-hover:border-gray-700 transition-all duration-500"
                  whileHover={{ 
                    y: -8,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                >
                  {/* Icon Container */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-neon-blue transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />

                  {/* Corner Decoration */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} animate-pulse`} />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <motion.div
              className="flex items-center justify-center space-x-3 mb-4"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                <HiSparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Experiência Premium
              </h3>
            </motion.div>
            
            <p className="text-gray-400 mb-6">
              Junte-se a milhares de clientes satisfeitos que já descobriram a diferença de comprar na Zanvexis Store.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold neon-text">50k+</div>
                <div className="text-sm text-gray-400">Clientes Felizes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold neon-text">98%</div>
                <div className="text-sm text-gray-400">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold neon-text">24h</div>
                <div className="text-sm text-gray-400">Suporte</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

