import React from "react";
import { Hero } from "@/components/Hero";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { BestSellers } from "@/components/BestSellers";
import { ChocolateFlowersExperience } from "@/components/ChocolateFlowersExperience";
import { OccasionsSection } from "@/components/OccasionsSection";
import { GiftCustomizationPreview } from "@/components/GiftCustomizationPreview";
import { BrandStory } from "@/components/BrandStory";
import { ReviewsSection } from "@/components/ReviewsSection";
import { InstagramGallery } from "@/components/InstagramGallery";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <ChocolateFlowersExperience />
      <OccasionsSection />
      <GiftCustomizationPreview />
      <BrandStory />
      <ReviewsSection />
      <InstagramGallery />
      <FAQSection />
      <ContactSection />
    </>
  );
}

