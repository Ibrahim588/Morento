"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { businessInfo } from "@/data/businessInfo";
import {
  X,
  Trash2,
  Plus,
  Minus,
  Gift,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export const OrderDrawer: React.FC = () => {
  const { direction, t } = useLanguage();
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    openCustomizerForCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-chocolate-950/60 backdrop-blur-sm transition-opacity"
      />

      <div className={`fixed inset-y-0 ${direction === "rtl" ? "left-0" : "right-0"} max-w-full flex`}>
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-s border-chocolate-800/10">
          {/* Drawer Header */}
          <div className="p-6 bg-chocolate-950 text-ivory-100 flex items-center justify-between border-b border-gold/30">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-gold" />
              <h2 className="font-serif text-lg font-bold">
                {t("سلة هدايا مورينتو", "Morento Gift Bag")}
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-ivory-200 hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-ivory-100 flex items-center justify-center mx-auto text-chocolate-400">
                  <Gift className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-chocolate-950">
                  {t("سلة الهدايا فارغة حالياً", "Your Gift Bag is Empty")}
                </h3>
                <p className="text-xs text-chocolate-700 max-w-xs mx-auto">
                  {t(
                    "تصفح تشكيلات الشوكولاتة والورد الفاخرة واختر ما يسعد أحبتك.",
                    "Explore our chocolate boxes and floral arrangements to begin your gifting journey."
                  )}
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-burgundy hover:underline pt-2"
                >
                  <span>{t("استكشاف الكتالوج", "Browse Catalog")}</span>
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3.5 bg-ivory-50 rounded-2xl border border-chocolate-800/10 items-center justify-between"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-white border border-chocolate-800/10">
                    <Image
                      src={item.product.image}
                      alt={item.product.nameAr}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-chocolate-950 truncate">
                      {t(item.product.nameAr, item.product.nameEn)}
                    </h4>
                    <p className="text-xs text-chocolate-700 font-medium">
                      {item.product.price} {t(businessInfo.currencyAr, businessInfo.currencyEn)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-lg border border-chocolate-800/20">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="text-chocolate-800 hover:text-burgundy p-0.5"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-chocolate-950 px-1.5">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="text-chocolate-800 hover:text-burgundy p-0.5"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-chocolate-500 hover:text-red-600 p-1 transition-colors"
                        title={t("حذف", "Remove")}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-end">
                    <span className="text-xs font-bold text-chocolate-950">
                      {item.product.price * item.quantity} {t(businessInfo.currencyAr, businessInfo.currencyEn)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {cart.length > 0 && (
            <div className="p-6 bg-ivory-100 border-t border-chocolate-800/10 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-sm font-medium text-chocolate-800">
                  <span>{t("المجموع الاسترشادي:", "Estimated Subtotal:")}</span>
                  <span className="text-base font-bold text-chocolate-950">
                    {subtotal} {t(businessInfo.currencyAr, businessInfo.currencyEn)}
                  </span>
                </div>
                <p className="text-[10px] text-chocolate-600">
                  {t(
                    "*الأسعار استرشادية، يتم تأكيد التوفر النهائي ورسوم التوصيل عبر الواتساب.",
                    "*Sample prices. Final availability and delivery confirmed on WhatsApp."
                  )}
                </p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={openCustomizerForCart}
                  className="w-full flex items-center justify-center gap-2 bg-chocolate-900 hover:bg-burgundy text-ivory-50 py-3.5 rounded-2xl text-xs font-semibold shadow-luxury transition-all"
                >
                  <Gift className="w-4 h-4 text-gold" />
                  <span>
                    {t(
                      "متابعة لتخصيص الإهداء وإرسال للواتساب",
                      "Proceed to Customize & Order via WhatsApp"
                    )}
                  </span>
                </button>

                <button
                  onClick={clearCart}
                  className="w-full text-center text-[11px] text-chocolate-600 hover:text-red-600 py-1"
                >
                  {t("إفراغ السلة", "Clear Bag")}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

