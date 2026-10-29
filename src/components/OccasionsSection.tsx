"use client";

import React, { useState } from "react";
import Link from "next/link";
import { occasionsList, productsData, ProductOccasion } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export const OccasionsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeOccasion, setActiveOccasion] = useState<ProductOccasion>("all");

  const filteredProducts =
    activeOccasion === "all"
      ? productsData.slice(0, 4)
      : productsData.filter((p) => p.occasions.includes(activeOccasion)).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-ivory-50 border-t border-chocolate-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs uppercase tracking-widest text-burgundy font-semibold">
            {t("هدايا مصممة لكل مناسبة", "Curated for Every Occasion")}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-chocolate-950">
            {t("شارك أحبّتك أثمن اللحظات", "Celebrate Life's Precious Milestones")}
          </h2>
          <p className="text-xs sm:text-sm text-chocolate-800/80 font-light">
            {t(
              "سواء كانت ذكرى زواج، تخرج، أو تهنئة بمولود أو ترقية، نبتكر لك تنسيقاً يليق بالمقام",
              "Whether honoring an anniversary, graduation, or VIP celebration, we tailor arrangements to mirror the occasion"
            )}
          </p>
        </div>

        {/* Occasion Filter Buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {occasionsList.map((occ) => {
            const isActive = activeOccasion === occ.id;
            return (
              <button
                key={occ.id}
                onClick={() => setActiveOccasion(occ.id as ProductOccasion)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "bg-chocolate-900 text-ivory-50 shadow-md"
                    : "bg-white text-chocolate-800 border border-chocolate-800/15 hover:border-gold hover:text-burgundy"
                }`}
              >
                {t(occ.nameAr, occ.nameEn)}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={`/catalog?occasion=${activeOccasion !== "all" ? activeOccasion : ""}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-chocolate-900 text-chocolate-950 hover:bg-chocolate-900 hover:text-white transition-all text-xs font-semibold"
          >
            <span>
              {t(
                "استكشف كافة هدايا هذه المناسبة",
                "Explore All Gifts in This Occasion"
              )}
            </span>
            <ArrowUpRight className="w-4 h-4 text-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
};

