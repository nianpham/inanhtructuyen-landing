// components/ReadingTestCollection.tsx
"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PromoBannerProps {
  topText: string;
  mainHeading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  isDark?: boolean;
}

const PromoBanner: React.FC<PromoBannerProps> = ({
  topText,
  mainHeading,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-900",
  isDark = false,
}) => {
  return (
    <div className={`relative h-96 overflow-hidden ${backgroundColor}`}>
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="relative h-full flex items-center">
        <div className="max-w-lg px-8 lg:px-12">
          <p
            className={`text-sm font-medium mb-2 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Quick parcel delivery,{" "}
            <span className="text-amber-500">from $25</span>
          </p>
          <h2
            className={`text-4xl lg:text-5xl font-bold leading-tight mb-4 ${textColor}`}
          >
            {mainHeading}
          </h2>
          <p
            className={`text-base mb-8 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {description}
          </p>

          <Link href={buttonLink}>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-none font-medium transition-colors duration-200 flex items-center space-x-2 group">
              <span>{buttonText}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Alternative version with background images
const Banner1WithImages: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {/* Left Banner - Interior Home Decor */}
        <div className="relative h-96 overflow-hidden bg-gray-50">
          <div className="absolute right-0 top-0 bottom-0 w-full">
            <Image
              src={`https://res.cloudinary.com/farmcode/image/upload/v1748165187/ielts-test/banner-static1_lh6bsj.jpg`}
              alt="Interior Home Decor"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="relative h-full flex items-center">
            <div className="max-w-lg px-8 lg:px-12">
              <p className="text-sm font-medium mb-2 text-gray-600">
                Quick parcel delivery,{" "}
                <span className="text-amber-500">from $25</span>
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 text-gray-900">
                Up to 70% Off
                <br />
                Interior Home Decor
              </h2>
              <p className="text-base mb-8 text-gray-600">
                Class aptent taciti sociosqu ad litora
              </p>
              <Link href="/home-decor">
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-none font-medium transition-colors duration-200 flex items-center space-x-2 group">
                  <span>Shop Collection</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Banner - Pendant Lamp */}
        <div className="relative h-96 overflow-hidden bg-gray-800">
          <div className="absolute right-0 top-0 bottom-0 w-full">
            <Image
              src={`https://res.cloudinary.com/farmcode/image/upload/v1748165402/ielts-test/banner-static2_fchhrv.jpg`}
              alt="Interior Home Decor"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="relative h-full flex items-center">
            <div className="max-w-lg px-8 lg:px-12">
              <p className="text-sm font-medium mb-2 text-gray-300">
                Quick parcel delivery,{" "}
                <span className="text-amber-500">from $25</span>
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
                Up to 70% Sale Off
                <br />
                Pendant Lamp
              </h2>
              <p className="text-base mb-8 text-gray-300">
                Class aptent taciti sociosqu ad litora
              </p>
              <Link href="/pendant-lamps">
                <button className="bg-gray-900 hover:bg-gray-700 text-white px-8 py-4 rounded-none font-medium transition-colors duration-200 flex items-center space-x-2 group border border-gray-600">
                  <span>Shop Collection</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component with responsive mobile version
const Section3: React.FC = () => {
  return (
    <>
      {/* Desktop version */}
      <div className="hidden lg:block max-w-7xl mx-auto px-5 lg:px-0">
        <Banner1WithImages />
      </div>

      {/* Mobile version */}
      <div className="lg:hidden max-w-7xl mx-auto px-5 lg:px-0">
        <div className="space-y-0">
          <PromoBanner
            topText="Quick parcel delivery, from $25"
            mainHeading="Up to 70% Off Interior Home Decor"
            description="Class aptent taciti sociosqu ad litora"
            buttonText="Shop Collection"
            buttonLink="/home-decor"
            backgroundColor="bg-gray-50"
            textColor="text-gray-900"
            isDark={false}
          />
          <PromoBanner
            topText="Quick parcel delivery, from $25"
            mainHeading="Up to 70% Sale Off Pendant Lamp"
            description="Class aptent taciti sociosqu ad litora"
            buttonText="Shop Collection"
            buttonLink="/pendant-lamps"
            backgroundColor="bg-gray-800"
            textColor="text-white"
            isDark={true}
          />
        </div>
      </div>
    </>
  );
};

export default Section3;
