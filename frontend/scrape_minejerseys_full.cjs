// Script completo para extrair TODOS os produtos da categoria World Cup 2026
// Inclui scroll extra para carregar todos os produtos (Home, Away, Third, Kids, etc)

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
    
    // Scroll mais extenso para carregar todos os produtos
    console.log('Carregando todos os produtos...');
    let lastHeight = 0;
    let scrollCount = 0;
    const maxScrolls = 20;
    
    while (scrollCount < maxScrolls) {
      await page.evaluate(() => window.scrollBy(0, 1500));
      await delay(600);
      
      const newHeight = await page.evaluate(() => document.body.scrollHeight);
      if (newHeight === lastHeight) {
        // Tentar clicar em botão "Load More" se existir
        try {
          const loadMore = await page.$('button:contains("Load More"), .load-more, [class*="load"]');
          if (loadMore) {
            await loadMore.click();
            await delay(1000);
          }
        } catch(e) {}
      }
      lastHeight = newHeight;
      scrollCount++;
      
      if (scrollCount % 5 === 0) {
        console.log(`Scroll ${scrollCount}/${maxScrolls}...`);
      }
    }
    
    await delay(2000);
    
    const title = await page.title();
    console.log('Título:', title);
    
    // Extrair TODOS os produtos
    const products = await page.evaluate(() => {
      const results = [];
      
      // Buscar TODOS os links de produtos
      const links = document.querySelectorAll('a[href*="/productdetail/"]');
      console.log(`Encontrados ${links.length} links de produtos`);
      
      links.forEach((link) => {
        try {
          const img = link.querySelector('img');
          let name = link.textContent?.trim() || '';
          // Limpar o nome - remover símbolos e preços extras
          name = name.replace(/[]+/g, '').replace(/US\$\d+[\.~]\d+/g, '').replace(/\s+/g, ' ').trim();
          
          // Filtrar nomes válidos
          if (name && name.length > 8 && 
              !name.includes('Home') && !name.includes('Login') && 
              !name.includes('Cart') && !name.includes('Account')) {
            results.push({
              name: name,
              price: '',
              image: img?.src || '',
              url: link.href
            });
          }
        } catch (e) {}
      });
      
      // Remover duplicados baseado no URL (mais confiável)
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
    
    console.log(`\n=== TOTAL: ${products.length} produtos únicos ===`);
    
    if (products.length > 0) {
      const outputDir = '/home/mat.devall122k03/Downloads/Bravio-main/Produtos extraidos';
      fs.writeFileSync(
        path.join(outputDir, 'produtos_minejerseys_worldcup2026.json'),
        JSON.stringify(products, null, 2)
      );
      console.log('Salvo em produtos_minejerseys_worldcup2026.json');
      
      // Mostrar lista
      console.log('\nTodos os produtos:');
      products.forEach((p, i) => {
        console.log(`${i+1}. ${p.name}`);
      });
    }
    
  } catch (e) {
    console.error('Erro:', e.message);
  } finally {
    await browser.close();
  }
}

scrapeMinejerseys();
