import { supabaseServer } from "@/lib/supabaseServer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { updateProduct } from "@/app/admin/actions";
import type { Product } from "@/types";

// Função para buscar um único produto pelo ID
async function getProdutoById(id: string) {
  const { data, error } = await supabaseServer
    .from('produtos')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error("Erro ao buscar produto:", error);
    // Em vez de retornar null, chamamos notFound() diretamente
    notFound();
  }
  
  return data;
}

// Lista de categorias para o menu de seleção
const categories = [
  { slug: 'smartphones', nome: 'Smartphones' },
  { slug: 'acessorios', nome: 'Acessórios' },
  { slug: 'gadgets', nome: 'Gadgets' },
];

export default async function PaginaEditarProduto({ params }: { params: { id: string } }) {
  const produto: Product = await getProdutoById(params.id);

  return (
    <div className="p-8 pt-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Editar Produto</h1>
        <Link href="/admin/produtos">
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Voltar para a Lista
          </button>
        </Link>
      </div>

     <form action={updateProduct} className="bg-gray-800 border border-gray-700 rounded-lg p-6 space-y-4">
        <input type="hidden" name="id" value={produto.id} />
        
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-1">Nome do Produto</label>
          <input type="text" name="nome" id="nome" required 
                 defaultValue={produto.nome}
                 className="input-form"/>
        </div>

        <div>
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-300 mb-1">Descrição</label>
          <textarea name="descricao" id="descricao" rows={4} 
                    defaultValue={produto.descricao || ''}
                    className="input-form"></textarea>
        </div>

        {/* CAMPO DE CATEGORIA ADICIONADO */}
        <div>
          <label htmlFor="categoria" className="block text-sm font-medium text-gray-300 mb-1">Categoria</label>
          <select name="categoria" id="categoria" required className="input-form" defaultValue={produto.categoria}>
            <option value="">Selecione uma categoria</option>
            {categories.map(cat => (
              <option key={cat.slug} value={cat.slug}>{cat.nome}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="imagens" className="block text-sm font-medium text-gray-300 mb-1">URL da Imagem</label>
          <input type="url" name="imagens" id="imagens" 
                 defaultValue={produto.imagens ? produto.imagens[0] : ''}
                 placeholder="https://exemplo.com/imagem.png" className="input-form"/>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="preco" className="block text-sm font-medium text-gray-300 mb-1">Preço</label>
            <input type="number" step="0.01" name="preco" id="preco" required 
                   defaultValue={produto.preco}
                   className="input-form"/>
          </div>
          <div className="flex-1">
            <label htmlFor="estoque" className="block text-sm font-medium text-gray-300 mb-1">Estoque</label>
            <input type="number" name="estoque" id="estoque" required 
                   defaultValue={produto.estoque}
                   className="input-form"/>
          </div>
        </div>

        {/* CAMPO DE DESTAQUE ADICIONADO */}
        <div className="flex items-center">
          <input id="destaque" name="destaque" type="checkbox" defaultChecked={produto.destaque} className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <label htmlFor="destaque" className="ml-2 block text-sm text-gray-300">Marcar como Destaque na Página Inicial</label>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
            Salvar Alterações
          </button>
        </div>

      </form>
    </div>
  );
}

