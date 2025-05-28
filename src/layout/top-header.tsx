import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Send,
} from "lucide-react";
import Image from "next/image";

const TopBanner: React.FC = () => {
  return (
    <div className="hidden lg:flex w-full bg-[rgb(var(--primary-rgb))] text-black py-3 px-4">
      <div className="w-[85%] mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        {/* Left Section - Contact Info */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-black" />
            <Link
              href="tel:+393352684593"
              className="hover:text-black transition-colors"
            >
              0939.468.252
            </Link>
          </div>

          <div className="hidden sm:block text-black">|</div>

          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-black" />
            <Link
              href="mailto:hello@domain.com"
              className="hover:text-black transition-colors"
            >
              inanhtructuyen@gmail.com
            </Link>
          </div>
        </div>

        {/* Center Section - Promotion */}
        <div className="flex items-center space-x-3 text-sm">
          <span className="text-black">
            Miễn phí vận chuyển cho đơn hàng từ 500.000đ
          </span>
          <Link
            href="/shop"
            className="bg-[rgb(var(--fifteenth-rgb))] hover:bg-yellow-700 text-white px-4 py-1 rounded font-medium transition-colors"
          >
            Đặt ngay!
          </Link>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex space-x-3 bg-[rgb(var(--primary-rgb))]">
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
              alt="alt"
              width={1000}
              height={1000}
              className="w-5 h-5 lg:w-6 lg:h-6"
            />
          </Link>
          <Link href="/" className="text-gray-900 hover:text-gray-700">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/2048px-Icon_of_Zalo.svg.png"
              alt="alt"
              width={1000}
              height={1000}
              className="w-5 h-5 lg:w-6 lg:h-6"
            />
          </Link>
          <Link href="/">
            <Image
              src="https://banner2.cleanpng.com/20231123/xjc/transparent-tiktok-logo-black-and-white-logo-tiktok-app-minima-minimalist-black-and-white-tiktok-app-1711004158896.webp"
              alt="alt"
              width={1000}
              height={1000}
              className="w-5 h-5 lg:w-6 lg:h-6 rounded-full"
            />
          </Link>
          <Link href="/">
            <Image
              src="https://tiemquatiko.com/wp-content/uploads/2022/08/shopee-circle-logo-design-shopping-bag-13.png"
              alt="alt"
              width={1000}
              height={1000}
              className="w-5 h-5 lg:w-6 lg:h-6"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
