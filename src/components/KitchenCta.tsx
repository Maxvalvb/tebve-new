import React from 'react';
import { ArrowRight } from 'lucide-react';
import kitchenDarkOakImg from '../assets/images/kitchen_dark_oak_1794519862638.jpg';
import kitchenDarkOakWebp from '../assets/images/kitchen_dark_oak_1794519862638.webp';

interface KitchenCtaProps {
  onOpenLeadModal: (source?: string) => void;
}

export const KitchenCta: React.FC<KitchenCtaProps> = ({ onOpenLeadModal }) => {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Kitchen Photo */}
          <div className="lg:col-span-6">
            <div className="rounded-[24px] overflow-hidden border border-neutral-200/60 shadow-sm aspect-[16/10] bg-neutral-100">
              <picture className="w-full h-full block">
                <source srcSet={kitchenDarkOakWebp} type="image/webp" />
                <img
                  src={kitchenDarkOakImg}
                  alt="Современный ремонт кухни с дубовыми фасадами, темной столешницей и лаймовым светильником"
                  width={1000}
                  height={558}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </div>

          {/* Right Heading & CTA */}
          <div className="lg:col-span-6 lg:pl-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold leading-[1.12] tracking-tight text-[#11161A] text-balance max-w-md">
              Просто оставьте заявку — и получите предложение
            </h2>

            <div className="mt-7">
              <button
                type="button"
                onClick={() => onOpenLeadModal('Секция с кухней')}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#C4FB18] hover:bg-[#b5eb0e] text-[#11161A] font-bold text-[15px] transition-all duration-200 cursor-pointer group active:scale-[0.98]"
              >
                <span className="whitespace-nowrap">Оставить заявку</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
