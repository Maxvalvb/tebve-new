import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaBannerDarkProps {
  onOpenLeadModal: (source?: string) => void;
}

export const CtaBannerDark: React.FC<CtaBannerDarkProps> = ({ onOpenLeadModal }) => {
  return (
    <section className="py-6 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#11161a] p-8 sm:p-12 lg:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 shadow-lg">
          {/* Left Text: High contrast and crystal clear typography without background clutter */}
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Не знаете, с чего начать?
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
              Оставьте заявку — мы подберем для вас лучшие варианты ремонта под ваш бюджет и ответим на все вопросы.
            </p>
          </div>

          {/* Right Button */}
          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenLeadModal('Баннер: Не знаете с чего начать')}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#d3f938] hover:bg-[#c4ec23] text-[#11161a] text-sm sm:text-base font-bold transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              <span>Оставить заявку</span>
              <ArrowRight className="w-4 h-4 text-neutral-900 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
