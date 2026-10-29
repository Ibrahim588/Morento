"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { businessInfo } from "@/data/businessInfo";
import { Star, MapPin, ExternalLink, ShieldCheck } from "lucide-react";

export const ReviewsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-ivory-100 border-t border-chocolate-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-chocolate-950 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-burgundy" />
            <span>{t("تقييمات موثقة من عملاء جدة", "Verified Customer Ratings on Google")}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif text-chocolate-950">
            {t("ثقة تعتز بها مورينتو", "Trust We Are Honored to Uphold")}
          </h2>

          <p className="text-xs sm:text-sm text-chocolate-800/80 font-light leading-relaxed">
            {t(
              "نلتزم بالشفافية المطلقة ولا نختلق آراء مزيفة؛ ندعوكم للاطلاع على التقييمات والتجارب الحقيقية لرواد بوتيكنا عبر خرائط جوجل مباشرة.",
              "We maintain complete authenticity and never fabricate reviews. We invite you to read genuine feedback directly on our Google Maps profile."
            )}
          </p>
        </div>

        {/* Big Rating Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-chocolate-800/10 shadow-luxury max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Rating summary */}
            <div className="md:col-span-5 text-center md:text-start space-y-2 border-b md:border-b-0 md:border-e border-chocolate-800/10 pb-6 md:pb-0 md:pe-8">
              <div className="flex items-baseline justify-center md:justify-start gap-2">
                <span className="text-5xl sm:text-6xl font-serif font-bold text-chocolate-950">
                  {businessInfo.rating}
                </span>
                <span className="text-lg text-chocolate-700 font-light">/ 5.0</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-1 text-gold py-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-xs text-chocolate-700 font-medium">
                {t(
                  `بناءً على أكثر من ${businessInfo.reviewCount} تقييم حقيقي على خرائط جوجل`,
                  `Based on approximately ${businessInfo.reviewCount} verified reviews on Google Maps`
                )}
              </p>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1 text-xs text-burgundy font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  {t(businessInfo.locationAr, businessInfo.locationEn)}
                </span>
              </div>
            </div>

            {/* Google Maps CTA */}
            <div className="md:col-span-7 space-y-4 text-center md:text-start">
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-chocolate-950">
                {t(
                  "اطلع على آراء وتجارب العملاء على Google Maps",
                  "Read Genuine Experiences on Google Maps"
                )}
              </h3>
              <p className="text-xs sm:text-sm text-chocolate-800/80 leading-relaxed font-light">
                {t(
                  "شاركنا عملاؤنا صوراً حقيقية لباقات الورد وبوكسات الشوكولاتة في حفلات التخرج وذكرى الزواج والضيافة، بالإضافة إلى انطباعاتهم عن جودة الطعم ودقة التوصيل في جدة.",
                  "Guests and gift recipients have shared unvarnished photos of our floral hampers, party arrangements, and chocolate favors alongside their ratings."
                )}
              </p>

              <div className="pt-2">
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-chocolate-900 hover:bg-chocolate-950 text-ivory-50 px-6 py-3.5 rounded-full text-xs font-semibold shadow-md transition-all group"
                >
                  <span>{t("فتح صفحة التقييمات على خرائط جوجل", "Open Google Maps Reviews")}</span>
                  <ExternalLink className="w-4 h-4 text-gold group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

