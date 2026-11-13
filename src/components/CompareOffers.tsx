import React from 'react';
import { ArrowRight } from 'lucide-react';
import compareLivingRoomImg from '../assets/images/compare_living_room_1794519100742.jpg';
import compareLivingRoomWebp from '../assets/images/compare_living_room_1794519100742.webp';

interface CompareOffersProps {
  onOpenLeadModal: (source?: string) => void;
}

export const CompareOffers: React.FC<CompareOffersProps> = ({ onOpenLeadModal }) => {
  return (
    <section className="bg-white py-14 md:py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.06] tracking-tight text-[#11161A] text-balance max-w-md">
              Сравнивайте
              <br />
              предложения
              <br />
              на ремонт
            </h2>

            <p className="mt-4 text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed max-w-md">
              Оставьте заявку или укажите бюджет — и получите предложения от проверенных бригад и компаний Калининграда.
            </p>

            <div className="mt-7">
              <button
                type="button"
                onClick={() => onOpenLeadModal('Сравнение предложений')}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#C4FB18] hover:bg-[#b5eb0e] text-[#11161A] font-bold text-[15px] transition-all duration-200 cursor-pointer group active:scale-[0.98]"
              >
                <span className="whitespace-nowrap">Получить предложения</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Right Column: Tilted Living Room Card on Organic Lime Splash matching mockup */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-6">
            <div className="relative w-full max-w-[470px]">
              {/* Organic Lime Splash Behind matching mockup curve + droplets */}
              <svg
                viewBox="0 0 540 460"
                fill="none"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full scale-[1.24] -translate-x-4 pointer-events-none select-none"
              >
                <path
                  d="M235 28C322 8 415 44 468 120C521 196 520 302 465 372C410 442 304 452 216 420C128 388 54 335 34 256C14 177 52 94 114 58C176 22 182 40 235 28Z"
                  fill="#C4FB18"
                />
                {/* Left paint-splash handle & droplets matching mockup */}
                <path
                  d="M58 232C36 222 16 238 22 256C28 274 52 280 74 268Z"
                  fill="#C4FB18"
                />
                <circle cx="14" cy="272" r="14" fill="#C4FB18" />
              </svg>

              {/* Tilted Photo Frame */}
              <div className="relative z-10 rotate-[2.5deg] rounded-[26px] overflow-hidden shadow-[0_22px_50px_-15px_rgba(17,22,26,0.16)] border-4 border-white bg-neutral-100 aspect-[4/3]">
                <picture className="w-full h-full block">
                  <source srcSet={compareLivingRoomWebp} type="image/webp" />
                  <img
                    src={compareLivingRoomImg}
                    alt="Гостиная с лаймовыми креслами и большими окнами после ремонта"
                    width={940}
                    height={702}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
