"use server";

import { supabaseServer } from "@/lib/supabaseServer";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// Função para gerar um slug único
const generateUniqueSlug = (name: string) => {
  const baseSlug = name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  const randomSuffix = Math.random().toString(36).substring(2, 8);
  return `${baseSlug}-${randomSuffix}`;
}

// --- AÇÃO DE CRIAR PRODUTO ---
export async function createProduct(formData: FormData) {
  const nome = formData.get('nome') as string;
  const descricao = formData.get('descricao') as string;
  const preco = parseFloat(formData.get('preco') as string);
  const estoque = parseInt(formData.get('estoque') as string);
  const imagensUrl = formData.get('imagens') as string;
  const categoria = formData.get('categoria') as string;
  const destaque = !!formData.get('destaque');

  const imagensParaSalvar = imagensUrl ? [imagensUrl] : null;

  if (!nome || !preco || estoque === null || !categoria) {
    console.error('Dados inválidos para criação.');
    return;
  }
  // CORREÇÃO: Usando a nova função para garantir um slug único
  const slug = generateUniqueSlug(nome);

  const { error } = await supabaseServer.from('produtos').insert([
    { nome, descricao, preco, estoque, slug, imagens: imagensParaSalvar, categoria, destaque }
  ]);
  
  if (error) { 
    console.error('Erro ao criar produto:', error); 
    return; 
  }

  revalidatePath('/admin/produtos');
  redirect('/admin/produtos');
}

// --- AÇÃO DE ATUALIZAR PRODUTO ---
export async function updateProduct(formData: FormData) {
  const id = formData.get('id') as string;
  const nome = formData.get('nome') as string;
  const descricao = formData.get('descricao') as string;
  const preco = parseFloat(formData.get('preco') as string);
  const estoque = parseInt(formData.get('estoque') as string);
  const imagensUrl = formData.get('imagens') as string;
  const categoria = formData.get('categoria') as string;
  const destaque = !!formData.get('destaque');

  const imagensParaSalvar = imagensUrl ? [imagensUrl] : null;

  if (!id || !nome || !preco || estoque === null || !categoria) {
    console.error('Dados inválidos para atualização.');
    return;
  }
  
  const slug = generateUniqueSlug(nome);

  const { error } = await supabaseServer
    .from('produtos')
    .update({ nome, descricao, preco, estoque, slug, imagens: imagensParaSalvar, categoria, destaque })
    .eq('id', id);

  if (error) { 
    console.error('Erro ao atualizar produto:', error); 
    return; 
  }

  revalidatePath('/admin/produtos');
  revalidatePath(`/admin/produtos/editar/${id}`);
  redirect('/admin/produtos');
}

// --- AÇÃO DE DELETAR PRODUTO ---
export async function deleteProduct(formData: FormData) {
  const id = formData.get('id') as string;
  if (!id) { console.error('ID do produto não encontrado.'); return; }

  const { error } = await supabaseServer.from('produtos').delete().match({ id: id });
  if (error) { console.error('Erro ao deletar produto:', error); return; }

  revalidatePath('/admin/produtos');
}

// --- AÇÃO DE LOGOUT (SAIR) ---
export async function signOut() {
  const supabase = createServerActionClient({ cookies });
  await supabase.auth.signOut();
  redirect('/login');
}

