"use client";

import React from "react";
import Link from "next/link";
import { productsData } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export const BestSellers: React.FC = () => {
  const { t } = useLanguage();
  const bestSellers = productsData.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-ivory-100 border-t border-chocolate-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-burgundy font-semibold">
              {t("المختارات الأكثر إعجاباً", "Most Cherished Selections")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-chocolate-950">
              {t("هدايا مورينتو الأكثر طلباً في جدة", "Most Requested Gifts in Jeddah")}
            </h2>
            <p className="text-xs sm:text-sm text-chocolate-700 font-light">
              {t(
                "بيانات وعينات المنتجات استرشادية لتيسير المعاينة حتى اعتماد الكتالوج الكامل من إدارة المتجر",
                "Sample catalog showcases to preview the luxury gifting flow ahead of live inventory sync"
              )}
            </p>
          </div>

          <Link
            href="/catalog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-chocolate-900 hover:text-burgundy group whitespace-nowrap self-start sm:self-auto"
          >
            <span>{t("عرض كافة الهدايا والتشكيلات", "View Entire Catalog")}</span>
            <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

