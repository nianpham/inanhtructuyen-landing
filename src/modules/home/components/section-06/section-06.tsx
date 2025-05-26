// components/ReadingTestCollection.tsx
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import BlogCard from "./components/card";
import { Swiper as SwiperCore } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "@/styles/contact.css";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
  slug: string;
}

interface BlogCarouselProps {
  posts?: BlogPost[];
  title?: string;
  subtitle?: string;
}

const defaultPosts: BlogPost[] = [
  {
    id: 1,
    title: "Outdoor Work: a Designer's Checklist for Every UX Project.",
    excerpt:
      "In her new article, journalist Lizzie Rivera looks into the issue of greenwashing in organic and synthetic textiles. With input ...",
    author: "Admin",
    date: "April 5, 2022",
    image: "/api/placeholder/400/300",
    category: "ORGANIC",
    slug: "outdoor-work-designers-checklist",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Make Your WordPress Journal.",
    excerpt:
      "In her new article, journalist Lizzie Rivera looks into the issue of greenwashing in organic and synthetic textiles. With input ...",
    author: "Admin",
    date: "April 5, 2022",
    image: "/api/placeholder/400/300",
    category: "ORGANIC",
    slug: "ultimate-guide-wordpress-journal",
  },
  {
    id: 3,
    title: "3 Ways of Lying to Yourself About Your New Relationship.",
    excerpt:
      "In her new article, journalist Lizzie Rivera looks into the issue of greenwashing in organic and synthetic textiles. With input ...",
    author: "Admin",
    date: "April 5, 2022",
    image: "/api/placeholder/400/300",
    category: "ORGANIC",
    slug: "3-ways-lying-new-relationship",
  },
  {
    id: 4,
    title: "How to Create Stunning Visual Content for Social Media",
    excerpt:
      "In her new article, journalist Lizzie Rivera looks into the issue of greenwashing in organic and synthetic textiles. With input ...",
    author: "Admin",
    date: "April 4, 2022",
    image: "/api/placeholder/400/300",
    category: "ORGANIC",
    slug: "create-stunning-visual-content",
  },
  {
    id: 5,
    title: "The Future of Sustainable Design in 2024",
    excerpt:
      "In her new article, journalist Lizzie Rivera looks into the issue of greenwashing in organic and synthetic textiles. With input ...",
    author: "Admin",
    date: "April 3, 2022",
    image: "/api/placeholder/400/300",
    category: "ORGANIC",
    slug: "future-sustainable-design-2024",
  },
];

const Section6: React.FC<BlogCarouselProps> = (props) => {
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

  const posts = props.posts || defaultPosts;
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0">
      <section>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {props.title || "Latest From Blog"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {props.subtitle ||
              "Class Aptent Taciti Sociosqu Ad Litora Torquent Per"}
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
                slidesPerView: 3,
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
            className="w-80 sm:w-96 lg:w-full h-full"
          >
            {posts?.map((post, index: number) => (
              <SwiperSlide key={index} className="">
                <BlogCard key={post.id} post={post} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={handlePrev}
            className="hidden lg:flex absolute left-0 top-1/3 -translate-y-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full w-12 h-12 items-center justify-center z-10 disabled:opacity-50"
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
            className="hidden lg:flex absolute right-0 top-1/3 -translate-y-1/2 translate-x-1/2 bg-white shadow-lg rounded-full w-12 h-12 items-center justify-center z-10 disabled:opacity-50"
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
      </section>
    </div>
  );
};

export default Section6;
