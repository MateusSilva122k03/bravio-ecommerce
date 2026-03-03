import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '5511999999999'; // Replace with actual number

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-white rounded-xl shadow-2xl overflow-hidden mb-2 animate-in slide-in-from-bottom-2 fade-in duration-200">
          <div className="bg-[#075E54] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle size={20} className="text-[#075E54]" fill="currentColor" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Under Sports</h4>
                <p className="text-green-400 text-xs">Online agora</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={18} />
            </button>
          </div>
          <div className="p-4 bg-gray-50">
            <p className="text-gray-700 text-sm mb-3">
              Olá! 👋 Como podemos ajudar você hoje?
            </p>
            <a
              href={`https://wa.me/${phoneNumber}?text=Olá, preciso de ajuda para encontrar um produto.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] text-white text-center py-2.5 rounded-lg font-medium text-sm hover:bg-[#20ba56] transition-colors"
            >
              Iniciar Conversa
            </a>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20ba56] transition-all flex items-center justify-center ${
          isOpen ? 'rotate-90' : ''
        }`}
        aria-label={isOpen ? 'Fechar WhatsApp' : 'Chat on WhatsApp'}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} fill="currentColor" />}
      </button>
    </div>
  );
}
