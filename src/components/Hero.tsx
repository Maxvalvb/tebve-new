import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroSofaCutoutImg from '../assets/images/hero_sofa_cutout_1794519861938.jpg';
import heroSofaCutoutWebp from '../assets/images/hero_sofa_cutout_1794519861938.webp';

interface HeroProps {
  onOpenLeadModal: (source?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLeadModal }) => {
  return (
    <section id="top" className="relative bg-white overflow-hidden pt-6 pb-12 md:pt-10 md:pb-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-5 relative z-20">
            <h1 className="text-[42px] sm:text-[54px] lg:text-[60px] font-extrabold leading-[1.0] tracking-tight text-[#11161A] text-balance">
              Ремонт
              <br />
              без переплат.
              <br />
              Просто.
            </h1>

            <p className="mt-5 text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed max-w-[380px]">
              Оставьте заявку на расчёт и получите предложения от проверенных команд и бригад в Калининграде и области.
            </p>

            <div className="mt-7">
              <button
                type="button"
                onClick={() => onOpenLeadModal('Первый экран (Hero)')}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#C4FB18] hover:bg-[#b5eb0e] text-[#11161A] font-bold text-[15px] transition-all duration-200 cursor-pointer group active:scale-[0.98]"
              >
                <span className="whitespace-nowrap">Оставить заявку</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Right Visual Column: Seamless Cutout Interior + Lime Splash directly on White */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[700px] lg:-mr-6">
              <picture>
                <source srcSet={heroSofaCutoutWebp} type="image/webp" />
                <img
                  src={heroSofaCutoutImg}
                  alt="Современный интерьер гостиной с диваном и растениями на лаймовом фоне"
                  width={1100}
                  height={821}
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain select-none"
                />
              </picture>
              {/* Soft edge gradients to blend white background seamlessly with page */}
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-white to-transparent pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
