import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenLeadModal: (source?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Как это работает', href: '#how-it-works' },
    { label: 'Примеры', href: '#variants' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-6 h-6 flex items-center justify-center">
            {/* Organic lime seed / leaf emblem matching the mockup */}
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-[#d2f835] group-hover:scale-110 transition-transform duration-200"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(210,248,53,0.3))' }}
            >
              <path d="M12 2C7 2 3 7 3 13C3 17.5 6.5 21 11 21C16.5 21 21 16.5 21 11C21 6 16.5 2 12 2Z" fill="#d2f835" />
              <path d="M12 5C11 8 10 12 7 15" stroke="#11161a" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-bold text-xl sm:text-2xl tracking-tight text-[#11161a]">
            tebve
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenLeadModal('Header button')}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#11161a] hover:bg-black text-white text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm hover:shadow"
          >
            <span>Оставить заявку</span>
            <div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-700 hover:text-neutral-900 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-neutral-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal('Mobile Menu CTA');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#11161a] text-white text-sm font-medium"
            >
              <span>Оставить заявку</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
