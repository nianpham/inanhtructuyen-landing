"use client";

import React from "react";
import Image from "next/image";
import { IMAGES } from "@/utils/image";
import Link from "next/link";
import { ROUTES } from "@/utils/route";

const Section01 = () => {
  return (
    <section className="w-[100%] h-full mx-auto lg:py-20 relative overflow-hidden">
      <div className="relative z-10 grid grid-cols-2 items-center h-full mx-auto text-black max-w-7xl">
        <div className="px-5 lg:px-0">
          <div className="text-2xl font-bold mb-3 text-[rgb(var(--fifteenth-rgb))]">
            Đang phát triển.
          </div>
          <div className="text-2xl font-semibold">
            Opps! Trang giá cả đang được phát triển. Vui lòng quay lại sau.
          </div>
          <div className="text-base mt-3">
            <Link href={ROUTES.HOME} className="text-black underline">
              Về trang chủ
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={IMAGES.DEVELOP_IMG}
            alt="Wooden furniture and kitchenware"
            className="object-cover object-center w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default Section01;
