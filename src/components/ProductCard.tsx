"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { businessInfo } from "@/data/businessInfo";
import { Sparkles, ShoppingBag, MessageCircle, Gift } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language, t } = useLanguage();
  const { addToCart, openCustomizerForProduct } = useCart();

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-chocolate-800/10 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Image Frame */}
        <div className="relative aspect-square overflow-hidden bg-ivory-200">
          <Link href={`/product/${product.slug}`} className="block w-full h-full">
            <Image
              src={product.image}
              alt={t(product.nameAr, product.nameEn)}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
            {product.isBestSeller ? (
              <span className="bg-burgundy text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-gold" />
                {t("الأكثر طلباً", "Best Seller")}
              </span>
            ) : (
              <span className="bg-chocolate-900/80 backdrop-blur-md text-ivory-100 text-[10px] font-medium px-2 py-0.5 rounded-full">
                {t(product.categoryAr, product.categoryEn)}
              </span>
            )}

            {product.piecesCount && (
              <span className="bg-white/90 backdrop-blur-md text-chocolate-950 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-chocolate-800/10 shadow-sm">
                {product.piecesCount} {t("قطعة", "pcs")}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="p-4 sm:p-5 space-y-2">
          <div className="flex items-center justify-between text-xs text-chocolate-700">
            <span>{t(product.categoryAr, product.categoryEn)}</span>
            <span className="text-gold font-medium text-[11px]">
              {t("حي الروضة • جدة", "Al-Rawdah • Jeddah")}
            </span>
          </div>

          <Link href={`/product/${product.slug}`} className="block group-hover:text-burgundy transition-colors">
            <h3 className="text-base sm:text-lg font-serif font-semibold text-chocolate-950 line-clamp-1">
              {t(product.nameAr, product.nameEn)}
            </h3>
          </Link>

          <p className="text-xs text-chocolate-800/70 line-clamp-2 leading-relaxed">
            {t(product.descriptionAr, product.descriptionEn)}
          </p>
        </div>
      </div>

      {/* Footer & CTAs */}
      <div className="p-4 sm:p-5 pt-0 border-t border-chocolate-800/5 mt-2 space-y-3">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg sm:text-xl font-bold text-chocolate-950">
                {product.price}
              </span>
              <span className="text-xs font-semibold text-chocolate-800">
                {t(businessInfo.currencyAr, businessInfo.currencyEn)}
              </span>
            </div>
            {!product.priceConfirmed && (
              <span className="text-[10px] text-chocolate-600 font-medium block">
                {t("*سعر استرشادي يخضع للتأكيد", "*Sample price subject to confirmation")}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="p-2.5 rounded-xl border border-chocolate-800/20 text-chocolate-900 hover:bg-gold/20 hover:border-gold transition-colors"
            title={t("إضافة لطلب الهدايا", "Add to order")}
            aria-label="Add to order"
          >
            <ShoppingBag className="w-4 h-4 text-chocolate-900" />
          </button>
        </div>

        {/* WhatsApp Customization Button */}
        <button
          onClick={() => openCustomizerForProduct(product)}
          className="w-full flex items-center justify-center gap-2 bg-chocolate-900 hover:bg-burgundy text-ivory-50 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 shadow-sm"
        >
          <Gift className="w-3.5 h-3.5 text-gold" />
          <span>{t("تخصيص الإهداء وطلب بالواتساب", "Personalize & Order on WhatsApp")}</span>
        </button>
      </div>
    </div>
  );
};

