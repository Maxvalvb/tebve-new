import fs from 'fs';
import path from 'path';

export function generateSeoPages() {
  const distDir = path.resolve('dist');
  if (!fs.existsSync(distDir)) return;

  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) return;

  const html = fs.readFileSync(indexPath, 'utf-8');

  // 1. Create dist/website/index.html with dedicated web development metadata for Yandex
  const websiteDir = path.join(distDir, 'website');
  if (!fs.existsSync(websiteDir)) {
    fs.mkdirSync(websiteDir, { recursive: true });
  }

  let websiteHtml = html;

  // Title & description for Yandex Direct / Search
  websiteHtml = websiteHtml.replace(
    '<title>febby.ru — Ремонт квартир под ваш бюджет</title>',
    '<title>Создание и разработка сайтов под ключ от 25 000 ₽ — febby.ru</title>'
  );

  websiteHtml = websiteHtml.replace(
    '<meta name="description" content="febby.ru — сервис подбора проверенных подрядчиков и вариантов ремонта квартир под любой бюджет. Прозрачные сметы, реальные сроки и авторский надзор." />',
    '<meta name="description" content="Разработка продающих сайтов под ключ от 25 000 ₽. Создание лендингов, корпоративных сайтов и интернет-магазинов. Срок от 2 дней. Домен и хостинг в подарок!" />\n    <meta name="keywords" content="создание сайтов, разработка сайтов под ключ, заказать лендинг, создание интернет-магазина, сайт для бизнеса, веб студия, купить сайт, веб разработка, разработка лендинга" />'
  );

  // Canonical URL
  websiteHtml = websiteHtml.replace(
    '<link rel="canonical" href="https://febby.ru/" />',
    '<link rel="canonical" href="https://febby.ru/website" />'
  );

  // OpenGraph metadata
  websiteHtml = websiteHtml.replace(
    '<meta property="og:title" content="febby.ru — Ремонт квартир под ваш бюджет" />',
    '<meta property="og:title" content="Создание и разработка сайтов под ключ от 25 000 ₽ — febby.ru" />'
  );

  websiteHtml = websiteHtml.replace(
    '<meta property="og:description" content="febby.ru — сервис подбора проверенных подрядчиков и вариантов ремонта квартир под любой бюджет. Прозрачные сметы, реальные сроки и авторский надзор." />',
    '<meta property="og:description" content="Разработка продающих сайтов под ключ от 25 000 ₽. Создание лендингов, корпоративных сайтов и интернет-магазинов. Срок от 2 дней. Домен и хостинг в подарок!" />'
  );

  websiteHtml = websiteHtml.replace(
    '<meta property="og:url" content="https://febby.ru/" />',
    '<meta property="og:url" content="https://febby.ru/website" />'
  );

  // Schema.org metadata
  websiteHtml = websiteHtml.replace(
    '"@type": "HomeAndConstructionBusiness"',
    '"@type": "ProfessionalService",\n      "serviceType": "Web Development",\n      "priceRange": "от 25 000 ₽"'
  );

  websiteHtml = websiteHtml.replace(
    '"name": "febby.ru"',
    '"name": "febby.ru — Разработка сайтов под ключ"'
  );

  websiteHtml = websiteHtml.replace(
    '"description": "Сервис подбора проверенных подрядчиков и вариантов ремонта квартир под любой бюджет. Прозрачные сметы, реальные сроки и авторский надзор."',
    '"description": "Разработка продающих сайтов под ключ от 25 000 ₽. Создание лендингов, корпоративных сайтов и интернет-магазинов. Срок от 2 дней. Домен и хостинг в подарок!"'
  );

  // Rich Static Content inside <div id="root"> specifically for Yandex Search & Direct Bot
  // When browser executes React (createRoot), React automatically replaces this content smoothly.
  const staticContent = `
    <header style="padding:20px;text-align:center;">
      <h1>Разработка и создание сайтов под ключ — febby.ru</h1>
      <p>Создаем современные продающие сайты для бизнеса от 25 000 ₽. Срок от 2 дней. Домен и надежный хостинг в подарок на 1 год.</p>
    </header>
    <main style="padding:20px;max-width:1200px;margin:0 auto;">
      <section>
        <h2>Наши услуги по созданию сайтов</h2>
        <ul>
          <li><strong>Лендинги:</strong> Одностраничные сайты с высокой конверсией для продажи товаров и услуг. Быстрый запуск от 2 дней.</li>
          <li><strong>Корпоративные сайты:</strong> Презентабельные многостраничные сайты для бизнеса, формирующие доверие и статус компании.</li>
          <li><strong>Интернет-магазины:</strong> Полноценные каталоги товаров, корзина, фильтры и интеграция онлайн-оплаты.</li>
          <li><strong>SEO-оптимизация:</strong> Базовая внутренняя настройка сайта под продвижение в Яндекс и Google для органического трафика.</li>
          <li><strong>Хостинг и Домен:</strong> Бесплатное размещение и регистрация домена в подарок на 1 год.</li>
        </ul>
      </section>
      <section>
        <h2>Тарифы и стоимость разработки</h2>
        <p><strong>Тариф «Сайт под ключ»:</strong> 25 000 ₽. Срок от 2 дней. Включает адаптивный дизайн для ПК и смартфонов, базовое SEO, домен и хостинг на 1 год.</p>
      </section>
      <section>
        <h2>Наше портфолио проектов</h2>
        <p>NovaHome — сайт строительной компании, Landa — интернет-магазин модной одежды, Delmio — сайт ресторана высокой кухни, Nexora — сервис логистики и грузоперевозок.</p>
      </section>
      <section>
        <h2>Как мы работаем</h2>
        <p>1. Обсуждение и ТЗ. 2. Проектирование и разработка. 3. Презентация и правки. 4. Запуск сайта на вашем домене.</p>
      </section>
      <section>
        <h2>Оставить заявку на создание сайта</h2>
        <p>Обсудим ваш проект, рассчитаем точную смету и ответим в течение 15 минут.</p>
      </section>
    </main>
  `;

  websiteHtml = websiteHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${staticContent}</div>`
  );

  fs.writeFileSync(path.join(websiteDir, 'index.html'), websiteHtml, 'utf-8');

  // 2. Also ensure 404.html is copied for SPA fallback
  fs.copyFileSync(indexPath, path.join(distDir, '404.html'));

  console.log('Successfully generated dist/website/index.html with pre-rendered SEO content for Yandex Direct!');
}

generateSeoPages();
