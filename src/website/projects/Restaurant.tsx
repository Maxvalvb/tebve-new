import React from "react";
import { Play, Instagram, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
export default function Restaurant() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f2ed] font-sans selection:bg-[#d4af37] selection:text-black overflow-x-hidden">
      {" "}
      {/* 1. Header */}{" "}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        {" "}
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-24 flex items-center justify-between">
          {" "}
          <div className="text-xl md:text-2xl font-serif tracking-[0.2em] uppercase text-[#d4af37]">
            {" "}
            Gourmet{" "}
          </div>{" "}
          <nav className="hidden md:flex gap-12 text-xs uppercase tracking-[0.2em] font-light text-white/60">
            {" "}
            <a href="#menu">Меню</a> <a href="#chef">Шеф</a>{" "}
            <a href="#interior">Интерьер</a> <a href="#events">События</a>{" "}
          </nav>{" "}
          <a
            href="#reservation"
            className="border border-[#d4af37] text-[#d4af37] px-4 md:px-8 py-2 md:py-3 text-[10px] md:text-xs uppercase tracking-[0.2em] inline-block"
          >
            {" "}
            Бронь{" "}
          </a>{" "}
        </div>{" "}
      </header>{" "}
      <main>
        {" "}
        {/* 2. Hero */}{" "}
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 md:pt-0">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
            alt="Restaurant Background"
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />{" "}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]" />{" "}
          <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto mt-12 md:mt-20">
            {" "}
            <div className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4af37] mb-6 md:mb-8">
              Высокая кухня
            </div>{" "}
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-6 md:mb-8 tracking-tight leading-[1.1]">
              {" "}
              Вкус как
              <br />
              <span className="italic text-white/80">искусство</span>{" "}
            </h1>{" "}
            <p className="text-white/60 text-base md:text-xl font-light tracking-wide mb-8 md:mb-12 max-w-2xl mx-auto px-4">
              {" "}
              Авторское прочтение классических рецептов в атмосфере сдержанной
              роскоши.{" "}
            </p>{" "}
            <a
              href="#reservation"
              className="bg-[#d4af37] text-black px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-3 mx-auto w-full sm:w-auto inline-flex"
            >
              {" "}
              Забронировать стол <ArrowRight size={16} />{" "}
            </a>{" "}
          </div>{" "}
        </section>{" "}
        {/* 3. Philosophy */}{" "}
        <section className="py-20 md:py-32 px-4 md:px-6 max-w-4xl mx-auto text-center border-b border-white/5">
          {" "}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-light mb-8 md:mb-12 leading-relaxed text-white/90">
            "Мы не просто готовим еду. Мы создаем гастрономический опыт, который
            остается в памяти навсегда."{" "}
          </h2>{" "}
          <div className="w-px h-16 md:h-24 bg-[#d4af37] mx-auto mb-6 md:mb-8"></div>{" "}
          <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40">
            Философия Gourmet
          </div>{" "}
        </section>{" "}
        {/* 4. Chef */}{" "}
        <section
          id="chef"
          className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto border-b border-white/5"
        >
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {" "}
            <div className="aspect-[3/4] bg-[#111] relative overflow-hidden order-2 md:order-1">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                alt="Chef"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
              />{" "}
            </div>{" "}
            <div className="order-1 md:order-2">
              {" "}
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-3 md:mb-4">
                Шеф-повар
              </div>{" "}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-6 md:mb-8">
                Антуан Дюбуа
              </h2>{" "}
              <p className="text-white/60 font-light leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                {" "}
                Обладатель двух звезд Мишлен, Антуан привносит в каждый рецепт
                страсть к локальным продуктам и безупречную французскую технику.
                Его блюда — это диалог между традициями и новаторством.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* 5. Menu Highlights */}{" "}
        <section
          id="menu"
          className="py-20 md:py-32 px-4 md:px-6 max-w-5xl mx-auto border-b border-white/5"
        >
          {" "}
          <div className="text-center mb-16 md:mb-24">
            {" "}
            <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-3 md:mb-4">
              Дегустация
            </div>{" "}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light">
              Вечернее меню
            </h2>{" "}
          </div>{" "}
          <div className="space-y-12 md:space-y-16">
            {" "}
            {[
              {
                cat: "Закуски",
                items: [
                  {
                    n: "Тартар из дикого лосося",
                    d: "С кремом из авокадо и икрой летучей рыбы",
                    p: "1 200 ₽",
                  },
                  {
                    n: "Фуа-гра с инжиром",
                    d: "Подается с бриошью ручной работы",
                    p: "1 800 ₽",
                  },
                ],
              },
              {
                cat: "Горячее",
                items: [
                  {
                    n: "Утиная грудка Магре",
                    d: "С пюре из сельдерея и ягодным соусом",
                    p: "2 400 ₽",
                  },
                  {
                    n: "Черная треска",
                    d: "В мисо-глазури с молодыми овощами",
                    p: "2 800 ₽",
                  },
                ],
              },
              {
                cat: "Десерты",
                items: [
                  {
                    n: "Сфера из темного шоколада",
                    d: "С горячим карамельным соусом",
                    p: "900 ₽",
                  },
                  {
                    n: "Лимонный тарт",
                    d: "С меренгой и сорбетом из базилика",
                    p: "850 ₽",
                  },
                ],
              },
            ].map((section, i) => (
              <div key={i}>
                {" "}
                <h3 className="text-xl md:text-2xl font-serif font-light mb-6 md:mb-8 text-[#d4af37] text-center">
                  {section.cat}
                </h3>{" "}
                <div className="space-y-6 md:space-y-8">
                  {" "}
                  {section.items.map((m, j) => (
                    <div
                      key={j}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline group cursor-pointer gap-2 sm:gap-4"
                    >
                      {" "}
                      <div className="flex-1">
                        {" "}
                        <h4 className="text-lg md:text-xl font-light mb-1 md:mb-2">
                          {m.n}
                        </h4>{" "}
                        <p className="text-xs md:text-sm text-white/40 font-light">
                          {m.d}
                        </p>{" "}
                      </div>{" "}
                      <div className="text-base md:text-lg font-serif text-[#d4af37] sm:ml-4">
                        {m.p}
                      </div>{" "}
                    </div>
                  ))}{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
          <div className="text-center mt-16 md:mt-24">
            {" "}
            <a
              href="#menu"
              className="border-b border-white/20 pb-1 text-[10px] md:text-xs uppercase tracking-[0.2em] inline-block"
            >
              {" "}
              Скачать полное меню (PDF){" "}
            </a>{" "}
          </div>{" "}
        </section>{" "}
        {/* 6. Wine Cellar */}{" "}
        <section className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto border-b border-white/5">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            {" "}
            <div>
              {" "}
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-3 md:mb-4">
                Сомелье
              </div>{" "}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-6 md:mb-8">
                Винный погреб
              </h2>{" "}
              <p className="text-white/50 font-light leading-relaxed mb-8 md:mb-12 text-sm md:text-base">
                {" "}
                Наша коллекция насчитывает более 500 этикеток со всего мира.
                Главный сомелье поможет подобрать идеальное сопровождение к
                каждому блюду, раскрывая новые грани вкуса.{" "}
              </p>{" "}
              <a
                href="#menu"
                className="border border-white/20 px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs uppercase tracking-[0.2em] w-full sm:w-auto inline-block text-center"
              >
                {" "}
                Винная карта{" "}
              </a>{" "}
            </div>{" "}
            <div className="aspect-square bg-[#111] overflow-hidden">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80"
                alt="Wine"
                className="w-full h-full object-cover opacity-70"
              />{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* 7. Interior (Gallery) */}{" "}
        <section
          id="interior"
          className="py-20 md:py-32 border-b border-white/5"
        >
          {" "}
          <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 md:mb-16 text-center">
            {" "}
            <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-3 md:mb-4">
              Атмосфера
            </div>{" "}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light">
              Интерьер
            </h2>{" "}
          </div>{" "}
          <div className="flex gap-4 md:gap-6 px-4 md:px-6 overflow-x-auto pb-8 md:pb-12 snap-x snap-mandatory hide-scrollbar">
            {" "}
            {[
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
              "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
              "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
            ].map((img, i) => (
              <div key={i} className="w-[80vw] max-w-[460px] md:w-[45vw] lg:w-[400px] shrink-0 snap-center">
                {" "}
                <div className="aspect-[4/3] overflow-hidden bg-[#111] rounded-lg">
                  {" "}
                  <img
                    src={img}
                    alt="Interior"
                    className="w-full h-full object-cover opacity-60"
                  />{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </section>{" "}
        {/* 8. Private Dining */}{" "}
        <section
          id="events"
          className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto border-b border-white/5"
        >
          {" "}
          <div className="bg-[#111] p-8 sm:p-12 md:p-24 text-center relative overflow-hidden">
            {" "}
            <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-30" />{" "}
            <div className="relative z-10 max-w-2xl mx-auto">
              {" "}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-6 md:mb-8">
                Private Dining
              </h2>{" "}
              <p className="text-white/50 font-light leading-relaxed mb-8 md:mb-12 text-sm md:text-base">
                {" "}
                Для особых случаев мы предлагаем закрытый зал на 12 персон с
                персональным обслуживанием и эксклюзивным дегустационным сетом
                от шеф-повара.{" "}
              </p>{" "}
              <a
                href="#reservation"
                className="bg-white text-black px-8 md:px-10 py-3 md:py-4 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium w-full sm:w-auto inline-block"
              >
                {" "}
                Узнать подробности{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* 9. Press/Awards */}{" "}
        <section className="py-20 md:py-32 px-4 md:px-6 max-w-5xl mx-auto border-b border-white/5 text-center">
          {" "}
          <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-12 md:mb-16">
            Признание
          </div>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16">
            {" "}
            {[
              {
                title: "Michelin Guide",
                desc: "Две звезды за исключительную кухню",
              },
              { title: "Gault & Millau", desc: "18/20 баллов, 4 колпака" },
              {
                title: "The World's 50 Best",
                desc: "Топ-50 лучших ресторанов мира",
              },
            ].map((a, i) => (
              <div key={i}>
                {" "}
                <h3 className="text-lg md:text-xl font-serif mb-3 md:mb-4">
                  {a.title}
                </h3>{" "}
                <p className="text-xs md:text-sm text-white/40 font-light">
                  {a.desc}
                </p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </section>{" "}
        {/* 10. Reservation & Contact */}{" "}
        <section
          id="reservation"
          className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto"
        >
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {" "}
            <div>
              {" "}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-8 md:mb-12">
                Ждем вас
              </h2>{" "}
              <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
                {" "}
                <div>
                  {" "}
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 mb-2">
                    Адрес
                  </div>{" "}
                  <div className="text-base md:text-lg font-light flex items-center gap-3">
                    <MapPin size={16} className="text-[#d4af37] shrink-0" />{" "}
                    Тверской бульвар, 26, Москва
                  </div>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 mb-2">
                    Часы работы
                  </div>{" "}
                  <div className="text-base md:text-lg font-light">
                    {" "}
                    Вт-Вс: 18:00 — 00:00
                    <br /> Пн: Выходной{" "}
                  </div>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 mb-2">
                    Контакты
                  </div>{" "}
                  <div className="text-base md:text-lg font-light flex flex-col gap-2">
                    {" "}
                    <span className="flex items-center gap-3">
                      <Phone size={16} className="text-[#d4af37] shrink-0" /> +7
                      (495) 123-45-67
                    </span>{" "}
                    <span className="flex items-center gap-3">
                      <Mail size={16} className="text-[#d4af37] shrink-0" />{" "}
                      reserve@gourmet.ru
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-[#111] p-6 sm:p-8 md:p-12">
              {" "}
              <h3 className="text-xl md:text-2xl font-serif font-light mb-6 md:mb-8 text-center">
                Бронирование
              </h3>{" "}
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                {" "}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {" "}
                  <input
                    type="text"
                    placeholder="Имя"
                    className="bg-transparent border-b border-white/20 pb-3 md:pb-4 text-sm font-light focus:outline-none focus:border-[#d4af37] w-full"
                  />{" "}
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="bg-transparent border-b border-white/20 pb-3 md:pb-4 text-sm font-light focus:outline-none focus:border-[#d4af37] w-full"
                  />{" "}
                </div>{" "}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {" "}
                  <input
                    type="date"
                    className="bg-transparent border-b border-white/20 pb-3 md:pb-4 text-sm font-light focus:outline-none focus:border-[#d4af37] text-white/60 w-full"
                  />{" "}
                  <select className="bg-transparent border-b border-white/20 pb-3 md:pb-4 text-sm font-light focus:outline-none focus:border-[#d4af37] text-white/60 w-full appearance-none">
                    {" "}
                    <option value="" className="bg-[#111]">
                      Количество персон
                    </option>{" "}
                    <option value="2" className="bg-[#111]">
                      2 персоны
                    </option>{" "}
                    <option value="4" className="bg-[#111]">
                      4 персоны
                    </option>{" "}
                    <option value="6" className="bg-[#111]">
                      6 персон
                    </option>{" "}
                  </select>{" "}
                </div>{" "}
                <button className="w-full bg-[#d4af37] text-black py-3 md:py-4 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium mt-6 md:mt-8">
                  {" "}
                  Запросить бронь{" "}
                </button>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </main>{" "}
      {/* 11. Footer */}{" "}
      <footer className="border-t border-white/5 pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-6">
        {" "}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-24 text-center sm:text-left">
          {" "}
          <div>
            {" "}
            <div className="text-xl md:text-2xl font-serif tracking-[0.2em] uppercase text-[#d4af37] mb-4 md:mb-6">
              {" "}
              Gourmet{" "}
            </div>{" "}
            <p className="text-white/40 font-light text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              {" "}
              Ресторан высокой кухни. Искусство гастрономии в каждой
              детали.{" "}
            </p>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/60 mb-4 md:mb-6">
              Следите за нами
            </h4>{" "}
            <div className="flex justify-center sm:justify-start gap-6">
              {" "}
              <a href="#" className="text-white/40">
                <Instagram size={20} />
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/60 mb-4 md:mb-6">
              Подписка
            </h4>{" "}
            <form
              className="flex border-b border-white/20 pb-2 max-w-xs mx-auto sm:mx-0"
              onSubmit={(e) => e.preventDefault()}
            >
              {" "}
              <input
                type="email"
                placeholder="Ваш email"
                className="bg-transparent border-none text-sm font-light focus:outline-none w-full"
              />{" "}
              <button className="text-white/40">
                {" "}
                <ArrowRight size={16} />{" "}
              </button>{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 border-t border-white/5 text-[10px] tracking-[0.2em] uppercase text-white/30 gap-4 md:gap-0 text-center md:text-left">
          {" "}
          <div>© 2026 GOURMET. ALL RIGHTS RESERVED.</div>{" "}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {" "}
            <a href="#">Privacy Policy</a> <a href="#">Terms of Service</a>{" "}
          </div>{" "}
        </div>{" "}
      </footer>{" "}
    </div>
  );
}
