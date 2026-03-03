// Script completo para extrair TODOS os produtos da categoria World Cup 2026
// Página: https://www.minejerseys.ru/page/World-Cup-2026

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrapeAll() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const allProducts = [];

  try {
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
    
    console.log('Acessando página World Cup 2026...');
    await page.goto('https://www.minejerseys.ru/page/World-Cup-2026', { 
      waitUntil: 'networkidle2', 
      timeout: 120000 
    });
    
    await delay(3000);
    
    // Scroll para carregar todos os produtos
    console.log('Carregando todos os produtos...');
    for (let i = 0; i < 15; i++) {
      await page.evaluate(() => window.scrollBy(0, 2000));
      await delay(800);
    }
    
    const title = await page.title();
    console.log('Título:', title);
    
    // Extrair produtos
    const products = await page.evaluate(() => {
      const results = [];
      
      // Buscar todos os links de produtos
      const links = document.querySelectorAll('a[href*="/productdetail/"]');
      console.log(`Links encontrados: ${links.length}`);
      
      links.forEach((link) => {
        try {
          const img = link.querySelector('img');
          let name = link.textContent?.trim() || '';
          
          // Limpar nome
          name = name.replace(/[]+/g, '').replace(/US\$\d+[\.~]\d+/g, '').replace(/\s+/g, ' ').trim();
          
          // Filtrar apenas produtos World Cup válidos
          if (name && name.length > 10 && 
              (name.includes('World Cup') || name.includes('2026') || name.includes('WorldCup'))) {
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
    
    console.log(`\n=== TOTAL: ${products.length} produtos ===`);
    
    if (products.length > 0) {
      const outputDir = '/home/mat.devall122k03/Downloads/Bravio-main/Produtos extraidos';
      fs.writeFileSync(
        path.join(outputDir, 'produtos_minejerseys_worldcup2026.json'),
        JSON.stringify(products, null, 2)
      );
      console.log('Salvo em produtos_minejerseys_worldcup2026.json');
      
      console.log('\nPrimeiros 30 produtos:');
      products.slice(0, 30).forEach((p, i) => {
        console.log(`${i+1}. ${p.name}`);
      });
    }
    
  } catch (e) {
    console.error('Erro:', e.message);
  } finally {
    await browser.close();
  }
}

scrapeAll();
