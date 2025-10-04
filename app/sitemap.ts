import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabaseClient';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = 'https://zanvexis-store.vercel.app'; // Substitua pela sua URL final quando tiver

  // 1. Buscar todos os produtos para criar as URLs dinâmicas
  const { data: produtos, error } = await supabase
    .from('produtos')
    .select('slug, created_at'); // Selecionamos apenas o slug e a data de criação/atualização

  if (error) {
    console.error("Erro ao buscar produtos para o sitemap:", error);
    // Retorna um sitemap básico se a busca falhar
    return [
      {
        url: siteUrl,
        lastModified: new Date(),
      },
    ];
  }

  const productUrls = produtos.map((produto) => {
    return {
      url: `${siteUrl}/produto/${produto.slug}`,
      lastModified: new Date(produto.created_at), // Usa a data de criação como 'lastModified'
    };
  });

  // 2. Definir as URLs estáticas da sua loja
  const staticUrls = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteUrl}/produtos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/categorias`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // 3. Juntar as URLs estáticas e as dinâmicas dos produtos
  return [...staticUrls, ...productUrls];
}
