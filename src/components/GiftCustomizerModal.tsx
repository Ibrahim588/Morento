"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import { businessInfo } from "@/data/businessInfo";
import { buildSingleProductWhatsAppUrl, buildCartWhatsAppUrl } from "@/lib/whatsapp";
import {
  X,
  MessageCircle,
  Calendar,
  Clock,
  MapPin,
  Heart,
  AlertCircle,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

export const GiftCustomizerModal: React.FC = () => {
  const { language, t } = useLanguage();
  const {
    isCustomizerOpen,
    setIsCustomizerOpen,
    customizingProduct,
    cart,
    subtotal,
    clearCart,
  } = useCart();

  // Form states
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [isSurprise, setIsSurprise] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [deliveryDate, setDeliveryDate] = useState("");
  const [preferredTime, setPreferredTime] = useState(
    language === "ar" ? "مساءً (4:00 م - 8:00 م)" : "Evening (4:00 PM - 8:00 PM)"
  );
  const [deliveryArea, setDeliveryArea] = useState("");
  const [giftCardMessage, setGiftCardMessage] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");

  // Validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Minimum date today
  const todayStr = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (isCustomizerOpen) {
      // Set default delivery date to today or tomorrow
      if (!deliveryDate) {
        setDeliveryDate(todayStr);
      }
    }
  }, [isCustomizerOpen, todayStr, deliveryDate]);

  if (!isCustomizerOpen) return null;

  const isCartMode = !customizingProduct;
  const isMultiItem = isCartMode && cart.length > 0;

  const validate = (): boolean => {
    const errs: { [key: string]: string } = {};

    if (!customerName.trim()) {
      errs.customerName = t("يرجى إدخال اسمك الكريم", "Please enter your name");
    }

    if (!customerPhone.trim()) {
      errs.customerPhone = t("يرجى إدخال رقم الجوال للتواصل", "Please enter your mobile phone");
    } else {
      // Clean phone check
      const cleanPhone = customerPhone.replace(/\s+/g, "");
      if (cleanPhone.length < 9) {
        errs.customerPhone = t(
          "رقم الجوال غير صحيح (مثال: 0567776011)",
          "Invalid phone format (e.g. 0567776011)"
        );
      }
    }

    if (!deliveryDate) {
      errs.deliveryDate = t("يرجى تحديد تاريخ التوصيل المفضل", "Please select preferred delivery date");
    } else if (deliveryDate < todayStr) {
      errs.deliveryDate = t("تاريخ التوصيل لا يمكن أن يكون في الماضي", "Date cannot be in the past");
    }

    if (!deliveryArea.trim()) {
      errs.deliveryArea = t("يرجى توضيح حي أو عنوان التوصيل بجدة", "Please specify delivery district in Jeddah");
    }

    if (!isCartMode && quantity < 1) {
      errs.quantity = t("الكمية يجب أن تكون 1 على الأقل", "Quantity must be at least 1");
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    let whatsappUrl = "";

    if (customizingProduct) {
      whatsappUrl = buildSingleProductWhatsAppUrl(
        {
          productName: t(customizingProduct.nameAr, customizingProduct.nameEn),
          quantity,
          productPrice: customizingProduct.price,
          customerName,
          customerPhone,
          recipientName: recipientName.trim() || undefined,
          recipientPhone: recipientPhone.trim() || undefined,
          isSurprise,
          deliveryDate,
          preferredTime,
          deliveryArea,
          giftCardMessage: giftCardMessage.trim() || undefined,
          specialInstructions: specialInstructions.trim() || undefined,
        },
        language
      );
    } else if (cart.length > 0) {
      whatsappUrl = buildCartWhatsAppUrl({
        items: cart.map((it) => ({
          nameAr: it.product.nameAr,
          nameEn: it.product.nameEn,
          quantity: it.quantity,
          price: it.product.price,
        })),
        subtotal,
        customerName,
        customerPhone,
        recipientName: recipientName.trim() || undefined,
        recipientPhone: recipientPhone.trim() || undefined,
        isSurprise,
        deliveryDate,
        preferredTime,
        deliveryArea,
        giftCardMessage: giftCardMessage.trim() || undefined,
        specialInstructions: specialInstructions.trim() || undefined,
        lang: language,
      });
    }

    if (whatsappUrl) {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setIsCustomizerOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-chocolate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-chocolate-800/10 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-chocolate-900 text-ivory-100 p-6 flex items-center justify-between border-b border-gold/30">
          <div className="space-y-1">
            <span className="text-[10px] tracking-widest uppercase text-gold font-semibold">
              {t("بوتيك مورينتو • جدة", "Morento Boutique • Jeddah")}
            </span>
            <h2 className="text-lg sm:text-xl font-serif font-bold text-white">
              {t("تخصيص الإهداء واستفسار الطلب", "Gift Personalization & Order Inquiry")}
            </h2>
          </div>
          <button
            onClick={() => setIsCustomizerOpen(false)}
            className="p-2 text-ivory-200 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Selected Item Showcase */}
          {customizingProduct ? (
            <div className="flex items-center gap-4 bg-ivory-100 p-4 rounded-2xl border border-chocolate-800/10">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-white">
                <Image
                  src={customizingProduct.image}
                  alt={customizingProduct.nameAr}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-chocolate-950 truncate">
                  {t(customizingProduct.nameAr, customizingProduct.nameEn)}
                </h4>
                <p className="text-xs text-chocolate-700">
                  {customizingProduct.price} {t(businessInfo.currencyAr, businessInfo.currencyEn)}{" "}
                  <span className="text-[10px] text-chocolate-600 font-light">
                    ({t("سعر استرشادي", "Sample price")})
                  </span>
                </p>
              </div>

              {/* Quantity selector */}
              <div className="flex items-center gap-2 bg-white px-2.5 py-1 rounded-xl border border-chocolate-800/20">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-chocolate-900 font-bold px-1.5 hover:text-burgundy"
                >
                  -
                </button>
                <span className="text-xs font-bold text-chocolate-950 w-5 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-chocolate-900 font-bold px-1.5 hover:text-burgundy"
                >
                  +
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-ivory-100 p-4 rounded-2xl border border-chocolate-800/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-chocolate-900">
                <span>{t("المنتجات المختارة في سلة الهدايا:", "Items in Gift Bag:")}</span>
                <span>
                  {subtotal} {t(businessInfo.currencyAr, businessInfo.currencyEn)}
                </span>
              </div>
              <ul className="text-xs text-chocolate-800 space-y-1">
                {cart.map((it) => (
                  <li key={it.product.id} className="flex justify-between">
                    <span>
                      {it.quantity}x {t(it.product.nameAr, it.product.nameEn)}
                    </span>
                    <span>{it.product.price * it.quantity} ر.س</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sender Details */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-burgundy flex items-center gap-2">
              <span>{t("1. بيانات صاحب الطلب", "1. Sender Details")}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-chocolate-900 mb-1">
                  {t("الاسم الكريم *", "Your Name *")}
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-chocolate-800/20 text-xs focus:outline-none focus:border-gold bg-white"
                  placeholder={t("مثال: عبد العزيز الأحمدي", "e.g. Abdulaziz")}
                />
                {errors.customerName && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.customerName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-chocolate-900 mb-1">
                  {t("رقم الجوال للتواصل *", "Mobile Phone *")}
                </label>
                <input
                  type="tel"
                  dir="ltr"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-chocolate-800/20 text-xs focus:outline-none focus:border-gold bg-white"
                  placeholder="0567776011"
                />
                {errors.customerPhone && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.customerPhone}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Recipient Details & Surprise */}
          <div className="space-y-4 pt-2 border-t border-chocolate-800/10">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-burgundy">
                {t("2. بيانات المستلم (اختياري إن كان الإهداء لشخص آخر)", "2. Recipient Details")}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-chocolate-900 mb-1">
                  {t("اسم المستلم", "Recipient Name")}
                </label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-chocolate-800/20 text-xs focus:outline-none focus:border-gold bg-white"
                  placeholder={t("اسم الشخص المُهدى إليه...", "Recipient's name...")}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-chocolate-900 mb-1">
                  {t("رقم جوال المستلم (للتوصيل)", "Recipient Phone")}
                </label>
                <input
                  type="tel"
                  dir="ltr"
                  value={recipientPhone}
                  onChange={(e) => setRecipientPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-chocolate-800/20 text-xs focus:outline-none focus:border-gold bg-white"
                  placeholder="05XXXXXXXX"
                />
              </div>
            </div>

            <label className="flex items-center gap-2.5 cursor-pointer bg-ivory-100 p-3 rounded-xl border border-chocolate-800/10">
              <input
                type="checkbox"
                checked={isSurprise}
                onChange={(e) => setIsSurprise(e.target.checked)}
                className="w-4 h-4 text-burgundy rounded border-chocolate-800/30 focus:ring-burgundy"
              />
              <span className="text-xs font-medium text-chocolate-900">
                {t(
                  "هدية مفاجأة (لا نكشف للمستلم عن محتوى الهدية مسبقاً)",
                  "Surprise Gift (Maintain discretion, do not reveal contents before delivery)"
                )}
              </span>
            </label>
          </div>

          {/* Delivery Schedule & Area */}
          <div className="space-y-4 pt-2 border-t border-chocolate-800/10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-burgundy">
              {t("3. موعد ومنطقة التوصيل في جدة", "3. Delivery Schedule & Location")}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-chocolate-900 mb-1">
                  {t("تاريخ التوصيل المفضل *", "Preferred Delivery Date *")}
                </label>
                <input
                  type="date"
                  min={todayStr}
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-chocolate-800/20 text-xs focus:outline-none focus:border-gold bg-white"
                />
                {errors.deliveryDate && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.deliveryDate}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-chocolate-900 mb-1">
                  {t("الوقت المفضل", "Preferred Time Window")}
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-chocolate-800/20 text-xs focus:outline-none focus:border-gold bg-white"
                >
                  <option value={t("صباحاً (10:00 ص - 2:00 م)", "Morning (10:00 AM - 2:00 PM)")}>
                    {t("صباحاً (10:00 ص - 2:00 م)", "Morning (10:00 AM - 2:00 PM)")}
                  </option>
                  <option value={t("مساءً (4:00 م - 8:00 م)", "Evening (4:00 PM - 8:00 PM)")}>
                    {t("مساءً (4:00 م - 8:00 م)", "Evening (4:00 PM - 8:00 PM)")}
                  </option>
                  <option value={t("ليلاً (8:00 م - 11:30 م)", "Night (8:00 PM - 11:30 PM)")}>
                    {t("ليلاً (8:00 م - 11:30 م)", "Night (8:00 PM - 11:30 PM)")}
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-chocolate-900 mb-1">
                {t("حي أو عنوان التوصيل في جدة *", "Jeddah District / Address *")}
              </label>
              <input
                type="text"
                value={deliveryArea}
                onChange={(e) => setDeliveryArea(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-chocolate-800/20 text-xs focus:outline-none focus:border-gold bg-white"
                placeholder={t("مثال: حي الروضة، شارع الكيال، أو موقع باللوكيشن", "e.g. Al-Rawdah, Kayyal St.")}
              />
              {errors.deliveryArea && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.deliveryArea}
                </p>
              )}
            </div>
          </div>

          {/* Gift Message Card */}
          <div className="space-y-3 pt-2 border-t border-chocolate-800/10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-burgundy flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>{t("4. بطاقة الإهداء والملاحظات", "4. Gift Card & Notes")}</span>
            </h3>

            <div>
              <label className="block text-xs font-semibold text-chocolate-900 mb-1">
                {t("نص بطاقة الإهداء (تُكتب على بطاقة مورينتو الفاخرة)", "Gift Card Message")}
              </label>
              <textarea
                rows={2}
                value={giftCardMessage}
                onChange={(e) => setGiftCardMessage(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-chocolate-800/20 text-xs focus:outline-none focus:border-gold bg-white resize-none"
                placeholder={t("اكتب عباراتك القلبية...", "Write your heartwarming note...")}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-chocolate-900 mb-1">
                {t("أي ملاحظات إضافية (ألوان ورود معينة، شريط، الخ)", "Special Instructions")}
              </label>
              <input
                type="text"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-chocolate-800/20 text-xs focus:outline-none focus:border-gold bg-white"
                placeholder={t("مثال: يرجى التنسيق بشريط وردي...", "e.g. Prefer pink ribbon...")}
              />
            </div>
          </div>

          {/* Security & Clarity Banner */}
          <div className="p-3.5 bg-ivory-100 rounded-xl border border-gold/30 text-[11px] text-chocolate-800/90 leading-relaxed space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-chocolate-950">
              <ShieldAlert className="w-4 h-4 text-gold" />
              <span>{t("تنويه الشفافية والتأكيد:", "Order Notice:")}</span>
            </div>
            <p>
              {t(
                "الضغط على الزر أدناه يفتح محادثة واتساب الرسمية مع بوتيك مورينتو (+966 56 777 6011). موعد التوصيل والسعر يعدان طلباً استرشادياً يخضع لتأكيد المتجر. لا يتم سحب أي مبالغ مالية عبر هذا الموقع.",
                "Submitting will open an official WhatsApp chat with Morento (+966 56 777 6011). Preferred times and sample pricing are confirmed directly with our team. No payments are charged on this website."
              )}
            </p>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2.5 bg-chocolate-900 hover:bg-burgundy text-ivory-50 py-4 rounded-2xl text-sm font-semibold transition-all shadow-luxury hover:shadow-luxury-hover"
          >
            <MessageCircle className="w-5 h-5 text-gold" />
            <span>
              {t("إرسال تفاصيل الإهداء للواتساب للتأكيد", "Send Gift Details to WhatsApp for Confirmation")}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

