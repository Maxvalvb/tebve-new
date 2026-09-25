import React from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { ADDITIONAL_SERVICES, ServiceItem } from '../data/content';

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesModal: React.FC<ServicesModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
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
            <span>Полный спектр услуг</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Все дополнительные услуги
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Каждая услуга доступна как в составе комплексного ремонта, так и отдельно.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ADDITIONAL_SERVICES.map((s) => (
            <div
              key={s.id}
              className="border border-neutral-200/90 rounded-2xl p-5 flex flex-col justify-between hover:border-neutral-900/30 transition-all bg-neutral-50/40"
            >
              <div>
                <h4 className="text-base font-bold text-neutral-900">{s.name}</h4>
                <p className="text-xs text-neutral-500 mt-0.5 mb-3">{s.description}</p>
                <div className="space-y-1.5 border-t border-neutral-200/60 pt-3">
                  {s.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                      <Check className="w-3.5 h-3.5 text-[#85b507] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  onSelectService(s);
                  onClose();
                }}
                className="mt-5 w-full py-2 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Заказать услугу «{s.name}»</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
