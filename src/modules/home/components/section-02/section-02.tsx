// components/ReadingTestCollection.tsx
"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./components/card";
import { ProductService } from "@/services/product";

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
  const init = async () => {
    const res = await ProductService.getAll();
    if (res && res.data.length > 0) {
      setProducts(res.data);
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Sản Phẩm Bán Chạy
            </h1>
            <p className="text-gray-600">Top Sale Trong Tuần</p>
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
