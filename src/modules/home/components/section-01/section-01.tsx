// components/ReadingTestCollection.tsx
"use client";

import { IMAGES } from "@/utils/image";
import Image from "next/image";
import FastMarquee from "react-fast-marquee";
import React, { useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "@/styles/contact.css";

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
      <div className="relative z-10 flex flex-col items-end justify-start">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-xl font-semibold text-gray-800 mb-4">{discount}</p>
        <p className="text-amber-600 font-medium">{price}</p>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          src={image}
          alt="Main Image 1"
          fill
          priority
          className="object-cover h-full object-center border border-gray-200"
        />
      </div>
    </div>
  );
};

const Section1: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      title: "Wood Chair",
      discount: "Extra 15% off",
      description: "Class aptent taciti sociosqu ad litora",
      price: "From $49.59",
      image: IMAGES.BANNER_7,
      bgColor: "bg-gray-50",
    },
    {
      title: "Khung Ảnh Hàn Quốc",
      discount: "Giảm giá 20%",
      description: "",
      price: "Giá chỉ từ 48.000đ",
      image: IMAGES.BANNER_8,
      bgColor: "bg-gray-100",
    },
  ];

  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0">
      <section className="pt-6">
        <div className="">
          <div className="max-w-7xl mx-auto p-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
              {/* Hero Section - Takes 2/3 width */}
              <div className="relative lg:col-span-2">
                <Swiper
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  grabCursor={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  slidesPerView={1}
                  loop={true}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass:
                      "swiper-pagination-bullet-active bg-white",
                  }}
                  modules={[Pagination, Navigation, Autoplay]}
                  className="w-full h-full"
                >
                  <SwiperSlide className="">
                    <div className="min-h-[700px] relative overflow-hidden">
                      <div className="absolute top-8 left-8 z-10 max-w-md">
                        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight mt-1">
                          Dấu ấn thời gian
                        </h1>
                        <p className="text-white mb-8 line-clamp-4">
                          Chúng tôi thấu hiểu rằng những khoảnh khắc quan trọng
                          trong cuộc đời không chỉ là dấu ấn của thời gian, mà
                          còn là những cột mốc ý nghĩa trong hành trình sống của
                          mỗi người.
                        </p>
                        <button className="bg-[rgb(var(--primary-rgb))] text-gray-800 font-medium hover:bg-[rgb(var(--fifteenth-rgb))] hover:text-[rgb(var(--primary-rgb))] px-8 py-4 rounded-lg transition-colors">
                          Đặt hàng ngay
                        </button>
                      </div>

                      {/* Hero Image */}
                      <div className="absolute bottom-0 right-0 left-0 top-0 w-full h-full flex items-center justify-center z-0">
                        <Image
                          src={IMAGES.BANNER_5}
                          alt="Main Image 1"
                          width={1200}
                          height={1000}
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="">
                    <div className="min-h-[700px] relative overflow-hidden">
                      <div className="absolute top-8 left-8 z-10 max-w-md">
                        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight mt-1">
                          Dấu ấn thời gian
                        </h1>
                        <p className="text-white mb-8 line-clamp-4">
                          Chúng tôi thấu hiểu rằng những khoảnh khắc quan trọng
                          trong cuộc đời không chỉ là dấu ấn của thời gian, mà
                          còn là những cột mốc ý nghĩa trong hành trình sống của
                          mỗi người.
                        </p>
                        <button className="bg-[rgb(var(--primary-rgb))] text-gray-800 font-medium hover:bg-[rgb(var(--fifteenth-rgb))] hover:text-[rgb(var(--primary-rgb))] px-8 py-4 rounded-lg transition-colors">
                          Đặt hàng ngay
                        </button>
                      </div>

                      {/* Hero Image */}
                      <div className="absolute bottom-0 right-0 left-0 top-0 w-full h-full flex items-center justify-center z-0">
                        <Image
                          src={IMAGES.BANNER_2}
                          alt="Main Image 1"
                          width={1200}
                          height={1000}
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="">
                    <div className="min-h-[700px] relative overflow-hidden">
                      <div className="absolute top-8 left-8 z-10 max-w-md">
                        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight mt-1">
                          Dấu ấn thời gian
                        </h1>
                        <p className="text-white mb-8 line-clamp-4">
                          Chúng tôi thấu hiểu rằng những khoảnh khắc quan trọng
                          trong cuộc đời không chỉ là dấu ấn của thời gian, mà
                          còn là những cột mốc ý nghĩa trong hành trình sống của
                          mỗi người.
                        </p>
                        <button className="bg-[rgb(var(--primary-rgb))] text-gray-800 font-medium hover:bg-[rgb(var(--fifteenth-rgb))] hover:text-[rgb(var(--primary-rgb))] px-8 py-4 rounded-lg transition-colors">
                          Đặt hàng ngay
                        </button>
                      </div>

                      {/* Hero Image */}
                      <div className="absolute bottom-0 right-0 left-0 top-0 w-full h-full flex items-center justify-center z-0">
                        <Image
                          src={IMAGES.BANNER_4}
                          alt="Main Image 1"
                          width={1200}
                          height={1000}
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* Product Cards Sidebar - Takes 1/3 width */}
              <div className="grid h-full lg:col-span-1 lg:grid-row-2 gap-6">
                {/* {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    title={product.title}
                    discount={product.discount}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    bgColor={product.bgColor}
                  />
                ))} */}

                <FastMarquee loop={0} speed={70}>
                  {IMAGES.slider_1?.map((item: any, index: number) => (
                    <Image
                      key={`marquee-image-${index}`}
                      src={item}
                      alt="alt"
                      className="w-full h-[338px] object-cover object-center pr-6"
                      width={1000}
                      height={1000}
                    />
                  ))}
                </FastMarquee>

                <FastMarquee loop={0} speed={70} direction="right">
                  {IMAGES.slider_2?.map((item: any, index: number) => (
                    <Image
                      key={`marquee-image-${index}`}
                      src={item}
                      alt="alt"
                      className="w-full h-[338px] object-cover object-center pr-6"
                      width={1000}
                      height={1000}
                    />
                  ))}
                </FastMarquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
