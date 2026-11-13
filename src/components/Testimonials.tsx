import React from 'react';
import { Star } from 'lucide-react';

const CLIENT_REVIEWS = [
  {
    id: 'review-1',
    quote: '«Ремонт сделали быстро и качественно. Цена не изменилась, как обещали.»',
    property: 'Квартира, 62 м² · Калининград',
  },
  {
    id: 'review-2',
    quote: '«Очень довольны результатом! Профессиональная команда.»',
    property: 'Дом, 130 м² · Калининград',
  },
  {
    id: 'review-3',
    quote: '«Удобный сервис, всё прозрачно и понятно.»',
    property: 'Квартира, 48 м² · Калининград',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="bg-white py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#11161A] tracking-tight mb-7">
          Отзывы наших клиентов
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CLIENT_REVIEWS.map((review) => (
            <article
              key={review.id}
              className="rounded-2xl border border-neutral-200 bg-white p-6 flex flex-col justify-between"
            >
              <div>
                <div
                  aria-hidden="true"
                  className="text-4xl font-black leading-none text-[#C4FB18] select-none mb-2"
                >
                  “
                </div>
                <p className="text-[14px] text-neutral-700 leading-relaxed font-medium">
                  {review.quote}
                </p>
              </div>

              <div className="mt-6 pt-2">
                <div className="text-xs font-medium text-neutral-500 tabular-nums">
                  {review.property}
                </div>

                {/* 5 Lime Stars */}
                <div className="mt-3 flex items-center gap-1" aria-label="Оценка 5 из 5">
                  {[0, 1, 2, 3, 4].map((starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-4 h-4 fill-[#A9E810] text-[#A9E810]"
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
