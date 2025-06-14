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

const Section4: React.FC = () => {
  const [products, setProducts] = useState([] as Product[]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [topRatedProducts, setTopRatedProducts] = useState<Product[]>([]);
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([]);

  const init = async () => {
    const res = await ProductService.getAll();

    if (res && res.data.length > 0) {
      setProducts(res.data);
      setFeaturedProducts(res.data.slice(0, 3));
      setTopRatedProducts(res.data.slice(3, 6));
      setTrendingProducts(res.data.slice(6, 9));
    }
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0">
      <section className="pb-20">
        <div className="">
          <div className="mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="">
                {/* <h1 className="text-2xl font-semibold text-gray-900 mb-4">
                  Sản Phẩm Nổi Bật
                </h1> */}
                <div className="text-center lg:text-left mb-5">
                  <div className="relative z-20">
                    <div
                      className={`absolute bottom-[8%] right-[12%] lg:right-[38%] h-3 w-32 bg-[rgb(var(--fifteenth-rgb))] opacity-45 z-10`}
                    ></div>
                    <h1
                      className={`text-2xl font-bold text-gray-900 z-20 relative`}
                    >
                      Sản Phẩm Nổi Bật
                    </h1>
                  </div>
                </div>
                <div className="space-y-1">
                  {featuredProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              </div>
              <div className="">
                <div className="text-center lg:text-left mb-5">
                  <div className="relative z-20">
                    <div
                      className={`absolute bottom-[8%] right-[5%] lg:right-[22%] h-3 w-32 bg-[rgb(var(--fifteenth-rgb))] opacity-45 z-10`}
                    ></div>
                    <h1
                      className={`text-2xl font-bold text-gray-900 z-20 relative`}
                    >
                      Sản Phẩm Đánh Giá Cao
                    </h1>
                  </div>
                </div>
                <div className="space-y-1">
                  {topRatedProducts.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                      showRating={true}
                    />
                  ))}
                </div>
              </div>
              <div className="">
                <div className="text-center lg:text-left mb-5">
                  <div className="relative z-20">
                    <div
                      className={`absolute bottom-[8%] right-[7%] lg:right-[29%] h-3 w-40 bg-[rgb(var(--fifteenth-rgb))] opacity-45 z-10`}
                    ></div>
                    <h1
                      className={`text-2xl font-bold text-gray-900 z-20 relative`}
                    >
                      Sản Phẩm Xu Hướng
                    </h1>
                  </div>
                </div>
                <div className="space-y-1">
                  {trendingProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section4;
