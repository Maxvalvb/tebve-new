import React from 'react';

interface FebbyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const FebbyLogo: React.FC<FebbyLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const textSizes = {
    sm: 'text-2xl tracking-tight',
    md: 'text-2xl sm:text-[30px] tracking-tight',
    lg: 'text-3xl sm:text-4xl tracking-tight',
  };

  return (
    <div className={`inline-flex items-center select-none group cursor-pointer ${className}`}>
      {/* 
        Только игрушечная надпись "febby" в глубоком черном цвете:
        - Пухлый округлый геометричный шрифт Unbounded с плотным начертанием 900
        - Мягкие, пухлые контуры букв
        - При наведении легкая игривая микро-анимация покачивания (wobble/bounce)
      */}
      <span
        className={`font-black font-['Unbounded',sans-serif] text-[#11161a] transition-all duration-300 group-hover:tracking-normal group-hover:-translate-y-0.5 inline-block ${textSizes[size]}`}
        style={{
          letterSpacing: '-0.045em',
          textShadow: '0 1px 0 rgba(0,0,0,0.06)',
        }}
      >
        febby
      </span>
    </div>
  );
};
