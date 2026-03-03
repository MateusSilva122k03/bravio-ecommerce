const fs = require('fs');

const copa = JSON.parse(fs.readFileSync('/home/mat.devall122k03/Downloads/Bravio-main/Produtos extraidos/produtos_copa_full.json', 'utf8'));
const capita = JSON.parse(fs.readFileSync('/home/mat.devall122k03/Downloads/Bravio-main/Produtos extraidos/produtos_loja_capita.json', 'utf8'));

const all = [...copa, ...capita];
console.log('Total:', all.length);

let ts = `// Total: ${all.length} produtos

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

export const allProducts: Product[] = [
`;

all.forEach((p, i) => {
  const name = (p.name || '').replace(/'/g, "\\'").replace(/"/g, "'");
  ts += `  {
    id: 'prod_${i + 1}',
    name: '${name}',
    price: ${p.price || 199.90},
    image: normalizeImageUrl('${p.image || ''}'),
    category: 'loja',
    subcategory: ''
  },
`;
});

ts += `];
`;

fs.writeFileSync('/home/mat.devall122k03/Downloads/Bravio-main/Bravio-main/src/data/products_full.ts', ts);
console.log('Arquivo criado com', all.length, 'produtos');
