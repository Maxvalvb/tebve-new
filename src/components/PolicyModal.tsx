import React from 'react';
import { X } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-100 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
          {isPrivacy ? 'Политика конфиденциальности' : 'Условия использования сервиса'}
        </h3>

        <div className="text-xs sm:text-sm text-neutral-600 space-y-3 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                1. Настоящая Политика конфиденциальности действует в отношении всей информации, которую сервис tebve может получить о пользователе во время использования сайта.
              </p>
              <p>
                2. Обработка персональных данных осуществляется исключительно в целях предоставления консультаций, подбора вариантов смет и подрядных организаций, а также выполнения договорных обязательств.
              </p>
              <p>
                3. Мы гарантируем конфиденциальность предоставленных контактов (имя, телефон, параметры квартиры) и никогда не передаем данные спам-службам или неавторизованным третьим лицам.
              </p>
              <p>
                4. Пользователь вправе в любой момент отозвать свое согласие на обработку персональных данных, направив соответствующее уведомление службе поддержки.
              </p>
            </>
          ) : (
            <>
              <p>
                1. Сервис tebve предоставляет информационные и координационные услуги по подбору проектных решений, строительных бригад и формированию сметной документации.
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
          onClick={onClose}
          className="mt-6 w-full py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-black transition-colors"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};
