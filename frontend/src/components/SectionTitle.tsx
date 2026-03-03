interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export default function SectionTitle({ title, subtitle, className = '', action }: SectionTitleProps) {
  return (
    <div className={`flex items-end justify-between gap-4 ${className}`}>
      <div>
        <div className="flex items-center gap-3 mb-1">
          <div className="w-[3px] h-5 bg-white rounded-full shrink-0" />
          <h2 className="text-lg lg:text-xl font-bold uppercase tracking-widest text-white">
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className="text-zinc-500 text-sm ml-[18px]">{subtitle}</p>
        )}
      </div>
      {action && (
        <button
          onClick={action.onClick}
          className="text-zinc-400 hover:text-white text-xs uppercase tracking-widest shrink-0 underline underline-offset-4 transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
