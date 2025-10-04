// lib/supabaseServer.ts

import { createClient } from '@supabase/supabase-js'

// Este arquivo é para uso exclusivo no lado do servidor (Server Components, Server Actions, API Routes)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Supabase URL and Service Key are required for the server client.')
}

// Este cliente tem poderes de administrador e ignora o RLS
export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey)