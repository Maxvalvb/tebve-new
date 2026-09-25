import React from 'react';
import {
  Compass,
  Eye,
  Layers,
  Armchair,
  FileCheck,
  Wrench,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { ADDITIONAL_SERVICES, ServiceItem } from '../data/content';

interface AdditionalServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenAllServicesModal: () => void;
}

export const AdditionalServices: React.FC<AdditionalServicesProps> = ({
  onSelectService,
  onOpenAllServicesModal,
}) => {
  const getIcon = (name: string) => {
    const props = { className: 'w-5 h-5 text-neutral-800 stroke-[1.75]' };
    switch (name) {
      case 'Compass':
        return <Compass {...props} />;
      case 'Eye':
        return <Eye {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Armchair':
        return <Armchair {...props} />;
      case 'FileCheck':
        return <FileCheck {...props} />;
      case 'Wrench':
        return <Wrench {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#11161a]">
              Дополнительные услуги
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-500 max-w-2xl leading-relaxed">
              Мы предлагаем не только ремонт, но и всё, что нужно для комфортного результата.
            </p>
          </div>

          <button
            onClick={onOpenAllServicesModal}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-black transition-colors self-start md:self-auto shrink-0"
          >
            <span>Все услуги</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 2x4 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ADDITIONAL_SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group bg-white border border-neutral-200/90 hover:border-neutral-900/40 rounded-2xl p-6 min-h-[170px] flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-neutral-50 border border-neutral-200/70 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getIcon(service.iconName)}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-black transition-colors">
                  {service.name}
                </h3>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-neutral-400 group-hover:text-neutral-900 transition-colors">
                <span>Подробнее</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
