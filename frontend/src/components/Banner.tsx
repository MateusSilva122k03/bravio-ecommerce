import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BannerProps {
  image: string;
  image2?: string;
  image3?: string;
  alt: string;
  alt2?: string;
  alt3?: string;
  className?: string;
}

export default function Banner({ image, image2, image3, alt, alt2, alt3, className = '' }: BannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const images = [image, image2, image3].filter(Boolean) as string[];
  const alts   = [alt, alt2, alt3];

  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  if (images.length === 0) return null;

  const prev = () => setCurrentIndex((p) => (p - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((p) => (p + 1) % images.length);

  return (
    <div
      className={`w-full overflow-hidden relative bg-zinc-900 group ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides with repeat effect */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentIndex}
          style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
          }}
          role="img"
          aria-label={alts[index] || alt}
        />
      ))}

      {/* Prev / Next arrows — only if multiple slides */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-zinc-950/60 hover:bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-zinc-950/60 hover:bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Próximo slide"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-6'
                  : 'bg-white/40 hover:bg-white/60 w-3'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* CSS for repeat + contain effect */}
      <style>{`
        .banner-img {
          background-repeat: repeat !important;
          background-size: contain !important;
        }
      `}</style>
    </div>
  );
}
