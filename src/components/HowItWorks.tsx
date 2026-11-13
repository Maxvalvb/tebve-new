import React from 'react';
import { FileText, MessageSquareText, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#11161A] tracking-tight mb-9">
          Как это работает?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-9 h-9 rounded-full bg-[#C4FB18] text-[#11161A] font-extrabold text-base flex items-center justify-center tabular-nums shrink-0">
                1
              </span>
              <FileText className="w-7 h-7 text-[#11161A] stroke-[1.6]" />
            </div>

            <h3 className="text-[18px] font-bold text-[#11161A] leading-snug">
              Вы оставляете заявку
            </h3>
            <p className="mt-1 text-[14px] text-neutral-600 leading-relaxed">
              и получаете расчёты
            </p>

            {/* Lime highlight box with client budget example */}
            <div className="mt-4 w-full max-w-[320px] px-4 py-3.5 rounded-xl bg-[#EEFDAC] border border-[#C4FB18] text-[13px] text-[#11161A] leading-snug font-medium">
              Например: «У нас есть бюджет <span className="font-bold tabular-nums">780 000 ₽</span> — какие варианты можете предложить?»
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-9 h-9 rounded-full bg-[#C4FB18] text-[#11161A] font-extrabold text-base flex items-center justify-center tabular-nums shrink-0">
                2
              </span>
              <MessageSquareText className="w-7 h-7 text-[#11161A] stroke-[1.6]" />
            </div>

            <h3 className="text-[18px] font-bold text-[#11161A] leading-snug">
              Бригады и компании
              <br />
              предлагают цены
            </h3>
            <p className="mt-2.5 text-[14px] text-neutral-600 leading-relaxed max-w-[270px]">
              Вы получаете предложения от проверенных исполнителей в Калининграде
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-9 h-9 rounded-full bg-[#C4FB18] text-[#11161A] font-extrabold text-base flex items-center justify-center tabular-nums shrink-0">
                3
              </span>
              <CheckCircle2 className="w-7 h-7 text-[#11161A] stroke-[1.6]" />
            </div>

            <h3 className="text-[18px] font-bold text-[#11161A] leading-snug">
              Вы выбираете
              <br />
              лучшее предложение
            </h3>
            <p className="mt-2.5 text-[14px] text-neutral-600 leading-relaxed max-w-[270px]">
              Сравниваете цены, отзывы и нанимаете команду для ремонта
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
