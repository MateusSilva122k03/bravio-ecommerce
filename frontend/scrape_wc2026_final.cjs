const axios = require('axios');
const fs = require('fs');
const path = require('path');

const BASE = 'https://www.minejerseys.ru/category/tag-2828';

async function scrape() {
  const products = [];
  
  for (let page = 1; page <= 30; page++) {
    const url = page === 1 ? BASE : BASE + '?page=' + page;
    console.log('Page', page);
    
    const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 15000 });
    const html = res.data;
    
    const cards = html.match(/<div class="category_product-item[\s\S]*?<\/div>\s*<\/div>/g);
    if (!cards || cards.length === 0) {
      console.log('  No more products');
      break;
    }
    console.log('  Cards:', cards.length);
    
    for (const card of cards) {
      const urlMatch = card.match(/href="(\/productdetail\/[^"]+)"/);
      if (!urlMatch) continue;
      const productUrl = 'https://www.minejerseys.ru' + urlMatch[1];
      
      const p = urlMatch[1];
      let name = p.replace('/productdetail/', '').replace(/-\d+$/, '').replace(/-/g, ' ').replace(/World Cup 2026/g, '').trim();
      name = name + ' World Cup 2026';
      
      const imgMatch = card.match(/src="(https:\/\/cf\.minejerseys\.ru\/upload[^"]+\.jpg)"/);
      const image = imgMatch ? imgMatch[1] : '';
      
      products.push({ name, price: '199.90', image, url: productUrl });
    }
    
    await new Promise(r => setTimeout(r, 200));
  }
  
  const unique = products.filter((p, i, arr) => arr.findIndex(x => x.url === p.url) === i);
  
  console.log('Total unique:', unique.length);
  
  const outPath = path.join(__dirname, '../Produtos extraidos/produtos_minejerseys_wc2026.json');
  fs.writeFileSync(outPath, JSON.stringify(unique, null, 2));
  console.log('Saved to:', outPath);
  
  unique.slice(0, 5).forEach((p, i) => console.log(i+1 + '.', p.name));
}

scrape().then(() => console.log('Done')).catch(e => console.error(e));
