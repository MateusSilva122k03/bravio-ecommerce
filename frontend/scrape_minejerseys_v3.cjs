// Script rápido para fazer scrape da categoria World Cup 2026 do minejerseys.ru
// Versão otimizada - menos scroll, extração imediata

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
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    
    await delay(2000);
    
    // Scroll rápido - apenas 3 vezes
    for (let i = 0; i < 3; i++) {
      await page.evaluate(() => window.scrollBy(0, 2000));
      await delay(500);
    }
    
    const title = await page.title();
    console.log('Título:', title);
    
    // Extrair produtos
    const products = await page.evaluate(() => {
      const results = [];
      
      // Buscar todos os elementos de produto
      const items = document.querySelectorAll('.product-item, .goods-item, .col-product, [class*="product"], .product-card');
      
      console.log(`Itens encontrados: ${items.length}`);
      
      items.forEach((item) => {
        try {
          const img = item.querySelector('img');
          const link = item.querySelector('a');
          
          // Buscar nome
          let name = '';
          const nameEl = item.querySelector('[class*="name"], [class*="title"], h3, h4, h5');
          if (nameEl) name = nameEl.textContent?.trim() || '';
          if (!name && link) name = link.textContent?.trim() || '';
          
          // Buscar preço
          let price = '';
          const priceEl = item.querySelector('[class*="price"], .price');
          if (priceEl) price = priceEl.textContent?.trim() || '';
          
          if (name && name.length > 3) {
            results.push({
              name: name,
              price: price,
              image: img?.src || '',
              url: link?.href || ''
            });
          }
        } catch (e) {}
      });
      
      // Se não encontrou nada, buscar por todos os links de produtos
      if (results.length === 0) {
        const allLinks = document.querySelectorAll('a[href*="/product/"], a[href*="/products/"]');
        console.log(`Links de produtos encontrados: ${allLinks.length}`);
        
        allLinks.forEach((link) => {
          const img = link.querySelector('img');
          const name = link.textContent?.trim() || img?.alt?.trim() || '';
          
          if (name && name.length > 3) {
            results.push({
              name: name,
              price: '',
              image: img?.src || '',
              url: link.href
            });
          }
        });
      }
      
      // Remover duplicados
      const unique = [];
      const seen = new Set();
      results.forEach(p => {
        const key = p.name.toLowerCase().substring(0, 20);
        if (!seen.has(key)) {
          seen.add(key);
          unique.push(p);
        }
      });
      
      return unique;
    });
    
    console.log(`\n=== TOTAL: ${products.length} produtos ===`);
    
    if (products.length > 0) {
      // Salvar
      const outputDir = '/home/mat.devall122k03/Downloads/Bravio-main/Produtos extraidos';
      fs.writeFileSync(
        path.join(outputDir, 'produtos_minejerseys_worldcup2026.json'),
        JSON.stringify(products, null, 2)
      );
      console.log('Salvo em produtos_minejerseys_worldcup2026.json');
      
      // Mostrar exemplos
      products.slice(0, 10).forEach((p, i) => {
        console.log(`${i+1}. ${p.name.substring(0, 50)}`);
      });
    } else {
      console.log('Nenhum produto encontrado!');
    }
    
  } catch (e) {
    console.error('Erro:', e.message);
  } finally {
    await browser.close();
  }
}

scrapeMinejerseys();
