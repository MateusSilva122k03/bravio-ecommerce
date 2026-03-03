// Script COMPLETO para extrair TODOS os produtos World Cup 2026
// Inclui todas as subcategorias

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrapeCategory(page, url, categoryName) {
  console.log(`\n=== Acessando: ${categoryName} ===`);
  
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });
  await delay(3000);
  
  // Scroll
  for (let i = 0; i < 12; i++) {
    await page.evaluate(() => window.scrollBy(0, 1500));
    await delay(600);
  }
  
  // Extrair produtos
  const products = await page.evaluate(() => {
    const results = [];
    const links = document.querySelectorAll('a[href*="/productdetail/"]');
    
    links.forEach((link) => {
      try {
        const img = link.querySelector('img');
        let name = link.textContent?.trim() || '';
        name = name.replace(/[]+/g, '').replace(/US\$\d+[\.~]\d+/g, '').replace(/\s+/g, ' ').trim();
        
        if (name && name.length > 10) {
          results.push({
            name: name,
            price: '',
            image: img?.src || '',
            url: link.href
          });
        }
      } catch (e) {}
    });
    
    // Remover duplicados
    const unique = [];
    const seen = new Set();
    results.forEach(p => {
      if (!seen.has(p.url)) {
        seen.add(p.url);
        unique.push(p);
      }
    });
    
    return unique;
  });
  
  console.log(`Encontrados ${products.length} produtos em ${categoryName}`);
  return products;
}

async function scrapeAll() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const allProducts = [];
  const seenUrls = new Set();

  try {
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
    
    // Lista de URLs das subcategorias World Cup 2026
    const categories = [
      { url: 'https://www.minejerseys.ru/page/World-Cup-2026', name: 'World Cup 2026 Principal' },
      { url: 'https://www.minejerseys.ru/category/tag-2828', name: 'World Cup Jerseys' },
      { url: 'https://www.minejerseys.ru/category/tag-2829', name: 'Kids World Cup' },
      { url: 'https://www.minejerseys.ru/category/tag-2830', name: 'World Cup Match' },
      { url: 'https://www.minejerseys.ru/category/tag-2831', name: 'Women World Cup' },
      { url: 'https://www.minejerseys.ru/category/tag-2832', name: 'World Cup Players' }
    ];
    
    for (const cat of categories) {
      try {
        const products = await scrapeCategory(page, cat.url, cat.name);
        
        // Adicionar produtos únicos
        products.forEach(p => {
          if (!seenUrls.has(p.url)) {
            seenUrls.add(p.url);
            allProducts.push(p);
          }
        });
      } catch (e) {
        console.log(`Erro em ${cat.name}: ${e.message}`);
      }
    }
    
    console.log(`\n=== TOTAL FINAL: ${allProducts.length} produtos únicos ===`);
    
    if (allProducts.length > 0) {
      const outputDir = '/home/mat.devall122k03/Downloads/Bravio-main/Produtos extraidos';
      fs.writeFileSync(
        path.join(outputDir, 'produtos_minejerseys_worldcup2026.json'),
        JSON.stringify(allProducts, null, 2)
      );
      console.log('Salvo em produtos_minejerseys_worldcup2026.json');
      
      console.log('\nTodos os produtos:');
      allProducts.forEach((p, i) => {
        console.log(`${i+1}. ${p.name}`);
      });
    }
    
  } catch (e) {
    console.error('Erro geral:', e.message);
  } finally {
    await browser.close();
  }
}

scrapeAll();
