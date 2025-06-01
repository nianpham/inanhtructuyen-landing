"use client";

import HomeClient from "@/modules/home";
import ProductClient from "@/modules/san-pham";
import ProductDetailClient from "@/modules/san-pham/[slug]";
import { ProductProvider } from "@/modules/san-pham/components/product-context";
import React, { Suspense } from "react";

export default function ProductDetailPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <ProductProvider>
        <Suspense fallback={<div></div>}>
          <ProductDetailClient />
        </Suspense>
      </ProductProvider>
    </div>
  );
}
