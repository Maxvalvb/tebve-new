import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FebbyLogo } from './FebbyLogo';

interface NavbarProps {
  onOpenLeadModal: (source?: string) => void;
}

const NAV_LINKS = [
  { label: 'Как мы работаем', href: '#how-it-works' },
  { label: 'Наши услуги', href: '#services' },
  { label: 'О нас', href: '#why-us' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#footer' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand Mark */}
        <FebbyLogo />

        {/* Zone 2: 5 Single-Line Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-neutral-600">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#11161A] transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary CTA Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenLeadModal('Шапка сайта')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#C4FB18] hover:bg-[#b5eb0e] text-[#11161A] text-[13px] font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Оставить заявку
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-800 hover:bg-neutral-50 transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100 px-4 py-5 space-y-3 shadow-lg">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-[#11161A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenLeadModal('Мобильное меню');
            }}
            className="w-full py-3 rounded-full bg-[#C4FB18] hover:bg-[#b5eb0e] text-[#11161A] text-sm font-bold transition-colors cursor-pointer"
          >
            Оставить заявку
          </button>
        </div>
      )}
    </header>
  );
};
