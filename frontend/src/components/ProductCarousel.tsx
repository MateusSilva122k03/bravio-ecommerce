import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import ProductCard from './ProductCard';
import SectionTitle from './SectionTitle';

interface ProductCarouselProps {
  title: string;
  products: any[];
}

export default function ProductCarousel({ title, products }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -(clientWidth * 0.8) : clientWidth * 0.8,
      behavior: 'smooth',
    });
  };

  if (products.length === 0) return null;

  return (
    <section className="py-10 lg:py-14 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionTitle title={title} className="mb-6 lg:mb-8" />

        <div className="relative group">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            className="hidden lg:flex absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-zinc-800 hover:bg-zinc-700 items-center justify-center rounded-full text-zinc-400 hover:text-white shadow-lg opacity-40 group-hover:opacity-100 transition-all"
            aria-label="Rolar para esquerda"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Carousel track */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 lg:gap-5 pb-2 -mx-4 px-4 lg:mx-0 lg:px-0"
          >
            {products.map((product, index) => (
              <div
                key={product.id || index}
                className="snap-start shrink-0 w-[155px] sm:w-[175px] md:w-[195px] lg:w-[230px]"
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-zinc-800 hover:bg-zinc-700 items-center justify-center rounded-full text-zinc-400 hover:text-white shadow-lg opacity-40 group-hover:opacity-100 transition-all"
            aria-label="Rolar para direita"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
