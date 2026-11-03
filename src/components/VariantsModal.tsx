import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { REPAIR_VARIANTS, RepairVariant } from '../data/content';

interface VariantsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectVariant: (v: RepairVariant) => void;
}

export const VariantsModal: React.FC<VariantsModalProps> = ({
  isOpen,
  onClose,
  onSelectVariant,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1fbc7] text-neutral-800 text-xs font-semibold mb-2">
            <span>Сравнение тарифов</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Все варианты ремонта
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Подробное сравнение комплектаций и сроков реализации под ключ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REPAIR_VARIANTS.map((v) => (
            <div
              key={v.id}
              className="border border-neutral-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-900/30 transition-all bg-neutral-50/40"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-lg font-bold text-neutral-900">{v.name}</h4>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#d3f938] text-neutral-900">
                    {v.price}
                  </span>
                </div>
                <p className="text-xs text-neutral-500 mb-4">{v.description}</p>

                <div className="border-t border-neutral-200/60 pt-3 space-y-2">
                  {v.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                      <Check className="w-3.5 h-3.5 text-[#85b507] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  onSelectVariant(v);
                  onClose();
                }}
                className="mt-6 w-full py-2.5 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Выбрать этот тариф</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
