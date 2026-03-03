import { type FormEvent, type ChangeEvent, useState, useEffect } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { categories } from '../data/products_categorized';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  activeCategory: number;
  onCategoryChange: (index: number) => void;
  onSearch?: (query: string) => void;
}

export default function Header({ activeCategory, onCategoryChange, onSearch }: HeaderProps) {
  const { setIsOpen, itemCount, isOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery.trim());
      setShowSearch(false);
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (onSearch) onSearch(val);
  };

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60'
          : 'bg-zinc-950'
      }`}
    >
      {/* Shipping marquee — white bar */}
      <div className="bg-white overflow-hidden">
        <div className="animate-marquee whitespace-nowrap py-2 flex">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="text-zinc-950 text-[10px] font-semibold uppercase mx-6 tracking-widest">
              Frete Grátis em todos os produtos até a Copa &nbsp;·&nbsp; Entregamos em todo o Brasil
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -ml-2 text-zinc-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <div
            className="flex items-center cursor-pointer select-none"
            onClick={() => navigate('/')}
          >
            <img src="/Logo-Under.svg" alt="Under Sports" className="h-10 lg:h-12 w-auto" />
          </div>

          {/* Search — desktop */}
          <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-sm mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Buscar camisas, seleções..."
                className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-zinc-600 text-sm text-white px-4 py-2.5 focus:outline-none focus:bg-zinc-900 placeholder-zinc-600 transition-all rounded-lg"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                aria-label="Buscar"
              >
                <Search size={16} />
              </button>
            </div>
          </form>

          {/* Action icons */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Mobile search toggle */}
            <button
              className="lg:hidden p-2 text-zinc-400 hover:text-white"
              onClick={() => setShowSearch(!showSearch)}
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>

            <button
              className="hidden sm:block text-zinc-400 hover:text-white transition-colors p-1"
              aria-label="Minha conta"
            >
              <User size={20} />
            </button>

            <button
              onClick={toggleCart}
              className="relative text-zinc-400 hover:text-white transition-colors p-2"
              aria-label="Carrinho"
            >
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-white text-zinc-950 text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full leading-none">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        {showSearch && (
          <form onSubmit={handleSearch} className="lg:hidden pb-3">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Buscar camisas, seleções..."
                autoFocus
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-zinc-600 text-sm text-white px-4 py-2.5 focus:outline-none placeholder-zinc-600 transition-all rounded-lg"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                aria-label="Buscar"
              >
                <Search size={16} />
              </button>
            </div>
          </form>
        )}

        {/* Category nav — desktop */}
        <nav className="hidden lg:flex items-center gap-0.5 pb-3">
          <button
            onClick={() => { onCategoryChange(0); if (onSearch) onSearch(''); setSearchQuery(''); }}
            className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all rounded-md ${
              activeCategory === 0
                ? 'bg-white text-zinc-950'
                : 'text-zinc-500 hover:text-white hover:bg-zinc-800/70'
            }`}
          >
            Todos
          </button>
          {categories.slice(1).map((cat, index) => (
            <button
              key={cat.key}
              onClick={() => { onCategoryChange(index + 1); if (onSearch) onSearch(''); setSearchQuery(''); }}
              className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all rounded-md ${
                activeCategory === index + 1
                  ? 'bg-white text-zinc-950'
                  : 'text-zinc-500 hover:text-white hover:bg-zinc-800/70'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800 bg-zinc-950">
          <div className="px-4 py-3 space-y-1">
            {categories.map((cat, index) => (
              <button
                key={cat.key}
                onClick={() => {
                  onCategoryChange(index);
                  setMobileMenuOpen(false);
                  if (onSearch) onSearch('');
                  setSearchQuery('');
                }}
                className={`block w-full text-left px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-colors rounded-lg ${
                  activeCategory === index
                    ? 'bg-white text-zinc-950'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
