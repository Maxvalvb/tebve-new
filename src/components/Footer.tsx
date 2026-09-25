import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLeadModal, onOpenPolicy }) => {
  const navSections = [
    {
      title: 'О сервисе',
      links: [
        { label: 'Как это работает', href: '#how-it-works' },
        { label: 'Варианты ремонта', href: '#variants' },
        { label: 'Популярные стили', href: '#styles' },
        { label: 'Отзывы клиентов', href: '#reviews' },
        { label: 'Частые вопросы (FAQ)', href: '#faq' },
      ],
    },
    {
      title: 'Тарифы ремонта',
      links: [
        { label: 'Эконом — от 800 000 ₽', href: '#variants' },
        { label: 'Комфорт — от 1 200 000 ₽', href: '#variants' },
        { label: 'Премиум — от 2 000 000 ₽', href: '#variants' },
        { label: 'Дизайн-проект — от 1 500 000 ₽', href: '#variants' },
        { label: 'Лофт — от 1 800 000 ₽', href: '#variants' },
      ],
    },
    {
      title: 'Услуги и контроль',
      links: [
        { label: 'Авторский надзор', href: '#styles' },
        { label: 'Подбор и закупка материалов', href: '#styles' },
        { label: 'Инженерные сети и электрика', href: '#styles' },
        { label: 'Перепланировка и согласование', href: '#styles' },
        { label: 'Гарантия до 3 лет', href: '#faq' },
      ],
    },
  ];

  return (
    <footer id="contacts" className="pt-14 pb-12 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Enlarged Brand on the left + 3 organized link groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12">
          {/* Brand Info (Enlarged logo and typography) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3 group cursor-pointer mb-4">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-[#d2f835] group-hover:scale-105 transition-transform duration-200"
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(210,248,53,0.3))' }}
                >
                  <path
                    d="M12 2C7 2 3 7 3 13C3 17.5 6.5 21 11 21C16.5 21 21 16.5 21 11C21 6 16.5 2 12 2Z"
                    fill="#d2f835"
                  />
                  <path
                    d="M12 5C11 8 10 12 7 15"
                    stroke="#11161a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-[#11161a]">
                tebve
              </span>
            </a>

            <p className="text-sm text-neutral-500 max-w-sm leading-relaxed mb-6">
              Сервис подбора проверенных подрядчиков и качественного ремонта квартир под любой бюджет. Прозрачные сметы, фиксация сроков и авторский надзор.
            </p>

            <button
              onClick={() => onOpenLeadModal('Footer CTA')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#11161a] hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95 group"
            >
              <span>Оставить заявку</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Grouped Links */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {navSections.map((sec) => (
              <div key={sec.title} className="flex flex-col">
                <h4 className="text-sm font-bold text-[#11161a] tracking-tight mb-4">
                  {sec.title}
                </h4>
                <ul className="space-y-2.5">
                  {sec.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-neutral-500 hover:text-neutral-900 transition-colors block leading-snug"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © 2025 tebve. Все права защищены.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-neutral-700 transition-colors"
            >
              Политика конфиденциальности
            </button>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-neutral-700 transition-colors"
            >
              Условия использования
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
