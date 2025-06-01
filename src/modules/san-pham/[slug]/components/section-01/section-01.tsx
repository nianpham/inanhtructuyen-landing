// components/ReadingTestCollection.tsx
"use client";

import { IMAGES } from "@/utils/image";
import {
  BarChart3,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Heart,
  Minus,
  Plus,
  Search,
  Star,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "@/styles/contact.css";
import ProductCard from "./components/card";
import { ProductService } from "@/services/product";
import { useRouter, useSearchParams } from "next/navigation";
import { HELPER } from "@/utils/helper";
import SectionHeader from "../section-header";
import { useProduct } from "@/modules/san-pham/components/product-context";
import { useDispatch } from "react-redux";
import { setSelectedProductId } from "@/store/productSlice";

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

const Section1: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [relatedProduct, setRelatedProduct] = useState<Product[]>([]);
  const [expanded, setExpanded] = useState(false);
  const searchParams = useSearchParams();
  const productID = searchParams.get("spid");
  const [selectedColor, setSelectedColor] = useState<string>("");

  const getPartialContent = (content: string) => {
    const words = content.split(" ");
    return words.slice(0, Math.ceil(words.length / 6)).join(" ") + "...";
  };

  const init = async () => {
    try {
      let productCate = "";
      if (productID) {
        const fetchProduct = async () => {
          try {
            const res = await ProductService.getProductById(productID);
            if (res && res.data) {
              setProduct(res.data);
              productCate = res.data.category;
              if (res.data?.product_option?.length > 0) {
                setSelectedSize(res.data.product_option[0].size);
              }
              if (res.data?.color.length > 0) {
                setSelectedColor(res.data.color[0]);
              }
            }
          } catch (error) {
            console.error("Error fetching product:", error);
          }
        };
        fetchProduct();
      }

      const res = await ProductService.getAll();

      if (res && res.data && res.data.length > 0) {
        const filteredProducts = res.data.filter(
          (item: Product) => item?.category === productCate
        );

        setRelatedProduct(filteredProducts);
      } else {
        console.log("No products found in response");
        setRelatedProduct([]);
      }
    } catch (error) {
      console.error("Error initializing products:", error);
      setRelatedProduct([]);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const imageList = product
    ? [product.thumbnail, ...product.images].filter(Boolean)
    : [];

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const getCurrentPrice = () => {
    const selectedOption = product?.product_option?.find(
      (option: any) => option.size === selectedSize
    );
    return selectedOption
      ? selectedOption.price
      : product?.product_option?.[0]?.price || "0";
  };

  const swiperRef = useRef<SwiperCore | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(500);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(500);
    }
  };

  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [thumbnailSwiperInstance, setThumbnailSwiperInstance] =
    useState<any>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const handleSwiper = (swiper: any) => {
    setSwiperInstance(swiper);
  };

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
    thumbnailSwiperInstance?.slideTo(swiper.activeIndex);
  };

  const handleThumbnailClick = (index: number) => {
    setActiveSlide(index);
    swiperInstance?.slideTo(index);
  };

  const handleThumbnailSlideChange = (swiper: any) => {
    const firstVisibleIndex = swiper.realIndex;
    setActiveSlide(firstVisibleIndex);
    swiperInstance?.slideTo(firstVisibleIndex);
  };

  const social = [IMAGES.FACEBOOK, IMAGES.ZALO];

  return (
    <>
      <SectionHeader title={product?.name ?? ""} />
      <div className="max-w-7xl mx-auto px-5 lg:px-0 py-5">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="relative flex flex-col lg:flex-row">
            <div className="hidden lg:flex w-full lg:w-96 h-[270px] lg:h-[300px] mb-5 lg:mb-0 lg:mr-5">
              <Swiper
                onSwiper={setThumbnailSwiperInstance}
                slidesPerView={3}
                spaceBetween={16}
                direction={"vertical"}
                navigation={false}
                centeredSlides={false}
                onSlideChange={handleThumbnailSlideChange}
                className="h-full w-full"
                modules={[Navigation]}
              >
                {imageList?.map((proImg: any, index: any) => (
                  <SwiperSlide key={index}>
                    <div
                      className={`w-full h-full overflow-hidden cursor-pointer relative transition-all duration-300 ${
                        activeSlide === index
                          ? "border-[#6B3410] border-2"
                          : "border-transparent"
                      }`}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <Image
                        src={proImg}
                        alt={`variant ${index + 1}`}
                        className="object-cover w-full h-full border border-gray-200"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="lg:w-[500px] h-full">
              <Swiper
                onSwiper={handleSwiper}
                onSlideChange={handleSlideChange}
                slidesPerView={1}
                spaceBetween={10}
                navigation={false}
              >
                {imageList?.map((proImg: any, index: any) => (
                  <SwiperSlide key={index}>
                    <div className="aspect-square w-full h-full relative bg-gray-50 flex items-center justify-center">
                      <Image
                        src={proImg}
                        alt="Product Image"
                        className="max-w-full max-h-full object-contain object-center"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="lg:hidden w-full h-[100px] mt-5">
              <Swiper
                onSwiper={setThumbnailSwiperInstance}
                slidesPerView={3}
                spaceBetween={16}
                direction={"horizontal"}
                navigation={false}
                centeredSlides={false}
                onSlideChange={handleThumbnailSlideChange}
                className="h-full w-full"
                modules={[Navigation]}
              >
                {imageList?.map((proImg: any, index: any) => (
                  <SwiperSlide key={index}>
                    <div
                      className={`w-full h-full overflow-hidden cursor-pointer relative transition-all duration-300 ${
                        activeSlide === index
                          ? "border-[#6B3410] border-2"
                          : "border-transparent"
                      }`}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <Image
                        src={proImg}
                        alt={`variant ${index + 1}`}
                        className="object-cover h-full border border-gray-200"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-5">
            <div>
              <h1 className="text-3xl font-light text-gray-900 mb-2">
                {product?.name}
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
                <span className="text-sm text-gray-600">(125 đánh giá)</span>
              </div>

              <div className="grid grid-cols-4 gap-4 w-full lg:w-3/4">
                {product?.product_option?.map((option: any, index: number) => (
                  <button
                    key={index}
                    className={`h-10 text-sm lg:text-base font-base border rounded-md flex items-center justify-center py-2 cursor-pointer transition-all duration-300 ${
                      selectedSize === option.size
                        ? "border-[rgb(var(--fifteenth-rgb))] border-2 bg-orange-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => handleSizeSelect(option.size)}
                  >
                    <div className="flex">{option.size}</div>
                  </button>
                ))}
              </div>

              <div className="mb-2 mt-5 font-medium">Giá sản phẩm:</div>
              <div className="flex justify-start items-center gap-4 mb-5">
                <div className="text-2xl lg:text-3xl font-medium text-brown-700">
                  {HELPER.formatVND(getCurrentPrice())}
                </div>
                <div className="text-md lg:text-xl font-normal line-through text-brown-700">
                  {HELPER.formatVND(HELPER.upPrice(getCurrentPrice()))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-3 font-medium">Màu sắc:</div>
              {product?.color.length === 0 ? (
                <div className="text-black">Không có</div>
              ) : (
                <div className="space-y-3">
                  <div className="flex space-x-3">
                    {product?.color.map((color, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 ${HELPER.renderColor(
                          color
                        )} rounded-full cursor-pointer ${
                          selectedColor === color
                            ? "ring-2 ring-offset-2 ring-[rgb(var(--fifteenth-rgb))]"
                            : ""
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="mb-2 font-medium">Giới thiệu:</div>
              <div className="space-y-5">
                <div className="text-gray-500 leading-relaxed overflow-hidden">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: expanded
                        ? product?.introduction || ""
                        : getPartialContent(product?.introduction || ""),
                    }}
                  />
                </div>
                <div className="flex justify-center relative">
                  {!expanded && (
                    <div className="absolute bottom-[135%] left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
                  )}
                  <button
                    className="text-black cursor-pointer font-semibold px-4 py-2 lg:py-4 lg:px-0 flex items-center gap-4 rounded-md"
                    onClick={() => setExpanded(!expanded)}
                  >
                    {expanded ? (
                      <>
                        <p className="text-[12px] lg:text-base">Thu gọn</p>{" "}
                        <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        <p className="text-[12px] lg:text-base">Xem thêm</p>{" "}
                        <ChevronDown size={16} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col items-start">
              <div className="flex flex-row gap-3">
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
                <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50">
                  <BarChart3 className="w-5 h-5" />
                </button>
              </div>
              <button className="mt-3 w-full lg:w-1/3 flex-1 bg-[rgb(var(--fifteenth-rgb))] text-[rgb(var(--primary-rgb))] hover:opacity-90 py-3 px-6 rounded-md transition-colors">
                Mua hàng
              </button>
            </div>

            {/* Product Meta */}
            <div className="space-y-2 text-black pt-6 border-t">
              <div>
                {/* <span className="font-medium">SKU:</span> {product?.sku} */}
              </div>
              <div>
                <span className="mb-3 font-medium">Phân loại:</span>
                {"  "}
                {HELPER.renderCategory(product?.category || "")}
              </div>
              <div className="flex flex-row items-center space-x-2">
                <span className="font-medium">Chia sẻ:</span>
                <div className="flex space-x-3">
                  {social.map((icon, index) => (
                    <div key={index}>
                      <Image
                        src={icon}
                        alt={`Share on ${icon}`}
                        width={24}
                        height={24}
                        className="w-7 h-7 rounded-full cursor-pointer hover:opacity-80"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="flex flex-row justify-center items-center space-x-4">
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="flex mt-2">
              <button
                className={`pb-2 mx-0 w-40 text-lg font-semibold text-gray-900 border-b-2 border-yellow-600`}
              >
                Mô tả sản phẩm
              </button>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
          </div>
          <div className="pt-8">
            <div className="prose max-w-none text-gray-700 whitespace-pre-line">
              <div
                dangerouslySetInnerHTML={{
                  __html: product?.description || "",
                }}
              />
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="pb-12">
          <div className="text-center mb-12">
            <div className="relative z-20">
              <div
                className={`absolute bottom-[8%] right-[5%] lg:right-[37.5%] h-3 w-36 bg-[rgb(var(--fifteenth-rgb))] opacity-45 z-10`}
              ></div>
              <h1
                className={`text-3xl font-bold text-gray-900 mb-2 z-20 relative`}
              >
                Sản phẩm liên quan
              </h1>
            </div>
            <p className="text-gray-600">
              Khám phá những sản phẩm được ưa chuộng nhất hiện nay, được nhiều
              khách hàng tin dùng và lựa chọn.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              loop={true}
              spaceBetween={10}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active bg-white",
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="w-full h-[450px] lg:h-[450px]"
            >
              {relatedProduct?.map((item, index: number) => (
                <SwiperSlide key={index} className="">
                  <ProductCard key={item._id} product={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={handlePrev}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full w-12 h-12 items-center justify-center z-10 disabled:opacity-50"
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-lg rounded-full w-12 h-12 items-center justify-center z-10 disabled:opacity-50"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
