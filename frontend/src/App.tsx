import { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import ProductGrid from './components/ProductGrid';
import ProductGridItem from './components/ProductGridItem';
import ProductCarousel from './components/ProductCarousel';
import Banner from './components/Banner';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import { categories } from './data/products_categorized';

export default function App() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const allProducts = useMemo(() => categories.flatMap(cat => cat.products), []);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase();
    return allProducts.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.name.toLowerCase().split(' ').some((w: string) => w.includes(query))
    );
  }, [searchQuery, allProducts]);

  const handleSearch = (query: string) => setSearchQuery(query);

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
    setSearchQuery('');
  };

  const currentCategory  = categories[activeCategory];
  const shuffledProducts = useMemo(
    () => [...currentCategory.products].sort(() => Math.random() - 0.5),
    [currentCategory.products]
  );

  const isSearching = searchQuery.trim().length > 0;

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans flex flex-col">
      <Cart />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
                onSearch={handleSearch}
              />

              <main className="flex-1">
                {/* Hero banner */}
                {!isSearching && (
                  <Banner
                    image="https://image2url.com/r2/default/images/1772522214535-fa9c5069-03cb-4539-8891-b4e9b6b3b399.jpg"
                    image2="https://image2url.com/r2/default/images/1772525824688-d2f07865-fe13-477d-ba96-961e86ccd654.jpg"
                    image3="https://image2url.com/r2/default/images/1772525923016-79c592f3-9d7d-4c63-b840-1ebad1118293.jpg"
                    alt="Copa do Mundo 2026 — Coleção Exclusiva"
                    alt2="Bravio — Coleção 2026"
                    alt3="Bravio — Modelos Exclusivos"
                    className="h-[240px] sm:h-[320px] md:h-[400px] lg:h-[500px]"
                  />
                )}

                {isSearching ? (
                  /* Search results */
                  <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-12">
                    <h2 className="text-xl lg:text-2xl font-bold mb-1">
                      Resultados para &ldquo;{searchQuery}&rdquo;
                    </h2>
                    <p className="text-zinc-500 text-sm mb-8">
                      {filteredProducts?.length || 0} produto(s) encontrado(s)
                    </p>

                    {filteredProducts && filteredProducts.length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
                        {filteredProducts.map((product, index) => (
                          <ProductGridItem
                            key={product.id || index}
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            price={product.price}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-16">
                        <p className="text-zinc-500 text-lg">Nenhum produto encontrado</p>
                        <p className="text-zinc-600 text-sm mt-2">Tente outro termo de busca</p>
                      </div>
                    )}
                  </div>

                ) : currentCategory.products.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-zinc-500 text-xl">Em breve novos produtos...</p>
                  </div>

                ) : (
                  <>
                    <ProductCarousel
                      title={currentCategory.name}
                      products={shuffledProducts.slice(0, 20)}
                    />
                    <ProductGrid
                      title="Mais Modelos"
                      products={shuffledProducts.slice(20)}
                    />
                  </>
                )}
              </main>

              <Footer />
              <WhatsAppButton />
            </>
          }
        />

        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
