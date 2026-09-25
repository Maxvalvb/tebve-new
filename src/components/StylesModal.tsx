import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { POPULAR_STYLES, StyleItem } from '../data/content';

interface StylesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectStyle: (style: StyleItem) => void;
}

export const StylesModal: React.FC<StylesModalProps> = ({
  isOpen,
  onClose,
  onSelectStyle,
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
            <span>Каталог дизайн-направлений</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Популярные интерьерные стили
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Особенности каждого стиля, цветовые палитры и ключевые элементы отделки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {POPULAR_STYLES.map((style) => (
            <div
              key={style.id}
              className="border border-neutral-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-900/30 transition-all bg-neutral-50/40"
            >
              <div>
                <div className="w-4 h-4 rounded-full bg-[#d3f938] mb-4" />
                <h4 className="text-lg font-bold text-neutral-900">{style.name}</h4>
                <p className="text-xs text-neutral-500 mt-1 mb-4">{style.description}</p>

                <div className="text-[11px] font-semibold text-neutral-600 mb-2">
                  Ключевые черты:
                </div>
                <div className="space-y-1 mb-4">
                  {style.keyFeatures.map((kf, i) => (
                    <div key={i} className="text-xs text-neutral-700 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                      <span>{kf}</span>
                    </div>
                  ))}
                </div>

                <div className="text-[11px] font-semibold text-neutral-600 mb-1.5">
                  Базовая цветовая гамма:
                </div>
                <div className="flex items-center gap-2">
                  {style.palette.map((color, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border border-neutral-300 shadow-xs"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  onSelectStyle(style);
                  onClose();
                }}
                className="mt-6 w-full py-2.5 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Выбрать стиль «{style.name}»</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
