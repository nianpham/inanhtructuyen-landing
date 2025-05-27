"use client";

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import HomeContent from "./main";
import TopBanner from "@/layout/top-header";
import ProductContent from "./main";
import ProductDetailContent from "./main";
import SectionHeader from "./components/section-header";
import { ProductProvider } from "../components/product-context";

export default function ProductDetailClient() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <SectionHeader />
      <div className="w-full mb-0">
        <ProductProvider>
          <ProductDetailContent />
        </ProductProvider>
      </div>
      <Footer />
    </div>
  );
}
