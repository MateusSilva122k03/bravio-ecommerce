const puppeteer = require('puppeteer');
const fs = require('fs');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrapeCollection() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');

  const allProducts = [];

  try {
    // Scrape the collection page
    console.log('Acessando coleção da Copa...');
    await page.goto('https://minkang.x.yupoo.com/collections/5062328', { waitUntil: 'networkidle2', timeout: 60000 });
    await delay(3000);
    
    // Get albums from collection
    const albums = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href*="/albums/"]'));
      const results = [];
      const seen = new Set();
      
      links.forEach(link => {
        const img = link.querySelector('img');
        const name = img?.alt || '';
        
        if (name && !seen.has(name) && name.length > 3) {
          seen.add(name);
          results.push({ name: name, url: link.href });
        }
      });
      
      return results;
    });
    
    console.log(`Encontrados ${albums.length} álbuns na coleção`);
    
    // Process each album
    for (let i = 0; i < albums.length; i++) {
      if (i % 10 === 0) console.log(`Processando álbum ${i + 1}/${albums.length}`);
      
      try {
        await page.goto(albums[i].url, { waitUntil: 'networkidle2', timeout: 30000 });
        await delay(1000);
        
        const photos = await page.evaluate(() => {
          const imgs = document.querySelectorAll('img[src*="photo.yupoo"]');
          return Array.from(imgs).map(img => ({
            src: img.src || '',
            alt: img.alt || ''
          })).filter(p => p.src && !p.src.includes('logo'));
        });
        
        if (photos.length > 0) {
          let imageUrl = photos[0].src;
          imageUrl = imageUrl.replace('small.jpg', 'large.jpg').replace('medium.jpg', 'large.jpg');
          
          allProducts.push({
            name: albums[i].name,
            price: 199.90,
            image: imageUrl,
            url: albums[i].url
          });
        }
        
      } catch (e) {
        // Continue to next album
      }
    }

    console.log(`\n=== TOTAL: ${allProducts.length} produtos ===`);
    
    fs.writeFileSync(
      '/home/mat.devall122k03/Downloads/Bravio-main/Produtos extraidos/produtos_copa.json',
      JSON.stringify(allProducts, null, 2)
    );
    console.log('Arquivo salvo!');
    
  } catch (e) {
    console.error('Erro:', e.message);
  } finally {
    await browser.close();
  }
}

scrapeCollection();
