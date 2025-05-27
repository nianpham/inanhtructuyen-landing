"use client";

import { ProductProvider } from "./components/product-context";
import Section01 from "./components/section-01/section-01";
import SectionHeader from "./components/section-header";

interface Product {
  _id: string;
  name: string;
  description: string;
  introduction: string;
  product_option: [
    {
      size: string;
      price: string;
    }
  ];
  category: string;
  color: string[];
  thumbnail: string;
  images: string[];
  sold: number;
  created_at: string;
}

export default function ProductContent({
  filteredProduct,
  viewFilter,
}: {
  filteredProduct: Product[];
  viewFilter: boolean;
}) {
  return (
    <main className="w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center">
        <SectionHeader />
        <div className="w-full pb-10">
          <ProductProvider>
            <Section01
              filteredProductMobile={filteredProduct}
              viewFilter={viewFilter}
            />
          </ProductProvider>
        </div>
      </div>
    </main>
  );
}
