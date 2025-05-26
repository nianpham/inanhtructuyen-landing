// components/ReadingTestCollection.tsx
"use client";

import { IMAGES } from "@/utils/image";
import Image from "next/image";
import React, { useState } from "react";

interface ProductCardProps {
  title: string;
  discount: string;
  description: string;
  price: string;
  image: string;
  bgColor?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  discount,
  description,
  price,
  image,
  bgColor = "bg-gray-100",
}) => {
  return (
    <div
      className={`${bgColor} relative p-8 h-full flex flex-col justify-between`}
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-xl font-semibold text-gray-800 mb-4">{discount}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-amber-600 font-medium">{price}</p>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          src={image}
          alt="Main Image 1"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};

const Section1: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Normann Copenhagen - Craft salt and pepper grinder",
      delivery: "Quick parcel delivery, from $25",
      image: "🧂",
    },
    {
      title: "Premium Kitchen Essentials - Modern Design",
      delivery: "Fast shipping available, from $30",
      image: "🍽️",
    },
    {
      title: "Scandinavian Home Collection - Craft Series",
      delivery: "Express delivery, from $20",
      image: "🏠",
    },
  ];

  const products = [
    {
      title: "Wood Chair",
      discount: "Extra 15% off",
      description: "Class aptent taciti sociosqu ad litora",
      price: "From $49.59",
      image: IMAGES.MAIN_2,
      bgColor: "bg-gray-50",
    },
    {
      title: "Turning Table",
      discount: "Up to 30% off",
      description: "Class aptent taciti socios",
      price: "From $49.59",
      image: IMAGES.MAIN_3,
      bgColor: "bg-gray-100",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0">
      <section className="pt-5">
        <div className="">
          <div className="max-w-7xl mx-auto p-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
              {/* Hero Section - Takes 2/3 width */}
              <div className="lg:col-span-2">
                <div className="min-h-[700px] relative overflow-hidden">
                  <div className="absolute top-8 left-8 z-10 max-w-md">
                    <p className="text-gray-600 mb-4">
                      <span className="text-amber-600 font-medium">
                        {heroSlides[currentSlide].delivery}
                      </span>
                    </p>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                      {heroSlides[currentSlide].title}
                    </h1>
                    <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                      Start Shopping
                    </button>
                  </div>

                  {/* Hero Image */}
                  <div className="absolute bottom-0 right-0 left-0 top-0 w-full h-full flex items-center justify-center z-0">
                    <Image
                      src={IMAGES.MAIN_1}
                      alt="Main Image 1"
                      width={1200}
                      height={1000}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>

                  {/* Slide Indicators */}
                  {/* <div className="absolute bottom-8 left-8 flex space-x-3">
                    {heroSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentSlide
                            ? "bg-amber-500"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div> */}
                </div>
              </div>

              {/* Product Cards Sidebar - Takes 1/3 width */}
              <div className="grid grid-row-2 gap-6">
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    title={product.title}
                    discount={product.discount}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    bgColor={product.bgColor}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
