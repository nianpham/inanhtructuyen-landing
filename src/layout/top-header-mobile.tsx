import React from "react";
import Link from "next/link";
import {
  Phone,
} from "lucide-react";

const TopBannerMobile: React.FC = () => {
  return (
    <div className="lg:hidden flex w-full bg-[rgb(var(--primary-rgb))] text-black py-3 px-4">
      <div className="w-full flex justify-between items-center">
        <div className="w-full flex items-center">
          <div className="w-full flex items-center justify-between space-x-2">
            <span>Khung Ảnh - Album Chất lượng</span>
            <Link
              href="tel:+393352684593"
              className="hover:text-black transition-colors flex items-center gap-2"
            >
              <Phone size={14} className="text-black" /> 0939.468.252
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBannerMobile;
