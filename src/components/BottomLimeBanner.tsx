import React from 'react';
import { ArrowRight } from 'lucide-react';
import paintRollerDiagonalImg from '../assets/images/paint_roller_diagonal_1794519863320.jpg';
import paintRollerDiagonalWebp from '../assets/images/paint_roller_diagonal_1794519863320.webp';

interface BottomLimeBannerProps {
  onOpenLeadModal: (source?: string) => void;
}

export const BottomLimeBanner: React.FC<BottomLimeBannerProps> = ({ onOpenLeadModal }) => {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          {/* Bright Lime Banner */}
          <div className="relative flex-1 rounded-[28px] bg-[#C4FB18] overflow-hidden min-h-[260px] flex flex-col md:flex-row items-stretch">
            {/* Left Copy & Dark CTA */}
            <div className="relative z-20 p-8 sm:p-11 md:w-[56%] flex flex-col justify-center items-start">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold leading-[1.1] tracking-tight text-[#11161A] text-balance">
                Ремонт начинается
                <br />
                с правильной команды!
              </h2>
              <p className="mt-3 text-[14px] sm:text-[15px] text-[#11161A]/85 leading-relaxed max-w-md">
                Оставьте заявку — и получите предложение от проверенных специалистов в Калининграде.
              </p>
              <button
                type="button"
                onClick={() => onOpenLeadModal('Нижний лаймовый баннер')}
                className="mt-6 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#11161A] hover:bg-black text-white font-semibold text-[14px] transition-all duration-200 cursor-pointer group active:scale-[0.98]"
              >
                <span className="whitespace-nowrap">Оставить заявку</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right Diagonal Paint Roller Visual Blended Seamlessly into Lime */}
            <div className="relative md:w-[44%] min-h-[210px] md:min-h-full overflow-hidden bg-[#C4FB18]">
              <picture className="w-full h-full block">
                <source srcSet={paintRollerDiagonalWebp} type="image/webp" />
                <img
                  src={paintRollerDiagonalImg}
                  alt="Малярный валик с ярко-лаймовой краской"
                  width={900}
                  height={502}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </picture>
              {/* Seamless lime edge blend */}
              <div
                aria-hidden="true"
                className="hidden md:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#C4FB18] via-[#C4FB18]/70 to-transparent pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="md:hidden absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#C4FB18] to-transparent pointer-events-none"
              />
            </div>
          </div>

          {/* Right Handwritten Annotation + Arrow matching mockup */}
          <div className="hidden lg:flex flex-col items-start shrink-0 w-[160px] -mt-6">
            <p className="font-handwriting text-[22px] leading-[1.15] text-[#11161A] -rotate-3 select-none">
              Быстро.
              <br />
              Качественно.
              <br />
              Надёжно.
            </p>
            <svg
              width="74"
              height="48"
              viewBox="0 0 74 48"
              fill="none"
              aria-hidden="true"
              className="mt-2 -ml-4 text-[#11161A]"
            >
              <path
                d="M68 4C52 24 32 34 8 33"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M16 25L6 33L16 41"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
