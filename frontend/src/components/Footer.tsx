import { Instagram, Youtube, MessageCircle, Mail, MapPin, Truck, Shield, RotateCcw, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 mt-auto">

      {/* Trust bar */}
      <div className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Truck,     label: 'Frete Grátis',     sub: 'acima de R$ 299' },
              { icon: Shield,    label: 'Compra Segura',     sub: 'ambiente criptografado' },
              { icon: RotateCcw, label: 'Troca em 7 dias',   sub: 'sem burocracia' },
              { icon: Zap,       label: 'Pix',    sub: 'pagamento rápido' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-zinc-300" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold uppercase tracking-wide leading-tight">{label}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button onClick={() => navigate('/')} className="mb-4 block">
              <img src="/Logo-Under.svg" alt="Under Sports" className="h-9 w-auto" />
            </button>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Camisas de time originais para quem vive o futebol. Qualidade premium com entrega garantida em todo o Brasil.
            </p>
            <div className="flex items-center gap-2.5">
              {[
                { href: 'https://instagram.com', Icon: Instagram, label: 'Instagram' },
                { href: 'https://youtube.com',   Icon: Youtube,   label: 'YouTube' },
                { href: 'https://wa.me/5511999999999', Icon: MessageCircle, label: 'WhatsApp' },
                { href: 'mailto:contato@undersports.com.br', Icon: Mail, label: 'E-mail' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center rounded-lg text-zinc-400 hover:text-white transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Loja */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Loja</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Todos os Produtos',      action: () => navigate('/') },
                { label: 'Copa do Mundo 2026',      action: () => navigate('/') },
                { label: 'Seleções Nacionais',      action: () => navigate('/') },
                { label: 'Clubes Europeus',          action: () => navigate('/') },
                { label: 'Novidades',                action: () => navigate('/') },
              ].map(({ label, action }) => (
                <li key={label}>
                  <button
                    onClick={action}
                    className="text-zinc-400 hover:text-white text-sm transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Suporte</h3>
            <ul className="space-y-2.5">
              {[
                'Guia de Tamanhos',
                'Rastrear Pedido',
                'Política de Troca',
                'Perguntas Frequentes',
                'Como Comprar',
              ].map((label) => (
                <li key={label}>
                  <button className="text-zinc-400 hover:text-white text-sm transition-colors text-left">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Contato</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'WhatsApp', Icon: MessageCircle, href: 'https://wa.me/5511999999999' },
                { label: 'Instagram', Icon: Instagram,   href: 'https://instagram.com' },
                { label: 'E-mail',    Icon: Mail,         href: 'mailto:contato@undersports.com.br' },
              ].map(({ label, Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    <Icon size={13} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-start gap-1.5 mt-6 text-zinc-600 text-xs">
              <MapPin size={11} className="mt-0.5 shrink-0" />
              <span>São Paulo, SP — Brasil</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            {['PIX', 'Cartão de Crédito', 'Boleto Bancário'].map((method) => (
              <span key={method} className="text-zinc-600 text-xs">
                {method}
              </span>
            ))}
          </div>
          <p className="text-zinc-600 text-xs text-center">
            © {year} Under Sports — Todos os direitos reservados
          </p>
        </div>
      </div>

    </footer>
  );
}
