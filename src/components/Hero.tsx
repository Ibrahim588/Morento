"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { businessInfo } from "@/data/businessInfo";
import { buildDirectInquiryWhatsAppUrl } from "@/lib/whatsapp";
import { Sparkles, MessageCircle, Star, ArrowUpRight, Heart, Award } from "lucide-react";

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ivory-100 via-ivory-200/50 to-ivory-100 py-12 md:py-20 lg:py-28">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-start">
            {/* Boutique Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-gold/30 shadow-sm backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs font-semibold text-chocolate-900 tracking-wide">
                {t(
                  "بوتيك الإهداء الفاخر — جدة، حي الروضة",
                  "Luxury Gifting Boutique — Jeddah, Al-Rawdah"
                )}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-chocolate-950 font-normal leading-tight tracking-tight">
                {t(
                  "هدية تحكي ما تعجز عنه الكلمات",
                  "A Gift That Speaks What Words Cannot"
                )}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-chocolate-800/90 font-light max-w-2xl leading-relaxed">
                {t(
                  "اكتشف عالم مورينتو، حيث تلتقي الشوكولاتة الفاخرة بجمال الورد لتصنع لحظات لا تُنسى.",
                  "Discover the world of Morento, where artisanal chocolates and delicate blooms meet to craft unforgettable moments."
                )}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/catalog"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-chocolate-900 hover:bg-chocolate-950 text-ivory-50 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all shadow-luxury hover:shadow-luxury-hover group"
              >
                <span>{t("اكتشف الهدايا", "Explore Gifts")}</span>
                <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href={buildDirectInquiryWhatsAppUrl(language)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-burgundy hover:bg-burgundy-800 text-ivory-50 px-7 py-4 rounded-full text-sm font-semibold tracking-wide transition-all shadow-md group"
              >
                <MessageCircle className="w-4 h-4 text-gold" />
                <span>{t("اطلب هديتك عبر واتساب", "Order via WhatsApp")}</span>
              </a>
            </div>

            {/* Trust and Social Proof Badges */}
            <div className="pt-6 border-t border-chocolate-800/10 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-gold">
                  <Star className="w-4 h-4 fill-gold" />
                  <span className="font-bold text-chocolate-950 text-sm">
                    {businessInfo.rating} / 5
                  </span>
                </div>
                <p className="text-[11px] text-chocolate-700 font-medium">
                  {t(
                    `+${businessInfo.reviewCount} تقييم خرائط جوجل`,
                    `+${businessInfo.reviewCount} Google Reviews`
                  )}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-burgundy">
                  <Heart className="w-4 h-4 fill-burgundy/20" />
                  <span className="font-bold text-chocolate-950 text-sm">100%</span>
                </div>
                <p className="text-[11px] text-chocolate-700 font-medium">
                  {t("شوكولاتة وورد طازج", "Artisanal & Fresh")}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-chocolate-900">
                  <Award className="w-4 h-4 text-gold" />
                  <span className="font-bold text-chocolate-950 text-sm">
                    {t("حي الروضة", "Al-Rawdah")}
                  </span>
                </div>
                <p className="text-[11px] text-chocolate-700 font-medium">
                  {t("توصيل لكافة جدة", "Serving All Jeddah")}
                </p>
              </div>
            </div>
          </div>

          {/* Visual Showcase (Hero Imagery) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame with Gold Accent */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=85"
                  alt={t(
                    "شوكولاتة مورينتو الفاخرة وتنسيقات الورد في جدة",
                    "Morento luxury chocolates and floral gifts in Jeddah"
                  )}
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/60 via-transparent to-transparent" />

                {/* Overlay Tag */}
                <div className="absolute bottom-6 inset-x-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-gold/30 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-burgundy font-medium">
                        {t("مجموعة الإهداء الحصرية", "Signature Gift Collection")}
                      </p>
                      <h3 className="text-sm font-bold text-chocolate-950 font-serif">
                        {t("تناغم الشوكولاتة البلجيكية والورد", "Belgian Chocolate & Rose Harmony")}
                      </h3>
                    </div>
                    <span className="text-xs font-semibold text-gold px-2.5 py-1 bg-chocolate-950 rounded-full">
                      جدة • حي الروضة
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Mini Card */}
              <div className="absolute -top-4 -left-4 sm:-left-8 bg-ivory-50 border border-gold/40 p-3.5 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center text-burgundy">
                  <Sparkles className="w-5 h-5 text-burgundy" />
                </div>
                <div>
                  <p className="text-xs font-bold text-chocolate-950">
                    {t("تغليف إهداء مخصص", "Personalized Gifting")}
                  </p>
                  <p className="text-[10px] text-chocolate-700">
                    {t("بطاقة بخط عربي أنيق", "Handwritten Calligraphy Card")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

