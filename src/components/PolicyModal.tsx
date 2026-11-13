import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, type, onClose }) => {
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

  if (!isOpen || !type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-neutral-950/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-2xl bg-white rounded-t-[28px] sm:rounded-3xl shadow-2xl border border-neutral-100 flex flex-col max-h-[92dvh] sm:max-h-[85dvh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="shrink-0 px-5 pt-3 pb-3 sm:px-8 sm:pt-7 sm:pb-4 border-b border-neutral-100/80 bg-white">
          <div
            aria-hidden="true"
            className="sm:hidden w-10 h-1 rounded-full bg-neutral-200 mx-auto mb-3"
          />
          <div className="flex items-start justify-between gap-4">
            <h3
              id="policy-modal-title"
              className="text-lg sm:text-2xl font-bold text-neutral-900 leading-tight"
            >
              {isPrivacy ? 'Политика конфиденциальности' : 'Условия использования сервиса'}
            </h3>
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

        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-8 sm:pt-5 sm:pb-8">
          <div className="text-xs sm:text-sm text-neutral-600 space-y-3 leading-relaxed">
            {isPrivacy ? (
              <>
                <p>
                  1. Настоящая Политика конфиденциальности действует в отношении всей информации, которую сервис febby.ru может получить о пользователе во время использования сайта.
                </p>
                <p>
                  2. Обработка персональных данных осуществляется исключительно в целях предоставления консультаций, подбора вариантов смет и подрядных организаций в Калининграде и области, а также выполнения договорных обязательств.
                </p>
                <p>
                  3. Мы гарантируем конфиденциальность предоставленных контактов (имя, телефон, параметры объекта) и никогда не передаем данные спам-службам или неавторизованным третьим лицам.
                </p>
                <p>
                  4. Пользователь вправе в любой момент отозвать свое согласие на обработку персональных данных, направив соответствующее уведомление службе поддержки.
                </p>
              </>
            ) : (
              <>
                <p>
                  1. Сервис febby.ru предоставляет информационные и координационные услуги по подбору проектных решений, строительных бригад в Калининграде и области и формированию сметной документации.
                </p>
                <p>
                  2. Все расчеты, представленные на сайте, носят предварительный ориентировочный характер и финализируются после выезда инженера-замерщика и проведения контрольных замеров.
                </p>
                <p>
                  3. Ремонтные работы выполняются на основании прямого официального договора подряда с фиксацией ответственности, гарантийных обязательств (до 3 лет) и поэтапного графика выплат.
                </p>
                <p>
                  4. Использование материалов сайта без предварительного письменного согласия правообладателя запрещено.
                </p>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="mt-6 w-full py-3 min-h-[44px] rounded-full bg-neutral-900 text-white text-xs sm:text-sm font-semibold hover:bg-black transition-colors cursor-pointer"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
