// components/WhatsAppButton.tsx
"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const FloatingWhatsApp = dynamic(
  () => import('react-floating-whatsapp').then((mod) => mod.FloatingWhatsApp),
  { ssr: false }
);

export default function WhatsAppButton() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <FloatingWhatsApp
      phoneNumber="+5511912345678" // Lembre-se de colocar seu número aqui
      accountName="Zanvexis Store"
      statusMessage="Normalmente responde em 1 hora"
      chatMessage="Olá! 👋 Como podemos te ajudar?"
      placeholder="Digite uma mensagem..."
      avatar="/logo.png"
      notification
      notificationSound
    />
  );
}