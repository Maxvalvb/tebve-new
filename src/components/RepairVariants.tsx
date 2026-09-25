import React from 'react';
import { ArrowRight } from 'lucide-react';
import { REPAIR_VARIANTS, RepairVariant } from '../data/content';

interface RepairVariantsProps {
  onSelectVariant: (variant: RepairVariant) => void;
  onOpenAllVariantsModal: () => void;
  highlightedPrice?: string;
}

export const RepairVariants: React.FC<RepairVariantsProps> = ({
  onSelectVariant,
  onOpenAllVariantsModal,
}) => {
  return (
    <section id="variants" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#11161a]">
              Варианты ремонта<br className="sm:hidden" /> под ваш бюджет
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-500 max-w-2xl leading-relaxed">
              Мы подготовили несколько вариантов ремонта, которые соответствуют вашему бюджету, стилю и предпочтениям. Выбирайте, что ближе вам.
            </p>
          </div>

          <button
            onClick={onOpenAllVariantsModal}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-black transition-colors self-start md:self-auto shrink-0"
          >
            <span>Посмотреть все варианты</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 5 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {REPAIR_VARIANTS.map((variant) => (
            <div
              key={variant.id}
              onClick={() => onSelectVariant(variant)}
              className="group bg-white border border-neutral-200/90 hover:border-neutral-900/40 rounded-2xl p-5 sm:p-6 min-h-[210px] flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer relative"
            >
              <div>
                <h3 className="text-base font-bold text-neutral-900 group-hover:text-black transition-colors">
                  {variant.name}
                </h3>
                <div className="mt-1 text-xs sm:text-[13px] text-neutral-500 font-medium">
                  {variant.price}
                </div>
                <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
                  {variant.description}
                </p>
              </div>

              {/* Bottom right round arrow button */}
              <div className="mt-6 flex justify-end">
                <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
