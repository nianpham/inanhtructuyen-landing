// components/ReadingTestCollection.tsx
"use client";

import React from "react";
import ProductCard from "./components/card";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  onSale?: boolean;
  color?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Arctander Chair",
    price: 100.0,
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163483/ielts-test/image1_cs2cl2.avif",
    hoverImage:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163524/ielts-test/image2_we8e1q.avif",
    color: "bg-yellow-400",
  },
  {
    id: 2,
    name: "Turning Table",
    price: 52.0,
    originalPrice: 57.0,
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163483/ielts-test/image1_cs2cl2.avif",
    onSale: true,
  },
  {
    id: 3,
    name: "Mogens koch Bookcase",
    price: 39.0,
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163483/ielts-test/image1_cs2cl2.avif",
    hoverImage:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163524/ielts-test/image2_we8e1q.avif",
  },
  {
    id: 4,
    name: "Pilke 60 pendant lamp",
    price: 39.0,
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163483/ielts-test/image1_cs2cl2.avif",
    hoverImage:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163524/ielts-test/image2_we8e1q.avif",
  },
  {
    id: 5,
    name: "Beoplay A1",
    price: 139.0,
    originalPrice: 149.0,
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163483/ielts-test/image1_cs2cl2.avif",
    hoverImage:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163524/ielts-test/image2_we8e1q.avif",
    onSale: true,
  },
  {
    id: 6,
    name: "Amp pendant lamp, Small",
    price: 39.0,
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163483/ielts-test/image1_cs2cl2.avif",
    hoverImage:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163524/ielts-test/image2_we8e1q.avif",
  },
  {
    id: 7,
    name: "Elegant Lounge Chair",
    price: 49.0,
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163483/ielts-test/image1_cs2cl2.avif",
    hoverImage:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163524/ielts-test/image2_we8e1q.avif",
  },
  {
    id: 8,
    name: "Hanging egg chair",
    price: 39.0,
    image:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163483/ielts-test/image1_cs2cl2.avif",
    hoverImage:
      "https://res.cloudinary.com/farmcode/image/upload/v1748163524/ielts-test/image2_we8e1q.avif",
  },
];

const Section2: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0">
      <section>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Best Seller Products
            </h1>
            <p className="text-gray-600">Top Sale In This Week</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
