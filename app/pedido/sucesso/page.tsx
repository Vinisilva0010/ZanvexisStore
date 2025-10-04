// app/pedido/sucesso/page.tsx
"use client";

import { useCart } from "@/contexts/CartContext";
import Link from "next/link";
import { useEffect } from "react";

export default function PaginaSucesso() {
  const { clearCart } = useCart();

  useEffect(() => {
    // LOG 1: Vamos ver se o useEffect está rodando
    console.log("PÁGINA DE SUCESSO: Componente montado, useEffect iniciado.");
    
    clearCart();

    // LOG 2: Vamos confirmar que a chamada foi feita
    console.log("PÁGINA DE SUCESSO: Função clearCart() foi chamada.");

  }, []); // Mantemos o array vazio para rodar apenas uma vez

  return (
    <div className="container mx-auto text-center py-40">
      <h1 className="text-3xl font-bold text-green-400 mb-4">Pagamento Aprovado!</h1>
      <p className="text-lg text-gray-300">Obrigado pela sua compra. Enviamos uma confirmação para o seu e-mail.</p>
      <Link href="/">
        <button className="btn-primary mt-8">
          Voltar para a Loja
        </button>
      </Link>
    </div>
  );
}