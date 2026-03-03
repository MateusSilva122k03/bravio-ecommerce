import { Link } from 'react-router-dom';
import { useState } from 'react';

interface ProductCardProps {
  id?: string;
  name?: string;
  image: string;
  title?: string;
  price: number;
  originalPrice?: number;
  discount?: number;
}

const FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect fill='%23171717' width='400' height='500'/%3E%3Ctext fill='%23444' font-family='sans-serif' font-size='14' x='50%25' y='50%25' text-anchor='middle'%3ESem imagem%3C/text%3E%3C/svg%3E";

export default function ProductCard({
  id,
  name,
  image,
  title,
  price,
  originalPrice,
  discount,
}: ProductCardProps) {
  const displayTitle = title || name || 'Produto';
  const [imageError, setImageError] = useState(false);

  const discountPercent =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : discount;

  // const pix = pixPrice ?? price * 0.95;
  const to = id ? `/product/${id}` : '#';

  return (
    <div className="flex flex-col group">

      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-900 mb-3">
        <Link to={to} className="block w-full h-full" tabIndex={-1}>
          <img
            src={imageError ? FALLBACK : image}
            alt={displayTitle}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        </Link>

        {/* Discount badge — monochromatic */}
        {discountPercent ? (
          <div className="absolute top-2.5 left-2.5 bg-white text-zinc-950 text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase shadow">
            -{discountPercent}%
          </div>
        ) : null}

        {/* Hover overlay with CTA */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex flex-col justify-end p-3">
          <Link
            to={to}
            className="w-full bg-white text-zinc-950 py-2.5 text-xs font-bold text-center rounded-md uppercase tracking-widest hover:bg-zinc-100 transition-colors block"
          >
            Ver Detalhes
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 px-0.5">
        <Link
          to={to}
          className="text-zinc-300 text-sm font-medium line-clamp-2 group-hover:text-white transition-colors leading-snug"
        >
          {displayTitle}
        </Link>

        <div className="flex flex-col gap-0.5 mt-0.5">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-white font-bold text-base">
              R$&nbsp;{price.toFixed(2).replace('.', ',')}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-zinc-600 text-xs line-through">
                R$&nbsp;{originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
