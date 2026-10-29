"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { businessInfo } from "@/data/businessInfo";
import { MapPin, Award, Heart, CheckCircle2 } from "lucide-react";

export const BrandStory: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="story" className="py-16 md:py-24 bg-chocolate-950 text-ivory-50 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-burgundy/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>{t("قصة مورينتو • جدة - حي الروضة", "Morento Story • Jeddah - Al-Rawdah")}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-ivory-100 leading-tight">
              {t(
                "شغف يترجم أسمى المشاعر إلى هدايا خالدة",
                "A Passion That Translates Deep Emotions into Timeless Gifts"
              )}
            </h2>

            <p className="text-sm sm:text-base text-ivory-200/80 font-light leading-relaxed">
              {t(
                "انطلقت مورينتو من قلب عروس البحر الأحمر - جدة، وتحديداً في حي الروضة العريق، برؤية واضحة: إضفاء لمسة فاخرة ومعاصرة على ثقافة الإهداء السعودية. جمعنا بين أصالة الشوكولاتة البلجيكية الغنية وبين رقة الورود الطبيعية المنتقاة من أرقى مزارع العالم.",
                "Morento was born in the heart of Jeddah, in the prestigious Al-Rawdah district, with a definitive mission: to redefine Saudi gifting culture with contemporary luxury. We united the depth of artisanal Belgian chocolates with the ethereal beauty of hand-selected international blooms."
              )}
            </p>

            <p className="text-sm sm:text-base text-ivory-200/80 font-light leading-relaxed">
              {t(
                "كل بوكس، صينية، أو باقة تخرج من بوتيكنا تُعامل كتحفة فنية متفردة، صُنعت بأيدي منسقين محترفين يهتمون بأدق التفاصيل: من ملمس الشريط المخملي حتى نغمات نكهات الشوكولاتة.",
                "Every box, tray, or floral arrangement that leaves our boutique is treated as an individual piece of art, curated by passionate stylists who obsess over every sensory nuance."
              )}
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-ivory-200/10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <span className="text-xs sm:text-sm text-ivory-100 font-medium">
                  {t("شوكولاتة بلجيكية فاخرة بحشوات مميزة", "Artisanal Belgian chocolate fillings")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <span className="text-xs sm:text-sm text-ivory-100 font-medium">
                  {t("ورود طبيعية نضرة تورد يومياً", "Daily replenished fresh floral stems")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <span className="text-xs sm:text-sm text-ivory-100 font-medium">
                  {t("توصيل احترافي مبرد في كافة جدة", "Temperature-controlled Jeddah delivery")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                <span className="text-xs sm:text-sm text-ivory-100 font-medium">
                  {t("خدمة عملاء راقية وسريعة عبر واتساب", "Attentive concierge service via WhatsApp")}
                </span>
              </div>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-gold/30 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85"
                alt="Morento Boutique Jeddah"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 inset-x-6 bg-chocolate-900/90 backdrop-blur-md p-5 rounded-2xl border border-gold/20 text-center">
                <p className="font-serif text-lg text-gold font-medium mb-1">
                  MORENTO | مورينتو
                </p>
                <p className="text-xs text-ivory-200">
                  {t(
                    "حي الروضة • جدة • المملكة العربية السعودية",
                    "Al-Rawdah • Jeddah • Saudi Arabia"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

