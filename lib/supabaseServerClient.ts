// lib/supabaseServerClient.ts
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

// Este cliente é para Server Components, que precisam ler cookies
export const createSupabaseServerClient = () => createServerComponentClient({ cookies })