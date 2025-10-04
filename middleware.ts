// middleware.ts

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // Criamos uma resposta base que podemos modificar
  const res = NextResponse.next()

  // Criamos o cliente Supabase específico para o middleware
  const supabase = createMiddlewareClient({ req, res })

  // **Importante**: supabase.auth.getSession() pode atualizar o cookie da sessão.
  // O `createMiddlewareClient` garante que a resposta (`res`) receba o novo cookie `Set-Cookie`.
  const { data: { session } } = await supabase.auth.getSession()

  // Lógica de proteção para a área de admin
  if (!session && req.nextUrl.pathname.startsWith('/admin')) {
    const loginUrl = new URL('/login', req.url)
    return NextResponse.redirect(loginUrl)
  }

  // Se o usuário está logado e tenta acessar a página de login, redireciona para o admin
  if (session && req.nextUrl.pathname === '/login') {
    const adminUrl = new URL('/admin/produtos', req.url)
    return NextResponse.redirect(adminUrl)
  }

  // Se nenhuma das condições acima for atendida, retorna a resposta (potencialmente com o cookie atualizado)
  return res
}

// Configuração para rodar o middleware apenas nas rotas necessárias
export const config = {
  matcher: ['/admin/:path*', '/login'],
}