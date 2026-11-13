import React from 'react';
import { FebbyLogo } from './FebbyLogo';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  return (
    <footer id="footer" className="bg-white border-t border-neutral-200 pt-10 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Logo · Links · 4 Social Circles */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <FebbyLogo />

          <nav className="flex flex-wrap items-center gap-6 text-[13px] font-medium text-neutral-600">
            <a href="#how-it-works" className="hover:text-[#11161A] transition-colors whitespace-nowrap">
              Как мы работаем
            </a>
            <a href="#services" className="hover:text-[#11161A] transition-colors whitespace-nowrap">
              Услуги
            </a>
            <a href="#why-us" className="hover:text-[#11161A] transition-colors whitespace-nowrap">
              О нас
            </a>
            <a href="#reviews" className="hover:text-[#11161A] transition-colors whitespace-nowrap">
              Контакты
            </a>
          </nav>
        </div>

        {/* Bottom Row: Copyright & Legal */}
        <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 febby · Калининград. Все права защищены.</p>
          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-neutral-700 transition-colors cursor-pointer"
            >
              Политика конфиденциальности
            </button>
            <button
              type="button"
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-neutral-700 transition-colors cursor-pointer"
            >
              Условия использования
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
