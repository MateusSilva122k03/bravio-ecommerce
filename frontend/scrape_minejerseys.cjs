// Script para fazer scrape da categoria World Cup 2026 do minejerseys.ru
// https://www.minejerseys.ru/category/tag-2828

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
    
    // Verificar se a página carregou corretamente
    const title = await page.title();
    console.log('Título da página:', title);
    
    // Scroll para carregar todos os produtos
    console.log('Carregando produtos...');
    let previousHeight = 0;
    let scrollAttempts = 0;
    const maxScrollAttempts = 10;
    
    while (scrollAttempts < maxScrollAttempts) {
      const currentHeight = await page.evaluate(() => document.body.scrollHeight);
      if (currentHeight === previousHeight) {
        scrollAttempts++;
      } else {
        scrollAttempts = 0;
      }
      previousHeight = currentHeight;
      
      await page.evaluate(() => window.scrollBy(0, 1000));
      await delay(500);
    }
    
    // Aguardar um pouco mais para carregar
    await delay(2000);
    
    // Extrair produtos
    const products = await page.evaluate(() => {
      const results = [];
      
      // Seletores comuns para produtos em sites de jerseys
      const productSelectors = [
        '.product-item',
        '.product-card',
        '.product',
        '.item-product',
        '.goods-item',
        '[class*="product"]',
        '.col-product'
      ];
      
      let productElements = [];
      for (const selector of productSelectors) {
        productElements = document.querySelectorAll(selector);
        if (productElements.length > 0) {
          console.log('Encontrados produtos com seletor:', selector, '- quantidade:', productElements.length);
          break;
        }
      }
      
      // Se não encontrou, tentar encontrar de outra forma
      if (productElements.length === 0) {
        // Tentar encontrar todos os elementos que parecem produtos
        const allDivs = document.querySelectorAll('div');
        for (const div of allDivs) {
          if (div.className && typeof div.className === 'string') {
            if (div.className.toLowerCase().includes('product') || 
                div.className.toLowerCase().includes('item') ||
                div.className.toLowerCase().includes('card')) {
              if (div.querySelector('img') && div.querySelector('a')) {
                productElements.push(div);
              }
            }
          }
        }
        console.log('Produtos encontrados por busca alternativa:', productElements.length);
      }
      
      // Tentar método mais flexível - encontrar container de lista de produtos
      if (productElements.length === 0) {
        const lists = document.querySelectorAll('[class*="list"], [class*="grid"], [class*="collection"]');
        for (const list of lists) {
          const items = list.querySelectorAll('a[href*="/product/"], a[href*="/products/"], a[href*="/item/"]');
          if (items.length > 0) {
            console.log('Encontrados links de produtos:', items.length);
            for (const item of items) {
              const img = item.querySelector('img');
              results.push({
                name: item.textContent?.trim() || '',
                url: item.href,
                image: img?.src || ''
              });
            }
            break;
          }
        }
      }
      
      // Tentar método de extração de links diretos
      if (results.length === 0) {
        // Buscar todos os links que parecem ser de produtos
        const allLinks = document.querySelectorAll('a[href*="minejerseys.ru"]');
        for (const link of allLinks) {
          const href = link.href;
          if (href && (
              href.includes('/product/') || 
              href.includes('/products/') ||
              href.includes('/item/') ||
              href.includes('-jersey') ||
              href.includes('-kit') ||
              href.includes('-shirt')
            )) {
            const img = link.querySelector('img') || link.closest('[class*="product"]')?.querySelector('img');
            const name = link.textContent?.trim() || '';
            if (name && name.length > 3) {
              results.push({
                name: name,
                url: href,
                image: img?.src || ''
              });
            }
          }
        }
        console.log('Produtos encontrados por links:', results.length);
      }
      
      // Método final: extrair todos os elementos de produto que conseguir
      productElements.forEach((el) => {
        try {
          // Buscar imagem
          const img = el.querySelector('img');
          // Buscar link
          const link = el.querySelector('a') || el.closest('a');
          // Buscar nome
          const nameEl = el.querySelector('[class*="name"], [class*="title"], [class*="product-name"], h1, h2, h3, h4, h5, h6');
          // Buscar preço
          const priceEl = el.querySelector('[class*="price"], .price, [class*="cost"]');
          
          const name = nameEl?.textContent?.trim() || link?.textContent?.trim() || '';
          const price = priceEl?.textContent?.trim() || '';
          
          if (name && name.length > 3) {
            results.push({
              name: name,
              url: link?.href || '',
              image: img?.src || '',
              price: price
            });
          }
        } catch (e) {
          // Ignorar erros em elementos individuais
        }
      });
      
      // Remover duplicados
      const uniqueResults = [];
      const seenUrls = new Set();
      for (const p of results) {
        if (p.url && !seenUrls.has(p.url)) {
          seenUrls.add(p.url);
          uniqueResults.push(p);
        } else if (!p.url && p.name) {
          uniqueResults.push(p);
        }
      }
      
      return uniqueResults;
    });
    
    console.log(`\nEncontrados ${products.length} produtos na página`);
    
    // Se ainda não encontrou produtos, tentar acessar a página de categoria de forma diferente
    if (products.length === 0) {
      console.log('Tentando método alternativo...');
      
      // Obter todo o HTML para debug
      const html = await page.content();
      console.log('Tamanho do HTML:', html.length, 'caracteres');
      
      // Salvar HTML para debug
      fs.writeFileSync('/home/mat.devall122k03/Downloads/Bravio-main/Bravio-main/debug_minejerseys.html', html);
      console.log('HTML salvo para debug em debug_minejerseys.html');
      
      // Verificar se há algum conteúdo
      const bodyText = await page.evaluate(() => document.body.innerText);
      console.log('Texto do body (primeiros 500 chars):', bodyText.substring(0, 500));
    }
    
    // Processar cada produto para obter mais detalhes
    console.log('\nProcessando detalhes dos produtos...');
    
    // Limitar para não demorar muito
    const productsToProcess = products.slice(0, 100);
    
    for (let i = 0; i < productsToProcess.length; i++) {
      const p = productsToProcess[i];
      
      if (i % 10 === 0) {
        console.log(`Processando ${i + 1}/${productsToProcess.length}`);
      }
      
      try {
        let finalProduct = {
          name: p.name || '',
          price: p.price || '',
          image: p.image || '',
          url: p.url || ''
        };
        
        // Se temos URL, tentar acessar para obter mais detalhes
        if (p.url && p.url.includes('minejerseys.ru')) {
          try {
            await page.goto(p.url, { waitUntil: 'networkidle2', timeout: 15000 });
            await delay(1000);
            
            const details = await page.evaluate(() => {
              const result = {};
              
              // Buscar imagem principal
              const mainImg = document.querySelector('[class*="main-image"] img, [class*="featured-image"] img, .product-image img, #product-image img, main img');
              if (mainImg) {
                result.image = mainImg.src || mainImg.dataset?.src || '';
              }
              
              // Buscar nome do produto
              const name = document.querySelector('[class*="product-title"], [class*="product-name"], h1.title, h1');
              if (name) {
                result.name = name.textContent?.trim() || '';
              }
              
              // Buscar preço
              const price = document.querySelector('[class*="price"], .price, [class*="product-price"]');
              if (price) {
                result.price = price.textContent?.trim() || '';
              }
              
              // Buscar descrição
              const desc = document.querySelector('[class*="description"], [class*="detail"], .product-desc');
              if (desc) {
                result.description = desc.textContent?.trim() || '';
              }
              
              return result;
            });
            
            finalProduct = { ...finalProduct, ...details };
            
            // Voltar para a página da lista
            await page.goBack();
            await delay(500);
            
          } catch (e) {
            console.log(`Erro ao processar produto ${i + 1}: ${e.message}`);
          }
        }
        
        if (finalProduct.name) {
          allProducts.push(finalProduct);
        }
        
      } catch (e) {
        console.log(`Erro no produto ${i + 1}`);
      }
    }

    console.log(`\n=== TOTAL: ${allProducts.length} produtos extraídos ===`);
    
    // Salvar resultado
    const outputDir = '/home/mat.devall122k03/Downloads/Bravio-main/Produtos extraidos';
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(outputDir, 'produtos_minejerseys_worldcup2026.json'),
      JSON.stringify(allProducts, null, 2)
    );
    console.log('Arquivo salvo em produtos_minejerseys_worldcup2026.json');
    
  } catch (e) {
    console.error('Erro geral:', e.message);
    console.error(e.stack);
  } finally {
    await browser.close();
  }
}

scrapeMinejerseys();
