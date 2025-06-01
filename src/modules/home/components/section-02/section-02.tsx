// components/ReadingTestCollection.tsx
"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./components/card";
import { ProductService } from "@/services/product";
import Title from "@/components/ui/title";

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

const Section2: React.FC = () => {
  const [products, setProducts] = useState([] as Product[]);
  const selectedProductsID = [
    "67b876b6657af903c5a4c957",
    "67b8762d657af903c5a4c955",
    "67b876f7657af903c5a4c958",
    "680715dba9f9918f148c2f33",
    "680744aea9f9918f148c2f3b",
    "6809b7c6c40fcd1e6ab3fa82",
    "6809e112c40fcd1e6ab3fa88",
    "67b877db657af903c5a4c959",
  ];
  const init = async () => {
    const res = await ProductService.getAll();
    if (res && res.data.length > 0) {
      const filteredProducts = res.data.filter((product: Product) =>
        selectedProductsID.includes(product._id)
      );
      setProducts(filteredProducts);
    }
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-0 py-0">
          <div className="text-center mb-12">
            <div className="relative z-20">
              <div
                className={`absolute bottom-[8%] right-[5%] lg:right-[38%] h-3 w-36 bg-[rgb(var(--fifteenth-rgb))] opacity-45 z-10`}
              ></div>
              <h1
                className={`text-3xl font-bold text-gray-900 mb-2 z-20 relative`}
              >
                Sản Phẩm Bán Chạy
              </h1>
            </div>
            <p className="text-gray-600">
              Khám phá những sản phẩm được ưa chuộng nhất hiện nay, được nhiều
              khách hàng tin dùng và lựa chọn.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
