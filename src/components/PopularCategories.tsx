import React from 'react';
import { Building2, Home, Briefcase, Store } from 'lucide-react';

interface PopularCategoriesProps {
  onSelectCategory: (category: string) => void;
}

const CATEGORIES = [
  { id: 'apartment', label: 'Квартиры', icon: Building2 },
  { id: 'house', label: 'Дом', icon: Home },
  { id: 'office', label: 'Офис', icon: Briefcase },
  { id: 'commercial', label: 'Коммерция', icon: Store },
];

export const PopularCategories: React.FC<PopularCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#11161A] tracking-tight mb-6">
          Популярные категории
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onSelectCategory(category.label)}
                className="rounded-2xl border border-neutral-200/90 bg-neutral-50/40 hover:bg-white px-4 py-6 flex flex-col items-center justify-center text-center hover:border-[#C4FB18] hover:shadow-sm transition-all duration-200 cursor-pointer group"
              >
                <span className="text-[#11161A] flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 stroke-[1.7]" />
                </span>
                <span className="text-[15px] font-semibold text-[#11161A] whitespace-nowrap">
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
