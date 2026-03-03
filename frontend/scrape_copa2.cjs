const puppeteer = require('puppeteer');
const fs = require('fs');
const https = require('https');
const http = require('http');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (res) => {
      if (res.statusCode === 200) {
        resolve(url);
      } else {
        reject(new Error('Failed'));
      }
    }).on('error', reject);
  });
}

async function scrapeCopa() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const allProducts = [];
  const seenNames = new Set();

  try {
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
    await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US,en;q=0.9' });
    
    console.log('Acessando coleção da Copa...');
    await page.goto('https://minkang.x.yupoo.com/collections/5062328', { 
      waitUntil: 'domcontentloaded', 
      timeout: 60000 
    });
    
    // Wait for content to load
    await delay(5000);
    
    // Get page content
    const content = await page.content();
    
    // Extract album info using regex
    const albumRegex = /href="(\/albums\/\d+)[^"]*"[^>]*>[\s\S]*?album__title">([^<]+)/g;
    let match;
    
    while ((match = albumRegex.exec(content)) !== null) {
      const url = 'https://minkang.x.yupoo.com' + match[1];
      const name = match[2].replace(/&#x27;/g, "'").replace(/&/g, '&');
      
      if (!seenNames.has(name)) {
        seenNames.add(name);
        allProducts.push({ name, url, image: '' });
      }
    }
    
    console.log(`Encontrados ${allProducts.length} álbuns na página`);
    
    // Process each album to get images
    for (let i = 0; i < Math.min(allProducts.length, 100); i++) {
      if (i % 10 === 0) console.log(`Processando ${i + 1}/${Math.min(allProducts.length, 100)}`);
      
      try {
        await page.goto(allProducts[i].url, { waitUntil: 'domcontentloaded', timeout: 20000 });
        await delay(1500);
        
        const pageContent = await page.content();
        
        // Find image URL
        const imgMatch = pageContent.match(/(https:\/\/photo\.yupoo\.com\/minkang\/[^\/]+\/(?:original|large|medium)\.jpg)/);
        if (imgMatch) {
          allProducts[i].image = imgMatch[1];
        }
        
      } catch (e) {
        console.log(`Erro no álbum ${i + 1}`);
      }
    }

    // Filter products with images
    const validProducts = allProducts.filter(p => p.image).map(p => ({
      name: p.name,
      price: 199.90,
      image: p.image,
      url: p.url
    }));

    console.log(`\n=== TOTAL: ${validProducts.length} produtos com imagem ===`);
    
    fs.writeFileSync(
      '/home/mat.devall122k03/Downloads/Bravio-main/Produtos extraidos/produtos_copa.json',
      JSON.stringify(validProducts, null, 2)
    );
    console.log('Arquivo salvo!');
    
  } catch (e) {
    console.error('Erro:', e.message);
  } finally {
    await browser.close();
  }
}

scrapeCopa();
