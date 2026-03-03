// Produtos da Casa do Manto JC - Scraped 2026-02-27T19:05:25.040Z

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
}

const normalizeImageUrl = (url: string): string => {
  if (url && url.startsWith('//')) return 'https:' + url;
  if (url && url.startsWith('http:')) return url.replace('http:', 'https:');
  return url || '';
};

export const casaDoMantoProducts: Product[] = [];
