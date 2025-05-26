// components/ReadingTestCollection.tsx
"use client";

import { IMAGES } from "@/utils/image";
import { BarChart3, Heart, Minus, Plus, Search, Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  dimensions: string;
  material: string;
  lightSource: string;
  sku: string;
  categories: string[];
  tags: string[];
  colors: string[];
  images: string[];
}

interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isOnSale?: boolean;
  colors?: string[];
}

const Section1: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const product: Product = {
    id: "FUW21",
    name: "Arctander Chair",
    price: 100.0,
    rating: 5,
    reviewCount: 1,
    description:
      "Most of us are familiar with the iconic design of the egg shaped chair floating in the air. The Hanging Egg Chair is a critically acclaimed design that has enjoyed praise worldwide ever since the distinctive sculptural shape was created.",
    dimensions: "Ø 60 x H 30 cm",
    material: "Birch plywood",
    lightSource: "E27",
    sku: "FUW21",
    categories: ["Chairs", "Furniture", "Sofas"],
    tags: ["Chair", "Furniture"],
    colors: ["#D4B896", "#C9A961"],
    images: [
      "/chair-main.jpg",
      "/chair-cushion.jpg",
      "/chair-detail.jpg",
      "/chair-side.jpg",
    ],
  };

  const relatedProducts: RelatedProduct[] = [
    {
      id: "1",
      name: "Iconic Rocking Horse",
      price: 49.0,
      image: "/rocking-horse.jpg",
      isOnSale: true,
    },
    {
      id: "2",
      name: "Dining Chair",
      price: 37.0,
      originalPrice: 39.0,
      image: "/dining-chair.jpg",
      isOnSale: true,
    },
    {
      id: "3",
      name: "Storm Small Jug",
      price: 39.0,
      originalPrice: 52.0,
      image: "/storm-jug.jpg",
      isOnSale: true,
      colors: ["#000000", "#8B4513"],
    },
    {
      id: "4",
      name: "Laundry Baskets",
      price: 30.0,
      originalPrice: 39.0,
      image: "/laundry-basket.jpg",
      isOnSale: true,
    },
  ];

  const productDetails = `Most of us are familiar with the iconic design of the egg shaped chair floating in the air. The Hanging Egg Chair is a critically acclaimed design that has enjoyed praise worldwide ever since the distinctive sculptural shape was created by Nanna & Jørgen Ditzel in 1959.

The design of the Hanging Egg Chair has long since been dubbed timeless whereas the material rattan had its golden age in the 1960s when skilled wicker makers and architects crafted beautifully sculptured furniture out of the challenging material. However, at the moment rattan is becoming more and more popular concurrent with consumer demands for sustainable products.

Dimensions:
Chair: W 85 x D 75 x H 125cm
Stand: W 104 x D 109 x H 207cm (seat height 45cm)

Materials:
Indoor chair: natural fiber (rattan)
Outdoor chair: synthetic fiber
Stand: powder coated iron (only for indoor use)`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Thumbnail Images */}
          <div className="flex flex-col space-y-2">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 border-2 rounded-lg overflow-hidden ${
                  selectedImage === index
                    ? "border-gray-800"
                    : "border-gray-200"
                }`}
              >
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <div
                    className={`w-8 h-8 rounded ${
                      index === 0
                        ? "bg-yellow-600"
                        : index === 1
                        ? "bg-yellow-500"
                        : "bg-gray-300"
                    }`}
                  ></div>
                </div>
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 ml-20">
            <div className="relative bg-gray-50 rounded-lg overflow-hidden aspect-square">
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                <Search className="w-5 h-5 text-gray-600" />
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-64 h-48 bg-white rounded-t-full relative">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32">
                      <div className="w-full h-full bg-gradient-to-b from-yellow-600 to-yellow-700 rounded-full opacity-80"></div>
                      <div className="absolute top-2 left-2 right-2 bottom-8 bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-light text-gray-900 mb-2">
              {product.name}
            </h1>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                ({product.reviewCount} customer review)
              </span>
            </div>
            <div className="text-3xl font-light text-gray-900 mb-6">
              ${product.price.toFixed(2)}
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="space-y-3 text-sm">
            <div>
              <span className="font-medium">Dimensions:</span>{" "}
              {product.dimensions}
            </div>
            <div>
              <span className="font-medium">Material:</span> {product.material}
            </div>
            <div>
              <span className="font-medium">Light source:</span>{" "}
              {product.lightSource}
            </div>
          </div>

          {/* Color Selection */}
          <div className="space-y-3">
            <div className="flex space-x-3">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === index
                      ? "border-gray-800"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-gray-50"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-gray-50"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-gray-900 transition-colors">
              Add To Cart
            </button>
            <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50">
              <BarChart3 className="w-5 h-5" />
            </button>
          </div>

          {/* Product Meta */}
          <div className="space-y-2 text-sm text-gray-600 pt-6 border-t">
            <div>
              <span className="font-medium">SKU:</span> {product.sku}
            </div>
            <div>
              <span className="font-medium">Categories:</span>{" "}
              {product.categories.join(", ")}
            </div>
            <div>
              <span className="font-medium">Tags:</span>{" "}
              {product.tags.join(", ")}
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">Share This Product:</span>
              <div className="flex space-x-2">
                {["f", "t", "in", "@", "link"].map((icon, index) => (
                  <button
                    key={index}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                  >
                    <span className="text-xs font-medium">{icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-16">
        <div className="flex border-b">
          {["Description", "Additional Information", "Reviews (1)"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() =>
                  setActiveTab(tab.toLowerCase().replace(/[^a-z]/g, ""))
                }
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === tab.toLowerCase().replace(/[^a-z]/g, "")
                    ? "border-b-2 border-gray-800 text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>
        <div className="py-8">
          <div className="prose max-w-none text-gray-700 whitespace-pre-line">
            {productDetails}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative bg-gray-50 rounded-lg overflow-hidden aspect-square mb-4">
                {product.isOnSale && (
                  <div className="absolute top-3 left-3 bg-yellow-600 text-white text-xs px-2 py-1 rounded">
                    Sale!
                  </div>
                )}
                <div className="w-full h-full flex items-center justify-center">
                  <div
                    className={`w-24 h-24 rounded ${
                      product.id === "1"
                        ? "bg-gray-800"
                        : product.id === "2"
                        ? "bg-yellow-600"
                        : product.id === "3"
                        ? "bg-gray-900"
                        : "bg-gray-200"
                    }`}
                  ></div>
                </div>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
              <div className="flex items-center space-x-2">
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="font-medium text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              {product.colors && (
                <div className="flex space-x-1 mt-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-3 h-3 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
