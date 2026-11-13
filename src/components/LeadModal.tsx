import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Phone, User, RussianRuble } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
  defaultService?: string;
  defaultPrice?: string;
}

const SERVICE_OPTIONS = [
  'Ремонт квартир и домов',
  'Капитальный ремонт',
  'Дизайнерский ремонт',
  'Дизайн-проект',
  'Квартиры',
  'Дом',
  'Офис',
  'Коммерция',
  'Индивидуальный расчёт',
];

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyUtj_a2jRCbWDvubwJzXczV-MRiyxzY28ngoWKKbAcQm3Q038E9asn6JnHgyU4vkfRvw/exec';

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  source = 'Оставить заявку',
  defaultService = 'Ремонт квартир и домов',
  defaultPrice = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService);
  const [budget, setBudget] = useState(defaultPrice);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isOpen) {
      setService(defaultService || SERVICE_OPTIONS[0]);
      setBudget(defaultPrice || '');
      setIsSuccess(false);
      setErrors({});
    }
  }, [isOpen, defaultService, defaultPrice]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Укажите ваше имя';
    if (!phone.trim()) {
      newErrors.phone = 'Укажите номер телефона';
    } else if (phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Введите корректный номер (не менее 10 цифр)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const formattedService = `[Ремонт · Калининград] ${service}`;
    const formattedMessage = [
      `Город: Калининград`,
      `Источник: ${source}`,
      `Бюджет: ${budget.trim() || 'Не указан'}`,
      `Детали: ${comment.trim() || 'Без комментария'}`,
    ].join(' | ');

    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.trim(),
        phone: phone.trim(),
        service: formattedService,
        message: formattedMessage,
      }),
    }).catch((err) => {
      console.warn('Lead relay background error', err);
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 450);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-neutral-950/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-lg bg-white rounded-t-[28px] sm:rounded-3xl shadow-2xl border border-neutral-100 flex flex-col max-h-[92dvh] sm:max-h-[88dvh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile bottom-sheet handle + Sticky Header */}
        <div className="shrink-0 px-5 pt-3 pb-3 sm:px-8 sm:pt-7 sm:pb-4 border-b border-neutral-100/80 bg-white">
          <div
            aria-hidden="true"
            className="sm:hidden w-10 h-1 rounded-full bg-neutral-200 mx-auto mb-3"
          />

          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              {!isSuccess && (
                <p className="text-[11px] sm:text-xs font-semibold text-neutral-500 mb-1 truncate">
                  {source} · Калининград
                </p>
              )}
              <h3
                id="lead-modal-title"
                className="text-xl sm:text-2xl font-extrabold text-[#11161A] tracking-tight leading-tight"
              >
                {isSuccess ? 'Заявка принята!' : 'Оставить заявку'}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer shrink-0"
              aria-label="Закрыть"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Independently scrollable content area with iOS safe-area bottom padding */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-8 sm:pt-5 sm:pb-8">
          {isSuccess ? (
            <div className="py-4 sm:py-6 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#C4FB18]/30 text-[#11161A] flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-[#75a100]" />
              </div>
              <p className="text-sm text-neutral-600 max-w-xs leading-relaxed">
                Мы подбираем подходящие предложения от проверенных бригад в Калининграде и свяжемся с вами в ближайшее время.
              </p>
              <div className="mt-5 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 w-full text-left text-xs space-y-1.5 text-neutral-600">
                <div><strong className="text-[#11161A]">Имя:</strong> {name}</div>
                <div><strong className="text-[#11161A]">Телефон:</strong> {phone}</div>
                <div><strong className="text-[#11161A]">Выбор:</strong> {service}</div>
                {budget && <div><strong className="text-[#11161A]">Бюджет:</strong> {budget}</div>}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 w-full py-3.5 min-h-[48px] rounded-full bg-[#11161A] hover:bg-black text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                Готово
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                Заполните контакты и параметры объекта — вы получите предложения по стоимости от проверенных бригад в Калининграде.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Ваше имя *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Александр"
                      className={`w-full pl-10 pr-3.5 py-2.5 bg-neutral-50 border rounded-xl text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-neutral-200 focus:ring-neutral-900/10 focus:border-neutral-900'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Номер телефона *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (999) 000-00-00"
                      className={`w-full pl-10 pr-3.5 py-2.5 bg-neutral-50 border rounded-xl text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-neutral-200 focus:ring-neutral-900/10 focus:border-neutral-900'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Категория или услуга
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 focus:bg-white transition-all"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Ориентировочный бюджет
                  </label>
                  <div className="relative">
                    <RussianRuble className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="Например, 780 000 ₽"
                      className="w-full pl-10 pr-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Детали объекта (площадь, район, сроки)
                </label>
                <textarea
                  rows={2}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Квартира 62 м² в Калининграде, требуется капитальный ремонт..."
                  className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 focus:bg-white transition-all resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-neutral-500 shrink-0" />
                <span>Ваши контакты защищены и не передаются третьим лицам.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-1 py-3.5 min-h-[48px] rounded-full bg-[#C4FB18] hover:bg-[#b5eb0e] text-[#11161A] font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-50 active:scale-[0.99]"
              >
                <span>{isSubmitting ? 'Отправка...' : 'Получить предложения'}</span>
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
