"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { productsData, Product } from "@/data/products";
import { businessInfo } from "@/data/businessInfo";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/ProductCard";
import {
  Sparkles,
  ShoppingBag,
  MessageCircle,
  Clock,
  ShieldCheck,
  MapPin,
  Heart,
  Share2,
  Gift,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { language, direction, t } = useLanguage();
  const { addToCart, openCustomizerForProduct } = useCart();

  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);

  // Related products from the same category
  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="py-10 md:py-16 bg-ivory-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-chocolate-700">
          <Link href="/" className="hover:text-burgundy">
            {t("الرئيسية", "Home")}
          </Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-burgundy">
            {t("كتالوج الهدايا", "Catalog")}
          </Link>
          <span>/</span>
          <Link href={`/catalog?category=${product.category}`} className="hover:text-burgundy">
            {t(product.categoryAr, product.categoryEn)}
          </Link>
          <span>/</span>
          <span className="text-chocolate-950 font-bold truncate max-w-xs">
            {t(product.nameAr, product.nameEn)}
          </span>
        </nav>

        {/* Product Details Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white p-6 sm:p-10 rounded-3xl border border-chocolate-800/10 shadow-sm">
          {/* Images Section */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-ivory-200 border border-chocolate-800/10 shadow-sm">
              <Image
                src={selectedImage}
                alt={t(product.nameAr, product.nameEn)}
                fill
                priority
                className="object-cover transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 600px"
              />

              {product.isBestSeller && (
                <div className="absolute top-4 start-4 bg-burgundy text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  <span>{t("الأكثر طلباً", "Best Seller")}</span>
                </div>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImage === img
                        ? "border-gold shadow-md scale-95"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Meta & Actions */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-burgundy font-semibold">
                  {t(product.categoryAr, product.categoryEn)}
                </span>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 text-xs text-chocolate-700 hover:text-burgundy bg-ivory-100 px-3 py-1.5 rounded-full transition-colors"
                  title={t("نسخ رابط الهدية", "Copy product link")}
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? t("تم النسخ!", "Copied!") : t("مشاركة", "Share")}</span>
                </button>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-chocolate-950 leading-tight">
                {t(product.nameAr, product.nameEn)}
              </h1>

              {/* Price & Status */}
              <div className="p-4 bg-ivory-50 rounded-2xl border border-chocolate-800/10 space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-chocolate-950">
                    {product.price}
                  </span>
                  <span className="text-sm font-semibold text-chocolate-800">
                    {t(businessInfo.currencyAr, businessInfo.currencyEn)}
                  </span>
                </div>

                {!product.priceConfirmed && (
                  <p className="text-xs text-chocolate-700 font-light">
                    {t(
                      "*سعر استرشادي لعرض نموذج الهدية — يخضع السعر والتشكيلة للتأكيد النهائي عبر الواتساب مع بوتيك مورينتو.",
                      "*Sample price for preview purposes — final assortment and price confirmed via WhatsApp concierge."
                    )}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-chocolate-900">
                  {t("تفاصيل الهدية والتنسيق", "Gift Description & Presentation")}
                </h3>
                <p className="text-sm text-chocolate-800/90 leading-relaxed font-light">
                  {t(product.descriptionAr, product.descriptionEn)}
                </p>
              </div>

              {/* Specifications pills */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {product.piecesCount && (
                  <div className="p-3 bg-white rounded-xl border border-chocolate-800/10 flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-gold shrink-0" />
                    <div>
                      <p className="text-[10px] text-chocolate-600 font-medium">
                        {t("عدد القطع", "Pieces Count")}
                      </p>
                      <p className="text-xs font-bold text-chocolate-950">
                        {product.piecesCount} {t("حبة شوكولاتة فاخرة", "Belgian Truffles")}
                      </p>
                    </div>
                  </div>
                )}

                <div className="p-3 bg-white rounded-xl border border-chocolate-800/10 flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-burgundy shrink-0" />
                  <div>
                    <p className="text-[10px] text-chocolate-600 font-medium">
                      {t("مدة التجهيز", "Preparation Time")}
                    </p>
                    <p className="text-xs font-bold text-chocolate-950">
                      {t(product.preparationTimeAr, product.preparationTimeEn)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs & Quantity Selector */}
            <div className="space-y-4 pt-6 border-t border-chocolate-800/10">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-ivory-100 px-3 py-2 rounded-2xl border border-chocolate-800/20">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-chocolate-900 font-bold px-2 hover:text-burgundy text-base"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-chocolate-950 w-6 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-chocolate-900 font-bold px-2 hover:text-burgundy text-base"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gold/10 text-chocolate-950 border-2 border-chocolate-950 py-3 rounded-2xl text-xs font-bold transition-colors"
                >
                  <ShoppingBag className="w-4 h-4 text-gold" />
                  <span>{t("إضافة لسلة الهدايا", "Add to Gift Bag")}</span>
                </button>
              </div>

              {/* Primary WhatsApp Customization CTA */}
              <button
                onClick={() => openCustomizerForProduct(product)}
                className="w-full flex items-center justify-center gap-2.5 bg-chocolate-900 hover:bg-burgundy text-ivory-50 py-4 rounded-2xl text-sm font-semibold transition-all shadow-luxury hover:shadow-luxury-hover"
              >
                <Gift className="w-4 h-4 text-gold" />
                <span>
                  {t(
                    "تخصيص بطاقة الإهداء والطلب عبر واتساب",
                    "Personalize Gift Card & Order on WhatsApp"
                  )}
                </span>
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-chocolate-700 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  {t("تأكيد مباشر مع البوتيك", "Direct Boutique Confirmation")}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  {t("توصيل مبرد في جدة", "Climate-Controlled Delivery")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Gifts Section */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-8">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-burgundy font-semibold">
                {t("تشكيلات ملائمة", "Complementary Arrangements")}
              </span>
              <h2 className="text-xl sm:text-3xl font-serif text-chocolate-950">
                {t("هدايا قد تعجبك أيضاً", "You May Also Like")}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

