const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Base URL for the category
const BASE_URL = 'https://www.minejerseys.ru/category/tag-2828';

async function scrapeMinejerseysWC2026() {
  const products = [];
  let page = 1;
  let hasMore = true;

  console.log('Starting scrape of World Cup 2026 category...');

  while (hasMore) {
    try {
      const url = page === 1 ? BASE_URL : `${BASE_URL}?page=${page}`;
      console.log(`Scraping page ${page}: ${url}`);

      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
        },
        timeout: 30000,
      });

      const html = response.data;

      // Find all product item blocks using the correct class
      // Looking for category_product-item__RtGtC
      const productRegex = /<div[^>]*class="[^"]*category_product-item__[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/g;
      let productMatches = html.match(productRegex);

      // If that doesn't work, try another pattern
      if (!productMatches || productMatches.length === 0) {
        const altRegex = /<div[^>]*class="[^"]*CommonGoodsCard[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/g;
        productMatches = html.match(altRegex);
      }

      // Try another approach - find product cards
      if (!productMatches || productMatches.length === 0) {
        // Look for any div with product-item class
        const simpleRegex = /<div[^>]*product-item[^>]*>[\s\S]*?<div[^>]*>/g;
        productMatches = html.match(simpleRegex);
      }

      if (!productMatches || productMatches.length === 0) {
        console.log('No products found on this page, checking pagination...');
        
        // Check if there's pagination indicating more pages
        const paginationMatch = html.match(/<ul[^>]*class="[^"]*pagination[^"]*"[^>]*>/);
        if (paginationMatch) {
          console.log('Pagination found, trying to continue...');
          page++;
          await new Promise(resolve => setTimeout(resolve, 1000));
          continue;
        }
        
        hasMore = false;
        break;
      }

      console.log(`Found ${productMatches.length} product cards on page ${page}`);

      for (const productHtml of productMatches) {
        try {
          // Extract product name - look for title in various formats
          let name = null;
          const namePatterns = [
            /<h3[^>]*>[\s\S]*?<a[^>]*>([^<]+)<\/a>/,
            /<a[^>]*class="[^"]*title[^"]*"[^>]*>([^<]+)<\/a>/,
            /class="[^"]*title[^"]*"[^>]*>([^<]+)</,
            /<span[^>]*class="[^"]*name[^"]*"[^>]*>([^<]+)<\/span>/
          ];
          
          for (const pattern of namePatterns) {
            const match = productHtml.match(pattern);
            if (match) {
              name = match[1].trim();
              break;
            }
          }

          // Extract product URL
          let productUrl = null;
          const urlPatterns = [
            /href="(\/product[^"]+)"/,
            /href="(\/productdetail[^"]+)"/,
            /<a[^>]*href="([^"]*product[^"]*)"/
          ];
          
          for (const pattern of urlPatterns) {
            const match = productHtml.match(pattern);
            if (match) {
              productUrl = 'https://www.minejerseys.ru' + match[1];
              break;
            }
          }

          // Extract price
          let price = '';
          const pricePatterns = [
            /<span[^>]*class="[^"]*price[^"]*"[^>]*>([^<]+)<\/span>/,
            /class="[^"]*val[^"]*"[^>]*>([^<]+)</,
            /\$\s*(\d+)/
          ];
          
          for (const pattern of pricePatterns) {
            const match = productHtml.match(pattern);
            if (match) {
              price = match[1].trim();
              break;
            }
          }

          // Extract image
          let image = '';
          const imgPatterns = [
            /<img[^>]*src="([^"]+\.jpg[^"]*)"[^>]*>/,
            /<img[^>]*data-src="([^"]+\.jpg[^"]*)"[^>]*>/,
            /<img[^>]*src="([^"]+\.png[^"]*)"[^>]*>/
          ];
          
          for (const pattern of imgPatterns) {
            const match = productHtml.match(pattern);
            if (match) {
              image = match[1];
              break;
            }
          }

          if (name && productUrl) {
            // Avoid duplicates
            const exists = products.some(p => p.url === productUrl);
            if (!exists) {
              products.push({
                name,
                price,
                image,
                url: productUrl,
              });
            }
          }
        } catch (e) {
          // Skip errors for individual products
        }
      }

      // Check if there's a next page
      const paginationMatch = html.match(/<ul[^>]*class="[^"]*pagination[^"]*"[^>]*>/);
      if (!paginationMatch) {
        hasMore = false;
      } else {
        // Check if current page is the last
        const currentPageMatch = html.match(/class="[^"]*active[^"]*"[^>]*>[\s\S]*?<span>(\d+)<\/span>/);
        if (currentPageMatch) {
          const currentPage = parseInt(currentPageMatch[1]);
          const nextPageLink = html.match(new RegExp(`<a[^>]*data-page="${currentPage + 1}"[^>]*>`));
          if (!nextPageLink) {
            hasMore = false;
          } else {
            page++;
          }
        } else {
          page++;
        }
      }

      // Add a small delay to be respectful to the server
      await new Promise(resolve => setTimeout(resolve, 1000));

    } catch (error) {
      console.error(`Error scraping page ${page}:`, error.message);
      hasMore = false;
    }
  }

  console.log(`\nTotal unique products found: ${products.length}`);

  // Save to file
  const outputPath = path.join(__dirname, '../Produtos extraidos/produtos_minejerseys_wc2026.json');
  fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));
  console.log(`Products saved to: ${outputPath}`);

  // Print first 5 products for verification
  console.log('\nFirst 5 products:');
  products.slice(0, 5).forEach((p, i) => {
    console.log(`${i+1}. ${p.name}`);
    console.log(`   Price: ${p.price}`);
    console.log(`   Image: ${p.image ? 'YES' : 'NO'}`);
    console.log(`   URL: ${p.url}`);
    console.log('');
  });

  return products;
}

// Run the scraper
scrapeMinejerseysWC2026()
  .then(products => {
    console.log('\nScraping completed successfully!');
    console.log(`Total products: ${products.length}`);
  })
  .catch(error => {
    console.error('Scraping failed:', error);
    process.exit(1);
  });
