"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { businessInfo } from "@/data/businessInfo";
import { buildDirectInquiryWhatsAppUrl } from "@/lib/whatsapp";
import {
  Instagram,
  Phone,
  MessageCircle,
  MapPin,
  Heart,
  ExternalLink,
} from "lucide-react";

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-chocolate-950 text-ivory-100 border-t border-gold/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-2xl tracking-[0.25em] font-medium text-ivory-50 block uppercase">
                MORENTO
              </span>
              <span className="font-arabic text-sm text-gold tracking-widest block font-medium">
                مـوريـنـتـو
              </span>
            </div>
            <p className="text-xs text-ivory-200/80 leading-relaxed font-light">
              {t(
                "بوتيك الهدايا الفاخرة في جدة - حي الروضة. نجمع بين عراقة الشوكولاتة البلجيكية وجمال الورود الطبيعية لتجسيد أسمى المشاعر في مناسباتكم السعيدة.",
                "Luxury chocolate and floral gifting boutique in Al-Rawdah, Jeddah. Pairing artisanal Belgian confectionery with fresh blossoms for life's treasured occasions."
              )}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-chocolate-950 transition-colors flex items-center justify-center text-ivory-100"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={buildDirectInquiryWhatsAppUrl(language)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-chocolate-950 transition-colors flex items-center justify-center text-ivory-100"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${businessInfo.phone}`}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-chocolate-950 transition-colors flex items-center justify-center text-ivory-100"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-chocolate-950 transition-colors flex items-center justify-center text-ivory-100"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">
              {t("روابط سريعة", "Quick Navigation")}
            </h4>
            <ul className="space-y-2 text-xs text-ivory-200/80">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  {t("الرئيسية", "Home")}
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-gold transition-colors">
                  {t("كتالوج الهدايا الكامل", "Complete Gift Catalog")}
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=chocolate-flowers" className="hover:text-gold transition-colors">
                  {t("شوكولاتة مع الورد", "Chocolates & Flowers")}
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=occasions" className="hover:text-gold transition-colors">
                  {t("هدايا المناسبات والتخرج", "Occasions & Graduations")}
                </Link>
              </li>
              <li>
                <a href="/#contact" className="hover:text-gold transition-colors">
                  {t("الموقع وخريطة الوصول", "Boutique Location & Directions")}
                </a>
              </li>
            </ul>
          </div>

          {/* Occasions */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">
              {t("مناسبات الهدايا", "Occasions")}
            </h4>
            <ul className="space-y-2 text-xs text-ivory-200/80">
              <li>
                <Link href="/catalog?occasion=anniversary" className="hover:text-gold transition-colors">
                  {t("ذكرى زواج", "Anniversary")}
                </Link>
              </li>
              <li>
                <Link href="/catalog?occasion=birthday" className="hover:text-gold transition-colors">
                  {t("أعياد ميلاد", "Birthdays")}
                </Link>
              </li>
              <li>
                <Link href="/catalog?occasion=graduation" className="hover:text-gold transition-colors">
                  {t("تخرج ونجاح", "Graduation")}
                </Link>
              </li>
              <li>
                <Link href="/catalog?occasion=vip" className="hover:text-gold transition-colors">
                  {t("ضيافة ومجالس VIP", "VIP Hospitality")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Boutique info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">
              {t("معلومات البوتيك الموثقة", "Verified Boutique Info")}
            </h4>
            <div className="space-y-2 text-xs text-ivory-200/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span>{t(businessInfo.locationAr, businessInfo.locationEn)}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <span dir="ltr">{businessInfo.displayPhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{businessInfo.instagramHandle}</span>
              </p>
              <p className="text-[11px] text-ivory-300/60 pt-1">
                {t(
                  "تقييم Google Maps الرسمي: 4.8 من 190+ عميل",
                  "Official Google Maps rating: 4.8 from 190+ reviews"
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer note for owner & customers */}
        <div className="border-t border-ivory-200/10 pt-6 text-[11px] text-ivory-300/60 leading-relaxed text-center max-w-4xl mx-auto">
          {t(
            "إشعار الشفافية: أسعار وصور المنتجات المعروضة في هذه النسخة تعد نماذج استرشادية لتجربة التخصيص والطلب، ويتم تأكيد السعر النهائي وتوفر التشكيلات والتوصيل مباشرة عبر محادثة الواتساب الرسمية للبوتيك. لا يتم سحب أي مبالغ أو بطاقات دفع من خلال الموقع.",
            "Transparency Notice: Prices and imagery presented in this digital storefront serve as sample showcases for gift personalization. Final prices, availability, and delivery schedules are confirmed directly with Morento concierge on WhatsApp. No payment card details are collected on this site."
          )}
        </div>

        {/* Copyright */}
        <div className="border-t border-ivory-200/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory-300/70 gap-4">
          <p>
            © {new Date().getFullYear()} {businessInfo.brandNameAr} | {businessInfo.brandNameEn}. {t("جميع الحقوق محفوظة.", "All rights reserved.")}
          </p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>{t("صُمم بحب لأهل جدة", "Crafted with passion in Jeddah")}</span>
            <Heart className="w-3 h-3 text-burgundy fill-burgundy" />
          </p>
        </div>
      </div>
    </footer>
  );
};

