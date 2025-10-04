// components/AddToCartButton.tsx
"use client";

import { useCart } from "@/contexts/CartContext";
import { HiShoppingCart } from "react-icons/hi";

// Recebe o objeto do produto inteiro para adicionar ao carrinho
export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="btn-primary w-full flex items-center justify-center space-x-2"
    >
      <span>Adicionar ao Carrinho</span>
      <HiShoppingCart className="w-5 h-5" />
    </button>
  );
}