import { supabase } from './supabase';

export async function getProducts() {
  const { data, error } = await supabase.from('products').select(`
    *,
    product_variants (*)
  `);

  if (error) throw new Error('Coffee products could not be loaded');

  return data;
}

export async function getProductsByCategory(category: string) {
  const { data, error } = await supabase
    .from('products')
    .select(
      `
    *,
    product_variants (*)
  `,
    )
    .eq('category', category);

  if (error) throw new Error(`${category} Coffee products could not be loaded`);

  return data;
}
