import React, { useState, useRef, useEffect } from "react";
import {
  ShoppingCart,
  Search,
  Menu,
  User,
  Heart,
  MapPin,
  Star,
  Percent,
  ChevronRight,
  ChevronLeft,
  Plus,
  Flame,
  Clock,
  ShieldCheck,
  Instagram,
  Facebook,
  X,
  LayoutGrid,
  SlidersHorizontal,
  ArrowLeft,
  ArrowRight,
  Check,
  Trash2,
  Phone,
  Truck,
  Sparkles,
} from "lucide-react";

export default function EcoStore() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const [cart, setCart] = useState<{ [name: string]: number }>({
    "Томаты Бакинские розовые сладкие": 1,
    "Сыр Камамбер с белой плесенью": 1,
    "Хлеб ремесленный на закваске": 1,
  });

  const [favorites, setFavorites] = useState<string[]>([
    "Томаты Бакинские розовые сладкие",
    "Сыр Камамбер с белой плесенью",
  ]);

  const updateCart = (name: string, delta: number) => {
    setCart((prev) => {
      const current = prev[name] || 0;
      const next = current + delta;
      if (next <= 0) {
        const { [name]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [name]: next };
    });
  };

  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const categories = [
    {
      name: "Овощи и зелень",
      filter: "Овощи",
      num: "01",
      title1: "Овощи и",
      title2: "зелень",
      sub1: "Свежие, отборные",
      sub2: "и сезонные",
      cardBg: "#f3f8ed",
      blobBg: "#e2f3d2",
      arrowBg: "#d7f93b",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
    },
    {
      name: "Фрукты и ягоды",
      filter: "Фрукты",
      num: "02",
      title1: "Фрукты и",
      title2: "ягоды",
      sub1: "Сочные, спелые,",
      sub2: "с пользой",
      cardBg: "#fbf2f4",
      blobBg: "#fcdde3",
      arrowBg: "#fcd4dc",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
    },
    {
      name: "Мясо и птица",
      filter: "Мясо",
      num: "03",
      title1: "Мясо и",
      title2: "птица",
      sub1: "Качественные",
      sub2: "и свежие продукты",
      cardBg: "#faf6ef",
      blobBg: "#f4ebd9",
      arrowBg: "#e9dac5",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
    },
    {
      name: "Молочные продукты",
      filter: "Молочные",
      num: "04",
      title1: "Молочные",
      title2: "продукты",
      sub1: "Свежее фермерское",
      sub2: "каждое утро",
      cardBg: "#f1f7fb",
      blobBg: "#dbebf7",
      arrowBg: "#cbe3f3",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
    },
    {
      name: "Хлеб и выпечка",
      filter: "Хлеб",
      num: "05",
      title1: "Хлеб и",
      title2: "выпечка",
      sub1: "Ремесленная пекарня",
      sub2: "на закваске",
      cardBg: "#fbf6ed",
      blobBg: "#f6ead2",
      arrowBg: "#eddab6",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
    },
    {
      name: "Рыба и морепродукты",
      filter: "Рыба",
      num: "06",
      title1: "Рыба и",
      title2: "морепродукты",
      sub1: "Свежий улов",
      sub2: "к вашему столу",
      cardBg: "#eef7f8",
      blobBg: "#d6edf0",
      arrowBg: "#c2e5e8",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
    },
    {
      name: "Бакалея и мед",
      filter: "Бакалея",
      num: "07",
      title1: "Бакалея",
      title2: "и мед",
      sub1: "Натуральный мед",
      sub2: "и отборные орехи",
      cardBg: "#fbf8ec",
      blobBg: "#f7efcc",
      arrowBg: "#eee1ad",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
    },
    {
      name: "Напитки и соки",
      filter: "Напитки",
      num: "08",
      title1: "Напитки",
      title2: "и соки",
      sub1: "Холодный отжим,",
      sub2: "без сахара",
      cardBg: "#fdf6ee",
      blobBg: "#faead6",
      arrowBg: "#f5d9bf",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
    },
  ];

  const allProducts = [
    {
      name: "Томаты Бакинские розовые сладкие",
      category: "Овощи",
      price: "450 ₽",
      oldPrice: "550 ₽",
      weight: "1 кг",
      badge: "-18%",
      badgeColor: "bg-rose-500",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
      rating: 4.9,
      reviews: 128,
    },
    {
      name: "Сыр Камамбер с белой плесенью",
      category: "Молочные",
      price: "320 ₽",
      oldPrice: null,
      weight: "150 г",
      badge: "Новинка",
      badgeColor: "bg-emerald-600",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
      rating: 5.0,
      reviews: 45,
    },
    {
      name: "Хлеб ремесленный на закваске",
      category: "Хлеб",
      price: "180 ₽",
      oldPrice: null,
      weight: "400 г",
      badge: null,
      badgeColor: "",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
      rating: 4.8,
      reviews: 312,
    },
    {
      name: "Говядина вырезка охлажденная",
      category: "Мясо",
      price: "1 200 ₽",
      oldPrice: "1 500 ₽",
      weight: "1 кг",
      badge: "-20%",
      badgeColor: "bg-rose-500",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
      rating: 4.7,
      reviews: 89,
    },
    {
      name: "Молоко цельное фермерское 3.2-4.5%",
      category: "Молочные",
      price: "145 ₽",
      oldPrice: null,
      weight: "1 л",
      badge: "Хит",
      badgeColor: "bg-amber-500",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
      rating: 4.9,
      reviews: 540,
    },
    {
      name: "Огурцы Луховицкие хрустящие",
      category: "Овощи",
      price: "230 ₽",
      oldPrice: "280 ₽",
      weight: "1 кг",
      badge: "-17%",
      badgeColor: "bg-rose-500",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
      rating: 4.8,
      reviews: 76,
    },
    {
      name: "Мед липовый таежный натуральный",
      category: "Бакалея",
      price: "680 ₽",
      oldPrice: null,
      weight: "500 г",
      badge: "Органик",
      badgeColor: "bg-emerald-600",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
      rating: 5.0,
      reviews: 94,
    },
    {
      name: "Творог деревенский рассыпчатый 9%",
      category: "Молочные",
      price: "260 ₽",
      oldPrice: "310 ₽",
      weight: "350 г",
      badge: "-16%",
      badgeColor: "bg-rose-500",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
      rating: 4.9,
      reviews: 210,
    },
    {
      name: "Яблоки Симиренко садовые",
      category: "Фрукты",
      price: "190 ₽",
      oldPrice: null,
      weight: "1 кг",
      badge: null,
      badgeColor: "",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
      rating: 4.7,
      reviews: 63,
    },
    {
      name: "Стейк из радужной форели",
      category: "Рыба",
      price: "980 ₽",
      oldPrice: "1 250 ₽",
      weight: "500 г",
      badge: "-21%",
      badgeColor: "bg-rose-500",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
      rating: 4.9,
      reviews: 142,
    },
    {
      name: "Курица домашняя зернового откорма",
      category: "Мясо",
      price: "540 ₽",
      oldPrice: null,
      weight: "1.5 кг",
      badge: null,
      badgeColor: "",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
      rating: 4.8,
      reviews: 188,
    },
    {
      name: "Клубника свежая садовая",
      category: "Фрукты",
      price: "450 ₽",
      oldPrice: "600 ₽",
      weight: "500 г",
      badge: "-25%",
      badgeColor: "bg-rose-500",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
      rating: 4.6,
      reviews: 112,
    },
    {
      name: "Яйцо куриное С0 (Деревенское)",
      category: "Молочные",
      price: "110 ₽",
      oldPrice: "140 ₽",
      weight: "10 шт",
      badge: "-21%",
      badgeColor: "bg-rose-500",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
      rating: 4.9,
      reviews: 840,
    },
    {
      name: "Авокадо Хасс спелое",
      category: "Овощи",
      price: "390 ₽",
      oldPrice: "590 ₽",
      weight: "2 шт",
      badge: "-33%",
      badgeColor: "bg-rose-500",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
      rating: 4.8,
      reviews: 215,
    },
  ];

  const filteredProducts = allProducts.filter((p) => {
    const matchesFilter = activeFilter === "Все" || p.category === activeFilter;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalCartPrice = Object.entries(cart).reduce((sum, [name, qty]) => {
    const item = allProducts.find((p) => p.name === name);
    if (!item) return sum;
    const priceNum = parseInt(item.price.replace(/\D/g, ""), 10) || 0;
    return sum + priceNum * qty;
  }, 0);

  const freeDeliveryThreshold = 2000;
  const progressToFreeDelivery = Math.min(
    100,
    Math.round((totalCartPrice / freeDeliveryThreshold) * 100)
  );

  const checkCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scrollCategories = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.75;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const ref = carouselRef.current;
    if (!ref) return;
    ref.addEventListener("scroll", checkCarouselScroll);
    checkCarouselScroll();
    return () => ref.removeEventListener("scroll", checkCarouselScroll);
  }, []);

  const selectCategory = (categoryFilter: string) => {
    setActiveFilter(activeFilter === categoryFilter ? "Все" : categoryFilter);
    const el = document.getElementById("hits");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faf9] text-gray-900 font-sans selection:bg-green-100 selection:text-green-900 pb-20 md:pb-0">
      {/* 1. Header (Marketplace Style) */}
      <header className="bg-white sticky top-0 z-40 shadow-xs border-b border-gray-100">
        {/* Top Bar (Desktop Only) */}
        <div className="bg-gray-50 text-gray-500 text-xs py-2 px-4 border-b border-gray-100 hidden md:block">
          <div className="max-w-[1500px] mx-auto flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 hover:text-green-700 cursor-pointer transition-colors">
                <MapPin size={13} className="text-green-600" /> Москва и область (экспресс)
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-orange-500" /> Доставка за 30-60 мин
              </span>
              <span className="flex items-center gap-1.5 text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full">
                <Truck size={13} /> Бесплатно от 2 000 ₽
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#features" className="hover:text-green-700 transition-colors">
                Гарантия свежести
              </a>
              <a href="#footer" className="hover:text-green-700 transition-colors">
                Фермерам
              </a>
              <a
                href="tel:88005553535"
                className="font-bold text-gray-800 hover:text-green-700 transition-colors flex items-center gap-1"
              >
                <Phone size={12} /> 8 (800) 555-35-35
              </a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-[1500px] mx-auto px-4 py-3 sm:py-3.5 flex items-center justify-between gap-3 sm:gap-4 md:gap-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-gray-700 hover:text-green-600 p-1.5 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Меню"
            >
              <Menu size={22} />
            </button>
            <a href="#" className="flex items-center gap-1.5 select-none group">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-green-600 rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <LeafIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-black tracking-tight leading-none text-green-700">
                  ФЕРМЕР<span className="text-orange-500">МАРКЕТ</span>
                </span>
                <span className="text-[9px] uppercase tracking-wider font-bold text-gray-400 leading-none mt-0.5 hidden xs:block">
                  Свежие эко-продукты
                </span>
              </div>
            </a>
          </div>

          {/* Catalog Button (Desktop) */}
          <button
            onClick={() => {
              const el = document.getElementById("catalog");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 lg:px-5 py-2.5 rounded-xl font-bold text-sm shrink-0 transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <LayoutGrid size={18} />
            <span>Каталог</span>
          </button>

          {/* Search Bar (Desktop & Tablet) */}
          <div className="flex-1 hidden sm:flex relative max-w-xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск: томаты, сыр, молоко, говядина..."
              className="w-full bg-gray-100/80 border-2 border-transparent focus:border-green-500 focus:bg-white rounded-xl py-2 sm:py-2.5 pl-4 pr-10 outline-none text-sm transition-all"
            />
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5"
              >
                <X size={16} />
              </button>
            ) : (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <Search size={18} />
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-3 md:gap-5 shrink-0">
            {/* User Profile */}
            <button
              onClick={() => {}}
              className="hidden md:flex flex-col items-center text-gray-600 hover:text-green-700 transition-colors p-1 cursor-pointer"
            >
              <User size={21} />
              <span className="text-[10px] font-semibold mt-1">Войти</span>
            </button>

            {/* Favorites Button */}
            <button
              onClick={() => setIsFavoritesOpen(true)}
              className="flex flex-col items-center text-gray-600 hover:text-rose-600 transition-colors relative p-1.5 sm:p-1 cursor-pointer rounded-xl hover:bg-gray-50"
              aria-label="Избранное"
            >
              <Heart
                size={22}
                className={favorites.length > 0 ? "text-rose-500 fill-rose-500" : "text-gray-600"}
              />
              <span className="text-[10px] font-semibold mt-1 hidden md:block">Избранное</span>
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Minimalist Cart Button (No green background) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl transition-all font-semibold text-xs sm:text-sm border border-gray-200/90 shadow-xs cursor-pointer active:scale-95"
              aria-label="Корзина"
            >
              <ShoppingCart size={18} className="text-gray-800" />
              <div className="hidden sm:flex flex-col items-start text-left leading-tight">
                <span className="text-xs font-black text-gray-950">
                  {totalCartPrice.toLocaleString("ru-RU")} ₽
                </span>
                <span className="text-[9px] text-gray-400 font-medium">Корзина</span>
              </div>
              <span className="bg-gray-900 text-white text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full font-bold ml-0.5 min-w-[18px] text-center">
                {totalCartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="sm:hidden px-4 pb-3 pt-1">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Найти свежие продукты..."
              className="w-full bg-gray-100 rounded-xl py-2 pl-9 pr-9 outline-none text-sm border border-gray-200/60 focus:border-green-500 focus:bg-white transition-all"
            />
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 p-0.5"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Promo Marquee */}
      <div className="bg-green-700 py-1.5 sm:py-2 overflow-hidden border-y border-green-800 text-white select-none">
        <div className="flex whitespace-nowrap text-[10px] sm:text-xs font-bold uppercase tracking-wider animate-[marquee_35s_linear_infinite]">
          <span className="mx-6 flex items-center gap-1.5">
            <Flame size={13} className="text-amber-300" /> Бесплатная доставка от 2 000 ₽
          </span>
          <span className="mx-6 flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-emerald-300" /> 100% свежие фермерские продукты
          </span>
          <span className="mx-6 flex items-center gap-1.5">
            <Clock size={13} className="text-amber-300" /> Доставка за 45 минут по Москве
          </span>
          <span className="mx-6 flex items-center gap-1.5">
            <Sparkles size={13} className="text-yellow-300" /> Прямые поставки каждое утро
          </span>
          <span className="mx-6 flex items-center gap-1.5">
            <Flame size={13} className="text-amber-300" /> Бесплатная доставка от 2 000 ₽
          </span>
          <span className="mx-6 flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-emerald-300" /> 100% свежие фермерские продукты
          </span>
        </div>
      </div>

      <main className="max-w-[1500px] mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
        {/* Active Search Notification */}
        {searchQuery.trim() !== "" && (
          <div className="mb-6 p-4 bg-white rounded-2xl border border-green-200 flex items-center justify-between shadow-xs">
            <div>
              <p className="text-sm text-gray-600">
                Результаты поиска по запросу:{" "}
                <span className="font-bold text-gray-900">«{searchQuery}»</span>
              </p>
              <p className="text-xs text-green-700 font-semibold mt-0.5">
                Найдено товаров: {filteredProducts.length}
              </p>
            </div>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs font-bold text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors"
            >
              Сбросить поиск
            </button>
          </div>
        )}

        {/* 2. Hero Banners (Responsive: Stacked on Mobile, Side-by-Side on Desktop) */}
        <section className="flex flex-col gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-12">
          {/* Main Hero Card */}
          <div className="w-full bg-emerald-900 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden flex flex-col justify-center min-h-[180px] sm:min-h-[240px] md:min-h-[300px] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80"
              alt="Свежие овощи"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/65 to-transparent" />
            <div className="relative z-10 max-w-[280px] sm:max-w-xs md:max-w-md bg-white/95 backdrop-blur-md p-3.5 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-white/60 shadow-lg shadow-green-950/20">
              <span className="bg-orange-500 text-white text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full mb-1 sm:mb-2 inline-block">
                Сезонное предложение
              </span>
              <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-green-950 mb-1 sm:mb-1.5 leading-tight">
                Свежие овощи с грядки
              </h2>
              <p className="text-green-900 mb-2 sm:mb-3 font-medium text-xs sm:text-sm leading-snug line-clamp-2">
                Скидки до 30% на урожай этой недели от проверенных фермеров.
              </p>
              <button
                onClick={() => selectCategory("Овощи")}
                className="inline-block text-center bg-green-600 hover:bg-green-700 text-white px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md shadow-green-600/30 w-full sm:w-auto active:scale-95 cursor-pointer"
              >
                Выбрать овощи
              </button>
            </div>
          </div>

          {/* Promo Banners: Stacked on mobile (друг под другом), Side-by-side on desktop (друг напротив друга) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            {/* Card 1: Фермерское мясо */}
            <div
              onClick={() => selectCategory("Мясо")}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all group aspect-[16/8] sm:aspect-[16/9] border border-[#f3ead8] block cursor-pointer bg-stone-100"
            >
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80"
                alt="Фермерское мясо - Свежая поставка каждый день"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
            </div>

            {/* Card 2: Молочные продукты */}
            <div
              onClick={() => selectCategory("Молочные")}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all group aspect-[16/8] sm:aspect-[16/9] border border-[#dbeafc] block cursor-pointer bg-sky-50"
            >
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80"
                alt="Молочные продукты - От коров на свободном выпасе"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
            </div>
          </div>
        </section>

        {/* 3. Categories (Exact reference design: "Популярные категории" with 01, 02, 03 cards) */}
        <section id="catalog" className="mb-12 sm:mb-16">
          {/* Header section matching reference image */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
            <div>
              <span className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] block mb-2 sm:mb-3">
                КАТЕГОРИИ
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 leading-[1.05] tracking-tight">
                Популярные<br />категории
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 font-normal mt-2.5 sm:mt-3 leading-relaxed max-w-lg">
                Выбирайте из самых востребованных категорий и находите любимые продукты
              </p>
            </div>

            {/* Navigation buttons: left (gray circle) and right (lime neon circle) */}
            <div className="flex items-center gap-2.5 self-start md:self-end shrink-0">
              {activeFilter !== "Все" && (
                <button
                  onClick={() => setActiveFilter("Все")}
                  className="text-xs font-bold text-gray-700 hover:text-black bg-white border border-gray-200 px-3.5 py-2 rounded-full transition-all cursor-pointer shadow-xs mr-1"
                >
                  Все категории
                </button>
              )}
              <button
                onClick={() => scrollCategories("left")}
                disabled={!canScrollLeft}
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-95 ${
                  canScrollLeft
                    ? "bg-gray-100 hover:bg-gray-200 text-gray-800 shadow-xs"
                    : "bg-gray-100/60 text-gray-300 cursor-not-allowed"
                }`}
                aria-label="Листать назад"
              >
                <ChevronLeft size={20} strokeWidth={2.5} />
              </button>
              <button
                onClick={() => scrollCategories("right")}
                disabled={!canScrollRight}
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm font-bold ${
                  canScrollRight
                    ? "bg-[#d7f93b] hover:bg-[#c8ed27] text-gray-950"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
                aria-label="Листать вперед"
              >
                <ChevronRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Smooth Horizontal Carousel matching reference card layout */}
          <div
            ref={carouselRef}
            onScroll={checkCarouselScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x hide-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0"
            style={{ scrollBehavior: "smooth" }}
          >
            {categories.map((c, i) => {
              const isActive = activeFilter === c.filter;
              return (
                <div
                  key={i}
                  onClick={() => selectCategory(c.filter)}
                  className={`group relative rounded-[28px] sm:rounded-[36px] overflow-hidden w-[82vw] xs:w-[310px] sm:w-[350px] md:w-[390px] h-[270px] sm:h-[300px] md:h-[320px] p-5 sm:p-7 md:p-8 flex flex-col justify-between shrink-0 snap-start cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl select-none border ${
                    isActive
                      ? "ring-4 ring-black/80 border-transparent shadow-xl scale-[1.01]"
                      : "border-black/5 shadow-xs hover:border-black/10"
                  }`}
                  style={{ backgroundColor: c.cardBg }}
                >
                  {/* Decorative background pastel blob */}
                  <div
                    className="absolute -bottom-8 -right-8 w-48 h-48 sm:w-56 sm:h-56 rounded-full blur-2xl opacity-70 pointer-events-none transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: c.blobBg }}
                  />

                  {/* Packshot illustration at bottom right */}
                  <img
                    src={c.img}
                    alt={c.name}
                    className="absolute -bottom-1 -right-1 w-[54%] sm:w-[58%] max-w-[230px] object-contain pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1.5 drop-shadow-md mix-blend-multiply"
                    loading="lazy"
                  />

                  {/* Top: Number badge, title & subtitle */}
                  <div className="relative z-10 max-w-[62%] sm:max-w-[60%]">
                    <span className="inline-flex items-center justify-center text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-black/10 bg-white/70 text-gray-700 tracking-wide">
                      {c.num}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold text-gray-950 leading-[1.12] mt-3 sm:mt-4 mb-1 sm:mb-2 tracking-tight">
                      {c.title1}<br />{c.title2}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-gray-500 font-normal leading-relaxed">
                      {c.sub1}<br />{c.sub2}
                    </p>
                  </div>

                  {/* Bottom: Action Circle Arrow Button */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all shadow-xs group-hover:scale-110"
                      style={{ backgroundColor: c.arrowBg }}
                    >
                      <ArrowRight size={17} className="text-gray-900 group-hover:translate-x-0.5 transition-transform" />
                    </div>

                    {isActive && (
                      <span className="text-[10px] sm:text-xs font-bold text-gray-900 bg-white/80 px-2.5 py-1 rounded-full border border-black/10 flex items-center gap-1 shadow-xs">
                        <Check size={11} strokeWidth={3} />
                        Выбрано
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Indicators matching reference image */}
          <div className="flex items-center gap-2 mt-5 sm:mt-6">
            <div className="h-1.5 sm:h-2 w-10 sm:w-14 rounded-full bg-[#d7f93b]" />
            <div className="h-1.5 sm:h-2 w-6 sm:w-8 rounded-full bg-gray-200" />
            <div className="h-1.5 sm:h-2 w-6 sm:w-8 rounded-full bg-gray-200" />
          </div>
        </section>

        {/* 4. Products Grid (Hits & Catalog) */}
        <section id="hits" className="mb-12 sm:mb-16 scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-5 sm:mb-6 gap-3 sm:gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 flex items-center gap-2">
                <Flame className="text-orange-500" />
                <span>
                  {activeFilter === "Все"
                    ? "Хиты продаж и свежие поступления"
                    : `Категория: ${activeFilter}`}
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Показано {filteredProducts.length} позиций с фермерской гарантией свежести
              </p>
            </div>

            {/* Quick Filter Pills */}
            <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-1 max-w-full hide-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0">
              {["Все", "Овощи", "Мясо", "Молочные", "Хлеб", "Фрукты", "Рыба", "Бакалея"].map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeFilter === f
                      ? "bg-green-600 border border-green-600 text-white shadow-xs"
                      : "bg-white border border-gray-200 text-gray-700 hover:border-green-300 hover:text-green-700"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center border border-gray-100 shadow-xs">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-gray-400">
                <Search size={26} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Товары не найдены</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-4 max-w-sm mx-auto">
                Попробуйте изменить поисковый запрос или выберите другую категорию продуктов.
              </p>
              <button
                onClick={() => {
                  setActiveFilter("Все");
                  setSearchQuery("");
                }}
                className="bg-green-600 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:bg-green-700 transition-colors"
              >
                Показать все товары
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3.5 md:gap-5">
              {filteredProducts.map((p, i) => (
                <ProductCard
                  key={p.name + i}
                  product={p}
                  cartQty={cart[p.name] || 0}
                  isFavorite={favorites.includes(p.name)}
                  onUpdateCart={updateCart}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          )}
        </section>

        {/* 5. Features / Trust (Adaptive Grid) */}
        <section
          id="features"
          className="mb-12 sm:mb-16 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xs border border-gray-100"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <ShieldCheck size={28} className="text-green-600 mb-3" />,
                title: "Строгий эко-контроль",
                desc: "Проверяем каждую партию в лаборатории. Никаких нитратов и антибиотиков.",
              },
              {
                icon: <Clock size={28} className="text-blue-500 mb-3" />,
                title: "Свежесть от 30 минут",
                desc: "Экспресс-доставка из локальных дарксторов и прямо с фермерских хозяйств.",
              },
              {
                icon: <Percent size={28} className="text-orange-500 mb-3" />,
                title: "Честные цены фермеров",
                desc: "Работаем без посредников, поддерживая локальных производителей напрямую.",
              },
              {
                icon: <Heart size={28} className="text-rose-500 mb-3" />,
                title: "Гарантия вкуса",
                desc: "Вернем 100% денег или заменим товар, если вам не понравится вкус или качество.",
              },
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 mb-3">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">{f.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Discounts Section */}
        <section id="discounts" className="mb-12 sm:mb-16">
          <div className="flex justify-between items-end mb-5 sm:mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 flex items-center gap-2">
                <Percent className="text-red-500" /> Спецпредложения дня
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Успейте купить по выгодной цене до конца недели
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3.5 md:gap-5">
            {[
              {
                name: "Авокадо Хасс спелое",
                price: "390 ₽",
                oldPrice: "590 ₽",
                weight: "2 шт",
                badge: "-33%",
                badgeColor: "bg-rose-500",
                img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
                rating: 4.8,
                reviews: 215,
              },
              {
                name: "Яйцо куриное С0 (Деревенское)",
                price: "110 ₽",
                oldPrice: "140 ₽",
                weight: "10 шт",
                badge: "-21%",
                badgeColor: "bg-rose-500",
                img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
                rating: 4.9,
                reviews: 840,
              },
              {
                name: "Клубника свежая садовая",
                price: "450 ₽",
                oldPrice: "600 ₽",
                weight: "500 г",
                badge: "-25%",
                badgeColor: "bg-rose-500",
                img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
                rating: 4.6,
                reviews: 112,
              },
              {
                name: "Огурцы Луховицкие хрустящие",
                price: "230 ₽",
                oldPrice: "280 ₽",
                weight: "1 кг",
                badge: "-17%",
                badgeColor: "bg-rose-500",
                img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
                rating: 4.8,
                reviews: 76,
              },
              {
                name: "Стейк из радужной форели",
                price: "980 ₽",
                oldPrice: "1 250 ₽",
                weight: "500 г",
                badge: "-21%",
                badgeColor: "bg-rose-500",
                img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
                rating: 4.9,
                reviews: 142,
              },
            ].map((p, i) => (
              <ProductCard
                key={p.name + i}
                product={p}
                cartQty={cart[p.name] || 0}
                isFavorite={favorites.includes(p.name)}
                onUpdateCart={updateCart}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </section>
      </main>

      {/* 8. Footer (Fully Responsive) */}
      <footer id="footer" className="bg-gray-900 text-gray-300 pt-12 md:pt-16 pb-8 md:pb-12 border-t border-gray-800">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10 sm:mb-12">
            <div className="sm:col-span-2">
              <div className="text-2xl font-black tracking-tight text-white flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-xl flex items-center justify-center text-white">
                  <LeafIcon />
                </div>
                <span>
                  ФЕРМЕР<span className="text-orange-500">МАРКЕТ</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-5 max-w-sm leading-relaxed">
                Маркетплейс натуральных продуктов. Мы объединяем локальных фермеров и покупателей,
                ценящих здоровье, качество и настоящий деревенский вкус.
              </p>
              <div className="flex gap-3">
                <div className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center cursor-pointer transition-colors text-gray-300 hover:text-white">
                  <Instagram size={17} />
                </div>
                <div className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center cursor-pointer transition-colors text-gray-300 hover:text-white">
                  <Facebook size={17} />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Каталог</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                {categories.slice(0, 5).map((c, i) => (
                  <li key={i}>
                    <button
                      onClick={() => selectCategory(c.filter)}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Покупателям</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Как сделать заказ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Оплата и доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Возврат продуктов
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Программа лояльности
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Контакты</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="text-base sm:text-lg font-bold text-white">
                  <a href="tel:88005553535" className="hover:text-green-400 transition-colors">
                    8 (800) 555-35-35
                  </a>
                </li>
                <li className="text-gray-400 text-xs">Ежедневно с 8:00 до 22:00</li>
                <li className="text-gray-400 pt-1">
                  <a href="mailto:support@farmmarket.ru" className="hover:text-white transition-colors">
                    support@farmmarket.ru
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
            <div>© 2026 ФермерМаркет. Все права защищены.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-400 transition-colors">
                Конфиденциальность
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Оферта
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* STICKY BOTTOM NAVIGATION BAR FOR MOBILE (Thumb Reach Friendly) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2 flex justify-around items-center shadow-lg">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex flex-col items-center text-gray-600 hover:text-green-600 transition-colors py-0.5 cursor-pointer"
        >
          <LeafIcon />
          <span className="text-[10px] font-bold mt-1">Главная</span>
        </button>

        <button
          onClick={() => {
            const el = document.getElementById("catalog");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center text-gray-600 hover:text-green-600 transition-colors py-0.5 cursor-pointer"
        >
          <LayoutGrid size={20} />
          <span className="text-[10px] font-semibold mt-1">Категории</span>
        </button>

        <button
          onClick={() => setIsFavoritesOpen(true)}
          className="flex flex-col items-center text-gray-600 hover:text-rose-600 transition-colors py-0.5 relative cursor-pointer"
        >
          <Heart
            size={20}
            className={favorites.length > 0 ? "text-rose-500 fill-rose-500" : "text-gray-600"}
          />
          <span className="text-[10px] font-semibold mt-1">Избранное</span>
          {favorites.length > 0 && (
            <span className="absolute -top-1 right-2 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center text-gray-600 hover:text-green-600 transition-colors py-0.5 relative cursor-pointer"
        >
          <ShoppingCart size={20} />
          <span className="text-[10px] font-semibold mt-1">
            {totalCartPrice > 0 ? `${totalCartPrice} ₽` : "Корзина"}
          </span>
          {totalCartCount > 0 && (
            <span className="absolute -top-1 right-2 bg-green-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {totalCartCount}
            </span>
          )}
        </button>
      </nav>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" />
          <div
            className="relative bg-white w-full max-w-xs h-full flex flex-col shadow-2xl p-5 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 rounded-xl flex items-center justify-center text-white">
                  <LeafIcon />
                </div>
                <span className="font-black text-green-700 text-lg">
                  ФЕРМЕР<span className="text-orange-500">МАРКЕТ</span>
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Категории</div>
              <div className="grid grid-cols-1 gap-2">
                {categories.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      selectCategory(c.filter);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between p-2.5 rounded-xl text-left text-sm font-semibold transition-colors cursor-pointer ${
                      activeFilter === c.filter
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "hover:bg-gray-50 text-gray-800"
                    }`}
                  >
                    <span>{c.name}</span>
                    <span className="text-xs text-gray-400 font-normal">{c.num}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-gray-100 space-y-3">
              <a
                href="tel:88005553535"
                className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-green-600"
              >
                <Phone size={16} className="text-green-600" /> 8 (800) 555-35-35
              </a>
              <p className="text-xs text-gray-400">Доставка ежедневно с 8:00 до 22:00</p>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE CART DRAWER (Minimalist, Responsive, No Green Background) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" onClick={() => setIsCartOpen(false)}>
          <div className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity" />
          <div
            className="relative bg-white w-full sm:max-w-md h-full max-h-[100dvh] flex flex-col shadow-2xl z-10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Minimalist Cart Header */}
            <div className="p-3.5 sm:p-4 border-b border-gray-100 flex items-center justify-between shrink-0 bg-white">
              <div className="flex items-center gap-2">
                <ShoppingCart size={19} className="text-gray-900" />
                <h3 className="text-base sm:text-lg font-bold text-gray-950">Корзина</h3>
                <span className="bg-gray-100 text-gray-700 text-xs font-bold px-2 py-0.5 rounded-full">
                  {totalCartCount}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-900 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Закрыть корзину"
              >
                <X size={18} />
              </button>
            </div>

            {/* Minimalist Delivery Status (Clean neutral gray, no green background) */}
            <div className="px-4 py-2 bg-gray-50/80 border-b border-gray-100 text-[11px] text-gray-500 flex justify-between items-center shrink-0">
              <span>
                {totalCartPrice >= freeDeliveryThreshold
                  ? "Бесплатная доставка активна"
                  : `До бесплатной доставки: ${freeDeliveryThreshold - totalCartPrice} ₽`}
              </span>
              <span className="font-semibold text-gray-800">{progressToFreeDelivery}%</span>
            </div>

            {/* Cart Items List (Scrollable, takes remaining height) */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-3.5 sm:p-4 space-y-2.5 min-h-0">
              {Object.keys(cart).length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400">
                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-3 text-gray-400">
                    <ShoppingCart size={26} />
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">Корзина пуста</h4>
                  <p className="text-xs text-gray-400 mb-4 max-w-xs leading-relaxed">
                    Выберите свежие овощи, фрукты или фермерские продукты в каталоге
                  </p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      const el = document.getElementById("catalog");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-gray-900 text-white font-semibold text-xs px-4 py-2 rounded-xl hover:bg-black transition-colors"
                  >
                    Перейти к покупкам
                  </button>
                </div>
              ) : (
                Object.entries(cart).map(([name, qty]) => {
                  const item = allProducts.find((p) => p.name === name);
                  if (!item) return null;
                  const itemPrice = parseInt(item.price.replace(/\D/g, ""), 10) || 0;
                  return (
                    <div
                      key={name}
                      className="flex items-center gap-3 p-2.5 bg-gray-50/70 rounded-xl border border-gray-100"
                    >
                      <div className="w-14 h-14 rounded-lg bg-gray-50 border border-gray-100 overflow-hidden shrink-0 p-1 flex items-center justify-center">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-contain filter drop-shadow-xs"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-gray-900 truncate leading-snug">
                          {item.name}
                        </h4>
                        <div className="text-[11px] text-gray-400 font-medium mb-1">
                          {item.weight} • {item.price}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center bg-white border border-gray-200 rounded-md px-1.5 py-0.5 text-xs font-bold gap-2">
                            <button
                              onClick={() => updateCart(name, -1)}
                              className="w-4 h-4 flex items-center justify-center text-gray-600 hover:text-black cursor-pointer"
                              aria-label="Уменьшить"
                            >
                              -
                            </button>
                            <span className="min-w-[10px] text-center">{qty}</span>
                            <button
                              onClick={() => updateCart(name, 1)}
                              className="w-4 h-4 flex items-center justify-center text-gray-600 hover:text-black cursor-pointer"
                              aria-label="Увеличить"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-xs font-bold text-gray-950">
                            {(itemPrice * qty).toLocaleString("ru-RU")} ₽
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => updateCart(name, -qty)}
                        className="text-gray-300 hover:text-rose-500 p-1 transition-colors cursor-pointer"
                        title="Удалить"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            {/* Minimalist Cart Footer (Always docked at bottom, never cut off) */}
            {Object.keys(cart).length > 0 && (
              <div className="p-3.5 sm:p-4 border-t border-gray-100 bg-white shrink-0 space-y-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.03)]">
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-gray-500">
                    <span>Товары ({totalCartCount} шт.)</span>
                    <span>{totalCartPrice.toLocaleString("ru-RU")} ₽</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Доставка</span>
                    <span className={totalCartPrice >= freeDeliveryThreshold ? "text-gray-900 font-medium" : ""}>
                      {totalCartPrice >= freeDeliveryThreshold ? "Бесплатно" : "250 ₽"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base font-bold text-gray-950 pt-1.5 border-t border-gray-100">
                    <span>Итого к оплате</span>
                    <span>
                      {(
                        totalCartPrice + (totalCartPrice >= freeDeliveryThreshold ? 0 : 250)
                      ).toLocaleString("ru-RU")}{" "}
                      ₽
                    </span>
                  </div>
                </div>

                {orderSuccess ? (
                  <div className="bg-gray-900 text-white p-2.5 rounded-xl text-center text-xs font-bold animate-in fade-in">
                    ✓ Заказ успешно оформлен! Курьер свяжется с вами.
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setOrderSuccess(true);
                      setTimeout(() => setOrderSuccess(false), 4000);
                    }}
                    className="w-full bg-gray-950 hover:bg-black text-white font-bold py-3 rounded-xl transition-all shadow-xs text-xs sm:text-sm cursor-pointer active:scale-95"
                  >
                    Оформить заказ
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* INTERACTIVE FAVORITES DRAWER */}
      {isFavoritesOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" onClick={() => setIsFavoritesOpen(false)}>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" />
          <div
            className="relative bg-white w-full sm:max-w-md h-full flex flex-col shadow-2xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart size={22} className="text-rose-500 fill-rose-500" />
                <h3 className="text-lg font-black text-gray-900">Избранные товары</h3>
                <span className="bg-rose-100 text-rose-800 text-xs font-bold px-2 py-0.5 rounded-full">
                  {favorites.length}
                </span>
              </div>
              <button
                onClick={() => setIsFavoritesOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
              {favorites.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400">
                  <Heart size={36} className="text-gray-300 mb-2" />
                  <h4 className="font-bold text-gray-700 text-sm mb-1">Список пуст</h4>
                  <p className="text-xs text-gray-400">
                    Нажимайте на сердечко у карточек товаров, чтобы сохранить их здесь
                  </p>
                </div>
              ) : (
                favorites.map((name) => {
                  const item = allProducts.find((p) => p.name === name);
                  if (!item) return null;
                  return (
                    <div
                      key={name}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100"
                    >
                      <div className="w-16 h-16 rounded-xl bg-white border border-gray-100 overflow-hidden shrink-0 p-1 flex items-center justify-center">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-contain filter drop-shadow-xs"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-gray-900 truncate leading-snug">
                          {item.name}
                        </h4>
                        <div className="text-[11px] text-gray-400 mb-1">
                          {item.weight} • {item.price}
                        </div>
                        <button
                          onClick={() => {
                            updateCart(name, 1);
                            setIsCartOpen(true);
                          }}
                          className="text-xs font-bold text-green-700 hover:text-green-800 bg-white border border-green-200 px-3 py-1 rounded-lg transition-colors cursor-pointer"
                        >
                          В корзину
                        </button>
                      </div>
                      <button
                        onClick={() => toggleFavorite(name)}
                        className="text-rose-500 hover:text-gray-300 p-1 cursor-pointer"
                        title="Удалить из избранного"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* Helper Icons & Product Card */
function LeafIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ProductCard({
  product,
  cartQty = 0,
  isFavorite = false,
  onUpdateCart,
  onToggleFavorite,
}: {
  product: any;
  cartQty?: number;
  isFavorite?: boolean;
  onUpdateCart?: (name: string, delta: number) => void;
  onToggleFavorite?: (name: string) => void;
}) {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-gray-100 hover:border-gray-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group h-full select-none">
      {/* Badge */}
      {product.badge && (
        <div
          className={`absolute top-2.5 left-2.5 sm:top-3 sm:left-3 ${
            product.badgeColor || "bg-rose-500"
          } text-white text-[10px] sm:text-xs font-black px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full z-10 shadow-xs pointer-events-none tracking-tight`}
        >
          {product.badge}
        </div>
      )}

      {/* Favorite Button */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggleFavorite?.(product.name);
        }}
        className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 hover:bg-white shadow-xs border border-gray-100 flex items-center justify-center transition-all z-10 cursor-pointer active:scale-90 hover:scale-105"
        aria-label="В избранное"
      >
        <Heart
          size={15}
          className={
            isFavorite
              ? "text-rose-500 fill-rose-500"
              : "text-gray-300 hover:text-rose-500 transition-colors"
          }
        />
      </button>

      {/* Product Packshot (Floating cleanly on card, no background box or frame outline) */}
      <div className="aspect-square w-full mb-2 sm:mb-2.5 flex items-center justify-center p-2 sm:p-3 relative">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-contain filter drop-shadow-[0_6px_14px_rgba(0,0,0,0.07)] group-hover:scale-108 transition-transform duration-300 pointer-events-none"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-1">
          <div className="flex items-center text-amber-400">
            <Star size={12} fill="currentColor" />
          </div>
          <span className="text-xs font-bold text-gray-800">
            {product.rating}
          </span>
          <span className="text-xs text-gray-400 font-normal">
            ({product.reviews})
          </span>
        </div>

        {/* Name */}
        <h3 className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug line-clamp-2 min-h-[2.2rem] sm:min-h-[2.5rem] mb-1 group-hover:text-green-700 transition-colors">
          {product.name}
        </h3>

        {/* Weight */}
        <div className="text-[11px] sm:text-xs text-gray-400 font-medium mb-2.5">
          {product.weight}
        </div>

        {/* Price and Cart Action */}
        <div className="mt-auto pt-2 border-t border-gray-100/80 flex items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex flex-col min-w-0">
            <div className="flex items-baseline gap-1 sm:gap-1.5 flex-wrap">
              <span className="text-sm sm:text-base md:text-lg font-black text-gray-950 tracking-tight whitespace-nowrap">
                {product.price}
              </span>
              {product.oldPrice && (
                <span className="text-[10px] sm:text-xs text-gray-400 line-through font-normal whitespace-nowrap">
                  {product.oldPrice}
                </span>
              )}
            </div>
          </div>

          <div className="shrink-0">
            {cartQty > 0 ? (
              <div className="flex items-center bg-green-600 text-white rounded-xl px-1.5 sm:px-2 py-1 text-xs font-bold gap-1 sm:gap-1.5 shadow-xs">
                <button
                  type="button"
                  onClick={() => onUpdateCart?.(product.name, -1)}
                  className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center hover:bg-green-700 rounded-md active:scale-90 transition-colors cursor-pointer text-xs"
                  aria-label="Уменьшить"
                >
                  -
                </button>
                <span className="min-w-[10px] sm:min-w-[12px] text-center text-xs">{cartQty}</span>
                <button
                  type="button"
                  onClick={() => onUpdateCart?.(product.name, 1)}
                  className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center hover:bg-green-700 rounded-md active:scale-90 transition-colors cursor-pointer text-xs"
                  aria-label="Увеличить"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => onUpdateCart?.(product.name, 1)}
                className="bg-green-50 hover:bg-green-600 text-green-700 hover:text-white font-bold px-2.5 sm:px-3 py-1.5 rounded-xl text-xs flex items-center gap-1 sm:gap-1.5 transition-all duration-200 active:scale-95 shadow-xs cursor-pointer"
                aria-label="В корзину"
              >
                <Plus size={14} />
                <span>В корзину</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
