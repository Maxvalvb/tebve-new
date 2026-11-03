/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { CtaBannerDark } from './components/CtaBannerDark';
import { RepairVariants } from './components/RepairVariants';
import { Testimonials } from './components/Testimonials';
import { IndividualApproach } from './components/IndividualApproach';
import { PopularStyles } from './components/PopularStyles';
import { AdditionalServices } from './components/AdditionalServices';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { VariantsModal } from './components/VariantsModal';
import { StylesModal } from './components/StylesModal';
import { ServicesModal } from './components/ServicesModal';
import { ReviewsModal } from './components/ReviewsModal';
import { PolicyModal } from './components/PolicyModal';
import { RepairVariant, StyleItem, ServiceItem } from './data/content';

export default function App() {
  // Modal states
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalSource, setLeadModalSource] = useState('Общая заявка');
  const [leadModalBudget, setLeadModalBudget] = useState('');
  const [leadModalVariant, setLeadModalVariant] = useState('');

  const [isVariantsModalOpen, setIsVariantsModalOpen] = useState(false);
  const [isStylesModalOpen, setIsStylesModalOpen] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);
  const [policyModalType, setPolicyModalType] = useState<'privacy' | 'terms' | null>(null);

  // Handlers
  const handleOpenLeadModal = (source = 'Оставить заявку', defaultBudget = '', defaultVariant = '') => {
    setLeadModalSource(source);
    setLeadModalBudget(defaultBudget);
    setLeadModalVariant(defaultVariant);
    setIsLeadModalOpen(true);
  };

  const handleSelectVariant = (variant: RepairVariant) => {
    handleOpenLeadModal(`Тариф: ${variant.name}`, variant.price, variant.id);
  };

  const handleSelectStyle = (style: StyleItem) => {
    handleOpenLeadModal(`Стиль: ${style.name}`);
  };

  const handleSelectService = (service: ServiceItem) => {
    handleOpenLeadModal(`Услуга: ${service.name}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-[#d4f63c] selection:text-black">
      {/* 1. Header / Navbar */}
      <Navbar onOpenLeadModal={handleOpenLeadModal} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenLeadModal={handleOpenLeadModal} />

        {/* 3. Section: Как это работает? */}
        <HowItWorks />

        {/* 4. Section: Dark Banner: Не знаете, с чего начать? */}
        <CtaBannerDark onOpenLeadModal={handleOpenLeadModal} />

        {/* 5. Section: Варианты ремонта под ваш бюджет */}
        <RepairVariants
          onSelectVariant={handleSelectVariant}
          onOpenAllVariantsModal={() => setIsVariantsModalOpen(true)}
        />

        {/* 6. Section: Подход к каждому клиенту — индивидуально */}
        <IndividualApproach />

        {/* 7. Section: Популярные стили */}
        <PopularStyles
          onSelectStyle={handleSelectStyle}
          onOpenAllStylesModal={() => setIsStylesModalOpen(true)}
        />

        {/* 8. Section: Дополнительные услуги */}
        <AdditionalServices
          onSelectService={handleSelectService}
          onOpenAllServicesModal={() => setIsServicesModalOpen(true)}
        />

        {/* 9. Section: Частые вопросы (FAQ) */}
        <FaqSection onOpenLeadModal={handleOpenLeadModal} />

        {/* 10. Section: Отзывы наших клиентов (перед самым футером) */}
        <Testimonials onOpenAllReviews={() => setIsReviewsModalOpen(true)} />
      </main>

      {/* 11. Footer */}
      <Footer
        onOpenLeadModal={handleOpenLeadModal}
        onOpenPolicy={(type) => setPolicyModalType(type)}
      />

      {/* Interactive Modals */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        source={leadModalSource}
        defaultBudget={leadModalBudget}
        defaultVariant={leadModalVariant}
      />

      <VariantsModal
        isOpen={isVariantsModalOpen}
        onClose={() => setIsVariantsModalOpen(false)}
        onSelectVariant={handleSelectVariant}
      />

      <StylesModal
        isOpen={isStylesModalOpen}
        onClose={() => setIsStylesModalOpen(false)}
        onSelectStyle={handleSelectStyle}
      />

      <ServicesModal
        isOpen={isServicesModalOpen}
        onClose={() => setIsServicesModalOpen(false)}
        onSelectService={handleSelectService}
      />

      <ReviewsModal
        isOpen={isReviewsModalOpen}
        onClose={() => setIsReviewsModalOpen(false)}
        onOpenLeadModal={() => handleOpenLeadModal('После просмотра отзывов')}
      />

      <PolicyModal
        isOpen={policyModalType !== null}
        type={policyModalType}
        onClose={() => setPolicyModalType(null)}
      />
    </div>
  );
}
