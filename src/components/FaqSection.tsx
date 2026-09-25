import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

interface FaqSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenLeadModal }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleOpenAll = () => {
    if (openIds.length === FAQ_ITEMS.length) {
      setOpenIds([]);
    } else {
      setOpenIds(FAQ_ITEMS.map((item) => item.id));
    }
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#11161a]">
              Частые вопросы
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-500 max-w-2xl leading-relaxed">
              Ответы на самые популярные вопросы о ремонте квартир.
            </p>
          </div>

          <button
            onClick={handleOpenAll}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-black transition-colors self-start md:self-auto shrink-0"
          >
            <span>{openIds.length === FAQ_ITEMS.length ? 'Свернуть все' : 'Все вопросы'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="border border-neutral-200/90 rounded-2xl overflow-hidden bg-white transition-colors"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-neutral-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-neutral-900 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-neutral-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-neutral-900' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                    <p className="mt-2">{item.answer}</p>
                    <div className="mt-4 pt-3 flex items-center gap-2">
                      <span className="text-xs text-neutral-400">Остались вопросы?</span>
                      <button
                        onClick={() => onOpenLeadModal(`FAQ: ${item.question}`)}
                        className="text-xs font-semibold text-neutral-900 hover:underline inline-flex items-center gap-1"
                      >
                        Задать на консультации <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
