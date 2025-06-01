"use client";

import React from "react";
import Image from "next/image";
import { IMAGES } from "@/utils/image";
import Link from "next/link";
import { ROUTES } from "@/utils/route";

const Section01 = () => {
  return (
    <section className="w-[100%] h-full mx-auto py-20 relative overflow-hidden">
      <div className="relative z-10 flex flex-col justify-center items-center h-full mx-auto text-black max-w-7xl">
        <div className="w-full h-1/2">
          <Image
            src={IMAGES.UNDER_DEVELOPMENT_IMG}
            alt="Wooden furniture and kitchenware"
            className="object-cover object-center w-full lg:w-1/2 h-full flex mx-auto"
            width={1000}
            height={1000}
          />
        </div>
        <div className="text-lg lg:text-2xl font-base mt-8 text-black">
          Trang giá cả đang phát triển.
        </div>
      </div>
    </section>
  );
};

export default Section01;
