"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";

interface CategoryTile {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  image: string;
  href: string;
}

export const FeaturedCategories: React.FC = () => {
  const { t } = useLanguage();

  const categories: CategoryTile[] = [
    {
      id: "chocolate-flowers",
      titleAr: "شوكولاتة مع الورد",
      titleEn: "Chocolates & Flowers",
      descAr: "التناغم الأرقى بين ورود الجوري الطبيعية والشوكولاتة البلجيكية",
      descEn: "Signature pairing of garden fresh blooms and artisanal truffles",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
      href: "/catalog?category=chocolate-flowers",
    },
    {
      id: "luxury-chocolates",
      titleAr: "شوكولاتة فاخرة",
      titleEn: "Luxury Chocolates",
      descAr: "حبات غنية بحشوات البرالين والكراميل والغاناش المتقن",
      descEn: "Decadent pralines, salted caramels, and single-origin ganaches",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80",
      href: "/catalog?category=luxury-chocolates",
    },
    {
      id: "gift-boxes",
      titleAr: "بوكسات الهدايا",
      titleEn: "Gift Boxes & Hampers",
      descAr: "تصاميم مخملية أنيقة مزينة بأشرطة الحرير وبطاقات الإهداء",
      descEn: "Velvet gift towers with satin ribbon finishes and custom cards",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      href: "/catalog?category=gift-boxes",
    },
    {
      id: "floral-arrangements",
      titleAr: "تنسيقات الورد",
      titleEn: "Floral Arrangements",
      descAr: "فازات وتنسيقات سيراميك حديثة تناسب أرقى المجالس والمناسبات",
      descEn: "Ceramic vases and contemporary blooms tailored for refined interiors",
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
      href: "/catalog?category=floral-arrangements",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-burgundy font-semibold">
            {t("تشكيلات مورينتو الحصرية", "Exclusive Morento Collections")}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-chocolate-950">
            {t("اختر تجربة الإهداء المناسبة", "Choose Your Gifting Experience")}
          </h2>
          <p className="text-sm sm:text-base text-chocolate-800/80 font-light">
            {t(
              "هدايا مصممة بعناية فائقة لتصل مشاعرك بأرقى صورة في كافة أحياء جدة",
              "Curated with utmost passion to deliver your heartfelt sentiments across Jeddah"
            )}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500 bg-white border border-chocolate-800/5 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={t(cat.titleAr, cat.titleEn)}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/80 via-chocolate-950/20 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-serif font-medium text-ivory-50 group-hover:text-gold transition-colors">
                      {t(cat.titleAr, cat.titleEn)}
                    </h3>
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-ivory-50 group-hover:bg-gold group-hover:text-chocolate-950 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs text-ivory-200/80 font-light line-clamp-2">
                    {t(cat.descAr, cat.descEn)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

