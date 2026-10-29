"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  productsData,
  categoriesList,
  occasionsList,
  ProductCategory,
  ProductOccasion,
} from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { Search, SlidersHorizontal, RefreshCw, Sparkles } from "lucide-react";

function CatalogContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();

  const initialCat = (searchParams.get("category") as ProductCategory) || "all";
  const initialOcc = (searchParams.get("occasion") as ProductOccasion) || "all";

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCat);
  const [selectedOccasion, setSelectedOccasion] = useState<ProductOccasion>(initialOcc);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");

  // Filtering logic
  const filteredProducts = useMemo(() => {
    return productsData
      .filter((product) => {
        // Category filter
        if (selectedCategory !== "all" && product.category !== selectedCategory) {
          return false;
        }

        // Occasion filter
        if (selectedOccasion !== "all" && !product.occasions.includes(selectedOccasion)) {
          return false;
        }

        // Search query filter (matches Arabic or English name or description)
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchAr =
            product.nameAr.toLowerCase().includes(q) ||
            product.descriptionAr.toLowerCase().includes(q);
          const matchEn =
            product.nameEn.toLowerCase().includes(q) ||
            product.descriptionEn.toLowerCase().includes(q);
          if (!matchAr && !matchEn) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        return a.isFeatured ? -1 : 1;
      });
  }, [selectedCategory, selectedOccasion, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedOccasion("all");
    setSearchQuery("");
    setSortBy("featured");
  };

  return (
    <div className="py-10 md:py-16 bg-ivory-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 text-chocolate-950 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-burgundy" />
            <span>{t("كتالوج الهدايا الفاخرة • جدة", "Luxury Gift Catalog • Jeddah")}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif text-chocolate-950">
            {t("تشكيلات الشوكولاتة والورد", "Chocolate & Floral Collections")}
          </h1>

          <p className="text-xs sm:text-sm text-chocolate-800/80 font-light leading-relaxed">
            {t(
              "تصفح تشكيلاتنا المتنوعة من الشوكولاتة البلجيكية، وتنسيقات الورد الطبيعي، وبوكسات المناسبات. يمكنك تخصيص رسالة الإهداء وطلب أي منتج مباشرة عبر الواتساب.",
              "Explore our curated Belgian chocolates, fresh floral displays, and bespoke hampers. Personalize your message and inquire instantly via WhatsApp."
            )}
          </p>
        </div>

        {/* Search & Sort Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-chocolate-800/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-chocolate-400 absolute start-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t(
                "ابحث باسم المنتج، شوكولاتة، ورد، مناسبة...",
                "Search by product name, truffles, roses..."
              )}
              className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-chocolate-800/15 text-xs focus:outline-none focus:border-gold bg-ivory-50/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute end-3 top-1/2 -translate-y-1/2 text-chocolate-400 hover:text-chocolate-800 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <span className="text-xs text-chocolate-700 whitespace-nowrap">
              {t("الترتيب:", "Sort by:")}
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3.5 py-2 rounded-xl border border-chocolate-800/15 text-xs bg-white text-chocolate-900 focus:outline-none focus:border-gold"
            >
              <option value="featured">{t("المقترح والمميز", "Featured")}</option>
              <option value="price-asc">{t("السعر: من الأقل للأعلى", "Price: Low to High")}</option>
              <option value="price-desc">{t("السعر: من الأعلى للأقل", "Price: High to Low")}</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categoriesList.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as ProductCategory)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-chocolate-900 text-ivory-50 shadow-sm"
                      : "bg-white text-chocolate-800 border border-chocolate-800/10 hover:border-gold hover:text-burgundy"
                  }`}
                >
                  {t(cat.nameAr, cat.nameEn)}
                </button>
              );
            })}
          </div>

          {/* Occasion Sub-filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <span className="text-[11px] font-semibold text-chocolate-700 ps-1 whitespace-nowrap">
              {t("المناسبة:", "Occasion:")}
            </span>
            {occasionsList.map((occ) => {
              const isActive = selectedOccasion === occ.id;
              return (
                <button
                  key={occ.id}
                  onClick={() => setSelectedOccasion(occ.id as ProductOccasion)}
                  className={`px-3 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-gold text-chocolate-950 font-bold"
                      : "bg-white/80 text-chocolate-700 hover:bg-white"
                  }`}
                >
                  {t(occ.nameAr, occ.nameEn)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Catalog Results Grid */}
        {filteredProducts.length > 0 ? (
          <div>
            <div className="flex items-center justify-between text-xs text-chocolate-700 mb-4 px-1">
              <span>
                {t(
                  `عرض ${filteredProducts.length} من الهدايا`,
                  `Showing ${filteredProducts.length} gifts`
                )}
              </span>
              <span className="text-[11px] text-chocolate-600">
                {t(
                  "*الأسعار استرشادية، يتم تأكيد التوفر عبر الواتساب",
                  "*Sample prices. Verified on WhatsApp"
                )}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="text-center py-20 bg-white rounded-3xl border border-chocolate-800/10 p-8 space-y-4 shadow-sm max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-ivory-100 flex items-center justify-center mx-auto text-chocolate-400">
              <Search className="w-8 h-8 text-gold" />
            </div>
            <h3 className="font-serif text-xl font-bold text-chocolate-950">
              {t("لم نجد نتائج مطابقة لبحثك", "No Matching Gifts Found")}
            </h3>
            <p className="text-xs sm:text-sm text-chocolate-700 leading-relaxed font-light">
              {t(
                "جرب تغيير كلمات البحث أو إعادة ضبط الفلاتر لتصفح كامل تشكيلات الهدايا المتاحة.",
                "Try tweaking your search keywords or resetting filters to browse our complete collection."
              )}
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 bg-chocolate-900 hover:bg-burgundy text-ivory-50 px-6 py-2.5 rounded-full text-xs font-semibold shadow-sm transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{t("إعادة ضبط الفلاتر والبحث", "Reset All Filters")}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-chocolate-900">
          <p>جاري تحميل تشكيلات مورينتو...</p>
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}

