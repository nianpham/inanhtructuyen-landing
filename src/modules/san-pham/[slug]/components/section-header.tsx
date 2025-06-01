"use client";

import React from "react";
import Link from "next/link";
import { ROUTES } from "@/utils/route";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <section className="w-[100%] mx-auto relative overflow-hidden bg-[#F5F5F5]">
      <div className="relative z-10 flex items-center h-full mx-auto py-4 text-black max-w-7xl">
        <div className="px-5 lg:px-0 text-sm">
          <Link href={ROUTES.HOME}>Trang chủ </Link> &ensp;/&ensp;{" "}
          <Link href={ROUTES.PRODUCT}>Sản phẩm</Link> &ensp;/&ensp;{" "}
          {title.length <= 20 ? title : title.slice(0, 20) + "..."}{" "}
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
