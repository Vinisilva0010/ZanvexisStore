'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiInformationCircle, HiX } from 'react-icons/hi'

export default function AffiliateDisclaimer() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check if user has already dismissed the disclaimer
    const disclaimerDismissed = localStorage.getItem('affiliateDisclaimerDismissed')
    
    // Only show disclaimer if not previously dismissed
    if (!disclaimerDismissed) {
      setIsVisible(true)
    }
    
    setIsLoaded(true)
  }, [])

  const handleDismiss = () => {
    localStorage.setItem('affiliateDisclaimerDismissed', 'true')
    setIsVisible(false)
  }

  // Don't render anything until we've checked localStorage
  if (!isLoaded) {
    return null
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.6 
          }}
          className="fixed top-0 left-0 right-0 z-50 bg-yellow-100 border-b border-yellow-200 shadow-lg"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between space-x-4">
              {/* Icon and Message */}
              <div className="flex items-center space-x-3 flex-1">
                {/* Information Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 20,
                    delay: 0.2 
                  }}
                  className="flex-shrink-0"
                >
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <HiInformationCircle className="w-5 h-5 text-yellow-800" />
                  </div>
                </motion.div>

                {/* Message Text */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex-1"
                >
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                    <span className="font-semibold">Aviso sobre links de afiliados:</span>
                    {' '}Os links desta página podem conter links de afiliados. 
                    Isso ajuda a manter nossa plataforma funcionando sem custo extra para você.
                  </p>
                </motion.div>
              </div>

              {/* Close Button */}
              <motion.button
                onClick={handleDismiss}
                className="flex-shrink-0 p-2 rounded-lg text-gray-600 hover:text-gray-800 hover:bg-yellow-200 transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                aria-label="Fechar aviso"
              >
                <HiX className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Optional: Additional Info for Desktop */}
            <motion.div
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: -100, opacity: 0 }}
  transition={{ 
    type: "spring", 
    stiffness: 300, 
    damping: 30,
    duration: 0.6 
  }}
  className="fixed top-0 left-0 right-0 z-50 bg-yellow-100 border-b border-yellow-200 shadow-lg"
>
  <div className="container mx-auto px-4 py-3">
    <div className="flex items-center justify-between space-x-4">
      {/* Icon and Message */}
      <div className="flex items-center space-x-3 flex-1">
        {/* Information Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 20,
            delay: 0.2 
          }}
          className="flex-shrink-0"
        >
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <HiInformationCircle className="w-5 h-5 text-yellow-800" />
          </div>
        </motion.div>
        {/* Message Text - unificado, responsivo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1"
        >
          <p className="text-gray-800 text-xs md:text-base leading-relaxed">
            <span className="font-semibold">Aviso sobre links de afiliados:</span>
            {' '}Os links desta página podem conter links de afiliados. 
            Isso ajuda a manter nossa plataforma funcionando sem custo extra para você.
            <br className="hidden md:block" />
            <span className="text-gray-600 text-xs block md:inline">
              Ao clicar nos links de produtos, você pode ser direcionado para lojas parceiras. 
              Saiba mais sobre nossa{' '}
              <span className="underline decoration-dotted cursor-pointer hover:text-gray-800 transition-colors">
                política de transparência
              </span>.
            </span>
          </p>
        </motion.div>
      </div>
      {/* Close Button - SEMPRE visível */}
      <motion.button
        onClick={handleDismiss}
        className="flex-shrink-0 p-2 rounded-lg text-gray-600 hover:text-gray-800 hover:bg-yellow-200 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        aria-label="Fechar aviso"
      >
        <HiX className="w-5 h-5" />
      </motion.button>
    </div>
    {/* Progress Bar */}
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1, delay: 0.6 }}
      className="absolute bottom-0 left-0 h-0.5 bg-yellow-400 rounded-full"
    />
  </div>
</motion.div>


            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute bottom-0 left-0 h-0.5 bg-yellow-400 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

