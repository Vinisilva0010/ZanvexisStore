// app/carrinho/page.tsx
"use client";

import { useCart } from "@/contexts/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce((total, item) => total + item.preco * item.quantidade, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Seu Carrinho de Compras</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-gray-800 rounded-lg">
          <p className="text-xl text-gray-400">Seu carrinho está vazio.</p>
          <Link href="/produtos">
            <button className="mt-4 btn-primary">
              Ver Produtos
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de Itens */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="flex items-center gap-4">
                  {/* <img src={item.imagem} alt={item.nome} className="w-20 h-20 object-cover rounded-md" /> */}
                  <div>
                    <h2 className="font-semibold text-lg text-white">{item.nome}</h2>
                    <p className="text-gray-400">{formatPrice(item.preco)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <input 
                    type="number"
                    min="1"
                    value={item.quantidade}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 bg-gray-900 border border-gray-600 rounded-md p-2 text-white text-center"
                  />
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-400 font-semibold">
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Resumo do Pedido */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 h-fit">
            <h2 className="text-2xl font-bold mb-4 text-white">Resumo</h2>
            <div className="flex justify-between text-gray-300">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between mt-2 text-gray-400 text-sm">
              <span>Frete</span>
              <span>A calcular</span>
            </div>
            <div className="border-t border-gray-700 my-4"></div>
            <div className="flex justify-between font-bold text-xl text-white">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <Link href="/checkout">
            <button className="btn-primary w-full mt-6">
                Finalizar Compra
            </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}