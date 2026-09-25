import React from 'react';
import { ArrowRight } from 'lucide-react';
import { POPULAR_STYLES, StyleItem } from '../data/content';

interface PopularStylesProps {
  onSelectStyle: (style: StyleItem) => void;
  onOpenAllStylesModal: () => void;
}

export const PopularStyles: React.FC<PopularStylesProps> = ({
  onSelectStyle,
  onOpenAllStylesModal,
}) => {
  return (
    <section id="styles" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#11161a]">
              Популярные стили
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-500 max-w-2xl leading-relaxed">
              Выберите стиль, который вдохновляет. Мы подберем варианты ремонта в любом направлении и под ваш бюджет.
            </p>
          </div>

          <button
            onClick={onOpenAllStylesModal}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-black transition-colors self-start md:self-auto shrink-0"
          >
            <span>Все стили</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 5 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {POPULAR_STYLES.map((style) => (
            <div
              key={style.id}
              onClick={() => onSelectStyle(style)}
              className="group bg-white border border-neutral-200/90 hover:border-neutral-900/40 rounded-2xl p-6 min-h-[220px] flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              {/* Top Accent Dot */}
              <div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#d3f938] shadow-sm mb-6 group-hover:scale-125 transition-transform" />
                <h3 className="text-base font-bold text-neutral-900 group-hover:text-black transition-colors">
                  {style.name}
                </h3>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                  {style.description}
                </p>
              </div>

              {/* Sub-indicator / subtle arrow on hover */}
              <div className="mt-6 flex items-center gap-1 text-[11px] font-semibold text-neutral-400 group-hover:text-neutral-900 transition-colors">
                <span>Подробнее</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
