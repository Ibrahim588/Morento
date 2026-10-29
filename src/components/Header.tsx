"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { businessInfo } from "@/data/businessInfo";
import { buildDirectInquiryWhatsAppUrl } from "@/lib/whatsapp";
import {
  ShoppingBag,
  Globe,
  Menu,
  X,
  MessageCircle,
  Phone,
  Sparkles
} from "lucide-react";

export const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { totalItemsCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", labelAr: "الرئيسية", labelEn: "Home" },
    { href: "/catalog", labelAr: "تشكيلات الهدايا", labelEn: "Collections" },
    { href: "/catalog?category=chocolate-flowers", labelAr: "شوكولاتة مع الورد", labelEn: "Chocolates & Flowers" },
    { href: "/catalog?category=occasions", labelAr: "المناسبات", labelEn: "Occasions" },
    { href: "/#story", labelAr: "عن مورينتو", labelEn: "About Us" },
    { href: "/#contact", labelAr: "الموقع والتواصل", labelEn: "Contact & Location" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-ivory-100/95 backdrop-blur-md border-b border-chocolate-800/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-chocolate-900 hover:text-burgundy rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo */}
          <Link href="/" className="flex flex-col items-center group text-center">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] font-medium text-chocolate-950 uppercase group-hover:text-burgundy transition-colors">
                MORENTO
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-4 bg-gold/60"></span>
              <span className="font-arabic text-xs sm:text-sm tracking-widest text-chocolate-800 font-medium">
                مـوريـنـتـو
              </span>
              <span className="h-[1px] w-4 bg-gold/60"></span>
            </div>
            <span className="text-[9px] tracking-wider text-burgundy font-light uppercase hidden sm:block">
              Luxury Chocolates & Flowers • Jeddah
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-chocolate-800 hover:text-burgundy hover:border-b hover:border-gold py-1 transition-all"
              >
                {t(link.labelAr, link.labelEn)}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-chocolate-800/20 text-chocolate-900 hover:bg-gold/15 hover:border-gold transition-colors"
              title={language === "ar" ? "Switch to English" : "التحويل إلى العربية"}
            >
              <Globe className="w-3.5 h-3.5 text-gold" />
              <span>{language === "ar" ? "EN" : "عربي"}</span>
            </button>

            {/* Cart Drawer Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-chocolate-900 hover:text-burgundy rounded-full hover:bg-chocolate-50/10 transition-colors"
              aria-label="View selected gifts"
            >
              <ShoppingBag className="w-5 h-5 text-chocolate-900" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-burgundy text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Primary Order WhatsApp CTA */}
            <a
              href={buildDirectInquiryWhatsAppUrl(language)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-chocolate-900 to-chocolate-800 hover:from-burgundy hover:to-chocolate-900 text-ivory-50 px-4 py-2.5 rounded-full text-xs font-semibold shadow-gold transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 text-gold" />
              <span>{t("طلب عبر واتساب", "WhatsApp Inquiry")}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-ivory-50 border-b border-chocolate-800/10 px-6 py-6 space-y-4 shadow-xl">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-chocolate-900 hover:text-burgundy py-2 border-b border-chocolate-800/5"
              >
                {t(link.labelAr, link.labelEn)}
              </Link>
            ))}
          </div>

          <div className="pt-4 space-y-3">
            <a
              href={buildDirectInquiryWhatsAppUrl(language)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-chocolate-900 text-ivory-50 py-3 rounded-xl text-sm font-semibold shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-gold" />
              <span>{t("طلب عبر واتساب (+966 56 777 6011)", "Order via WhatsApp")}</span>
            </a>

            <a
              href={`tel:${businessInfo.phone}`}
              className="w-full flex items-center justify-center gap-2 border border-chocolate-800/30 text-chocolate-900 py-3 rounded-xl text-sm font-semibold hover:bg-chocolate-50/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-burgundy" />
              <span>{t("اتصال مباشر بالبوتيك", "Direct Phone Call")}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

