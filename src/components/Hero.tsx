import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Compass, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onOpenLeadModal: (source?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLeadModal }) => {
  return (
    <section className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-[56px] lg:text-[62px] font-extrabold tracking-tight text-[#11161a] leading-[1.12] text-balance">
            Лучший ремонт<br />
            для вашей жизни.<br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-[#11161a]">По вашему бюджету в Калининграде.</span>
              {/* Stylish highlighter underline stroke matching logo color exactly */}
              <svg
                className="absolute left-0 -bottom-2 w-full h-3 sm:h-4 text-[#d2f835] pointer-events-none -z-0"
                viewBox="0 0 300 14"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 10C70 4 190 3 298 9"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
            Мы подбираем лучшие варианты ремонта, которые соответствуют вашему бюджету, стилю и пожеланиям. Без лишних хлопот.
          </p>

          {/* Single CTA Button */}
          <div className="mt-8 sm:mt-10">
            <button
              onClick={() => onOpenLeadModal('Hero CTA')}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#11161a] hover:bg-black text-white text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <span>Оставить заявку</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Feature Strip (4 key highlights) */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-neutral-100 grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-neutral-800" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-neutral-700 leading-snug">
              Только проверенные подрядчики
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-neutral-800" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-neutral-700 leading-snug">
              Реальные сроки и сметы
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center shrink-0">
              <Compass className="w-4 h-4 text-neutral-800" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-neutral-700 leading-snug">
              Дизайн под ваш стиль и бюджет
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-4 h-4 text-neutral-800" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-neutral-700 leading-snug">
              Полное сопровождение от идеи до финала
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
