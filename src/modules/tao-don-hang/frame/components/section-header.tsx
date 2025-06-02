"use client";

import React from "react";
import Image from "next/image";
import { IMAGES } from "@/utils/image";
import Link from "next/link";
import { ROUTES } from "@/utils/route";
import { Youtube } from "lucide-react";

const SectionHeader = () => {
  return (
    <section className="w-[100%] mx-auto relative overflow-hidden bg-[#F5F5F5]">
      <div className="relative z-10 flex items-center h-full mx-auto py-4 text-black max-w-7xl">
        <div className="flex flex-row items-center px-5 lg:px-0 text-sm">
          <Link href={ROUTES.HOME}>Trang chủ </Link> &ensp;/&ensp;{" "}
          <Link href={ROUTES.HOME}>
            {`Hướng dẫn tạo đơn hàng Khung Ảnh`.slice(0, 18).concat("...")}
          </Link>{" "}
          &ensp;
          <Youtube color="#000000" strokeWidth={1.75} />
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
