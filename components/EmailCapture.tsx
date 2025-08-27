'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiGift, HiCheck, HiExclamationCircle } from 'react-icons/hi'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Simple email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validate email
    if (!email.trim()) {
      setError('Por favor, insira seu email')
      return
    }

    if (!validateEmail(email)) {
      setError('Por favor, insira um email válido')
      return
    }

    // Check if email was already submitted
    const savedEmail = localStorage.getItem('emailCaptureSubmitted')
    if (savedEmail === email) {
      setError('Este email já foi cadastrado')
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Save to localStorage
      localStorage.setItem('emailCaptureSubmitted', email)
      localStorage.setItem('emailCaptureDate', new Date().toISOString())
      
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const handleReset = () => {
    setEmail('')
    setIsSubmitted(false)
    setError('')
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="card bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/20 text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
            delay: 0.2 
          }}
          className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <HiCheck className="w-8 h-8 text-white" />
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-green-400 mb-3">
            Cupom Enviado!
          </h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            <span className="font-semibold">Cupom enviado para seu email:</span>
            <br />
            <span className="text-green-400">{email}</span>
          </p>
          <div className="bg-dark-300 rounded-lg p-4 mb-6">
            <div className="text-2xl font-bold neon-text mb-1">WELCOME10</div>
            <div className="text-sm text-gray-400">Use este código e ganhe 10% OFF</div>
          </div>
          <button
            onClick={handleReset}
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm underline decoration-dotted"
          >
            Cadastrar outro email
          </button>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 border-neon-blue/20"
    >
      {/* Header */}
      <div className="text-center mb-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center space-x-3 mb-4"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
            <HiGift className="w-6 h-6 text-white" />
          </div>
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-yellow-900 font-bold text-sm">%</span>
          </div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold mb-3"
        >
          Ganhe <span className="neon-text">10% de desconto</span>
          <br />
          no seu primeiro pedido!
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 leading-relaxed"
        >
          Inscreva-se em nossa newsletter e receba ofertas exclusivas, novidades e um cupom de desconto especial.
        </motion.p>
      </div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="space-y-4"
      >
        {/* Email Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <HiMail className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setError('') // Clear error when typing
            }}
            placeholder="Digite seu melhor email"
            className={`search-input pl-12 ${
              error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''
            }`}
            disabled={isLoading}
          />
        </div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-red-400 text-sm"
          >
            <HiExclamationCircle className="w-4 h-4" />
            <span>{error}</span>
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading}
          className={`btn-primary w-full flex items-center justify-center space-x-2 ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          whileHover={!isLoading ? { scale: 1.02 } : {}}
          whileTap={!isLoading ? { scale: 0.98 } : {}}
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <HiGift className="w-5 h-5" />
              <span>Receber Cupom</span>
            </>
          )}
        </motion.button>

        {/* Security Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-xs text-gray-500 text-center"
        >
          🔒 Seus dados estão protegidos. Sem spam, apenas ofertas especiais.
        </motion.p>
      </motion.form>

      {/* Benefits List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6 pt-6 border-t border-gray-800"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
              <span className="text-blue-400 text-lg">💰</span>
            </div>
            <span className="text-xs text-gray-400">Ofertas Exclusivas</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
              <span className="text-purple-400 text-lg">🚀</span>
            </div>
            <span className="text-xs text-gray-400">Lançamentos</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
              <span className="text-green-400 text-lg">🎁</span>
            </div>
            <span className="text-xs text-gray-400">Cupons</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
