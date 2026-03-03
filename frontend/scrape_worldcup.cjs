// Script para fazer scrape da World Cup Store
// https://theworldcup.shop/collections/world-cup-2026

const https = require('https');
const fs = require('fs');

const BASE_URL = 'https://theworldcup.shop';

const productPaths = [
  '/products/alemania-i-copa-do-mundo-2026-conjunto-infantil',
  '/products/alemania-ii-copa-do-mundo-2026-conjunto-infantil',
  '/products/alemania-ii-copa-do-mundo-2026-hombre',
  '/products/argelia-i-copa-do-mundo-2026-conjunto-infantil',
  '/products/argelia-i-copa-do-mundo-2026-hombre',
  '/products/argelia-i-copa-do-mundo-2026-hombre-version-jugador',
  '/products/argelia-ii-copa-do-mundo-2026-hombre',
  '/products/argentina-i-copa-do-mundo-2026-hombre-retro',
  '/products/argentina-i-copa-do-mundo-2026-hombre-version-jugador',
  '/products/argentina-i-copa-do-mundo-2026-mujer',
  '/products/belgica-i-copa-do-mundo-2026-hombre',
  '/products/brasil-i-copa-do-mundo-2026-hombre-version-jugador',
  '/products/brasil-i-copa-do-mundo-2026-hombre-version-jugador-1',
  '/products/brasil-ii-copa-do-mundo-2026-hombre',
  '/products/canada-copa-do-mundo-2026-hombre-version-jugador',
  '/products/colombia-i-copa-do-mundo-2026-conjunto-infantil',
  '/products/colombia-i-copa-do-mundo-2026-hombre-retro',
  '/products/colombia-i-copa-do-mundo-2026-hombre-version-jugador',
  '/products/colombia-i-copa-do-mundo-2026-mujer',
  '/products/equador-i-copa-do-mundo-portero-2026-hombre-retro',
  '/products/equador-special-2026-hombre-retro',
  '/products/francia-i-copa-do-mundo-2026-hombre-version-jugador',
  '/products/inglaterra-i-copa-do-mundo-2026-conjunto-infantil',
  '/products/inglaterra-i-copa-do-mundo-2026-hombre-version-jugador',
];

function fetchURL(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractProduct(html, url) {
  const result = { name: '', price: 0, image: '' };
  
  // Extract name - look for product title
  const nameMatch = html.match(/"name":"([^"]+BRASIL[^"]+)"/i) || 
                    html.match(/"name":"([^"]+AWAY[^"]+)"/i) ||
                    html.match(/"name":"([^"]+VERSION[^"]+)"/i) ||
                    html.match(/"name":"([^"]+MEN[^"]+)"/i);
  
  // Get first product name that isn't the store name
  const names = html.match(/"name":"([^"]+)"/g);
  if (names) {
    for (const n of names) {
      const name = n.replace('"name":"', '').replace('"', '');
      if (!name.includes('World Cup Store') && name.length > 5) {
        result.name = name;
        break;
      }
    }
  }
  
  // Extract price
  const priceMatch = html.match(/"price":"(\d+\.\d+)"/);
  if (priceMatch) {
    result.price = parseFloat(priceMatch[1]);
  }
  
  // Extract image - get the first real product image
  const imgMatches = html.match(/"image":"(https:\/\/[^"]+\.png[^"]*)"/g);
  if (imgMatches) {
    for (const img of imgMatches) {
      const url = img.replace('"image":"', '').replace('"', '');
      // Skip empty placeholder images
      if (url.includes('shopify') && !url.includes('no-image')) {
        result.image = url.replace(/\\u0026/g, '&').replace(/\\/g, '');
        break;
      }
    }
  }
  
  return result;
}

async function scrapeProducts() {
  const products = [];
  
  console.log(`Scraping ${productPaths.length} products...`);
  
  for (let i = 0; i < productPaths.length; i++) {
    const path = productPaths[i].replace('#shopify-product-reviews', '');
    const url = BASE_URL + path;
    
    console.log(`[${i+1}/${productPaths.length}] Fetching: ${path}`);
    
    try {
      const html = await fetchURL(url);
      const product = extractProduct(html, url);
      
      if (product.name && product.price > 0) {
        products.push({
          id: `worldcup_${i+1}`,
          name: product.name,
          price: product.price,
          image: product.image || '',
          category: 'copa_mundo_2026',
          subcategory: ''
        });
        console.log(`  - ${product.name} - R$ ${product.price}`);
      }
    } catch (e) {
      console.log(`  Error: ${e.message}`);
    }
  }
  
  // Save to JSON
  const output = {
    products: products,
    total: products.length
  };
  
  fs.writeFileSync(
    './produtos_worldcup.json', 
    JSON.stringify(output, null, 2)
  );
  
  console.log(`\nTotal: ${products.length} products saved to produtos_worldcup.json`);
  
  return products;
}

scrapeProducts().catch(console.error);
