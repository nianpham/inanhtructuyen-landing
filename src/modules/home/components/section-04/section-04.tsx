// components/ReadingTestCollection.tsx
"use client";

import React from "react";
import ProductCard from "./components/card";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  image: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Turning Table",
    price: 52.0,
    originalPrice: 57.0,
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163483/ielts-test/image1_cs2cl2.avif",
  },
  {
    id: 2,
    name: "Beoplay A1",
    price: 32.0,
    originalPrice: 49.0,
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163483/ielts-test/image1_cs2cl2.avif",
  },
  {
    id: 3,
    name: "Stainless Steel Teapot",
    price: 39.0,
    originalPrice: 18.0,
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163483/ielts-test/image1_cs2cl2.avif",
  },
];

const topRatedProducts: Product[] = [
  {
    id: 4,
    name: "Mogens Koch Bookcase",
    price: 39.0,
    rating: 5,
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163483/ielts-test/image1_cs2cl2.avif",
  },
  {
    id: 5,
    name: "Laundry Baskets",
    price: 30.0,
    originalPrice: 39.0,
    rating: 5,
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163483/ielts-test/image1_cs2cl2.avif",
  },
  {
    id: 6,
    name: "Mini Table Lamp",
    price: 39.0,
    rating: 5,
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163483/ielts-test/image1_cs2cl2.avif",
  },
];

const trendingProducts: Product[] = [
  {
    id: 7,
    name: "Arctander Chair",
    price: 100.0,
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163483/ielts-test/image1_cs2cl2.avif",
  },
  {
    id: 8,
    name: "Beoplay A1",
    price: 32.0,
    originalPrice: 49.0,
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163483/ielts-test/image1_cs2cl2.avif",
  },
  {
    id: 9,
    name: "Turning Table",
    price: 52.0,
    originalPrice: 57.0,
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163483/ielts-test/image1_cs2cl2.avif",
  },
];

const Section4: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0">
      <section className="pb-20">
        <div className="">
          <div className="mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Featured Products
                </h2>
                <div className="space-y-4">
                  {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
              <div className="">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Top Rated Products
                </h2>
                <div className="space-y-4">
                  {topRatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      showRating={true}
                    />
                  ))}
                </div>
              </div>
              <div className="">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Trending Products
                </h2>
                <div className="space-y-4">
                  {trendingProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
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
