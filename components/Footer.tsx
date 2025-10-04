'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiExternalLink, FiHeart } from 'react-icons/fi'

export default function Footer() {

  // --- ALTERAÇÕES FEITAS AQUI ---
  const footerLinks = [
    {
      title: 'Loja',
      links: [
        { name: 'Produtos', href: '/produtos' },
        { name: 'Categorias', href: '/categorias' },
        { name: 'Ofertas', href: '/produtos' },
      ],
    },
    {
      title: 'Conteúdo',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Tecnologia', href: '/blog' },
        { name: 'Reviews', href: '/blog' },
      ],
    },
    {
      // Nome da seção alterado para "Institucional"
      title: 'Institucional',
      links: [
        { name: 'Sobre Nós', href: '/sobre' },
        { name: 'Contato', href: '/contato' },
        // Link corrigido e nomeado corretamente
        { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
        // Placeholders para as próximas páginas que criaremos
        { name: 'Política de Troca e Devolução', href: '/politica-de-troca' },
        { name: 'Termos de Serviço', href: '/termos-de-servico' },
        { name: 'Prazos de Entrega', href: '/prazos-de-entrega' },
      ],
    },
  ]
  // --- FIM DAS ALTERAÇÕES ---

  return (
    <footer className="bg-dark-200 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center font-bold text-white">
                ZVX
              </div>
              <span className="font-bold text-xl neon-text">
                Zanvexis Store
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tecnologia que conecta você ao futuro. Descubra os melhores produtos e fique por dentro das últimas tendências tech.
            </p>
            <Link
              href="https://zanvexis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-neon-blue hover:text-neon-purple transition-colors duration-300"
            >
              <span>Conheça a Zanvexis</span>
              <FiExternalLink className="w-4 h-4" />
            </Link>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Feito com</span>
              <FiHeart className="w-4 h-4 text-red-500" />
              <span>pela equipe</span>
              <Link
                href="https://zanvexis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-blue hover:text-neon-purple transition-colors duration-300"
              >
                Zanvexis
              </Link>
            </div>
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>&copy; 2025 Zanvexis Store. Todos os direitos reservados.</p>
              <p>&copy; Proprietario Vinicisu da silva pontual</p>
            </div>
            <div className="flex items-center space-x-4">
              <motion.div
                className="text-xs text-gray-500 bg-dark-300 px-3 py-1 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                PWA Ready
              </motion.div>
              <motion.div
                className="text-xs text-gray-500 bg-dark-300 px-3 py-1 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                Next.js 15
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}