// components/ReadingTestCollection.tsx
"use client";

import { IMAGES } from "@/utils/image";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Sidebar from "./components/side-bar";
import ProductGrid from "./components/product-layout";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  category: string;
  colors?: string[];
  onSale?: boolean;
  rating?: number;
}

const Section01: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState({});

  const preIMG = IMAGES.MAIN_1;
  const hoverIMG = IMAGES.MAIN_3;

  // Sample product data
  const sampleProducts: Product[] = [
    {
      id: 1,
      name: "Amp pendant lamp, Small",
      price: 39.0,
      image: preIMG,
      category: "furniture",
    },
    {
      id: 2,
      name: "Arclander Chair",
      price: 190.0,
      image: preIMG,
      category: "furniture",
      colors: ["#D4A574", "#8B4513"],
    },
    {
      id: 3,
      name: "Bank pendant lamp",
      price: 38.0,
      image: preIMG,
      hoverImage: hoverIMG,
      category: "furniture",
    },
    {
      id: 4,
      name: "Beoplay A1",
      price: 32.0,
      originalPrice: 40.0,
      image: preIMG,
      hoverImage: hoverIMG,
      category: "furniture",
      onSale: true,
    },
    {
      id: 5,
      name: "Butler step",
      price: 39.0,
      image: preIMG,
      hoverImage: hoverIMG,
      category: "furniture",
    },
    {
      id: 6,
      name: "Dining Chair",
      price: 37.0,
      originalPrice: 39.0,
      image: preIMG,
      hoverImage: hoverIMG,
      category: "furniture",
      onSale: true,
    },
    {
      id: 7,
      name: "Easy Chair",
      price: 40.0,
      originalPrice: 48.0,
      image: preIMG,
      hoverImage: hoverIMG,
      category: "furniture",
      onSale: true,
    },
    {
      id: 8,
      name: "Elegant Lounge Chair",
      price: 49.0,
      image: preIMG,
      hoverImage: hoverIMG,
      category: "furniture",
      colors: ["#000000", "#FFFFFF"],
    },
    {
      id: 9,
      name: "Hanging egg chair",
      price: 39.0,
      image: preIMG,
      hoverImage: hoverIMG,
      category: "furniture",
    },
    {
      id: 10,
      name: "Herit Armchair",
      price: 45.0,
      originalPrice: 52.0,
      image: preIMG,
      hoverImage: hoverIMG,
      category: "furniture",
      onSale: true,
    },
    {
      id: 11,
      name: "Hubert pendant lamp",
      price: 39.0,
      image: preIMG,
      hoverImage: hoverIMG,
      category: "furniture",
    },
    {
      id: 12,
      name: "Iconic Rocking Horse",
      price: 49.0,
      image: preIMG,
      hoverImage: hoverIMG,
      category: "furniture",
    },
  ];

  useEffect(() => {
    setProducts(sampleProducts);
  }, []);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    // Apply filtering logic here
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex">
        <Sidebar onFilterChange={handleFilterChange} />
        <ProductGrid
          products={products}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
      </div>
    </div>
  );
};

export default Section01;
