import { businessInfo } from "@/data/businessInfo";

export interface GiftOrderDetails {
  productName: string;
  quantity: number;
  productPrice?: number;
  customerName: string;
  customerPhone: string;
  recipientName?: string;
  recipientPhone?: string;
  isSurprise?: boolean;
  deliveryDate: string;
  preferredTime?: string;
  deliveryArea: string;
  giftCardMessage?: string;
  specialInstructions?: string;
}

export interface MultiItemCartOrder {
  items: Array<{
    nameAr: string;
    nameEn: string;
    quantity: number;
    price: number;
  }>;
  subtotal: number;
  customerName: string;
  customerPhone: string;
  recipientName?: string;
  recipientPhone?: string;
  isSurprise?: boolean;
  deliveryDate: string;
  preferredTime?: string;
  deliveryArea: string;
  giftCardMessage?: string;
  specialInstructions?: string;
  lang?: "ar" | "en";
}

export function buildSingleProductWhatsAppUrl(
  order: GiftOrderDetails,
  lang: "ar" | "en" = "ar"
): string {
  if (lang === "en") {
    const lines: string[] = [
      "Hello Morento Boutique,",
      "",
      "I would like to inquire about ordering a luxury gift:",
      "────────────────────",
      `🎁 Item: ${order.productName}`,
      `🔢 Quantity: ${order.quantity}`,
      order.productPrice
        ? `💰 Indicative Total: ${order.productPrice * order.quantity} SAR (Pending Confirmation)`
        : "💰 Price: To be confirmed upon availability",
      "",
      "👤 Sender Details:",
      `• Name: ${order.customerName}`,
      `• Phone: ${order.customerPhone}`,
      "",
      "🎀 Recipient & Delivery Details:",
      order.recipientName ? `• Recipient Name: ${order.recipientName}` : "• Recipient: Same as sender",
      order.recipientPhone ? `• Recipient Phone: ${order.recipientPhone}` : "",
      order.isSurprise ? "• Gift Note: 🎁 Surprise gift (Do not reveal contents to recipient)" : "",
      `• Preferred Delivery Date: ${order.deliveryDate} (Subject to Morento confirmation)`,
      order.preferredTime ? `• Preferred Time: ${order.preferredTime}` : "",
      `• Delivery Area (Jeddah): ${order.deliveryArea}`,
      "",
      order.giftCardMessage ? `💌 Gift Card Message:\n"${order.giftCardMessage}"` : "💌 Gift Card: No message entered",
      order.specialInstructions ? `\n📝 Special Notes:\n${order.specialInstructions}` : "",
      "────────────────────",
      "Kindly confirm availability, final price, and delivery schedule in Jeddah.",
      "Thank you!"
    ].filter((line) => line !== "");

    return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  // Default Arabic
  const lines: string[] = [
    "السلام عليكم ورحمة الله وبركاته، بوتيك مورينتو",
    "",
    "أرغب في الاستفسار عن طلب وتنسيق هدية فاخرة:",
    "────────────────────",
    `🎁 المنتج: ${order.productName}`,
    `🔢 الكمية: ${order.quantity}`,
    order.productPrice
      ? `💰 السعر المعروض (استرشادي): ${order.productPrice * order.quantity} ${businessInfo.currencyAr}`
      : "💰 السعر: يحدد بناءً على توفر المنتج والتأكيد",
    "",
    "👤 بيانات صاحب الطلب:",
    `• الاسم: ${order.customerName}`,
    `• الجوال: ${order.customerPhone}`,
    "",
    "🎀 بيانات المستلم والتوصيل:",
    order.recipientName ? `• اسم المستلم: ${order.recipientName}` : "• المستلم: نفس صاحب الطلب",
    order.recipientPhone ? `• جوال المستلم: ${order.recipientPhone}` : "",
    order.isSurprise ? "• نوع الطلب: 🎁 هدية مفاجأة (عدم إخبار المستلم بالمحتوى مسبقاً)" : "",
    `• تاريخ التوصيل المطلوب: ${order.deliveryDate} (موعد مفضل يخضع لتأكيد المتجر)`,
    order.preferredTime ? `• وقت التوصيل المفضل: ${order.preferredTime}` : "",
    `• منطقة / عنوان التوصيل (جدة): ${order.deliveryArea}`,
    "",
    order.giftCardMessage ? `💌 نص بطاقة الإهداء:\n"${order.giftCardMessage}"` : "💌 بطاقة الإهداء: لا توجد رسالة مرفقة",
    order.specialInstructions ? `\n📝 ملاحظات إضافية:\n${order.specialInstructions}` : "",
    "────────────────────",
    "أرجو تأكيد توفر الهدية، السعر النهائي، وإمكانية التوصيل في الموعد المطلوب بجدة.",
    "شاكراً لكم اهتمامكم ورقي تعاملكم."
  ].filter((line) => line !== "");

  return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function buildCartWhatsAppUrl(order: MultiItemCartOrder): string {
  const isEn = order.lang === "en";

  if (isEn) {
    const itemsList = order.items
      .map((it, idx) => `  ${idx + 1}. ${it.nameEn} (Qty: ${it.quantity}) - ${it.price * it.quantity} SAR`)
      .join("\n");

    const lines = [
      "Hello Morento Boutique,",
      "",
      "I would like to inquire about ordering the following gift selection:",
      "────────────────────",
      "🛍️ Selected Items:",
      itemsList,
      "",
      `💰 Indicative Subtotal: ${order.subtotal} SAR (Pending Confirmation)`,
      "",
      "👤 Sender Details:",
      `• Name: ${order.customerName}`,
      `• Phone: ${order.customerPhone}`,
      "",
      "🎀 Delivery & Recipient:",
      order.recipientName ? `• Recipient: ${order.recipientName}` : "• Recipient: Same as sender",
      order.recipientPhone ? `• Phone: ${order.recipientPhone}` : "",
      order.isSurprise ? "• 🎁 Surprise Gift for Recipient" : "",
      `• Preferred Delivery Date: ${order.deliveryDate} (Subject to confirmation)`,
      order.preferredTime ? `• Preferred Time: ${order.preferredTime}` : "",
      `• Delivery Area in Jeddah: ${order.deliveryArea}`,
      "",
      order.giftCardMessage ? `💌 Gift Card Message:\n"${order.giftCardMessage}"` : "💌 Gift Card: None",
      order.specialInstructions ? `📝 Special Notes: ${order.specialInstructions}` : "",
      "────────────────────",
      "Kindly confirm item availability, final price, and delivery in Jeddah.",
      "Thank you!"
    ].filter((line) => line !== "");

    return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  const itemsList = order.items
    .map((it, idx) => `  ${idx + 1}. ${it.nameAr} (الكمية: ${it.quantity}) - ${it.price * it.quantity} ر.س`)
    .join("\n");

  const lines = [
    "السلام عليكم ورحمة الله وبركاته، بوتيك مورينتو",
    "",
    "أرغب في الاستفسار وتأكيد طلب تشكيلة هدايا:",
    "────────────────────",
    "🛍️ المنتجات المختارة:",
    itemsList,
    "",
    `💰 إجمالي السعر المعروض (استرشادي): ${order.subtotal} ${businessInfo.currencyAr}`,
    "",
    "👤 صاحب الطلب:",
    `• الاسم: ${order.customerName}`,
    `• الجوال: ${order.customerPhone}`,
    "",
    "🎀 بيانات المستلم والتوصيل:",
    order.recipientName ? `• اسم المستلم: ${order.recipientName}` : "• المستلم: نفس صاحب الطلب",
    order.recipientPhone ? `• جوال المستلم: ${order.recipientPhone}` : "",
    order.isSurprise ? "• 🎁 هدية مفاجأة للمستلم" : "",
    `• تاريخ التوصيل المطلوب: ${order.deliveryDate} (موعد مفضل يخضع للتأكيد)`,
    order.preferredTime ? `• الوقت المفضل: ${order.preferredTime}` : "",
    `• منطقة التوصيل (جدة): ${order.deliveryArea}`,
    "",
    order.giftCardMessage ? `💌 نص بطاقة الإهداء:\n"${order.giftCardMessage}"` : "💌 بطاقة الإهداء: بدون نص",
    order.specialInstructions ? `📝 ملاحظات خاصة: ${order.specialInstructions}` : "",
    "────────────────────",
    "أرجو تأكيد توفر المنتجات والسعر النهائي وموعد التوصيل في جدة.",
    "شكراً لكم."
  ].filter((line) => line !== "");

  return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function buildDirectInquiryWhatsAppUrl(lang: "ar" | "en" = "ar"): string {
  const text =
    lang === "en"
      ? "Hello Morento Boutique, I would like to inquire about your luxury chocolates, custom floral arrangements, and gift boxes in Jeddah."
      : "السلام عليكم ورحمة الله وبركاته، بوتيك مورينتو. أود الاستفسار عن تشكيلات الشوكولاتة الفاخرة وتنسيقات الورد والهدايا الخاصة في فرع الروضة بجدة.";
  return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

