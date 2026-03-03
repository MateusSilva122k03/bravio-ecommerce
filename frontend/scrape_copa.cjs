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

  const allProducts = [];
  const seenUrls = new Set();

  try {
    // Scrape multiple pages
    for (let pageNum = 1; pageNum <= 5; pageNum++) {
      console.log(`\n=== Página ${pageNum} ===`);
      const page = await browser.newPage();
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
      
      const url = pageNum === 1 
        ? 'https://minkang.x.yupoo.com/collections/5062328'
        : `https://minkang.x.yupoo.com/collections/5062328?page=${pageNum}`;
      
      console.log('Acessando:', url);
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
      await delay(3000);
      
      // Get albums
      const albums = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll('a[href*="/albums/"]'));
        const results = [];
        
        links.forEach(link => {
          const img = link.querySelector('img');
          const name = img?.alt || '';
          
          if (name && name.length > 3 && !name.includes('logo') && !name.includes('Yupoo')) {
            if (!results.find(r => r.name === name)) {
              results.push({ name: name, url: link.href });
            }
          }
        });
        
        return results;
      });
      
      console.log(`Encontrados ${albums.length} álbuns na página ${pageNum}`);
      
      if (albums.length === 0) {
        await page.close();
        break;
      }
      
      // Process each album
      for (let i = 0; i < albums.length; i++) {
        if (seenUrls.has(albums[i].url)) continue;
        seenUrls.add(albums[i].url);
        
        if (i % 10 === 0) console.log(`Processando álbum ${i + 1}/${albums.length}`);
        
        try {
          await page.goto(albums[i].url, { waitUntil: 'networkidle2', timeout: 30000 });
          await delay(800);
          
          const photos = await page.evaluate(() => {
            const imgs = document.querySelectorAll('img[src*="photo.yupoo"]');
            return Array.from(imgs)
              .map(img => img.src || '')
              .filter(src => src && !src.includes('logo'));
          });
          
          if (photos.length > 0) {
            let imageUrl = photos[0].replace('small.jpg', 'large.jpg').replace('medium.jpg', 'large.jpg');
            
            allProducts.push({
              name: albums[i].name,
              price: 199.90,
              image: imageUrl,
              url: albums[i].url
            });
          }
          
        } catch (e) {
          // Continue
        }
      }
      
      await page.close();
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
