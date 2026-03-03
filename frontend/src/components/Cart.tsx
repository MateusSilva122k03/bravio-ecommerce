import { useState } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutPix from './CheckoutPix';

export default function Cart() {
  const { items, removeItem, updateQuantity, total, isOpen, setIsOpen, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isOpen) return null;

  // const pixTotal = total * 0.95;
  // const pixDiscount = total - pixTotal;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Cart panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-zinc-950 border-l border-zinc-800 flex flex-col shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
          <h2 className="font-bold text-base flex items-center gap-2.5">
            <ShoppingBag size={18} className="text-zinc-400" />
            Meu Carrinho
            {items.length > 0 && (
              <span className="text-sm font-normal text-zinc-500">
                ({items.length} {items.length === 1 ? 'item' : 'itens'})
              </span>
            )}
          </h2>
          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={() => clearCart()}
                className="text-zinc-600 hover:text-zinc-400 text-xs uppercase tracking-wider transition-colors"
              >
                Limpar
              </button>
            )}
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white ml-1"
              aria-label="Fechar carrinho"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-zinc-500">
              <ShoppingBag size={44} className="mb-4 opacity-30" />
              <p className="text-base font-medium text-zinc-400">Carrinho vazio</p>
              <p className="text-sm mt-1 mb-6">Adicione produtos para continuar</p>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-white text-zinc-950 px-6 py-2.5 text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-zinc-100 transition-colors"
              >
                Ver Produtos
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 bg-zinc-900 p-3 rounded-xl">
                <div className="w-20 h-24 bg-zinc-800 shrink-0 rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 flex flex-col justify-between min-w-0 py-0.5">
                  <div>
                    <p className="text-sm font-medium text-white line-clamp-2 leading-snug">{item.name}</p>
                    <p className="text-xs text-zinc-500 mt-0.5">Tam. {item.size}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Quantity */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 rounded-md text-zinc-300 hover:text-white transition-colors"
                        aria-label="Diminuir"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 rounded-md text-zinc-300 hover:text-white transition-colors"
                        aria-label="Aumentar"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold whitespace-nowrap">
                        R$&nbsp;{(item.price * item.quantity).toFixed(2).replace('.', ',')}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-zinc-600 hover:text-zinc-300 p-1 transition-colors"
                        aria-label="Remover item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-zinc-800 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-zinc-400">
                <span>Subtotal</span>
                <span className="text-white">R$&nbsp;{total.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-zinc-800">
                <span>Total</span>
                <span>R$&nbsp;{total.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            <button
              onClick={() => setShowCheckout(true)}
              className="w-full bg-white text-zinc-950 py-3.5 font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-zinc-100 transition-colors"
            >
              Finalizar Compra
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-zinc-500 hover:text-white text-sm transition-colors py-1"
            >
              Continuar Comprando
            </button>
          </div>
        )}
      </div>

      {/* Checkout Pix modal */}
      <CheckoutPix
        isOpen={showCheckout}
        onClose={() => {
          setShowCheckout(false);
          setIsOpen(false);
        }}
      />
    </div>
  );
}
