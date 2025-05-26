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
      label: "Home ",
      href: "/",
      icon: BookOpenText,
    },
    { label: "Product", href: "/products", icon: Headphones },
  ];

  const isActive = (item: any) => {
    if (item.label === "Home") {
      return pathname === "/" || pathname === "/reading";
    }
    return item.href === pathname;
  };

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-0">
        <div className="flex items-center justify-between h-16">
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
                      ? "text-[rgb(var(--secondary-rgb))] font-semibold"
                      : "text-gray-500"
                  } group-hover:text-[rgb(var(--secondary-rgb))] group-hover:font-semibold`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right side navigation */}
          <div className="flex items-center space-x-6">
            {/* Login/Register */}
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">
                {isLoggedIn ? "Account" : "Login / Register"}
              </span>
            </div>

            {/* Divider */}
            <div className="h-5 w-px bg-gray-300"></div>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative flex items-center text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex items-center text-gray-700 hover:text-gray-900 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
              <span className="ml-1 text-sm font-medium">{cartCount}</span>
            </Link>

            {/* Search */}
            <button className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
