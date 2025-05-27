"use client";

import { ProductProvider } from "../components/product-context";
import Section1 from "./components/section-01/section-01";
import SectionHeader from "./components/section-header";

export default function ProductDetailContent() {
  return (
    <main className="w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full">
          <ProductProvider>
            <Section1 />
          </ProductProvider>
        </div>
      </div>
    </main>
  );
}
