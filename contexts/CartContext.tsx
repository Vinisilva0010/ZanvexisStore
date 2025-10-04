// contexts/CartContext.tsx
"use client";

import { createContext, useState, useContext, useEffect, ReactNode, useCallback } from 'react';

// Interfaces (sem mudanças)
interface CartItem {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
}
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: any) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {

  // 👇 --- MUDANÇA PRINCIPAL AQUI --- 👇
  // Inicializamos o estado com uma função. Ela roda apenas uma vez,
  // na primeira renderização, e já pega os dados do localStorage.
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('zanvexis_cart');
      if (storedCart) {
        return JSON.parse(storedCart);
      }
    }
    return [];
  });

  // REMOVEMOS o useEffect que carregava os dados, pois não é mais necessário.

  // O useEffect que SALVA os dados continua igual.
  useEffect(() => {
    localStorage.setItem('zanvexis_cart', JSON.stringify(cartItems));
  }, [cartItems]);


  // Todas as funções com useCallback continuam iguais
  const addToCart = useCallback((product: any) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantidade: 1 }];
      }
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    const newQuantity = Math.max(1, quantity);
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantidade: newQuantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}