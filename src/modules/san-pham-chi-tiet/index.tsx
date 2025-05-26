"use client";

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import HomeContent from "./main";
import TopBanner from "@/layout/top-header";
import ProductContent from "./main";
import ProductDetailContent from "./main";
import SectionHeader from "./components/section-header";

export default function ProductDetailClient() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <SectionHeader />
      <div className="w-full mb-0">
        <ProductDetailContent />
      </div>
      <Footer />
    </div>
  );
}
