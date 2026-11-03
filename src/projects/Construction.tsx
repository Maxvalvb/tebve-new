import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Hexagon,
  Box,
  Layers,
  Cpu,
} from "lucide-react";
export default function Construction() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-[#ff4e00] selection:text-white overflow-x-hidden">
      {" "}
      {/* 1. Header */}{" "}
      <header className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
        {" "}
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          {" "}
          <div className="flex items-center gap-3 md:gap-4">
            {" "}
            <div className="w-6 h-6 md:w-8 md:h-8 bg-[#ff4e00] flex items-center justify-center">
              {" "}
              <Hexagon size={16} className="text-white md:w-5 md:h-5" />{" "}
            </div>{" "}
            <div className="text-lg md:text-xl font-bold tracking-widest uppercase text-white">
              {" "}
              Stroy<span className="text-white/50">Invest</span>{" "}
            </div>{" "}
          </div>{" "}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-white/60">
            {" "}
            <a href="#">Экспертиза</a> <a href="#">Проекты</a>{" "}
            <a href="#">Технологии</a> <a href="#">Компания</a>{" "}
          </nav>{" "}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white"
          >
            {" "}
            Связаться <ArrowUpRight size={16} />{" "}
          </a>{" "}
        </div>{" "}
      </header>{" "}
      <main className="pt-16 md:pt-20">
        {" "}
        {/* 2. Hero (Brutalist Split) */}{" "}
        <section className="min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] border-b border-white/10 flex flex-col md:flex-row">
          {" "}
          <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 relative">
            {" "}
            <div className="absolute top-4 left-6 md:top-6 md:left-6 text-[10px] font-mono text-white/40 uppercase tracking-widest hidden sm:block">
              {" "}
              SYS.REQ.01 // ИНЖЕНЕРИЯ{" "}
            </div>{" "}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-white mb-6 md:mb-8 mt-8 md:mt-0">
              {" "}
              Точность
              <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e00] to-[#ff8a00]">
                Масштаб
              </span>
              <br /> Бетон.{" "}
            </h1>{" "}
            <p className="text-base md:text-lg text-white/60 max-w-md font-light leading-relaxed mb-8 md:mb-12">
              {" "}
              Проектирование и возведение промышленных и коммерческих объектов
              высшего класса сложности. Инженерный подход к каждому
              кубометру.{" "}
            </p>{" "}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              {" "}
              <a
                href="#portfolio"
                className="bg-[#ff4e00] text-white px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                {" "}
                Объекты <ArrowRight size={18} />{" "}
              </a>{" "}
              <div className="text-[10px] md:text-xs font-mono text-white/40 uppercase text-center sm:text-left">
                {" "}
                ISO 9001:2015
                <br />
                Сертифицировано{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-full md:w-1/2 relative min-h-[40vh] md:min-h-full bg-[#111]">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?w=1200&q=80"
              alt="Architecture"
              className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-luminosity"
            />{" "}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />{" "}
            <div className="absolute bottom-6 right-6 text-right">
              {" "}
              <div className="text-3xl md:text-4xl font-black text-white">
                2.4M
              </div>{" "}
              <div className="text-[10px] font-mono text-[#ff4e00] uppercase tracking-widest">
                Кв. метров построено
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* 3. Ticker */}
        <section className="border-b border-white/10 bg-[#0a0a0a] py-3 md:py-4 overflow-hidden flex items-center">
          {" "}
          <div className="flex whitespace-nowrap text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/40 animate-[marquee_40s_linear_infinite]">
            {" "}
            <span className="mx-4 md:mx-8 flex items-center gap-2 md:gap-4">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#ff4e00] rounded-full" />{" "}
              БЦ"Аквамарин" — Фаза 3
            </span>{" "}
            <span className="mx-4 md:mx-8 flex items-center gap-2 md:gap-4">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#ff4e00] rounded-full" />{" "}
              ЖК"Горизонт" — Сдача объекта
            </span>{" "}
            <span className="mx-4 md:mx-8 flex items-center gap-2 md:gap-4">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#ff4e00] rounded-full" />{" "}
              Индустриальный парк"Север" — Проектирование
            </span>{" "}
            <span className="mx-4 md:mx-8 flex items-center gap-2 md:gap-4">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#ff4e00] rounded-full" />{" "}
              БЦ"Аквамарин" — Фаза 3
            </span>{" "}
            <span className="mx-4 md:mx-8 flex items-center gap-2 md:gap-4">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#ff4e00] rounded-full" />{" "}
              ЖК"Горизонт" — Сдача объекта
            </span>{" "}
          </div>{" "}
        </section>{" "}
        {/* 4. Technical Grid (Services) */}{" "}
        <section className="border-b border-white/10 bg-white/10">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
            {" "}
            {[
              {
                id: "01",
                title: "Генеральный подряд",
                icon: <Layers size={28} />,
                desc: "Полный цикл управления строительством. От котлована до ввода в эксплуатацию с жестким контролем сроков.",
              },
              {
                id: "02",
                title: "Проектирование",
                icon: <Cpu size={28} />,
                desc: "BIM-моделирование, архитектурные и конструктивные решения. Оптимизация затрат на этапе чертежей.",
              },
              {
                id: "03",
                title: "Монолитные работы",
                icon: <Box size={28} />,
                desc: "Собственный парк опалубки и бетононасосов. Возведение каркасов любой геометрической сложности.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-[#050505] p-8 md:p-12 group cursor-pointer relative"
              >
                {" "}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 text-[10px] font-mono text-white/20">
                  {" "}
                  SEC.{s.id}{" "}
                </div>{" "}
                <div className="text-white/40 mb-6 md:mb-8"> {s.icon} </div>{" "}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 uppercase tracking-wide">
                  {s.title}
                </h3>{" "}
                <p className="text-white/50 text-xs md:text-sm leading-relaxed font-light">
                  {s.desc}
                </p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </section>{" "}
        {/* 5. Featured Projects */}{" "}
        <section
          id="portfolio"
          className="py-16 md:py-24 px-4 md:px-6 border-b border-white/10"
        >
          {" "}
          <div className="max-w-[1600px] mx-auto">
            {" "}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
              {" "}
              <div>
                {" "}
                <div className="text-[10px] font-mono text-[#ff4e00] uppercase tracking-widest mb-3 md:mb-4">
                  Портфолио
                </div>{" "}
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                  Флагманские
                  <br />
                  объекты
                </h2>{" "}
              </div>{" "}
              <a
                href="#portfolio"
                className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/60 flex items-center gap-2 border border-white/20 px-4 md:px-6 py-2 md:py-3 w-full md:w-auto justify-center"
              >
                {" "}
                Все проекты <ArrowRight size={14} />{" "}
              </a>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {" "}
              {[
                {
                  title: 'Технопарк "Инновация"',
                  type: "Промышленный объект",
                  area: "120 000 м²",
                  img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
                },
                {
                  title: 'Штаб-квартира "Нефтегаз"',
                  type: "Коммерческая недвижимость",
                  area: "45 000 м²",
                  img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="group relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-[#111]"
                >
                  {" "}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
                  />{" "}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />{" "}
                  {/* Technical Overlay */}{" "}
                  <div className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 flex justify-between items-start opacity-0 hidden sm:flex">
                    {" "}
                    <div className="w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-[#ff4e00]" />{" "}
                    <div className="w-12 h-12 md:w-16 md:h-16 border-t-2 border-r-2 border-[#ff4e00]" />{" "}
                  </div>{" "}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex justify-between items-end opacity-0 hidden sm:flex">
                    {" "}
                    <div className="w-12 h-12 md:w-16 md:h-16 border-b-2 border-l-2 border-[#ff4e00]" />{" "}
                    <div className="w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-[#ff4e00]" />{" "}
                  </div>{" "}
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                    {" "}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-white/20 pb-4 md:pb-6 mb-4 md:mb-6 gap-4">
                      {" "}
                      <div>
                        {" "}
                        <div className="text-[10px] font-mono text-[#ff4e00] uppercase tracking-widest mb-1 md:mb-2">
                          {p.type}
                        </div>{" "}
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
                          {p.title}
                        </h3>{" "}
                      </div>{" "}
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white text-black flex items-center justify-center rounded-full shrink-0">
                        {" "}
                        <ArrowUpRight
                          size={20}
                          className="md:w-6 md:h-6"
                        />{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-[10px] md:text-xs font-mono text-white/60 uppercase tracking-widest">
                      {" "}
                      <div>
                        Площадь: <span className="text-white">{p.area}</span>
                      </div>{" "}
                      <div>
                        Статус: <span className="text-[#ff4e00]">Завершен</span>
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* 6. Data Grid (Stats) */}{" "}
        <section className="border-b border-white/10 bg-white/10">
          {" "}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px">
            {" "}
            {[
              { val: "15+", label: "Лет опыта" },
              { val: "240", label: "Объектов" },
              { val: "850", label: "Сотрудников" },
              { val: "100%", label: "Сдача в срок" },
            ].map((s, i) => (
              <div key={i} className="p-8 md:p-12 text-center bg-[#0a0a0a]">
                {" "}
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 md:mb-4">
                  {s.val}
                </div>{" "}
                <div className="text-[8px] sm:text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  {s.label}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </section>{" "}
        {/* 7. Process */}{" "}
        <section className="py-16 md:py-24 px-4 md:px-6 border-b border-white/10 relative overflow-hidden">
          {" "}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />{" "}
          <div className="max-w-[1600px] mx-auto relative z-10">
            {" "}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-10 md:mb-16">
              Алгоритм
              <br />
              работы
            </h2>{" "}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {" "}
              {[
                {
                  step: "01",
                  title: "Проектирование",
                  desc: "Разработка BIM-модели, расчет нагрузок, утверждение сметы.",
                },
                {
                  step: "02",
                  title: "Подготовка",
                  desc: "Мобилизация техники, земляные работы, устройство фундамента.",
                },
                {
                  step: "03",
                  title: "Возведение",
                  desc: "Монолитные работы, монтаж металлоконструкций, фасады.",
                },
                {
                  step: "04",
                  title: "Сдача",
                  desc: "Инженерные сети, отделка, пусконаладка, передача ключей.",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="relative pt-6 md:pt-8 border-t border-white/20"
                >
                  {" "}
                  <div className="absolute top-0 left-0 w-8 md:w-12 h-1 bg-[#ff4e00] -translate-y-[1px]" />{" "}
                  <div className="text-3xl md:text-4xl font-black text-white/10 mb-4 md:mb-6">
                    {p.step}
                  </div>{" "}
                  <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide mb-2 md:mb-4">
                    {p.title}
                  </h3>{" "}
                  <p className="text-white/50 text-xs md:text-sm leading-relaxed font-light">
                    {p.desc}
                  </p>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* 8. Equipment */}{" "}
        <section className="py-16 md:py-24 px-4 md:px-6 border-b border-white/10 bg-[#0a0a0a]">
          {" "}
          <div className="max-w-[1600px] mx-auto">
            {" "}
            <div className="max-w-4xl">
              {" "}
              <div className="text-[10px] font-mono text-[#ff4e00] uppercase tracking-widest mb-3 md:mb-4">
                Ресурсы
              </div>{" "}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6 md:mb-8">
                Собственный
                <br />
                технопарк
              </h2>{" "}
              <p className="text-white/60 text-sm md:text-lg font-light leading-relaxed mb-8 md:mb-12">
                {" "}
                Независимость от подрядчиков. Более 50 единиц тяжелой техники и
                собственный бетонный узел обеспечивают непрерывность процессов
                24/7.{" "}
              </p>{" "}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {" "}
                {[
                  "Башенные и гусеничные краны Liebherr",
                  "Экскаваторы и бульдозеры Caterpillar",
                  "Бетононасосы Putzmeister",
                  "Собственная лаборатория контроля качества",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 md:gap-4 text-white/80 font-light text-sm md:text-base"
                  >
                    {" "}
                    <div className="w-1.5 h-1.5 bg-[#ff4e00] mt-1.5 md:mt-2 flex-shrink-0" />{" "}
                    {item}{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* 9. Leadership */}{" "}
        <section className="py-16 md:py-24 px-4 md:px-6 border-b border-white/10">
          {" "}
          <div className="max-w-[1600px] mx-auto">
            {" "}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-10 md:mb-16">
              Руководство
            </h2>{" "}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {" "}
              {[
                {
                  name: "Михаил Волков",
                  role: "Генеральный директор",
                  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
                },
                {
                  name: "Алексей Смирнов",
                  role: "Главный инженер",
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
                },
                {
                  name: "Дмитрий Соколов",
                  role: "Руководитель проектов",
                  img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
                },
              ].map((t, i) => (
                <div key={i} className="group">
                  {" "}
                  <div className="aspect-square overflow-hidden bg-[#111] mb-4 md:mb-6">
                    {" "}
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-full h-full object-cover grayscale opacity-80"
                    />{" "}
                  </div>{" "}
                  <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide mb-1">
                    {t.name}
                  </h3>{" "}
                  <div className="text-[10px] md:text-xs font-mono text-[#ff4e00] uppercase tracking-widest">
                    {t.role}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* 10. Contact CTA */}{" "}
        <section
          id="contact"
          className="py-20 md:py-32 px-4 md:px-6 bg-[#ff4e00] text-white text-center"
        >
          {" "}
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 md:mb-8">
            Готовы строить?
          </h2>{" "}
          <p className="text-base md:text-xl font-medium mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            {" "}
            Оставьте заявку, и наши инженеры свяжутся с вами для
            предварительного расчета проекта.{" "}
          </p>{" "}
          <a
            href="#contact"
            className="bg-white text-black px-8 md:px-12 py-4 md:py-5 text-xs md:text-sm font-bold uppercase tracking-widest w-full sm:w-auto inline-block"
          >
            {" "}
            Обсудить проект{" "}
          </a>{" "}
        </section>{" "}
      </main>{" "}
      {/* 11. Footer */}{" "}
      <footer className="bg-[#050505] pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-6 border-t border-white/10">
        {" "}
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">
          {" "}
          <div className="col-span-1 sm:col-span-2">
            {" "}
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              {" "}
              <div className="w-6 h-6 md:w-8 md:h-8 bg-[#ff4e00] flex items-center justify-center">
                {" "}
                <Hexagon size={16} className="text-white md:w-5 md:h-5" />{" "}
              </div>{" "}
              <div className="text-xl md:text-2xl font-bold tracking-widest uppercase text-white">
                {" "}
                Stroy<span className="text-white/50">Invest</span>{" "}
              </div>{" "}
            </div>{" "}
            <p className="text-white/40 text-sm md:text-base font-light max-w-md leading-relaxed">
              {" "}
              Генеральный подрядчик федерального уровня. Надежность,
              подтвержденная сотнями реализованных проектов и безупречной
              репутацией.{" "}
            </p>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="text-[10px] md:text-xs font-mono text-white/60 uppercase tracking-widest mb-4 md:mb-6">
              Контакты
            </h4>{" "}
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-light text-white/80">
              {" "}
              <li className="flex items-center gap-3">
                <MapPin size={14} className="text-[#ff4e00] shrink-0" /> Москва,
                Пресненская наб., 12
              </li>{" "}
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#ff4e00] shrink-0" /> +7 (495)
                000-00-00
              </li>{" "}
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#ff4e00] shrink-0" />{" "}
                info@stroyinvest.ru
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="text-[10px] md:text-xs font-mono text-white/60 uppercase tracking-widest mb-4 md:mb-6">
              Навигация
            </h4>{" "}
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-light text-white/80">
              {" "}
              <li>
                <a href="#">О компании</a>
              </li>{" "}
              <li>
                <a href="#">Услуги</a>
              </li>{" "}
              <li>
                <a href="#">Проекты</a>
              </li>{" "}
              <li>
                <a href="#">Карьера</a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 border-t border-white/10 text-[10px] md:text-xs font-mono text-white/40 uppercase tracking-widest gap-4 md:gap-0 text-center md:text-left">
          {" "}
          <div>© 2026 STROYINVEST. ALL RIGHTS RESERVED.</div>{" "}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {" "}
            <a href="#">Privacy Policy</a> <a href="#">Terms of Service</a>{" "}
          </div>{" "}
        </div>{" "}
      </footer>{" "}
    </div>
  );
}
