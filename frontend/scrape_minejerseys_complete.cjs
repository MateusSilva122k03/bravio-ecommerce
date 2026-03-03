// Script completo para extrair TODOS os produtos da categoria World Cup 2026 do minejerseys.ru
// Versão que faz scroll completo e extrai todos os produtos

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
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
    
    console.log('Acessando categoria World Cup 2026...');
    await page.goto('https://www.minejerseys.ru/category/tag-2828', { 
      waitUntil: 'networkidle2', 
      timeout: 120000 
    });
    
    await delay(3000);
    
    const title = await page.title();
    console.log('Título:', title);
    
    // Scroll completo para carregar todos os produtos
    console.log('Fazendo scroll para carregar todos os produtos...');
    let previousHeight = 0;
    let scrollAttempts = 0;
    let noChangeCount = 0;
    const maxNoChange = 5; // Para após 5 scrolls sem mudança
    
    while (noChangeCount < maxNoChange) {
      const currentHeight = await page.evaluate(() => document.body.scrollHeight);
      const scrollPosition = await page.evaluate(() => window.scrollY);
      
      // Rolar até o final
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await delay(1500);
      
      if (currentHeight === previousHeight) {
        noChangeCount++;
        console.log(`Sem mudança há ${noChangeCount}/${maxNoChange} scrolls...`);
      } else {
        noChangeCount = 0;
      }
      previousHeight = currentHeight;
      scrollAttempts++;
      
      // Não fazer mais que 30 scrolls
      if (scrollAttempts >= 30) break;
    }
    
    console.log(`Scroll completo. Total de scrolls: ${scrollAttempts}`);
    await delay(2000);
    
    // Agora extrair TODOS os produtos
    const products = await page.evaluate(() => {
      const results = [];
      
      // Buscar por todos os métodos possíveis
      
      // Método 1: Buscar por elementos .product-item
      let items = document.querySelectorAll('.product-item');
      console.log(`Método 1 - .product-item: ${items.length}`);
      
      items.forEach((item) => {
        try {
          const img = item.querySelector('img');
          const link = item.querySelector('a');
          let name = '';
          let price = '';
          
          const nameEl = item.querySelector('[class*="name"], [class*="title"], h3, h4');
          if (nameEl) name = nameEl.textContent?.trim() || '';
          if (!name && link) name = link.textContent?.trim() || '';
          
          const priceEl = item.querySelector('[class*="price"]');
          if (priceEl) price = priceEl.textContent?.trim() || '';
          
          if (name && name.length > 2) {
            results.push({
              name,
              price,
              image: img?.src || '',
              url: link?.href || ''
            });
          }
        } catch (e) {}
      });
      
      // Método 2: Se não encontrou muitos, tentar outros seletores
      if (results.length < 10) {
        items = document.querySelectorAll('.goods-item, [class*="product-grid"] > div, .product-card');
        console.log(`Método 2 - outros seletores: ${items.length}`);
        
        items.forEach((item) => {
          try {
            const img = item.querySelector('img');
            const link = item.querySelector('a');
            let name = '';
            let price = '';
            
            const nameEl = item.querySelector('[class*="name"], [class*="title"], h3, h4');
            if (nameEl) name = nameEl.textContent?.trim() || '';
            if (!name && link) name = link.textContent?.trim() || '';
            
            const priceEl = item.querySelector('[class*="price"]');
            if (priceEl) price = priceEl.textContent?.trim() || '';
            
            if (name && name.length > 2) {
              results.push({
                name,
                price,
                image: img?.src || '',
                url: link?.href || ''
              });
            }
          } catch (e) {}
        });
      }
      
      // Método 3: Buscar todos os links que levam a produtos
      if (results.length < 10) {
        const allLinks = document.querySelectorAll('a[href*="/productdetail/"]');
        console.log(`Método 3 - links de produtos: ${allLinks.length}`);
        
        allLinks.forEach((link) => {
          const img = link.querySelector('img');
          let name = link.textContent?.trim() || '';
          
          // Limpar nome
          name = name.replace(/\s+/g, ' ').trim();
          
          if (name && name.length > 3 && !name.includes('Home') && !name.includes('Cart')) {
            results.push({
              name,
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
        const key = (p.name + p.url).toLowerCase().substring(0, 40);
        if (!seen.has(key)) {
          seen.add(key);
          unique.push(p);
        }
      });
      
      return unique;
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
      
      // Mostrar lista completa
      console.log('\nLista de produtos:');
      products.forEach((p, i) => {
        console.log(`${i+1}. ${p.name.substring(0, 60)}`);
      });
    }
    
  } catch (e) {
    console.error('Erro geral:', e.message);
  } finally {
    await browser.close();
  }
}

scrapeMinejerseys();
