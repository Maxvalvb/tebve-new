import React from 'react';
import { X, Star, ThumbsUp } from 'lucide-react';

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLeadModal: () => void;
}

export const ReviewsModal: React.FC<ReviewsModalProps> = ({
  isOpen,
  onClose,
  onOpenLeadModal,
}) => {
  if (!isOpen) return null;

  const allReviews = [
    {
      id: 'rev-1',
      quote: '«Очень удобно, что не нужно самому искать подрядчиков. Предложили несколько вариантов и помогли с оформлением. Все сметы были зафиксированы заранее, без сюрпризов в процессе.»',
      author: 'Алексей К.',
      initials: 'АК',
      apartment: 'Ремонт 2-комнатной квартиры (68 м²)',
      date: '14 августа 2025',
      rating: 5,
    },
    {
      id: 'rev-2',
      quote: '«Быстро подобрали варианты, всё понятно и прозрачно. Сметы соответствовали реальности, ремонт сделали в срок. Особенно порадовал авторский надзор дизайнера!»',
      author: 'Мария С.',
      initials: 'МС',
      apartment: 'Ремонт студии (34 м²)',
      date: '28 июля 2025',
      rating: 5,
    },
    {
      id: 'rev-3',
      quote: '«Понравился подход — всё по делу, без лишней воды. Нашли именно то, что нужно. Бригада работала аккуратно, соседи даже ни разу не жаловались на шум. Рекомендую!»',
      author: 'Игорь П.',
      initials: 'ИП',
      apartment: 'Ремонт 3-комнатной квартиры (92 м²)',
      date: '3 июня 2025',
      rating: 5,
    },
    {
      id: 'rev-4',
      quote: '«Качественный ремонт и отличная команда. Помогли сэкономить на чистовых материалах благодаря оптовым скидкам и при этом сделали всё на высшем уровне.»',
      author: 'Елена В.',
      initials: 'ЕВ',
      apartment: 'Ремонт квартиры-студии (41 м²)',
      date: '19 мая 2025',
      rating: 5,
    },
    {
      id: 'rev-5',
      quote: '«Заказывали ремонт под ключ в новостройке. Переживали за сроки, так как поджимала аренда жилья. Сдали даже на 4 дня раньше намеченного срока по договору. Спасибо!»',
      author: 'Дмитрий и Ольга М.',
      initials: 'ДО',
      apartment: 'Евротрешка (75 м²)',
      date: '2 мая 2025',
      rating: 5,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1fbc7] text-neutral-800 text-xs font-semibold mb-2">
            <span>Истории заказчиков</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Отзывы наших клиентов
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Средняя оценка качества работы 4.9 из 5.0 на основе более 140 сданных объектов.
          </p>
        </div>

        <div className="space-y-4">
          {allReviews.map((rev) => (
            <div
              key={rev.id}
              className="border border-neutral-100 rounded-2xl p-5 bg-neutral-50/50"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f0f3f6] border border-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-800 shrink-0">
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                      {rev.author}
                    </h4>
                    <p className="text-[11px] text-neutral-500">{rev.apartment}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#a6d818] text-[#a6d818]" />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {rev.quote}
              </p>

              <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400">
                <span>{rev.date}</span>
                <span className="flex items-center gap-1 text-neutral-500">
                  <ThumbsUp className="w-3 h-3 text-[#85b507]" /> Проверенный заказчик
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-neutral-500 text-center sm:text-left">
            Хотите такой же предсказуемый и качественный ремонт?
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenLeadModal();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#11161a] hover:bg-black text-white text-xs font-semibold transition-colors"
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
};
