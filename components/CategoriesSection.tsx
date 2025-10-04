'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

// Definimos as categorias aqui para fácil acesso
const categories = [
    { slug: 'smartphones', nome: 'Smartphones' },
    { slug: 'acessorios', nome: 'Acessórios' },
    { slug: 'gadgets', nome: 'Gadgets' },
];

// Usamos uma interface para definir as propriedades do componente
interface CategoriesSectionProps {
  currentCategory?: string;
}

export default function CategoriesSection({ currentCategory }: CategoriesSectionProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleFilter = (categorySlug: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (categorySlug === 'todos') {
            params.delete('categoria');
        } else {
            params.set('categoria', categorySlug);
        }
        // Navega para a página de produtos com os novos parâmetros
        router.push(`/produtos?${params.toString()}`);
    };

    return (
        <motion.div 
            className="flex justify-center items-center gap-2 md:gap-4 mb-12 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <button
                onClick={() => handleFilter('todos')}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                    !currentCategory ? 'bg-neon-blue text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
                Todos
            </button>
            {categories.map((cat) => (
                <button
                    key={cat.slug}
                    onClick={() => handleFilter(cat.slug)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                        currentCategory === cat.slug ? 'bg-neon-blue text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                    {cat.nome}
                </button>
            ))}
        </motion.div>
    );
}

