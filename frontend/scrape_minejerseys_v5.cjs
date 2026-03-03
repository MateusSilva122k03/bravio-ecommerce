// Script final para extrair TODOS os produtos da categoria World Cup 2026 do minejerseys.ru
// Versão otimizada com scroll correto e múltiplos métodos

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrapeMinejerseys() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  try {
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
    
    console.log('Acessando categoria World Cup 2026...');
    await page.goto('https://www.minejerseys.ru/category/tag-2828', { 
      waitUntil: 'networkidle2', 
      timeout: 90000 
    });
    
    await delay(3000);
    
    // Scroll gradual
    console.log('Carregando produtos...');
    for (let i = 0; i < 8; i++) {
      await page.evaluate(() => window.scrollBy(0, 2000));
      await delay(800);
    }
    
    const title = await page.title();
    console.log('Título:', title);
    
    // Extrair com múltiplos métodos
    const products = await page.evaluate(() => {
      const results = [];
      
      // Método 1: links com /productdetail/
      let links = document.querySelectorAll('a[href*="/productdetail/"]');
      console.log(`Método 1 - links /productdetail/: ${links.length}`);
      
      links.forEach((link) => {
        const img = link.querySelector('img');
        let name = link.textContent?.trim() || '';
        name = name.replace(/[]+/g, '').replace(/US\$\d+[\.~]\d+/g, '').replace(/\s+/g, ' ').trim();
        
        if (name && name.length > 8 && !name.includes('Login') && !name.includes('Cart')) {
          results.push({ name, price: '', image: img?.src || '', url: link.href });
        }
      });
      
      // Método 2: elementos de produto
      const items = document.querySelectorAll('.product-item, .goods-item, .product-card, [class*="product-grid"] > div');
      console.log(`Método 2 - itens de produto: ${items.length}`);
      
      items.forEach((item) => {
        try {
          const img = item.querySelector('img');
          const link = item.querySelector('a');
          let name = item.textContent?.trim() || '';
          name = name.replace(/[]+/g, '').replace(/US\$\d+[\.~]\d+/g, '').replace(/\s+/g, ' ').trim();
          
          // Pegar primeira linha relevante
          const lines = name.split('\n').filter(l => l.trim().length > 10);
          if (lines.length > 0) name = lines[0].trim();
          
          if (name && name.length > 8) {
            results.push({ name, price: '', image: img?.src || '', url: link?.href || '' });
          }
        } catch(e) {}
      });
      
      // Remover duplicados
      const unique = [];
      const seen = new Set();
      results.forEach(p => {
        const key = p.name.toLowerCase().substring(0, 25);
        if (!seen.has(key)) {
          seen.add(key);
          unique.push(p);
        }
      });
      
      return unique;
    });
    
    console.log(`\n=== TOTAL: ${products.length} produtos ===`);
    
    if (products.length > 0) {
      const outputDir = '/home/mat.devall122k03/Downloads/Bravio-main/Produtos extraidos';
      fs.writeFileSync(
        path.join(outputDir, 'produtos_minejerseys_worldcup2026.json'),
        JSON.stringify(products, null, 2)
      );
      console.log('Salvo em produtos_minejerseys_worldcup2026.json');
      
      console.log('\nProdutos:');
      products.forEach((p, i) => {
        console.log(`${i+1}. ${p.name.substring(0, 55)}`);
      });
    }
    
  } catch (e) {
    console.error('Erro:', e.message);
  } finally {
    await browser.close();
  }
}

scrapeMinejerseys();
