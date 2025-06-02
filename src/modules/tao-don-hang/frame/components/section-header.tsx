"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/utils/image";
import Link from "next/link";
import { ROUTES } from "@/utils/route";
import { Youtube } from "lucide-react";

const SectionHeader = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const title = "Hướng dẫn tạo đơn hàng Khung Ảnh";
  return (
    <section className="w-[100%] mx-auto relative overflow-hidden bg-[#F5F5F5]">
      <div className="relative z-10 flex items-center h-full mx-auto py-4 text-black max-w-7xl">
        <div className="flex flex-row items-center px-5 lg:px-0 text-sm">
          <Link href={ROUTES.HOME}>Trang chủ </Link> &ensp;/&ensp;{" "}
          <Link href={ROUTES.HOME}>
            {isMobile
              ? title.length <= 17
                ? title
                : title.slice(0, 17) + "..."
              : title}
          </Link>{" "}
          &ensp;
          <Youtube color="#000000" strokeWidth={1.75} />
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
