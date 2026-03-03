import { type MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface ProductGridItemProps {
  id: string;
  name: string;
  image: string;
  price: number;
}

const FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect fill='%23171717' width='400' height='500'/%3E%3Ctext fill='%23444' font-family='sans-serif' font-size='14' x='50%25' y='50%25' text-anchor='middle'%3ESem imagem%3C/text%3E%3C/svg%3E";

export default function ProductGridItem({ id, name, image, price }: ProductGridItemProps) {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [imageError, setImageError] = useState(false);

  const handleClick = () => navigate(`/product/${id}`);

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    addItem({ id, name, image, price, size: 'M', quantity: 1 });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-zinc-900 rounded-lg overflow-hidden cursor-pointer group ring-1 ring-transparent hover:ring-zinc-700 transition-all duration-200"
    >
      {/* Image */}
      <div className="aspect-[3/4] bg-zinc-800 relative overflow-hidden">
        <img
          src={imageError ? FALLBACK : image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          onError={() => setImageError(true)}
          loading="lazy"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
          <button
            onClick={handleAddToCart}
            className="w-full bg-white text-zinc-950 py-2 text-xs font-bold uppercase tracking-widest rounded-md hover:bg-zinc-100 transition-colors"
          >
            Adicionar
          </button>
        </div>
      </div>

      {/* Text */}
      <div className="p-3">
        <h3 className="text-sm font-medium text-zinc-200 line-clamp-2 mb-1 leading-snug group-hover:text-white transition-colors">
          {name}
        </h3>
        <div className="flex flex-col gap-0.5">
          <p className="text-white font-bold text-base">
            R$&nbsp;{price.toFixed(2).replace('.', ',')}
          </p>
        </div>
      </div>
    </div>
  );
}
