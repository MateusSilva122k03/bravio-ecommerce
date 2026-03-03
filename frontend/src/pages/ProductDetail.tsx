import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, ShoppingCart, Heart, Check, Truck, Shield, RotateCcw, Gift, X, Search } from 'lucide-react';
import { categories, Product } from '../data/products_categorized';
import { useCart } from '../context/CartContext';
import Footer from '../components/Footer';

interface Size {
  label: string;
  available: boolean;
}

const SIZES: Size[] = [
  { label: 'P',   available: true },
  { label: 'M',   available: true },
  { label: 'G',   available: true },
  { label: 'GG',  available: true },
  { label: 'XG',  available: true },
  { label: 'XXG', available: true },
];

// Coletar todos os produtos para seleção de brinde
const allProducts: Product[] = categories.flatMap(cat => cat.products);

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate  = useNavigate();
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity]         = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite]     = useState(false);
  const [sizeError, setSizeError]       = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);
  
  // Estado para a funcionalidade de brinde
  const [wantGift, setWantGift] = useState(false);
  const [selectedGift, setSelectedGift] = useState<Product | null>(null);
  const [selectedGiftSize, setSelectedGiftSize] = useState<string>('');
  const [showGiftSelector, setShowGiftSelector] = useState(false);
  const [giftSearch, setGiftSearch] = useState('');

  // Filtrar produtos para brinde (excluir o produto atual)
  const availableGifts = allProducts.filter(p => p.id !== id).filter(p => 
    giftSearch === '' || p.name.toLowerCase().includes(giftSearch.toLowerCase())
  ).slice(0, 20);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  // Find product across all categories
  let product: { id: string; name: string; price: number; image: string; category: string; originalPrice?: number } | null = null;
  for (const cat of categories) {
    const found = cat.products.find(p => p.id === id);
    if (found) { product = found; break; }
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-zinc-500 text-lg mb-4">Produto não encontrado</p>
          <button onClick={() => navigate('/')} className="text-white underline underline-offset-4 hover:text-zinc-300 transition-colors">
            Voltar para a loja
          </button>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const productImages = [product.image, product.image, product.image];

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2200);
      return;
    }
    
    // Validar tamanho do brinde se quiser brinde
    if (wantGift && !selectedGiftSize) {
      return;
    }
    
    setSizeError(false);
    
    const mainItemId = `${product!.id}-${selectedSize}-${Date.now()}`;
    
    // Adicionar produto principal
    addItem({
      id: mainItemId,
      productId: product!.id,
      name: product!.name,
      price: product!.price,
      image: product!.image,
      size: selectedSize,
      quantity,
    });
    
    // Adicionar brinde se selecionado
    if (wantGift && selectedGift) {
      addItem({
        id: `${selectedGift.id}-${selectedGiftSize}-${Date.now()}-gift`,
        productId: selectedGift.id,
        name: selectedGift.name,
        price: 0, // Brinde é grátis
        image: selectedGift.image,
        size: selectedGiftSize,
        quantity,
      }, {
        id: mainItemId,
        productId: product!.id,
        name: product!.name,
        price: product!.price,
        image: product!.image,
        size: selectedSize,
        quantity,
      });
    }
    
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">

      {/* Sticky header */}
      <header className="bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Voltar</span>
          </button>

          <span className="font-bold uppercase tracking-widest text-sm hidden sm:block">Under Sports</span>

          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 rounded-full transition-colors ${isFavorite ? 'text-white' : 'text-zinc-500 hover:text-white'}`}
            aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          >
            <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-6 sm:py-10 w-full flex-1 pb-24 lg:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16">

          {/* Image gallery */}
          <div className="space-y-3">
            <div className="aspect-[4/5] bg-zinc-900 overflow-hidden rounded-xl">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-20 sm:w-20 sm:h-24 shrink-0 bg-zinc-900 overflow-hidden border-2 transition-all rounded-lg ${
                    selectedImage === index ? 'border-white' : 'border-transparent hover:border-zinc-600'
                  }`}
                >
                  <img src={img} alt={`${product.name} — ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col gap-5 sm:gap-6">

            {/* Category + title */}
            <div>
              <p className="text-zinc-600 text-xs uppercase tracking-widest mb-1.5">
                {categories.find(c => c.key === product?.category)?.name || 'Produto'}
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold leading-tight">{product.name}</h1>
            </div>

            {/* Price */}
            <div>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl font-bold">
                  R$&nbsp;{product.price.toFixed(2).replace('.', ',')}
                </span>
                {discount > 0 && (
                  <>
                    <span className="text-zinc-500 text-base line-through">
                      R$&nbsp;{(product.originalPrice || product.price * 1.2).toFixed(2).replace('.', ',')}
                    </span>
                    <span className="bg-white text-zinc-950 text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                      -{discount}% OFF
                    </span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-zinc-300 font-medium text-sm">
                  R$&nbsp;{product.price.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* Size selection */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="font-semibold text-sm uppercase tracking-wide">Tamanho</span>
                <button className="text-zinc-500 text-xs hover:text-white transition-colors underline underline-offset-4">
                  Guia de medidas
                </button>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size.label}
                    onClick={() => { if (size.available) { setSelectedSize(size.label); setSizeError(false); } }}
                    disabled={!size.available}
                    className={`py-2.5 border-2 font-bold text-sm transition-all rounded-lg ${
                      selectedSize === size.label
                        ? 'border-white bg-white text-zinc-950'
                        : size.available
                        ? `border-zinc-700 hover:border-zinc-400 text-white ${sizeError ? 'border-zinc-600 animate-pulse' : ''}`
                        : 'border-zinc-800 text-zinc-700 cursor-not-allowed line-through'
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
              {sizeError && (
                <p className="text-zinc-400 text-xs mt-2 ml-0.5">
                  ↑ Selecione um tamanho para continuar
                </p>
              )}
            </div>

            {/* Quantity */}
            <div>
              <span className="font-semibold text-sm uppercase tracking-wide block mb-2.5">Quantidade</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border-2 border-zinc-700 hover:border-zinc-500 flex items-center justify-center transition-colors rounded-lg"
                  aria-label="Diminuir"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center font-bold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border-2 border-zinc-700 hover:border-zinc-500 flex items-center justify-center transition-colors rounded-lg"
                  aria-label="Aumentar"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Promoção Brinde -选择性 */}
            <div className="border-2 border-yellow-500/50 rounded-xl p-4 bg-yellow-500/5">
              <button
                onClick={() => {
                  setWantGift(!wantGift);
                  if (!wantGift) {
                    setShowGiftSelector(true);
                  } else {
                    setSelectedGift(null);
                    setSelectedGiftSize('');
                  }
                }}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                  wantGift 
                    ? 'bg-yellow-500 text-zinc-950' 
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Gift size={24} className={wantGift ? 'text-zinc-950' : 'text-yellow-500'} />
                  <div className="text-left">
                    <span className="font-bold block">Compre 1 Leve 1 GRÁTIS</span>
                    <span className="text-xs opacity-80">Selecione um produto de brinde</span>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  wantGift ? 'border-zinc-950 bg-zinc-950' : 'border-zinc-500'
                }`}>
                  {wantGift && <Check size={14} className="text-yellow-500" />}
                </div>
              </button>

              {/* Seletor de brinde */}
              {wantGift && (
                <div className="mt-3 space-y-3">
                  {!selectedGift ? (
                    <>
                      {/* Campo de busca */}
                      <div className="relative">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                        <input
                          type="text"
                          placeholder="Buscar produto para brinde..."
                          value={giftSearch}
                          onChange={(e) => setGiftSearch(e.target.value)}
                          className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-2 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500"
                        />
                      </div>
                      
                      {/* Lista de produtos */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                        {availableGifts.map((gift) => (
                          <button
                            key={gift.id}
                            onClick={() => setSelectedGift(gift)}
                            className="flex items-center gap-2 p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors text-left"
                          >
                            <img 
                              src={gift.image} 
                              alt={gift.name}
                              className="w-10 h-10 object-cover rounded"
                            />
                            <div className="flex-1 min-w-0">
                              <span className="text-xs text-zinc-300 line-clamp-2">{gift.name}</span>
                              <span className="text-xs text-yellow-500 font-bold">GRÁTIS</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Brinde selecionado */}
                      <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded-lg">
                        <img 
                          src={selectedGift.image} 
                          alt={selectedGift.name}
                          className="w-14 h-14 object-cover rounded"
                        />
                        <div className="flex-1">
                          <span className="text-xs text-zinc-500 block">Brinde selecionado</span>
                          <span className="text-sm text-white line-clamp-1">{selectedGift.name}</span>
                          <span className="text-xs text-yellow-500 font-bold">GRÁTIS</span>
                        </div>
                        <button
                          onClick={() => {
                            setSelectedGift(null);
                            setSelectedGiftSize('');
                          }}
                          className="p-2 text-zinc-500 hover:text-white transition-colors"
                        >
                          <X size={18} />
                        </button>
                      </div>

                      {/* Tamanho do brinde */}
                      <div>
                        <span className="font-semibold text-sm uppercase tracking-wide block mb-2">Tamanho do Brinde</span>
                        <div className="grid grid-cols-6 gap-2">
                          {SIZES.map((size) => (
                            <button
                              key={size.label}
                              onClick={() => setSelectedGiftSize(size.label)}
                              className={`py-2 border-2 font-bold text-sm transition-all rounded-lg ${
                                selectedGiftSize === size.label
                                  ? 'border-yellow-500 bg-yellow-500 text-zinc-950'
                                  : 'border-zinc-700 hover:border-zinc-500 text-white'
                              }`}
                            >
                              {size.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Add to cart — desktop */}
            <button
              onClick={handleAddToCart}
              className={`hidden lg:flex w-full py-4 font-bold text-base uppercase tracking-widest items-center justify-center gap-2 rounded-xl transition-all ${
                addedFeedback
                  ? 'bg-zinc-200 text-zinc-700'
                  : 'bg-white text-zinc-950 hover:bg-zinc-100'
              }`}
            >
              {addedFeedback ? <><Check size={20} /> Adicionado!</> : <><ShoppingCart size={20} /> Adicionar ao Carrinho</>}
            </button>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-800">
              {[
                { icon: Truck,      text: 'Frete Grátis acima de R$ 299' },
                { icon: Shield,     text: 'Compra Segura' },
                { icon: RotateCcw,  text: '7 dias para troca' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center gap-1.5 text-center text-zinc-500">
                  <Icon size={16} />
                  <span className="text-xs leading-tight">{text}</span>
                </div>
              ))}
            </div>

            {/* Product details */}
            <div className="pt-4 border-t border-zinc-800">
              <h3 className="font-bold text-sm uppercase tracking-wide mb-3">Detalhes do Produto</h3>
              <ul className="space-y-2.5">
                {[
                  'Produto original com qualidade garantida',
                  'Tecido respirável e de alta qualidade',
                  'Disponível em vários tamanhos',
                  'Envio para todo o Brasil',
                ].map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-zinc-400 text-sm">
                    <Check size={14} className="text-zinc-300 mt-0.5 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 px-4 py-3 safe-area-pb">
        <div className="flex items-center gap-3">
          {selectedSize && (
            <div className="w-12 h-12 border-2 border-zinc-600 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-xs font-bold">{selectedSize}</span>
            </div>
          )}
          <button
            onClick={handleAddToCart}
            className={`flex-1 py-3.5 font-bold text-sm uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all ${
              addedFeedback
                ? 'bg-zinc-200 text-zinc-700'
                : selectedSize
                ? 'bg-white text-zinc-950 hover:bg-zinc-100'
                : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
            }`}
          >
            {addedFeedback
              ? <><Check size={18} /> Adicionado!</>
              : selectedSize
              ? <><ShoppingCart size={18} /> Adicionar ao Carrinho</>
              : 'Selecione um Tamanho'}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
