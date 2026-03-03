import ProductCard from './ProductCard';
import SectionTitle from './SectionTitle';

interface ProductGridProps {
  title: string;
  products: any[];
  className?: string;
}

export default function ProductGrid({ title, products, className = '' }: ProductGridProps) {
  if (products.length === 0) return null;

  return (
    <section className={`py-10 lg:py-14 bg-zinc-950 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {title && <SectionTitle title={title} className="mb-6 lg:mb-8" />}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
          {products.map((product, index) => (
            <ProductCard
              key={product.id || index}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
