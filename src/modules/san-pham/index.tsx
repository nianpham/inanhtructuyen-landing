"use client";

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import HomeContent from "./main";
import TopBanner from "@/layout/top-header";
import ProductContent from "./main";

export default function ProductClient() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <TopBanner />
      <Header />
      <div className="w-full mb-0">
        <ProductContent />
      </div>
      <Footer />
    </div>
  );
}
