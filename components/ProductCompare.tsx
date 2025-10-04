'use client'

import { motion } from 'framer-motion'
import { HiExternalLink, HiStar, HiShieldCheck } from 'react-icons/hi'

interface ProductCompareItem {
  nome: string
  preco: number
  frete: number
  garantia: string
  loja: string
  link: string
}

interface ProductCompareProps {
  products: ProductCompareItem[]
}

export default function ProductCompare({ products }: ProductCompareProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }

  const calculateTotal = (preco: number, frete: number) => {
    return preco + frete
  }

  // Find the cheapest total price
  const cheapestTotal = Math.min(...products.map(product => calculateTotal(product.preco, product.frete)))

  const getLogoColor = (loja: string) => {
    switch (loja.toLowerCase()) {
      case 'amazon':
        return 'text-orange-400'
      case 'shopee':
        return 'text-red-400'
      case 'mercadolivre':
        return 'text-yellow-400'
      case 'magazineluiza':
        return 'text-blue-400'
      default:
        return 'text-gray-400'
    }
  }

  if (!products || products.length === 0) {
    return (
      <div className="card text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
          <HiStar className="w-8 h-8 text-gray-600" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Nenhum produto para comparar
        </h3>
        <p className="text-gray-400">
          Adicione produtos para visualizar a comparação de preços.
        </p>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card overflow-hidden"
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center space-x-3 mb-4"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
            <HiStar className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="neon-text">Comparativo</span> de Produtos
          </h2>
        </motion.div>
        <p className="text-gray-400">
          Compare preços e condições para tomar a melhor decisão de compra
        </p>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left py-4 px-4 text-gray-300 font-semibold">Produto</th>
              <th className="text-center py-4 px-4 text-gray-300 font-semibold">Preço</th>
              <th className="text-center py-4 px-4 text-gray-300 font-semibold">Frete</th>
              <th className="text-center py-4 px-4 text-gray-300 font-semibold">Total</th>
              <th className="text-center py-4 px-4 text-gray-300 font-semibold">Garantia</th>
              <th className="text-center py-4 px-4 text-gray-300 font-semibold">Loja</th>
              <th className="text-center py-4 px-4 text-gray-300 font-semibold">Ação</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {products.map((product, index) => {
              const total = calculateTotal(product.preco, product.frete)
              const isCheapest = total === cheapestTotal
              
              return (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border-b border-gray-800 transition-all duration-300 hover:bg-gray-800/30 ${
                    isCheapest ? 'bg-neon-blue/5 border-neon-blue/20' : ''
                  }`}
                >
                  {/* Product Name */}
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      {isCheapest && (
                        <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse-glow" />
                      )}
                      <div>
                        <div className={`font-semibold ${isCheapest ? 'text-neon-blue' : 'text-white'}`}>
                          {product.nome}
                        </div>
                        {isCheapest && (
                          <div className="text-xs text-neon-blue font-medium mt-1">
                            Melhor Oferta!
                          </div>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="py-4 px-4 text-center">
                    <div className={`font-bold text-lg ${isCheapest ? 'text-neon-blue' : 'text-white'}`}>
                      {formatPrice(product.preco)}
                    </div>
                  </td>

                  {/* Shipping */}
                  <td className="py-4 px-4 text-center">
                    <div className={`${isCheapest ? 'text-neon-blue' : 'text-gray-300'}`}>
                      {product.frete === 0 ? (
                        <span className="text-green-400 font-medium">Grátis</span>
                      ) : (
                        formatPrice(product.frete)
                      )}
                    </div>
                  </td>

                  {/* Total */}
                  <td className="py-4 px-4 text-center">
                    <div className={`font-bold text-lg ${isCheapest ? 'text-neon-blue' : 'text-white'}`}>
                      {formatPrice(total)}
                    </div>
                  </td>

                  {/* Warranty */}
                  <td className="py-4 px-4 text-center">
                    <div className={`flex items-center justify-center space-x-1 ${isCheapest ? 'text-neon-blue' : 'text-gray-300'}`}>
                      <HiShieldCheck className="w-4 h-4" />
                      <span>{product.garantia}</span>
                    </div>
                  </td>

                  {/* Store */}
                  <td className="py-4 px-4 text-center">
                    <div className={`font-medium ${getLogoColor(product.loja)}`}>
                      {product.loja}
                    </div>
                  </td>

                  {/* Action Button */}
                  <td className="py-4 px-4 text-center">
                    <motion.a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        isCheapest
                          ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-neon-both hover:scale-105'
                          : 'border border-gray-600 text-gray-300 hover:border-neon-blue hover:text-neon-blue'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{isCheapest ? 'Comprar' : 'Ver'}</span>
                      <HiExternalLink className="w-4 h-4" />
                    </motion.a>
                  </td>
                </motion.tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Footer with Best Deal Summary */}
      {products.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-6 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-neon-blue rounded-full flex items-center justify-center">
                <HiStar className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">Melhor Economia</div>
                <div className="text-sm text-gray-400">
                  Economize comparando ofertas
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-gray-400">Menor preço total</div>
              <div className="text-2xl font-bold neon-text">
                {formatPrice(cheapestTotal)}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

