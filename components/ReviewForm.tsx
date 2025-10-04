"use client";

import { useState } from 'react';
import { HiStar } from 'react-icons/hi2';
import { createReview } from '@/app/produto/actions';
import toast from 'react-hot-toast';

interface ReviewFormProps {
  productId: string;
  productSlug: string;
}

export default function ReviewForm({ productId, productSlug }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // Ação que é chamada quando o formulário é enviado
  async function formAction(formData: FormData) {
    if (rating === 0) {
      toast.error("Por favor, selecione uma nota de 1 a 5 estrelas.");
      return;
    }
    formData.set('avaliacao', rating.toString());

    const result = await createReview(formData);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.success || "Avaliação enviada!");
      // Limpa o formulário após o envio bem-sucedido
      (document.getElementById('review-form') as HTMLFormElement)?.reset();
      setRating(0);
    }
  }

  return (
    <form id="review-form" action={formAction} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 space-y-4">
      <h3 className="text-xl font-semibold text-white">Deixe sua avaliação</h3>
      <input type="hidden" name="produto_id" value={productId} />
      <input type="hidden" name="slug" value={productSlug} />
      
      <div>
        <label htmlFor="nome_cliente" className="block text-sm font-medium text-gray-300 mb-1">Seu Nome</label>
        <input type="text" name="nome_cliente" id="nome_cliente" required className="input-form" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Sua Nota</label>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <button
                type="button"
                key={starValue}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
              >
                <HiStar
                  className={`w-8 h-8 cursor-pointer transition-colors ${
                    starValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-600'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label htmlFor="comentario" className="block text-sm font-medium text-gray-300 mb-1">Seu Comentário (opcional)</label>
        <textarea name="comentario" id="comentario" rows={4} className="input-form"></textarea>
      </div>

      <div className="text-right">
        <button type="submit" className="btn-primary">Enviar Avaliação</button>
      </div>
    </form>
  );
}
