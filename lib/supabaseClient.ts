// lib/supabaseClient.ts

import { createClient } from '@supabase/supabase-js'

// Pega a URL e a Chave do arquivo .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Validação para garantir que as variáveis de ambiente foram carregadas
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key are required.')
}

// Cria e exporta o cliente Supabase para ser usado em qualquer lugar do projeto
export const supabase = createClient(supabaseUrl, supabaseAnonKey)