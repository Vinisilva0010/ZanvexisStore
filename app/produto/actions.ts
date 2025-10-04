"use server";

import { supabaseServer } from "@/lib/supabaseServer";
import { revalidatePath } from "next/cache";

export async function createReview(formData: FormData) {
  const produtoId = formData.get('produto_id') as string;
  const slug = formData.get('slug') as string;
  const nomeCliente = formData.get('nome_cliente') as string;
  const avaliacao = parseInt(formData.get('avaliacao') as string);
  const comentario = formData.get('comentario') as string;

  // Validação simples
  if (!produtoId || !nomeCliente || !avaliacao) {
    return { error: "Dados inválidos." };
  }

  const { error } = await supabaseServer
    .from('avaliacoes')
    .insert({
      produto_id: produtoId,
      nome_cliente: nomeCliente,
      avaliacao: avaliacao,
      comentario: comentario,
    });

  if (error) {
    console.error("Erro ao salvar avaliação:", error);
    return { error: "Não foi possível salvar a avaliação." };
  }

  // Revalida o cache da página do produto para a nova avaliação aparecer
  revalidatePath(`/produto/${slug}`);

  return { success: "Avaliação enviada com sucesso!" };
}
