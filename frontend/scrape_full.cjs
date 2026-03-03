const puppeteer = require('puppeteer');
const fs = require('fs');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
    
    console.log('Acessando coleção da Copa...');
    await page.goto('https://minkang.x.yupoo.com/collections/5062328', { 
      waitUntil: 'networkidle2', 
      timeout: 60000 
    });
    
    await delay(5000);
    
    // Get all album titles
    const albums = await page.evaluate(() => {
      const elements = document.querySelectorAll('.album__title');
      const links = document.querySelectorAll('.album__main');
      
      const results = [];
      elements.forEach((el, i) => {
        const name = el.textContent.trim();
        const link = links[i]?.href || '';
        if (name && link) {
          results.push({ name, url: link });
        }
      });
      return results;
    });
    
    console.log(`Encontrados ${albums.length} álbuns`);
    
    // Process each album
    for (let i = 0; i < albums.length; i++) {
      if (i % 10 === 0) console.log(`Processando ${i + 1}/${albums.length}`);
      
      try {
        await page.goto(albums[i].url, { waitUntil: 'networkidle2', timeout: 20000 });
        await delay(1500);
        
        // Get first image
        const img = await page.evaluate(() => {
          const imgs = document.querySelectorAll('img[src*="photo.yupoo"]');
          for (const img of imgs) {
            if (img.src && !img.src.includes('logo')) {
              return img.src;
            }
          }
          return null;
        });
        
        if (img) {
          let imageUrl = img.replace('small.jpg', 'large.jpg').replace('medium.jpg', 'large.jpg');
          
          allProducts.push({
            name: albums[i].name,
            price: 199.90,
            image: imageUrl,
            url: albums[i].url
          });
        }
        
      } catch (e) {
        console.log(`Erro no álbum ${i + 1}`);
      }
    }

    console.log(`\n=== TOTAL: ${allProducts.length} produtos ===`);
    
    fs.writeFileSync(
      '/home/mat.devall122k03/Downloads/Bravio-main/Produtos extraidos/produtos_copa_full.json',
      JSON.stringify(allProducts, null, 2)
    );
    console.log('Arquivo salvo!');
    
  } catch (e) {
    console.error('Erro:', e.message);
  } finally {
    await browser.close();
  }
}

scrapeCopa();
