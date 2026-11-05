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
    '<meta name="description" content="Разработка продающих сайтов под ключ от 25 000 ₽. Создание лендингов, корпоративных сайтов и интернет-магазинов. Срок от 2 дней. Домен и хостинг в подарок!" />\n    <meta name="keywords" content="создание сайтов, разработка сайтов под ключ, заказать лендинг, создание интернет-магазина, сайт для бизнеса, веб студия" />'
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

  fs.writeFileSync(path.join(websiteDir, 'index.html'), websiteHtml, 'utf-8');

  // 2. Also ensure 404.html is copied for SPA fallback
  fs.copyFileSync(indexPath, path.join(distDir, '404.html'));

  console.log('Successfully generated dist/website/index.html with dedicated Yandex SEO tags and 404.html!');
}

generateSeoPages();
