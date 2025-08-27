'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiSearch, HiX } from 'react-icons/hi'

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export default function SearchBar({ onSearch, placeholder = "Buscar produtos..." }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSearch = (value: string) => {
    setQuery(value)
    onSearch(value)
  }

  const clearSearch = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative max-w-2xl mx-auto mb-12"
    >
      <div className="relative">
        <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          className="search-input pl-12 pr-12"
        />
        {query && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-700 transition-colors duration-200"
          >
            <HiX className="w-4 h-4 text-gray-400 hover:text-white" />
          </motion.button>
        )}
      </div>
      
      {/* Search suggestions or recent searches could go here */}
      {query && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 bg-dark-200 border border-gray-700 rounded-lg p-2 z-10"
        >
          <div className="text-sm text-gray-400">
            Buscando por: <span className="text-white font-medium">&quot;{query}&quot;</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
