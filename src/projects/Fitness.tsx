import React from "react";
import {
  Dumbbell,
  Zap,
  Flame,
  ArrowRight,
  Crosshair,
  Activity,
  Timer,
  ChevronRight,
} from "lucide-react";
export default function Fitness() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white font-sans selection:bg-[#CCFF00] selection:text-black overflow-x-hidden">
      {" "}
      {/* 1. Header (Brutalist) */}{" "}
      <header className="fixed top-0 w-full z-50 bg-[#09090b] border-b-4 border-white">
        {" "}
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          {" "}
          <div className="text-3xl font-black tracking-tighter uppercase text-[#CCFF00] italic transform -skew-x-12">
            {" "}
            IRON<span className="text-white">FIR</span>{" "}
          </div>{" "}
          <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-white">
            {" "}
            <a href="#programs" className="transform inline-block">
              Тренировки
            </a>{" "}
            <a href="#team" className="transform inline-block">
              Команда
            </a>{" "}
            <a href="#schedule" className="transform inline-block">
              Расписание
            </a>{" "}
            <a href="#pricing" className="transform inline-block">
              Цены
            </a>{" "}
          </nav>{" "}
          <a
            href="#pricing"
            className="bg-[#CCFF00] text-black px-6 py-3 text-sm font-black uppercase tracking-widest transform -skew-x-12 shadow-[4px_4px_0px_white] active:translate-x-1 active:translate-y-1 active:shadow-none inline-block"
          >
            {" "}
            Вступить{" "}
          </a>{" "}
        </div>{" "}
      </header>{" "}
      <main className="pt-20">
        {" "}
        {/* 2. Hero (High Energy) */}{" "}
        <section className="relative min-h-[calc(100svh-5rem)] flex items-center justify-center overflow-hidden border-b-4 border-white">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
            alt="Gym Background"
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale"
          />{" "}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]/50" />{" "}
          <div className="relative z-10 text-center px-4 md:px-6 w-full max-w-[1600px] mx-auto flex flex-col items-center">
            {" "}
            <div className="inline-block bg-[#CCFF00] text-black px-3 sm:px-4 py-1 font-black uppercase tracking-widest text-xs sm:text-sm md:text-base transform -skew-x-12 mb-6 sm:mb-8 shadow-[4px_4px_0px_white]">
              {" "}
              Хватит искать оправдания{" "}
            </div>{" "}
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase italic tracking-tighter leading-[0.9] sm:leading-[0.85] text-white mb-6 sm:mb-8 transform -skew-x-6 drop-shadow-[4px_4px_0px_#CCFF00] sm:drop-shadow-[8px_8px_0px_#CCFF00]">
              {" "}
              Построй
              <br />
              Свое
              <br />
              Наследие{" "}
            </h1>{" "}
            <p className="text-white/80 text-sm sm:text-lg md:text-2xl font-bold uppercase tracking-wide mb-8 sm:mb-12 max-w-2xl mx-auto bg-black/50 p-3 sm:p-4 border-l-4 border-[#CCFF00]">
              {" "}
              Жесткие тренировки. Реальные результаты. Никакого гламура — только
              железо и пот.{" "}
            </p>{" "}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
              {" "}
              <a
                href="#pricing"
                className="bg-[#CCFF00] text-black px-6 sm:px-8 md:px-12 py-3.5 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-black uppercase tracking-widest transform -skew-x-12 shadow-[4px_4px_0px_white] sm:shadow-[8px_8px_0px_white] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-3"
              >
                {" "}
                Начать сейчас <Flame size={20} className="sm:w-6 sm:h-6" />{" "}
              </a>{" "}
              <a
                href="#contact"
                className="bg-transparent border-2 sm:border-4 border-white text-white px-6 sm:px-8 md:px-12 py-3.5 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-black uppercase tracking-widest transform -skew-x-12 shadow-[4px_4px_0px_#CCFF00] sm:shadow-[8px_8px_0px_#CCFF00] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-3"
              >
                {" "}
                Пробное занятие{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* 3. Marquee */}
        <section className="bg-[#CCFF00] border-b-4 border-white py-4 overflow-hidden flex items-center">
          {" "}
          <div className="flex whitespace-nowrap text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-black animate-[marquee_20s_linear_infinite]">
            {" "}
            <span className="mx-8 flex items-center gap-4">
              <Zap size={32} /> NO PAIN NO GAIN
            </span>{" "}
            <span className="mx-8 flex items-center gap-4">
              <Zap size={32} /> LIFT HEAVY
            </span>{" "}
            <span className="mx-8 flex items-center gap-4">
              <Zap size={32} /> TRAIN HARD
            </span>{" "}
            <span className="mx-8 flex items-center gap-4">
              <Zap size={32} /> NO EXCUSES
            </span>{" "}
            <span className="mx-8 flex items-center gap-4">
              <Zap size={32} /> NO PAIN NO GAIN
            </span>{" "}
            <span className="mx-8 flex items-center gap-4">
              <Zap size={32} /> LIFT HEAVY
            </span>{" "}
            <span className="mx-8 flex items-center gap-4">
              <Zap size={32} /> TRAIN HARD
            </span>{" "}
            <span className="mx-8 flex items-center gap-4">
              <Zap size={32} /> NO EXCUSES
            </span>{" "}
          </div>{" "}
        </section>{" "}
        {/* 4. Programs (Brutalist Grid) */}{" "}
        <section
          id="programs"
          className="py-16 md:py-32 px-4 md:px-6 max-w-[1600px] mx-auto border-b-4 border-white"
        >
          {" "}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            {" "}
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter transform -skew-x-6">
              {" "}
              Направления
              <br />
              <span className="text-[#CCFF00]">Подготовки</span>{" "}
            </h2>{" "}
            <a
              href="#programs"
              className="text-sm font-black uppercase tracking-widest text-white flex items-center gap-2 border-b-4 border-[#CCFF00] pb-1 transform -skew-x-12"
            >
              {" "}
              Смотреть все <ArrowRight size={20} />{" "}
            </a>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {" "}
            {[
              {
                title: "Кроссфит",
                icon: <Activity size={48} />,
                desc: "Высокоинтенсивный функциональный тренинг. Сила, выносливость, скорость.",
              },
              {
                title: "Пауэрлифтинг",
                icon: <Dumbbell size={48} />,
                desc: "Базовые движения со свободными весами. Максимальная сила и масса.",
              },
              {
                title: "Боевые искусства",
                icon: <Crosshair size={48} />,
                desc: "ММА, бокс, тайский бокс. Техника, реакция, ударная мощь.",
              },
              {
                title: "Кондиция",
                icon: <Timer size={48} />,
                desc: "Жиросжигающие интервальные тренировки. Рельеф и выносливость.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-[#18181b] border-4 border-white p-6 md:p-8 transform group cursor-pointer"
              >
                {" "}
                <div className="text-[#CCFF00] mb-6"> {p.icon} </div>{" "}
                <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-4">
                  {p.title}
                </h3>{" "}
                <p className="text-white/70 font-bold text-sm md:text-base leading-relaxed">
                  {p.desc}
                </p>{" "}
                <div className="mt-8 flex items-center gap-2 text-[#CCFF00] font-black uppercase tracking-widest text-xs">
                  {" "}
                  Подробнее <ChevronRight size={16} />{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </section>{" "}
        {/* 5. Trainers (High Contrast) */}{" "}
        <section
          id="team"
          className="py-16 md:py-32 px-4 md:px-6 max-w-[1600px] mx-auto border-b-4 border-white"
        >
          {" "}
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter transform -skew-x-6 mb-12 md:mb-16 text-center">
            {" "}
            Наши <span className="text-[#CCFF00]">Монстры</span>{" "}
          </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {" "}
            {[
              {
                name: "Елена",
                spec: "Главный тренер / Кроссфит",
                img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
              },
              {
                name: "Андрей",
                spec: "Тяжелая атлетика",
                img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
              },
              {
                name: "Максим",
                spec: "Бокс / ММА",
                img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="relative group overflow-hidden border-4 border-white bg-[#CCFF00]"
              >
                {" "}
                <div className="aspect-[3/4] overflow-hidden mix-blend-luminosity grayscale">
                  {" "}
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />{" "}
                </div>{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />{" "}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform translate-y-4">
                  {" "}
                  <div className="bg-[#CCFF00] text-black text-xs font-black uppercase tracking-widest px-3 py-1 inline-block transform -skew-x-12 mb-3">
                    {" "}
                    {t.spec}{" "}
                  </div>{" "}
                  <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight text-white drop-shadow-[4px_4px_0px_black]">
                    {t.name}
                  </h3>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </section>{" "}
        {/* 6. Pricing (Huge Numbers) */}{" "}
        <section
          id="pricing"
          className="py-16 md:py-32 px-4 md:px-6 max-w-[1600px] mx-auto border-b-4 border-white"
        >
          {" "}
          <div className="text-center mb-12 md:mb-24">
            {" "}
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter transform -skew-x-6 mb-6">
              {" "}
              Выбери <span className="text-[#CCFF00]">Оружие</span>{" "}
            </h2>{" "}
            <p className="text-xl font-bold text-white/60 uppercase tracking-widest">
              Никаких скрытых платежей. Только хардкор.
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {" "}
            {[
              {
                name: "База",
                price: "3 500",
                period: "мес",
                desc: "Доступ в тренажерный зал 24/7. Ничего лишнего.",
                features: ["Тренажерный зал", "Раздевалка", "Кулер с водой"],
              },
              {
                name: "Про",
                price: "5 900",
                period: "мес",
                desc: "Зал + все групповые классы. Для тех, кто хочет больше.",
                features: [
                  "Всё из Базы",
                  "Групповые тренировки",
                  "Зона единоборств",
                  "Сауна",
                ],
                highlight: true,
              },
              {
                name: "Элита",
                price: "15 000",
                period: "мес",
                desc: "Персональное ведение. Максимальный результат.",
                features: [
                  "Всё из Про",
                  "12 персональных тренировок",
                  "План питания",
                  "Анализ состава тела",
                ],
              },
            ].map((p, i) => (
              <div
                key={i}
                className={`border-4 border-white p-6 md:p-8 flex flex-col relative transform ${p.highlight ? "bg-[#CCFF00] text-black shadow-[-12px_12px_0px_white]" : "bg-[#18181b] text-white shadow-[-8px_8px_0px_#CCFF00]"}`}
              >
                {" "}
                {p.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 font-black uppercase tracking-widest text-xs transform -skew-x-12 border-2 border-white">
                    {" "}
                    Популярный выбор{" "}
                  </div>
                )}{" "}
                <h3 className="text-3xl font-black uppercase italic tracking-tight mb-2">
                  {p.name}
                </h3>{" "}
                <p
                  className={`font-bold text-sm mb-8 h-12 ${p.highlight ? "text-black/70" : "text-white/60"}`}
                >
                  {p.desc}
                </p>{" "}
                <div className="flex items-baseline gap-2 mb-8">
                  {" "}
                  <span className="text-6xl md:text-7xl font-black italic tracking-tighter">
                    {p.price}
                  </span>{" "}
                  <span
                    className={`font-black uppercase tracking-widest ${p.highlight ? "text-black/50" : "text-white/40"}`}
                  >
                    ₽/{p.period}
                  </span>{" "}
                </div>{" "}
                <ul className="space-y-4 mb-12 flex-1">
                  {" "}
                  {p.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 font-bold text-sm md:text-base"
                    >
                      {" "}
                      <Zap
                        size={20}
                        className={
                          p.highlight ? "text-black" : "text-[#CCFF00]"
                        }
                      />{" "}
                      {f}{" "}
                    </li>
                  ))}{" "}
                </ul>{" "}
                <a
                  href="#contact"
                  className={`w-full py-4 md:py-5 text-sm md:text-base font-black uppercase tracking-widest transform -skew-x-12 border-4 inline-block text-center ${p.highlight ? "bg-black text-white border-black " : "bg-[#CCFF00] text-black border-[#CCFF00]"}`}
                >
                  {" "}
                  Купить{" "}
                </a>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </section>{" "}
        {/* 7. CTA / Location */}{" "}
        <section
          id="contact"
          className="py-16 md:py-32 px-4 md:px-6 max-w-[1600px] mx-auto"
        >
          {" "}
          <div className="bg-[#CCFF00] border-4 border-white p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 transform -skew-x-2 shadow-[16px_16px_0px_white]">
            {" "}
            <div className="text-black transform skew-x-2 w-full md:w-1/2 text-center md:text-left">
              {" "}
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6">
                {" "}
                Ждем тебя
                <br />в зале{" "}
              </h2>{" "}
              <p className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-8">
                {" "}
                Первая тренировка бесплатно. Оставь заявку и мы перезвоним.{" "}
              </p>{" "}
              <form
                className="flex flex-col sm:flex-row gap-4 w-full"
                onSubmit={(e) => e.preventDefault()}
              >
                {" "}
                <input
                  type="tel"
                  placeholder="ТВОЙ ТЕЛЕФОН"
                  className="flex-1 bg-white border-4 border-black px-6 py-4 font-black uppercase text-black placeholder:text-black/30 focus:outline-none focus:ring-4 focus:ring-black/20 transform -skew-x-12"
                />{" "}
                <button className="bg-black text-white px-8 py-4 font-black uppercase tracking-widest transform -skew-x-12 border-4 border-black">
                  {" "}
                  Отправить{" "}
                </button>{" "}
              </form>{" "}
            </div>{" "}
            <div className="w-full md:w-1/2 transform skew-x-2">
              {" "}
              <div className="bg-black border-4 border-white p-6 md:p-8 text-white">
                {" "}
                <div className="text-[#CCFF00] font-black uppercase tracking-widest mb-2 text-sm">
                  Локация
                </div>{" "}
                <div className="text-2xl md:text-3xl font-black uppercase italic mb-6">
                  Ул. Железная, 42
                </div>{" "}
                <div className="text-[#CCFF00] font-black uppercase tracking-widest mb-2 text-sm">
                  Режим работы
                </div>{" "}
                <div className="text-2xl md:text-3xl font-black uppercase italic">
                  24/7 БЕЗ ВЫХОДНЫХ
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </main>{" "}
      {/* 8. Footer */}{" "}
      <footer className="bg-black border-t-4 border-white pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-6">
        {" "}
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24 text-center sm:text-left">
          {" "}
          <div className="col-span-1 sm:col-span-2">
            {" "}
            <div className="text-4xl font-black tracking-tighter uppercase text-[#CCFF00] italic transform -skew-x-12 mb-6 inline-block">
              {" "}
              IRON<span className="text-white">CULT</span>{" "}
            </div>{" "}
            <p className="text-white/60 font-bold uppercase tracking-wide max-w-sm mx-auto sm:mx-0">
              {" "}
              Сеть хардкорных тренажерных залов для тех, кто готов пахать.{" "}
            </p>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="text-[#CCFF00] font-black uppercase tracking-widest mb-6 text-sm">
              Меню
            </h4>{" "}
            <ul className="space-y-4 font-bold uppercase text-white/80">
              {" "}
              <li>
                <a href="#">Тренировки</a>
              </li>{" "}
              <li>
                <a href="#">Команда</a>
              </li>{" "}
              <li>
                <a href="#">Расписание</a>
              </li>{" "}
              <li>
                <a href="#">Цены</a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="text-[#CCFF00] font-black uppercase tracking-widest mb-6 text-sm">
              Соцсети
            </h4>{" "}
            <ul className="space-y-4 font-bold uppercase text-white/80">
              {" "}
              <li>
                <a href="#">Instagram</a>
              </li>{" "}
              <li>
                <a href="#">Telegram</a>
              </li>{" "}
              <li>
                <a href="#">VK</a>
              </li>{" "}
              <li>
                <a href="#">YouTube</a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 border-t-4 border-white/20 text-xs font-black uppercase tracking-widest text-white/40 gap-4 md:gap-0 text-center md:text-left">
          {" "}
          <div>© 2026 IRONFIR. NO EXCUSES.</div>{" "}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {" "}
            <a href="#">Privacy Policy</a> <a href="#">Terms of Service</a>{" "}
          </div>{" "}
        </div>{" "}
      </footer>{" "}
    </div>
  );
}
