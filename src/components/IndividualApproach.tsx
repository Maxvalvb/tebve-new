import React from 'react';
import { Check } from 'lucide-react';

export const IndividualApproach: React.FC = () => {
  const points = [
    'Гибкие решения под любой бюджет',
    'Опытные и проверенные подрядчики',
    'Прозрачные сметы и сроки',
    'Поддержка на всех этапах',
  ];

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#11161a] leading-tight">
              Подход к каждому<br className="hidden sm:inline" /> клиенту — индивидуально
            </h2>
            <p className="mt-5 text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed">
              Мы учитываем ваши пожелания, бюджет и стиль, чтобы предложить именно те решения, которые подходят вам.
            </p>
          </div>

          {/* Right Lime Rounded Organic Badge Container */}
          <div className="lg:col-span-6">
            <div className="bg-[#dcf75e] rounded-[36px] sm:rounded-[48px] p-8 sm:p-12 shadow-sm relative overflow-hidden">
              <div className="space-y-5">
                {points.map((point) => (
                  <div key={point} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-neutral-900 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3] text-neutral-900" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
