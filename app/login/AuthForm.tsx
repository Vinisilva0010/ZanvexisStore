// app/login/AuthForm.tsx
"use client" // Este formulário é interativo

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      // Força um refresh da página para o middleware rodar e redirecionar
      router.refresh()
    }
  }

  return (
    <form onSubmit={handleSignIn} className="space-y-6">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-white"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        required
        className="w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-white"
      />
      {error && <p className="text-red-500 text-center">{error}</p>}
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Entrar
      </button>
    </form>
  )
}