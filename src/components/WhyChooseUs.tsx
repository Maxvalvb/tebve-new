import React from 'react';
import { ThumbsUp, ShieldCheck, Clock, Headphones } from 'lucide-react';

const REASONS = [
  {
    title: 'Проверенные исполнители',
    desc: 'Все бригады проходят проверку и подтверждают квалификацию',
    icon: ThumbsUp,
  },
  {
    title: 'Прозрачные цены',
    desc: 'Вы получаете финальную стоимость заранее',
    icon: ShieldCheck,
  },
  {
    title: 'Экономия времени',
    desc: 'Быстрый подбор лучших предложений от мастеров',
    icon: Clock,
  },
  {
    title: 'Выберите лучшее предложение',
    desc: 'и контролируйте процесс онлайн',
    icon: Headphones,
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="bg-white py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#11161A] tracking-tight mb-6">
          Почему выбирают нас?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-200/90 bg-neutral-50/40 p-6 flex flex-col items-start"
              >
                <span className="text-[#11161A] flex items-center justify-center mb-4 shrink-0">
                  <Icon className="w-6 h-6 stroke-[1.7]" />
                </span>
                <h3 className="text-[15px] font-bold text-[#11161A] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
