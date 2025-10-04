import Link from 'next/link';
import { createProduct } from '@/app/admin/actions';

// Lista de categorias para o menu de seleção
const categories = [
  { slug: 'smartphones', nome: 'Smartphones' },
  { slug: 'acessorios', nome: 'Acessórios' },
  { slug: 'gadgets', nome: 'Gadgets' },
];

export default function NovaPaginaProduto() {
  return (
    <div className="p-8 pt-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Criar Novo Produto</h1>
        <Link href="/admin/produtos">
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Voltar para a Lista
          </button>
        </Link>
      </div>

      <form action={createProduct} className="bg-gray-800 border border-gray-700 rounded-lg p-6 space-y-4">
        
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-1">Nome do Produto</label>
          <input type="text" name="nome" id="nome" required className="input-form"/>
        </div>

        <div>
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-300 mb-1">Descrição</label>
          <textarea name="descricao" id="descricao" rows={4} className="input-form"></textarea>
        </div>
        
        {/* CAMPO DE CATEGORIA ADICIONADO */}
        <div>
          <label htmlFor="categoria" className="block text-sm font-medium text-gray-300 mb-1">Categoria</label>
          <select name="categoria" id="categoria" required className="input-form">
            <option value="">Selecione uma categoria</option>
            {categories.map(cat => (
              <option key={cat.slug} value={cat.slug}>{cat.nome}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="imagens" className="block text-sm font-medium text-gray-300 mb-1">URL da Imagem</label>
          <input type="url" name="imagens" id="imagens" placeholder="https://exemplo.com/imagem.png" className="input-form"/>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="preco" className="block text-sm font-medium text-gray-300 mb-1">Preço (ex: 99.90)</label>
            <input type="number" step="0.01" name="preco" id="preco" required className="input-form"/>
          </div>
          <div className="flex-1">
            <label htmlFor="estoque" className="block text-sm font-medium text-gray-300 mb-1">Estoque</label>
            <input type="number" name="estoque" id="estoque" required defaultValue={0} className="input-form"/>
          </div>
        </div>

        {/* CAMPO DE DESTAQUE ADICIONADO */}
        <div className="flex items-center">
          <input id="destaque" name="destaque" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <label htmlFor="destaque" className="ml-2 block text-sm text-gray-300">Marcar como Destaque na Página Inicial</label>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
            Salvar Produto
          </button>
        </div>

      </form>
    </div>
  );
}

