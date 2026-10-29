"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { businessInfo } from "@/data/businessInfo";
import { Instagram, ExternalLink, Heart } from "lucide-react";

export const InstagramGallery: React.FC = () => {
  const { t } = useLanguage();

  const galleryItems = [
    {
      id: "ig-1",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80",
      captionAr: "تشكيلة الشوكولاتة البلجيكية الخاصة لمناسباتكم السعيدة في جدة ✨",
      captionEn: "Artisanal Belgian chocolate assortment for joyful moments in Jeddah ✨",
    },
    {
      id: "ig-2",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
      captionAr: "الورد الطبيعي والشوكولاتة الفاخرة.. التعبير الأصدق عن المحبة 🌹",
      captionEn: "Natural roses paired with fine chocolate.. the pure language of love 🌹",
    },
    {
      id: "ig-3",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
      captionAr: "تنسيق مخصص لذكرى سنوية خاصة تم توصيلها لموقع العميل بكل حب 🎁",
      captionEn: "Custom anniversary arrangement delivered with care across Jeddah 🎁",
    },
    {
      id: "ig-4",
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80",
      captionAr: "فازة الورد السيراميك العاجية مع لمسات البيبي روز الهادئة 🌸",
      captionEn: "Ceramic floral centerpiece adorned with delicate baby roses 🌸",
    },
    {
      id: "ig-5",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
      captionAr: "تجهيز هدايا تخرج مميزة مع بطاقة إهداء مذهبة بالخط العربي 🎓",
      captionEn: "Bespoke graduation gift boxes with gold calligraphy cards 🎓",
    },
    {
      id: "ig-6",
      image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=600&q=80",
      captionAr: "صواني الضيافة الـ VIP للشوكولاتة الملكية في أرقى مجالس جدة 👑",
      captionEn: "VIP hospitality trays of royal chocolates for grand gatherings 👑",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-chocolate-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-burgundy font-semibold">
              {t("معرض اللحظات اليومية", "Daily Moments on Social")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-chocolate-950">
              {t("تابعونا على إنستغرام", "Follow Us on Instagram")}
            </h2>
            <p className="text-xs sm:text-sm text-chocolate-800/80 font-light">
              {t(
                `شاهد أحدث التنسيقات اليومية وباقات الهدايا الطازجة عبر حسابنا الرسمي ${businessInfo.instagramHandle}`,
                `Discover our daily floral creations and seasonal gift boxes via our official account ${businessInfo.instagramHandle}`
              )}
            </p>
          </div>

          <a
            href={businessInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-burgundy to-chocolate-900 text-ivory-50 px-6 py-3 rounded-full text-xs font-semibold shadow-sm hover:opacity-95 transition-all self-start sm:self-auto"
          >
            <Instagram className="w-4 h-4 text-gold" />
            <span>{t("متابعة @morento.sa", "Follow @morento.sa")}</span>
            <ExternalLink className="w-3.5 h-3.5 text-ivory-200" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {galleryItems.map((item) => (
            <a
              key={item.id}
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-ivory-200 block shadow-sm hover:shadow-luxury transition-all"
            >
              <Image
                src={item.image}
                alt={t(item.captionAr, item.captionEn)}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-chocolate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center text-white">
                <Instagram className="w-5 h-5 text-gold mb-2" />
                <p className="text-[10px] line-clamp-3 font-light text-ivory-100">
                  {t(item.captionAr, item.captionEn)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

