'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX, HiShoppingBag, HiSearch } from 'react-icons/hi'
import { FiExternalLink } from 'react-icons/fi'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Categorias', href: '/categorias' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sobre', href: '/sobre' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center font-bold text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ZVX
            </motion.div>
            <span className="font-bold text-xl neon-text hidden sm:block">
              Zanvexis Store
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Back to Zanvexis Button */}
            <Link
              href="https://zanvexis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 text-sm text-gray-300 hover:text-neon-blue transition-colors duration-300"
            >
              <span>Voltar para Zanvexis</span>
              <FiExternalLink className="w-4 h-4" />
            </Link>

            {/* Search Button */}
            <Link href="/produtos">
              <motion.button
                className="p-2 rounded-lg text-gray-300 hover:text-neon-blue hover:bg-white/5 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiSearch className="w-5 h-5" />
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="https://zanvexis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-neon-blue transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Voltar para Zanvexis</span>
                <FiExternalLink className="w-4 h-4" />
              </Link>
            </nav>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

