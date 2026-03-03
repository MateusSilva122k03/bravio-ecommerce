const axios = require('axios');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.minejerseys.ru/category/tag-2828';
const MAX_PAGES = 30;

async function scrapePage(pageNum) {
  const url = pageNum === 1 ? BASE_URL : `${BASE_URL}?page=${pageNum}`;
  console.log(`Page ${pageNum}: ${url}`);
  
  const response = await axios.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
    timeout: 30000,
  });

  const html = response.data;
  const products = [];
  
  // Find all product detail URLs
  const urlMatches = html.match(/href="(\/productdetail\/[^"]+)"/g);
  const imgMatches = html.match(/src="(https:\/\/cf\.minejerseys\.ru\/upload\/[^"]+\.jpg)"/g);
  const altMatches = html.match(/alt="([^"]+ - minejerseys)"/g);
  const priceMatches = html.match(/<span[^>]*class="[^"]*price[^"]*"[^>]*>[\s\S]*?<\/span>/g);
  
  console.log(`  Found: ${urlMatches ? urlMatches.length : 0} URLs, ${imgMatches ? imgMatches.length : 0} images`);
  
  if (urlMatches) {
    for (let i = 0; i < urlMatches.length; i++) {
      const urlMatch = urlMatches[i].match(/href="(\/productdetail\/[^"]+)"/);
      if (urlMatch) {
        const productUrl = 'https://www.minejerseys.ru' + urlMatch[1];
        
        // Get image
        let image = '';
        if (imgMatches && imgMatches[i]) {
          const imgMatch = imgMatches[i].match(/src="(https:\/\/cf\.minejerseys\.ru\/upload\/[^"]+\.jpg)"/);
          if (imgMatch) {
            image = imgMatch[1];
          }
        }
        
        // Get name from alt
        let name = '';
        if (altMatches && altMatches[i]) {
          const altMatch = altMatches[i].match(/alt="([^"]+)"/);
          if (altMatch) {
            name = altMatch[1].replace(' - minejerseys', '').trim();
          }
        }
        
        // Try to get price from the product page URL (it has the price)
        // Or from nearby elements
        
        if (name && productUrl) {
          products.push({
            name,
            price: '199.90', // Default price since it's hard to extract
            image,
            url: productUrl,
          });
        }
      }
    }
  }
  
  return products;
}

async function scrapeAll() {
  const allProducts = [];
  
  for (let page = 1; page <= MAX_PAGES; page++) {
    try {
      const products = await scrapePage(page);
      if (products.length === 0) {
        console.log('No more products found, stopping...');
        break;
      }
      allProducts.push(...products);
      console.log(`  Total so far: ${allProducts.length}`);
      
      await new Promise(r => setTimeout(r, 500));
    } catch (e) {
      console.error(`Error page ${page}:`, e.message);
      break;
    }
  }
  
  // Remove duplicates
  const unique = [];
  const seen = new Set();
  for (const p of allProducts) {
    if (!seen.has(p.url)) {
      seen.add(p.url);
      unique.push(p);
    }
  }
  
  console.log(`\nTotal unique products: ${unique.length}`);
  
  // Save
  const outPath = path.join(__dirname, '../Produtos extraidos/produtos_minejerseys_wc2026.json');
  fs.writeFileSync(outPath, JSON.stringify(unique, null, 2));
  console.log(`Saved to: ${outPath}`);
  
  // Show first 3
  console.log('\nFirst 3 products:');
  unique.slice(0, 3).forEach((p, i) => {
    console.log(`${i+1}. ${p.name}`);
    console.log(`   ${p.price}`);
    console.log(`   ${p.image.substring(0, 80)}...`);
    console.log(`   ${p.url}`);
  });
  
  return unique;
}

scrapeAll().then(() => console.log('Done!')).catch(e => console.error(e));
