/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { PopularCategories } from './components/PopularCategories';
import { CompareOffers } from './components/CompareOffers';
import { WhyChooseUs } from './components/WhyChooseUs';
import { KitchenCta } from './components/KitchenCta';
import { RepairServices } from './components/RepairServices';
import { Testimonials } from './components/Testimonials';
import { BottomLimeBanner } from './components/BottomLimeBanner';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { PolicyModal } from './components/PolicyModal';

export default function App() {
  useEffect(() => {
    const metrikaId = 114230014;
    const scriptUrl = `https://mc.yandex.ru/metrika/tag.js?id=${metrikaId}`;
    const alreadyLoaded = Array.from(document.scripts).some((s) => s.src === scriptUrl);
    if (alreadyLoaded) return;

    (function (m: any, e: any, t: any, r: any, i: any, k?: any, a?: any) {
      m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
      m[i].l = 1 * (new Date() as any);
      for (let j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) { return; }
      }
      k = e.createElement(t);
      a = e.getElementsByTagName(t)[0];
      k.async = 1;
      k.src = r;
      a.parentNode.insertBefore(k, a);
    })(window, document, 'script', scriptUrl, 'ym');

    if ((window as any).ym) {
      (window as any).ym(metrikaId, 'init', {
        ssr: true,
        webvisor: true,
        clickmap: true,
        referrer: document.referrer,
        url: location.href,
        accurateTrackBounce: true,
        trackLinks: true,
      });
    }
  }, []);

  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadSource, setLeadSource] = useState('Оставить заявку');
  const [leadService, setLeadService] = useState('Ремонт квартир и домов');
  const [leadPrice, setLeadPrice] = useState('');
  const [policyModalType, setPolicyModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenLeadModal = (
    source = 'Оставить заявку',
    defaultService = 'Ремонт квартир и домов',
    defaultPrice = ''
  ) => {
    setLeadSource(source);
    setLeadService(defaultService);
    setLeadPrice(defaultPrice);
    setIsLeadModalOpen(true);
  };

  const handleSelectCategory = (category: string) => {
    handleOpenLeadModal(`Категория: ${category}`, category, '');
  };

  const handleSelectService = (serviceName: string) => {
    handleOpenLeadModal(
      `Услуга: ${serviceName}`,
      serviceName,
      ''
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#11161A] font-sans selection:bg-[#C4FB18] selection:text-[#11161A]">
      <Navbar onOpenLeadModal={() => handleOpenLeadModal('Шапка сайта')} />

      <main className="flex-1">
        <Hero onOpenLeadModal={handleOpenLeadModal} />
        <HowItWorks />
        <PopularCategories onSelectCategory={handleSelectCategory} />
        <CompareOffers onOpenLeadModal={handleOpenLeadModal} />
        <WhyChooseUs />
        <KitchenCta onOpenLeadModal={handleOpenLeadModal} />
        <RepairServices onSelectService={handleSelectService} />
        <Testimonials />
        <BottomLimeBanner onOpenLeadModal={handleOpenLeadModal} />
      </main>

      <Footer onOpenPolicy={(type) => setPolicyModalType(type)} />

      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        source={leadSource}
        defaultService={leadService}
        defaultPrice={leadPrice}
      />

      <PolicyModal
        isOpen={policyModalType !== null}
        type={policyModalType}
        onClose={() => setPolicyModalType(null)}
      />
    </div>
  );
}
