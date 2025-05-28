import React from "react";
import Link from "next/link";
import {
  User,
  Heart,
  ShoppingBag,
  Search,
  BookOpenText,
  Headphones,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { IMAGES } from "@/utils/image";
import TopBanner from "./top-header";
import "@/styles/contact.css";
import Contact from "@/components/ui/contact";

interface HeaderProps {
  cartCount?: number;
  wishlistCount?: number;
  isLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  cartCount = 0,
  wishlistCount = 1,
  isLoggedIn = false,
}) => {
  const pathname = usePathname();

  const navigationItems = [
    {
      label: "Trang chủ",
      href: "/",
      icon: BookOpenText,
    },
    { label: "Sản phẩm", href: "/products", icon: Headphones },
  ];

  const isActive = (item: any) => {
    if (item.label === "Home") {
      return pathname === "/" || pathname === "/reading";
    }
    return item.href === pathname;
  };

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TopBanner />
      <header className="w-full bg-white py-1.5 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-2 lg:px-0">
          <label
            className="hamburger lg:hidden"
            onClick={() => {
              setOpen(true);
            }}
          >
            <input type="checkbox" checked={open} />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>

          {/* Logo */}
          <div className="flex flex-row items-center gap-2 font-medium">
            <Link href="/" className="flex items-center">
              <Image
                src={IMAGES.LOGO}
                alt="Logo"
                width={1000}
                height={1000}
                className="w-full h-10"
              />
            </Link>
            <div>In Ảnh Trực Tuyến</div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`text-[16px] font-normal transition-colors duration-200 ${
                    isActive(item)
                      ? "text-[rgb(var(--fifteenth-rgb))] font-semibold"
                      : "text-gray-500"
                  } group-hover:text-[rgb(var(--fifteenth-rgb))] group-hover:font-semibold`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right side navigation */}
          <div className="flex items-center lg:space-x-6">
            {/* Login/Register */}
            <div className="hidden lg:flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">
                {isLoggedIn ? "Tài khoản" : "Đăng nhập / Đăng ký"}
              </span>
            </div>

            {/* Divider */}
            <div className="hidden lg:flex h-5 w-px bg-gray-300"></div>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex justify-center items-center text-gray-700 hover:text-gray-900 transition-colors pr-2 lg:pr-0"
            >
              <ShoppingBag className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-25 z-20"></div>
      )}

      {open && (
        <div className="fixed top-0 left-0 right-[16%] bottom-0 bg-white z-[60] flex flex-col items-center justify-between space-y-4 shadow-lg lg:hidden px-4 pt-5 pb-10">
          <div className="w-full flex flex-col items-center space-y-4">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="w-full flex flex-row items-center gap-2 font-medium">
                <Link href="/" className="flex items-center">
                  <Image
                    src={IMAGES.LOGO}
                    alt="Logo"
                    width={1000}
                    height={1000}
                    className="w-full h-10"
                  />
                </Link>
                <div>In Ảnh Trực Tuyến</div>
              </div>
              <div onClick={() => setOpen(false)} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 w-full">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={`text-[16px] font-normal transition-colors duration-200 ${
                      isActive(item)
                        ? "text-[rgb(var(--fifteenth-rgb))] font-semibold"
                        : "text-gray-500"
                    } group-hover:text-[rgb(var(--fifteenth-rgb))] group-hover:font-semibold`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex items-center justify-between space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
              <span className="text-sm font-medium">
                {isLoggedIn ? "Account" : "Login / Register"}
              </span>
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
