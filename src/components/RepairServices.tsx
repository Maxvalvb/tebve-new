import React from 'react';
import { Home, Hammer, Gem, PenTool, ArrowRight } from 'lucide-react';

interface RepairServicesProps {
  onSelectService: (serviceName: string) => void;
}

const SERVICES = [
  {
    id: 'apartments',
    title: 'Ремонт квартир и домов',
    icon: Home,
  },
  {
    id: 'capital',
    title: 'Капитальный ремонт',
    icon: Hammer,
  },
  {
    id: 'designer',
    title: 'Дизайнерский ремонт',
    icon: Gem,
  },
  {
    id: 'project',
    title: 'Дизайн-проект',
    icon: PenTool,
  },
];

export const RepairServices: React.FC<RepairServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="bg-white py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#11161A] tracking-tight mb-6">
          Услуги по ремонту в Калининграде
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => onSelectService(service.title)}
                className="rounded-2xl border border-neutral-200/90 bg-neutral-50/40 hover:bg-white p-5 text-left flex flex-col justify-between min-h-[136px] hover:border-[#C4FB18] hover:shadow-sm transition-all duration-200 cursor-pointer group"
              >
                <span className="text-[#11161A] flex items-center justify-start mb-5">
                  <Icon className="w-6 h-6 stroke-[1.7]" />
                </span>

                <div className="w-full flex items-center justify-between gap-3">
                  <div className="text-[14px] sm:text-[15px] font-bold text-[#11161A] leading-snug">
                    {service.title}
                  </div>
                  <span className="w-7 h-7 rounded-full bg-[#C4FB18] text-[#11161A] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
