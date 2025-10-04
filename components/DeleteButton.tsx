// components/DeleteButton.tsx

"use client"; // 👈 Isso transforma o componente em interativo

import { deleteProduct } from "@/app/admin/actions";

// Este componente recebe o ID do produto que ele deve deletar
export function DeleteButton({ productId }: { productId: string }) {

  // A função `formAction` é chamada quando o formulário é enviado
  const formAction = async (formData: FormData) => {
    
    // Mostra um popup de confirmação no navegador
    const confirmed = confirm("Tem certeza que deseja excluir este produto?");
    
    if (confirmed) {
      // Se o usuário confirmar, chama a Server Action `deleteProduct`
      await deleteProduct(formData);
    }
  };

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={productId} />
      <button 
        type="submit"
        className="text-red-500 hover:text-red-400 font-semibold"
      >
        Excluir
      </button>
    </form>
  );
}