const fs = require('fs');

const content = fs.readFileSync('/home/mat.devall122k03/Downloads/Bravio-main/Bravio-main/src/data/products_full.ts', 'utf8');

const regex = /id: '([^']+)',[\s\S]*?name: '([^']+)',[\s\S]*?price: ([\d.]+),[\s\S]*?image: normalizeImageUrl\('([^']+)'\)/g;
const products = [];
let match;

while ((match = regex.exec(content)) !== null) {
  products.push({id:match[1],name:match[2],price:parseFloat(match[3]),image:match[4]});
}

const cats = {brasileirao:[],selecoes:[],europa:[],asia_america:[],outros:[]};
const br=['palmeiras','flamengo','são paulo','fluminense','vasco','botafogo','cruzeiro','grêmio','internacional','atlético','santos','corinthians'];
const sel=['brazil','argentina','alemanha','frança','inglaterra','espanha','italia','portugal','holanda','belgica','méxico','canadá','usa','colombia','peru','chile','uruguai','japão','coreia','australia','marrocos','nigéria','haiti','jamaica','hungria','cameroon','congo','mali','iceland','morocco','czech','switzerland','ghana','algeria','curaçao','uruguay'];
const eu=['real madrid','barcelona','atletico','sevilla','valencia','manchester','chelsea','liverpool','arsenal','tottenham','newcastle','juventus','milan','inter','roma','lazio','napoli','bayern','dortmund','leipzig','leverkusen','psg','lyon','marseille','monaco','porto','benfica','sporting','ajax','psv'];
const asia=['al-hilal','al-nassr','al-ittihad','kashima','kawasaki','vissel','inter miami','atlanta','los angeles'];

products.forEach(p=>{
  const l = p.name.toLowerCase();
  let put = false;
  if(br.some(t=>l.includes(t))){cats.brasileirao.push(p);put=true;}
  if(put)return;
  if(sel.some(t=>l.includes(t))){cats.selecoes.push(p);put=true;}
  if(put)return;
  if(eu.some(t=>l.includes(t))){cats.europa.push(p);put=true;}
  if(put)return;
  if(asia.some(t=>l.includes(t))){cats.asia_america.push(p);put=true;}
  if(put)return;
  cats.outros.push(p);
});

const allCats = [
  {key:'brasileirao',name:'BRASILEIRÃO',products:cats.brasileirao},
  {key:'selecoes',name:'SELEÇÕES',products:cats.selecoes},
  {key:'europa',name:'TIMES EUROPEUS',products:cats.europa},
  {key:'asia_america',name:'ÁSIA E AMÉRICA',products:cats.asia_america},
  {key:'outros',name:'OUTROS',products:cats.outros}
];

let ts = `// Produtos categorizados

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

export interface Category {
  key: string;
  name: string;
  products: Product[];
}

export const categories: Category[] = [
`;

allCats.forEach(cat=>{
  ts += `  {
    key: '${cat.key}',
    name: '${cat.name}',
    products: [
`;
  cat.products.forEach(p=>{
    const name = p.name.replace(/'/g, "\\'");
    ts += `      {
        id: '${p.id}',
        name: '${name}',
        price: ${p.price},
        image: normalizeImageUrl('${p.image}'),
        category: '${cat.key}',
        subcategory: ''
      },
`;
  });
  ts += `    ]
  },
`;
});

ts += `];
`;

fs.writeFileSync('/home/mat.devall122k03/Downloads/Bravio-main/Bravio-main/src/data/products_categorized.ts', ts);
console.log('Categorizado!');
console.log('Brasileirão:',cats.brasileirao.length);
console.log('Seleções:',cats.selecoes.length);
console.log('Europa:',cats.europa.length);
console.log('Ásia/América:',cats.asia_america.length);
console.log('Outros:',cats.outros.length);
