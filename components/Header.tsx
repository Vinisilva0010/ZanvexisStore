'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiShoppingBag, HiSearch } from 'react-icons/hi'
import { FiExternalLink } from 'react-icons/fi'
import { useCart } from "@/contexts/CartContext"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { cartItems } = useCart()
  const totalItems = cartItems.reduce((total, item) => total + item.quantidade, 0)

  const [hasMounted, setHasMounted] = useState(false)
  
  useEffect(() => {
    setHasMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Categorias', href: '/categorias' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sobre', href: '/sobre' },
  ]

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-b border-blue-500/20' 
          : 'bg-transparent border-b border-white/5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo com Efeito Premium */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xl">Z</span>
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              />
            </motion.div>
            <div className="hidden sm:block">
              <motion.span 
                className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Zanvexis Store
              </motion.span>
              <div className="text-xs text-gray-400 -mt-1">Tecnologia Futurista</div>
            </div>
          </Link>

          {/* Desktop Navigation com Efeitos */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.span>
                <motion.span 
                  className="absolute inset-x-2 -bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"
                  whileHover={{ boxShadow: "0 0 8px rgba(59, 130, 246, 0.6)" }}
                />
              </Link>
            ))}
          </nav>

          {/* Right Side - Actions */}
          <div className="flex items-center space-x-2">
            {/* Back to Zanvexis - Desktop */}
            <Link
              href="https://zanvexis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:text-blue-400 transition-all duration-300 rounded-lg hover:bg-white/5"
            >
              <span>Zanvexis</span>
              <FiExternalLink className="w-4 h-4" />
            </Link>

            {/* Search Button com Efeito */}
            <Link href="/produtos">
              <motion.button
                className="p-3 rounded-xl text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiSearch className="w-5 h-5" />
                <span className="absolute inset-0 rounded-xl bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
              </motion.button>
            </Link>
            
            {/* Cart Icon com Badge Animado */}
            <Link href="/carrinho">
              <motion.div
                className="relative p-3 rounded-xl text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiShoppingBag className="w-5 h-5" />
                <span className="absolute inset-0 rounded-xl bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                
                <AnimatePresence>
                  {hasMounted && totalItems > 0 && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute -top-1 -right-1 min-w-[20px] h-5 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-xs text-white font-bold shadow-[0_0_10px_rgba(239,68,68,0.5)] px-1.5"
                    >
                      {totalItems}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiX className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMenu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu com Animação Suave */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 border-t border-white/10 bg-gradient-to-b from-transparent to-black/20">
                <nav className="flex flex-col space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-500/10 rounded-lg transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: menuItems.length * 0.1 }}
                  >
                    <Link
                      href="https://zanvexis.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-300 mt-2 border-t border-white/5"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>Voltar para Zanvexis</span>
                      <FiExternalLink className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}