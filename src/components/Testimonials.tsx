import React from 'react';
import { ArrowRight } from 'lucide-react';

interface TestimonialsProps {
  onOpenAllReviews: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenAllReviews }) => {
  const reviews = [
    {
      id: 'rev-1',
      quote: '«Очень удобно, что не нужно самому искать подрядчиков. Предложили несколько вариантов и помогли с оформлением.»',
      author: 'Алексей К.',
      initials: 'АК',
      apartment: 'Ремонт 2-комнатной квартиры',
    },
    {
      id: 'rev-2',
      quote: '«Быстро подобрали варианты, всё понятно и прозрачно. Сметы соответствовали реальности, ремонт сделали в срок.»',
      author: 'Мария С.',
      initials: 'МС',
      apartment: 'Ремонт студии',
    },
    {
      id: 'rev-3',
      quote: '«Понравился подход — всё по делу, без лишней воды. Нашли именно то, что нужно. Рекомендую!»',
      author: 'Игорь П.',
      initials: 'ИП',
      apartment: 'Ремонт 3-комнатной квартиры',
    },
    {
      id: 'rev-4',
      quote: '«Качественный ремонт и отличная команда. Помогли сэкономить и при этом сделали всё на высшем уровне.»',
      author: 'Елена В.',
      initials: 'ЕВ',
      apartment: 'Ремонт квартиры-студии',
    },
  ];

  return (
    <section id="reviews" className="py-12 sm:py-18 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#11161a]">
              Отзывы наших клиентов
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-500 max-w-2xl leading-relaxed">
              Реальные люди, реальные истории. Мы гордимся тем, что помогаем создавать уютные и стильные пространства.
            </p>
          </div>

          <button
            onClick={onOpenAllReviews}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-black transition-colors self-start md:self-auto shrink-0"
          >
            <span>Читать все отзывы</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Cards Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Lime quotation mark */}
                <div className="text-3xl font-serif font-black text-[#a6d818] leading-none mb-3">
                  “
                </div>
                <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>

              {/* Author Info with clean monogram badge instead of real photo */}
              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f4f6f8] border border-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-800 shrink-0">
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-neutral-900 truncate">
                    {item.author}
                  </div>
                  <div className="text-[11px] text-neutral-400 truncate">
                    {item.apartment}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
