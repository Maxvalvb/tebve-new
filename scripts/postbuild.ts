import fs from 'fs';
import path from 'path';

export function generateSeoPages() {
  const distDir = path.resolve('dist');
  if (!fs.existsSync(distDir)) return;

  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) return;

  const baseHtml = fs.readFileSync(indexPath, 'utf-8');

  // 1. Create dist/website/index.html with dedicated general web-development metadata for Yandex
  // Strip all Kaliningrad geo/keywords so /website works nationwide without regional limitation.
  const websiteDir = path.join(distDir, 'website');
  if (!fs.existsSync(websiteDir)) {
    fs.mkdirSync(websiteDir, { recursive: true });
  }

  let websiteHtml = baseHtml;

  // Replace Title, Description & Keywords, and strip Kaliningrad geo meta tags
  websiteHtml = websiteHtml.replace(
    /<title>[\s\S]*?<\/title>/,
    '<title>Создание и разработка сайтов под ключ от 30 000 ₽ — febby.ru</title>'
  );

  websiteHtml = websiteHtml.replace(
    /<meta name="description"[^>]*>/,
    '<meta name="description" content="Разработка продающих сайтов под ключ от 30 000 ₽. Создание лендингов, корпоративных сайтов и интернет-магазинов. Срок от 2 дней. Домен и хостинг в подарок!" />'
  );

  websiteHtml = websiteHtml.replace(
    /<meta name="keywords"[^>]*>/,
    '<meta name="keywords" content="создание сайтов, разработка сайтов под ключ, заказать лендинг, создание интернет-магазина, сайт для бизнеса, веб студия, купить сайт, веб разработка, разработка лендинга" />'
  );

  websiteHtml = websiteHtml.replace(/\s*<meta name="geo\.region"[^>]*>/g, '');
  websiteHtml = websiteHtml.replace(/\s*<meta name="geo\.placename"[^>]*>/g, '');

  // Canonical URL
  websiteHtml = websiteHtml.replace(
    '<link rel="canonical" href="https://febby.ru/" />',
    '<link rel="canonical" href="https://febby.ru/website" />'
  );

  // OpenGraph & Twitter metadata for /website
  websiteHtml = websiteHtml.replace(
    /<meta property="og:title"[^>]*>/,
    '<meta property="og:title" content="Создание и разработка сайтов под ключ от 30 000 ₽ — febby.ru" />'
  );
  websiteHtml = websiteHtml.replace(
    /<meta property="og:description"[^>]*>/,
    '<meta property="og:description" content="Разработка продающих сайтов под ключ от 30 000 ₽. Создание лендингов, корпоративных сайтов и интернет-магазинов. Срок от 2 дней. Домен и хостинг в подарок!" />'
  );
  websiteHtml = websiteHtml.replace(
    '<meta property="og:url" content="https://febby.ru/" />',
    '<meta property="og:url" content="https://febby.ru/website" />'
  );
  websiteHtml = websiteHtml.replace(
    /<meta name="twitter:title"[^>]*>/,
    '<meta name="twitter:title" content="Создание и разработка сайтов под ключ от 30 000 ₽ — febby.ru" />'
  );
  websiteHtml = websiteHtml.replace(
    /<meta name="twitter:description"[^>]*>/,
    '<meta name="twitter:description" content="Разработка продающих сайтов под ключ от 30 000 ₽. Создание лендингов, корпоративных сайтов и интернет-магазинов. Срок от 2 дней. Домен и хостинг в подарок!" />'
  );

  // Schema.org metadata for /website (RU nationwide without Kaliningrad)
  const websiteSchema = `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "serviceType": "Web Development",
      "name": "febby.ru — Разработка сайтов под ключ",
      "url": "https://febby.ru/website",
      "logo": "https://febby.ru/android-chrome-192x192.png",
      "image": "https://febby.ru/android-chrome-192x192.png",
      "description": "Разработка продающих сайтов под ключ от 30 000 ₽. Создание лендингов, корпоративных сайтов и интернет-магазинов. Срок от 2 дней. Домен и хостинг в подарок!",
      "priceRange": "от 30 000 ₽",
      "areaServed": "RU",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "RU"
      }
    }
    </script>`;

  websiteHtml = websiteHtml.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    websiteSchema
  );

  // Rich Static Content inside <div id="root"> specifically for Yandex Search & Direct Bot on /website
  const websiteStaticContent = `
    <header style="padding:20px;text-align:center;">
      <h1>Разработка и создание сайтов под ключ — febby.ru</h1>
      <p>Создаем современные продающие сайты для бизнеса от 30 000 ₽. Срок от 2 дней. Домен и надежный хостинг в подарок на 1 год.</p>
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
        <p><strong>Тариф «Сайт под ключ»:</strong> 30 000 ₽. Срок от 2 дней. Включает адаптивный дизайн для ПК и смартфонов, базовое SEO, домен и хостинг на 1 год.</p>
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

  // Insert Yandex.Metrika counter 114060460 exclusively for website section
  const metrikaScript = `
    <!-- Yandex.Metrika counter for febby.ru/website -->
    <script type="text/javascript">
        (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=114060460', 'ym');

        ym(114060460, 'init', {ssr:true, webvisor:true, clickmap:true, referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/114060460" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
  `;

  websiteHtml = websiteHtml.replace('</head>', `${metrikaScript}\n  </head>`);
  websiteHtml = websiteHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${websiteStaticContent}</div>`
  );

  fs.writeFileSync(path.join(websiteDir, 'index.html'), websiteHtml, 'utf-8');

  // 2. Inject Rich Static SEO Content specifically for Kaliningrad repair landing (febby.ru/)
  const repairStaticContent = `
    <header style="padding:20px;text-align:center;">
      <h1>Ремонт квартир, домов и офисов в Калининграде под ваш бюджет — febby.ru</h1>
      <p>Оставьте заявку на расчёт и получите предложения от проверенных строительных команд и бригад в Калининграде и Калининградской области.</p>
    </header>
    <main style="padding:20px;max-width:1200px;margin:0 auto;">
      <section>
        <h2>Как работает сервис подбора ремонта в Калининграде</h2>
        <ol>
          <li>Вы оставляете заявку и получаете расчёты под ваш бюджет (например: «У нас есть бюджет 780 000 ₽ — какие варианты можете предложить?»).</li>
          <li>Проверенные бригады и ремонтные компании Калининграда предлагают сметы и сроки.</li>
          <li>Вы сравниваете цены, условия и выбираете лучшее предложение.</li>
        </ol>
      </section>
      <section>
        <h2>Популярные категории объектов в Калининграде</h2>
        <ul>
          <li>Ремонт квартир в новостройках и вторичном жилье Калининграда</li>
          <li>Ремонт частных домов и коттеджей в Калининградской области</li>
          <li>Ремонт и отделка офисов в Калининграде</li>
          <li>Ремонт коммерческих помещений в Калининграде</li>
        </ul>
      </section>
      <section>
        <h2>Услуги по ремонту в Калининграде</h2>
        <ul>
          <li><strong>Ремонт квартир и домов:</strong> чистовая и черновая отделка под ключ в Калининграде.</li>
          <li><strong>Капитальный ремонт:</strong> полная замена коммуникаций, выравнивание стен, электрика и сантехника в Калининграде.</li>
          <li><strong>Дизайнерский ремонт:</strong> реализация современных интерьеров в Калининграде с контролем качества.</li>
          <li><strong>Дизайн-проект:</strong> планировка, 3D-визуализация и рабочие чертежи для ремонта квартиры или дома в Калининграде.</li>
        </ul>
      </section>
      <section>
        <h2>Почему выбирают febby в Калининграде</h2>
        <p>Проверенные исполнители Калининграда, прозрачные цены и финальная стоимость заранее, экономия времени на поиск мастеров и контроль процесса онлайн.</p>
      </section>
    </main>
  `;

  // Insert Yandex.Metrika counter 114230014 exclusively for febby.ru/ (repair site)
  const mainMetrikaScript = `
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=114230014', 'ym');

        ym(114230014, 'init', {ssr:true, webvisor:true, clickmap:true, referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/114230014" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
  `;

  let mainHtml = baseHtml.replace('</head>', `${mainMetrikaScript}\n  </head>`);
  mainHtml = mainHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${repairStaticContent}</div>`
  );
  fs.writeFileSync(indexPath, mainHtml, 'utf-8');

  // 3. Copy clean neutral SPA fallback 404.html (counter initializes per route in React)
  fs.writeFileSync(path.join(distDir, '404.html'), baseHtml, 'utf-8');

  // 4. Clean build-unrelated files copied from public/ (recursive zip & chat attachments)
  const distZip = path.join(distDir, 'febby_pages_files.zip');
  if (fs.existsSync(distZip)) fs.rmSync(distZip, { force: true });
  const distAistudio = path.join(distDir, 'assets', 'aistudio');
  if (fs.existsSync(distAistudio)) fs.rmSync(distAistudio, { recursive: true, force: true });

  console.log('Successfully generated SEO HTML & isolated Metrika counters (114230014 on /, 114060460 on /website)!');
}

generateSeoPages();
