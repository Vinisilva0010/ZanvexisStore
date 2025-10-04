'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiShieldCheck, HiInformationCircle } from 'react-icons/hi'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    
    // Only show banner if no choice was made
    if (!cookieConsent) {
      setIsVisible(true)
    }
    
    setIsLoaded(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  // Don't render anything until we've checked localStorage
  if (!isLoaded) {
    return null
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={handleClose}
          />

          {/* Cookie Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.6 
            }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4"
          >
            <div className="container mx-auto max-w-4xl">
              <div className="glass rounded-2xl border border-white/20 p-6 shadow-2xl">
                {/* Header with Icon and Close Button */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center flex-shrink-0">
                      <HiShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Política de Cookies
                      </h3>
                      <div className="flex items-center space-x-1 text-xs text-gray-400">
                        <HiInformationCircle className="w-3 h-3" />
                        <span>Zanvexis Store</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={handleClose}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <HiX className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
                  {/* Message */}
                  <div className="flex-1">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="font-medium text-white">Usamos cookies para melhorar sua experiência.</span>
                      {' '}Utilizamos cookies essenciais e de análise para personalizar conteúdo, 
                      melhorar a navegação e entender como você interage com nossa loja.
                    </p>
                    
                    {/* Additional Info */}
                    <div className="mt-2 text-sm text-gray-400">
                      Ao continuar navegando, você concorda com nossa política de cookies.
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 flex-shrink-0">
                    {/* Decline Button */}
                    <motion.button
                      onClick={handleDecline}
                      className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300 font-medium transition-all duration-300 hover:border-gray-500 hover:text-white hover:bg-white/5"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Recusar
                    </motion.button>

                    {/* Accept Button */}
                    <motion.button
                      onClick={handleAccept}
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium transition-all duration-300 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-green-500/25"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Aceitar Cookies
                    </motion.button>
                  </div>
                </div>

                {/* Progress Indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-4 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

