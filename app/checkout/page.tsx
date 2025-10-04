// app/checkout/page.tsx
"use client";

import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { createCheckoutSession } from "./actions";

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (cartItems.length === 0) {
      router.push('/carrinho');
    }
  }, [cartItems, router]);

  // Função para buscar e preencher o endereço a partir do CEP (não precisa estar no state)
  const handleCepBlur = async (cepValue: string) => {
    if (cepValue.replace(/\D/g, '').length !== 8) return;
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
      const data = await response.json();
      if (!data.erro) {
        (document.querySelector('[name="rua"]') as HTMLInputElement).value = data.logradouro;
        (document.querySelector('[name="bairro"]') as HTMLInputElement).value = data.bairro;
        (document.querySelector('[name="cidade"]') as HTMLInputElement).value = data.localidade;
        (document.querySelector('[name="estado"]') as HTMLInputElement).value = data.uf;
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  };

  const subtotal = cartItems.reduce((total, item) => total + item.preco * item.quantidade, 0);
  const formatPrice = (price: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-6 text-white">Finalizar Compra</h1>
        <form action={createCheckoutSession} className="space-y-6">
          <input type="hidden" name="cart_items" value={JSON.stringify(cartItems)} />
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-white">Informações Pessoais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="nome" placeholder="Nome Completo" required className="input-form" />
              <input type="email" name="email" placeholder="E-mail" required className="input-form" />
              <input type="text" name="cpf" placeholder="CPF" required className="input-form" />
              <input type="tel" name="telefone" placeholder="Telefone / WhatsApp" required className="input-form" />
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-white">Endereço de Entrega</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" name="cep" placeholder="CEP" required className="input-form md:col-span-1" onBlur={(e) => handleCepBlur(e.target.value)} />
              <input type="text" name="rua" placeholder="Rua / Avenida" required className="input-form md:col-span-2" />
              <input type="text" name="numero" placeholder="Número" required className="input-form" />
              <input type="text" name="bairro" placeholder="Bairro" required className="input-form" />
              <input type="text" name="cidade" placeholder="Cidade" required className="input-form" />
              <input type="text" name="estado" placeholder="Estado" required className="input-form" />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full">
            Ir para o Pagamento
          </button>
        </form> {/* 👈 CORREÇÃO: TAG DE FECHAMENTO ADICIONADA AQUI */}
      </div>
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 h-fit">
        <h2 className="text-2xl font-bold mb-4 text-white">Resumo do Pedido</h2>
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center text-gray-300">
              <span>{item.nome} (x{item.quantidade})</span>
              <span className="font-semibold">{formatPrice(item.preco * item.quantidade)}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 my-4"></div>
        <div className="flex justify-between font-bold text-xl text-white">
          <span>Total</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
      </div>
    </div>
  );
}