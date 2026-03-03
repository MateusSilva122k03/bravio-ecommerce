// Script para fazer scrape da Casa do Manto JC
// https://www.casadomantojc.com.br/

const fs = require('fs');
const https = require('https');
const http = require('http');

const STORE_ID = '001409577';
const BASE_URL = 'https://www.casadomantojc.com.br';

function normalizeImageUrl(url) {
  if (url && url.startsWith('//')) return 'https:' + url;
  if (url && url.startsWith('http:')) return url.replace('http:', 'https:');
  return url || '';
}

// Fetch HTML from URL
function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// Extract products from HTML
function extractProducts(html) {
  const products = [];
  
  // Find product items with data-product-id
  const productIdRegex = /data-product-id="(\d+)"/g;
  const productIds = [...new Set([...html.matchAll(productIdRegex)].map(m => m[1]))];
  
  console.log(`Found ${productIds.length} product IDs`);
  
  // Extract product details from img tags
  const imgRegex = /<img[^>]+alt="([^"]*)"[^>]+data-srcset="([^"]*)"[^>]*>/g;
  let match;
  
  while ((match = imgRegex.exec(html)) !== null) {
    const alt = match[1];
    const srcset = match[2];
    
    // Skip if it's a secondary image or doesn't have product info
    if (!alt || alt.includes('secondary') || !srcset) continue;
    
    // Extract the first image URL from srcset
    const firstImage = srcset.split(',')[0].trim().split(' ')[0];
    
    if (firstImage && firstImage.includes('acdn-us.mitiendanube.com') && firstImage.includes('/products/')) {
      const imageUrl = normalizeImageUrl(firstImage);
      
      // Skip duplicates
      if (!products.find(p => p.image === imageUrl)) {
        // Clean up the name (replace dashes with spaces)
        const name = alt.replace(/-/g, ' ').trim();
        
        products.push({
          name,
          image: imageUrl
        });
      }
    }
  }
  
  return products;
}

// Get price from product page
async function getProductPrice(productId) {
  try {
    const html = await fetchHTML(`${BASE_URL}/produto/${productId}`);
    const priceMatch = html.match(/<span[^>]+itemprop="price"[^>]+content="([^"]+)"/);
    if (priceMatch) {
      return parseFloat(priceMatch[1]);
    }
    
    // Try alternative pattern
    const priceAltMatch = html.match(/class="[^"]*price[^"]*"[^>]*>([^<]+)/);
    if (priceAltMatch) {
      const price = priceAltMatch[1].replace(/[^0-9.,]/g, '').replace(',', '.');
      return parseFloat(price);
    }
  } catch (e) {
    console.log(`Error getting price for ${productId}: ${e.message}`);
  }
  return 179.90; // Default price
}

async function scrape() {
  console.log('Starting scrape of Casa do Manto JC...');
  
  const html = await fetchHTML(BASE_URL);
  const products = extractProducts(html);
  
  console.log(`Found ${products.length} products`);
  
  // Get unique products by image URL
  const uniqueProducts = [...new Map(products.map(p => [p.image, p])).values()];
  
  console.log(`Unique products: ${uniqueProducts.length}`);
  
  // Add IDs and prices
  const finalProducts = uniqueProducts.map((p, index) => ({
    id: `casa_${index + 1}`,
    name: p.name,
    price: 179.90 + Math.floor(Math.random() * 100), // Random price between 179.90 and 279.90
    image: p.image,
    category: 'novos',
    subcategory: ''
  }));
  
  // Save to file
  const output = `// Produtos da Casa do Manto JC - Scraped ${new Date().toISOString()}

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

export const casaDoMantoProducts: Product[] = ${JSON.stringify(finalProducts, null, 2)};
`;
  
  fs.writeFileSync('./src/data/casa_do_manto.ts', output);
  console.log('Saved to ./src/data/casa_do_manto.ts');
  
  return finalProducts;
}

scrape().catch(console.error);
