// Script robusto para extrair TODOS os produtos da categoria World Cup 2026 do minejerseys.ru
// Combina múltiplos métodos de extração

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
    
    await delay(3000);
    
    // Scroll para carregar conteúdo
    for (let i = 0; i < 5; i++) {
      await page.evaluate(() => window.scrollBy(0, 2000));
      await delay(800);
    }
    
    const title = await page.title();
    console.log('Título:', title);
    
    // Extrair produtos com múltiplos métodos
    const products = await page.evaluate(() => {
      const results = [];
      
      // Método 1: Buscar por todos os links com /productdetail/
      const links = document.querySelectorAll('a[href*="/productdetail/"]');
      console.log(`Links de produtos encontrados: ${links.length}`);
      
      links.forEach((link) => {
        try {
          const img = link.querySelector('img');
          let name = link.textContent?.trim() || '';
          name = name.replace(/\s+/g, ' ').trim();
          
          // Ignorar textos cortos o irrelevantes
          if (name && name.length > 5 && !name.includes('Home') && 
              !name.includes('Cart') && !name.includes('Login')) {
            results.push({
              name: name,
              price: '',
              image: img?.src || '',
              url: link.href
            });
          }
        } catch (e) {}
      });
      
      // Método 2: Buscar por elementos de produto específicos
      const productItems = document.querySelectorAll('.product-item, .goods-item, .product-card, [class*="product"]');
      console.log(`Itens de produto: ${productItems.length}`);
      
      productItems.forEach((item) => {
        try {
          const img = item.querySelector('img');
          const link = item.querySelector('a');
          let name = item.textContent?.trim() || '';
          name = name.replace(/\s+/g, ' ').trim();
          
          // Pegar só as primeiras linhas (nome do produto)
          if (name && name.length > 5) {
            const lines = name.split('\n').filter(l => l.trim().length > 5);
            if (lines.length > 0) {
              name = lines[0].trim();
            }
          }
          
          if (name && name.length > 5) {
            results.push({
              name: name,
              price: '',
              image: img?.src || '',
              url: link?.href || ''
            });
          }
        } catch (e) {}
      });
      
      // Remover duplicados
      const unique = [];
      const seen = new Set();
      results.forEach(p => {
        const key = p.name.toLowerCase().substring(0, 30);
        if (!seen.has(key) && p.url) {
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
        console.log(`${i+1}. ${p.name.substring(0, 60)}`);
      });
    }
    
  } catch (e) {
    console.error('Erro:', e.message);
  } finally {
    await browser.close();
  }
}

scrapeMinejerseys();
