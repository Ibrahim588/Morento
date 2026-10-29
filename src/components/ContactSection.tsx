"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { businessInfo } from "@/data/businessInfo";
import { buildDirectInquiryWhatsAppUrl } from "@/lib/whatsapp";
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Navigation,
  Clock,
  ExternalLink,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-chocolate-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-burgundy font-semibold">
            {t("الموقع والاتصال", "Location & Contact")}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-chocolate-950">
            {t("يسعدنا تواصلكم وزيارتكم في جدة", "Visit Our Boutique in Al-Rawdah")}
          </h2>
          <p className="text-xs sm:text-sm text-chocolate-800/80 font-light">
            {t(
              "نستقبل طلباتكم واستفساراتكم بكل رحابة صدر عبر الواتساب والمكالمات، أو بزيارتنا في فرعنا بحي الروضة",
              "We welcome your inquiries and custom gift orders via WhatsApp, direct call, or at our boutique in Jeddah"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Location card */}
            <div className="bg-ivory-100 p-6 rounded-2xl border border-chocolate-800/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-chocolate-900 text-gold flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-chocolate-950">
                    {t("عنوان البوتيك", "Boutique Location")}
                  </h3>
                  <p className="text-xs text-chocolate-800">
                    {t(businessInfo.locationAr, businessInfo.locationEn)}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-gold/10 text-chocolate-900 border border-chocolate-800/20 py-2.5 rounded-xl text-xs font-semibold transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-burgundy" />
                  <span>{t("فتح الاتجاهات عبر Google Maps", "Get Directions on Google Maps")}</span>
                </a>
              </div>
            </div>

            {/* Direct Phone Call card */}
            <div className="bg-ivory-100 p-6 rounded-2xl border border-chocolate-800/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-burgundy text-white flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-chocolate-950">
                    {t("الاتصال الهاتفي المباشر", "Direct Phone Call")}
                  </h3>
                  <p className="text-xs text-chocolate-800 font-mono" dir="ltr">
                    {businessInfo.displayPhone}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-burgundy/10 text-chocolate-900 border border-chocolate-800/20 py-2.5 rounded-xl text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-burgundy" />
                  <span>{t("اتصل الآن بالبوتيك", "Call Boutique Now")}</span>
                </a>
              </div>
            </div>

            {/* WhatsApp & Instagram quick actions */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={buildDirectInquiryWhatsAppUrl(language)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-chocolate-900 text-ivory-50 rounded-2xl hover:bg-chocolate-950 transition-colors text-center space-y-1 shadow-sm"
              >
                <MessageCircle className="w-5 h-5 text-gold" />
                <span className="text-xs font-semibold">{t("محادثة واتساب", "WhatsApp Chat")}</span>
                <span className="text-[10px] text-ivory-200/70">رد سريع</span>
              </a>

              <a
                href={businessInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-burgundy text-ivory-50 rounded-2xl hover:bg-burgundy-800 transition-colors text-center space-y-1 shadow-sm"
              >
                <Instagram className="w-5 h-5 text-gold" />
                <span className="text-xs font-semibold">{businessInfo.instagramHandle}</span>
                <span className="text-[10px] text-ivory-200/70">{t("متابعة الصور", "Instagram")}</span>
              </a>
            </div>
          </div>

          {/* Map Preview Container */}
          <div className="lg:col-span-7 bg-ivory-200 rounded-3xl overflow-hidden border border-chocolate-800/15 shadow-luxury relative min-h-[380px] flex flex-col">
            <iframe
              src={businessInfo.googleMapsEmbedUrl}
              title="Morento Boutique Location in Jeddah Al Rawdah"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map Overlay Badge */}
            <div className="absolute top-4 start-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-gold/40 shadow-md max-w-xs">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif font-bold text-xs text-chocolate-950">
                  {t("مورينتو | جدة حي الروضة", "Morento | Al-Rawdah, Jeddah")}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              </div>
              <p className="text-[11px] text-chocolate-700">
                {t("الفرع معتمد على خرائط جوجل بتقييم 4.8", "Verified Google listing with 4.8 rating")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

