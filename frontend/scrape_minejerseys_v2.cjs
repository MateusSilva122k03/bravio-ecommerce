// Script otimizado para fazer scrape da categoria World Cup 2026 do minejerseys.ru
// Versão simplificada que extrai tudo da página de categoria

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

  const allProducts = [];

  try {
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    console.log('Acessando categoria World Cup 2026...');
    await page.goto('https://www.minejerseys.ru/category/tag-2828', { 
      waitUntil: 'networkidle2', 
      timeout: 120000 
    });
    
    await delay(3000);
    
    const title = await page.title();
    console.log('Título da página:', title);
    
    // Scroll para carregar todos os produtos
    console.log('Carregando produtos...');
    let previousHeight = 0;
    let scrollAttempts = 0;
    const maxScrollAttempts = 15;
    
    while (scrollAttempts < maxScrollAttempts) {
      const currentHeight = await page.evaluate(() => document.body.scrollHeight);
      if (currentHeight === previousHeight) {
        scrollAttempts++;
      } else {
        scrollAttempts = 0;
      }
      previousHeight = currentHeight;
      
      await page.evaluate(() => window.scrollBy(0, 1500));
      await delay(800);
    }
    
    await delay(2000);
    
    // Extrair todos os produtos de uma vez
    const products = await page.evaluate(() => {
      const results = [];
      
      // Tentar encontrar produtos por múltiplos métodos
      
      // Método 1: Buscar por elementos específicos do site
      const items = document.querySelectorAll('.product-item, .goods-item, .col-product, [class*="product-grid"] > div, .product-card');
      
      console.log(`Método 1 --itens encontrados: ${items.length}`);
      
      if (items.length > 0) {
        items.forEach((item) => {
          try {
            const img = item.querySelector('img');
            const link = item.querySelector('a');
            const nameEl = item.querySelector('[class*="name"], [class*="title"], h3, h4');
            const priceEl = item.querySelector('[class*="price"], .price');
            
            let name = nameEl?.textContent?.trim() || '';
            let price = priceEl?.textContent?.trim() || '';
            
            if (!name && link) {
              name = link.textContent?.trim() || '';
            }
            
            if (name && name.length > 2) {
              results.push({
                name: name,
                price: price,
                image: img?.src || '',
                url: link?.href || ''
              });
            }
          } catch (e) {}
        });
      }
      
      // Método 2: Se não encontrou, buscar por todos os links com imagens
      if (results.length === 0) {
        const allLinks = document.querySelectorAll('a');
        allLinks.forEach((link) => {
          const href = link.href;
          const img = link.querySelector('img');
          
          // Verificar se parece ser um produto
          if (href && img && (
            href.includes('/product/') || 
            href.includes('/products/') ||
            href.includes('minejerseys.ru/product') ||
            href.includes('minejerseys.ru/products')
          )) {
            const name = link.textContent?.trim() || img.alt?.trim() || '';
            if (name && name.length > 3 && !name.includes('Home') && !name.includes('Contact')) {
              results.push({
                name: name,
                price: '',
                image: img.src || '',
                url: href
              });
            }
          }
        });
        console.log(`Método 2 -itens encontrados: ${results.length}`);
      }
      
      // Método 3: Buscar por JSON embedded
      if (results.length === 0) {
        const scripts = document.querySelectorAll('script');
        scripts.forEach((script) => {
          try {
            const content = script.textContent;
            if (content && content.includes('product')) {
              const productMatch = content.match(/"name"\s*:\s*"([^"]+)"/g);
              const imageMatch = content.match(/"image"\s*:\s*"([^"]+)"/g);
              const priceMatch = content.match(/"price"\s*:\s*(\d+)/g);
              
              if (productMatch) {
                productMatch.forEach((match, i) => {
                  const name = match.match(/"name"\s*:\s*"([^"]+)"/)?.[1];
                  const image = imageMatch?.[i]?.match(/"image"\s*:\s*"([^"]+)"/)?.[1];
                  const price = priceMatch?.[i]?.match(/\d+/)?.[0];
                  
                  if (name && name.length > 3) {
                    results.push({
                      name: name,
                      price: price || '',
                      image: image || '',
                      url: ''
                    });
                  }
                });
              }
            }
          } catch (e) {}
        });
        console.log(`Método 3 -itens encontrados: ${results.length}`);
      }
      
      // Remover duplicados
      const uniqueResults = [];
      const seenNames = new Set();
      for (const p of results) {
        const key = p.name.toLowerCase().substring(0, 30);
        if (!seenNames.has(key)) {
          seenNames.add(key);
          uniqueResults.push(p);
        }
      }
      
      return uniqueResults;
    });
    
    console.log(`\n=== TOTAL: ${products.length} produtos encontrados ===`);
    
    if (products.length > 0) {
      // Salvar resultado
      const outputDir = '/home/mat.devall122k03/Downloads/Bravio-main/Produtos extraidos';
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      fs.writeFileSync(
        path.join(outputDir, 'produtos_minejerseys_worldcup2026.json'),
        JSON.stringify(products, null, 2)
      );
      console.log('Arquivo salvo em produtos_minejerseys_worldcup2026.json');
      
      // Mostrar alguns exemplos
      console.log('\nPrimeiros 5 produtos:');
      products.slice(0, 5).forEach((p, i) => {
        console.log(`${i+1}. ${p.name} - ${p.price}`);
      });
    }
    
  } catch (e) {
    console.error('Erro geral:', e.message);
  } finally {
    await browser.close();
  }
}

scrapeMinejerseys();
