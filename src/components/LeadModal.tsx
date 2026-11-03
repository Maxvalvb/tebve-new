import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Phone, User, RussianRuble } from 'lucide-react';
import { REPAIR_VARIANTS } from '../data/content';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
  defaultBudget?: string;
  defaultVariant?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  source = 'Оставить заявку',
  defaultBudget = '',
  defaultVariant = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState(defaultBudget);
  const [variant, setVariant] = useState(defaultVariant || 'comfort');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isOpen) {
      if (defaultBudget) setBudget(defaultBudget);
      if (defaultVariant) setVariant(defaultVariant);
      setIsSuccess(false);
      setErrors({});
    }
  }, [isOpen, defaultBudget, defaultVariant]);

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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#d3f938]/30 text-neutral-900 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-[#88b90a]" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900">
              Заявка принята!
            </h3>
            <p className="mt-2 text-sm text-neutral-600 max-w-xs leading-relaxed">
              Спасибо за обращение. Мы уже анализируем параметры и перезвоним вам в течение 15 минут для уточнения деталей.
            </p>
            <div className="mt-6 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 w-full text-left text-xs space-y-1.5 text-neutral-600">
              <div><strong className="text-neutral-900">Имя:</strong> {name}</div>
              <div><strong className="text-neutral-900">Телефон:</strong> {phone}</div>
              {budget && <div><strong className="text-neutral-900">Бюджет:</strong> {budget}</div>}
              <div>
                <strong className="text-neutral-900">Тариф:</strong>{' '}
                {REPAIR_VARIANTS.find((v) => v.id === variant)?.name || variant}
              </div>
            </div>
            <button
              onClick={onClose}
              className="mt-6 w-full py-3 rounded-full bg-[#11161a] hover:bg-black text-white text-sm font-semibold transition-colors"
            >
              Отлично, понятно
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1fbc7] text-neutral-800 text-xs font-semibold mb-2">
                <span>Подбор вариантов под ваш бюджет</span>
              </div>
              <h3 className="text-2xl font-extrabold text-neutral-900 tracking-tight">
                Оставить заявку
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-neutral-500">
                Заполните форму, и мы подготовим до 3 вариантов сметы и планировочных концепций бесплатно.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Ваше имя *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Например, Александр"
                    className={`w-full pl-10 pr-4 py-2.5 bg-neutral-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
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

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Номер телефона *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (999) 000-00-00"
                    className={`w-full pl-10 pr-4 py-2.5 bg-neutral-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
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

              {/* Variant Selection */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Предпочитаемый вариант ремонта
                </label>
                <select
                  value={variant}
                  onChange={(e) => setVariant(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 focus:bg-white transition-all"
                >
                  {REPAIR_VARIANTS.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name} ({v.price})
                    </option>
                  ))}
                  <option value="custom">Еще не определился / Консультация</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Ориентировочный бюджет
                </label>
                <div className="relative">
                  <RussianRuble className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="Например, 1 500 000 ₽"
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Comment */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Пожелания к ремонту (площадь, город, сроки)
                </label>
                <textarea
                  rows={2}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="2-комнатная новостройка, 64 м², ключи на руках..."
                  className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Security info */}
              <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-neutral-500 shrink-0" />
                <span>Ваши контакты защищены и не передаются третьим лицам.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 rounded-full bg-[#d3f938] hover:bg-[#c2e822] text-[#11161a] font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md active:scale-98 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Отправка данных...</span>
                ) : (
                  <>
                    <span>Получить расчет и консультацию</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
