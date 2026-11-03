import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Вы указываете бюджет',
      desc: 'Сообщаете комфортную для вас сумму и ключевые пожелания к ремонту',
    },
    {
      number: '02',
      title: 'Мы подбираем варианты',
      desc: 'Формируем точные прозрачные сметы и планировочные концепции под ключ',
    },
    {
      number: '03',
      title: 'Вы выбираете подходящий',
      desc: 'Сравниваете тарифы, материалы и утверждаете итоговый план работ',
    },
    {
      number: '04',
      title: 'Назначаем ремонт',
      desc: 'Заключаем официальный договор и выводим проверенную бригаду на объект',
    },
    {
      number: '05',
      title: 'Контролируем все этапы',
      desc: 'Ведем авторский и технический надзор вплоть до финальной сдачи квартиры',
    },
  ];

  return (
    <section id="how-it-works" className="py-14 sm:py-20 bg-[#fafbfc] border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#11161a]">
            Как это работает?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-500 leading-relaxed">
            Пять простых и понятных шагов к идеальной квартире без стресса, задержек и переплат.
          </p>
        </div>

        {/* Cohesive Stepper Container with unified progress track */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white border border-neutral-200/90 hover:border-neutral-900/30 rounded-2xl p-6 sm:p-5 lg:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group relative"
            >
              <div>
                {/* Header row with Step number and status indicator */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#d3f938] text-neutral-900 font-bold text-sm flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>

                  {idx < steps.length - 1 ? (
                    <div className="hidden md:flex text-neutral-300 group-hover:text-neutral-500 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="text-[#85b507]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Step title */}
                <h3 className="text-base font-bold text-neutral-900 leading-snug group-hover:text-black transition-colors mb-2">
                  {step.title}
                </h3>

                {/* Step details */}
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step indicator progress dash */}
              <div className="mt-6 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-medium text-neutral-400">
                <span>Шаг {idx + 1} из 5</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
