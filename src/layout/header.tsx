import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  User,
  ShoppingBag,
  House,
  Gift,
  Info,
  ShieldCheck,
  CircleDollarSign,
  NotepadText,
  UserRound,
  FolderPlus,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { IMAGES } from "@/utils/image";
import TopBanner from "./top-header";
import "@/styles/contact.css";
import TopBannerMobile from "./top-header-mobile";
import LoginForm from "./login-form";
import { ROUTES } from "@/utils/route";
import LoginFormMobile from "./login-form-mobile";

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
      href: `${ROUTES.HOME}`,
      icon: House,
      sideBar: false,
    },
    {
      label: "Sản phẩm",
      href: `${ROUTES.PRODUCT}`,
      icon: Gift,
      sideBar: false,
    },
    {
      label: "Giới thiệu",
      href: `${ROUTES.ABOUT}`,
      icon: Info,
      sideBar: false,
    },
    {
      label: "Bảng giá",
      href: `${ROUTES.PRICING}`,
      icon: CircleDollarSign,
      sideBar: false,
    },
    {
      label: "Blog",
      href: `${ROUTES.BLOG}`,
      icon: NotepadText,
      sideBar: false,
    },
    {
      label: "Tạo đơn hàng Album",
      href: `${ROUTES.CREATE_ORDER}?type=album`,
      icon: FolderPlus,
      sideBar: true,
    },
    {
      label: "Tạo đơn hàng Frame",
      href: `${ROUTES.CREATE_ORDER}?type=frame`,
      icon: FolderPlus,
      sideBar: true,
    },
    {
      label: "Hồ sơ cá nhân",
      href: `${ROUTES.ACCOUNT}`,
      icon: UserRound,
      sideBar: true,
    },
  ];

  const isActive = (item: any) => {
    if (item.label === "Home") {
      return pathname === "/";
    }
    return item.href === pathname;
  };

  const [open, setOpen] = React.useState(false);

  const [currentImage, setCurrentImage] = useState(IMAGES.APP_STORE);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentImage((prev) =>
          prev === IMAGES.APP_STORE ? IMAGES.GOOGLE_PLAY : IMAGES.APP_STORE
        );
        setIsVisible(true);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <TopBanner />
      <TopBannerMobile />
      <header className="w-full bg-white py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-5 lg:px-0">
          <label
            className="hamburger lg:hidden"
            onClick={() => {
              setOpen(true);
            }}
          >
            <input type="checkbox" checked={open} onChange={() => {}} />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>

          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center space-x-2">
            <Image
              src={IMAGES.LOGO}
              alt="In Ảnh Trực Tuyến"
              width={40}
              height={40}
            />
            <div className="flex flex-col justify-center items-start">
              <span className="text-sm lg:text-lg font-bold">
                IN ẢNH TRỰC TUYẾN
              </span>
              <span className="text-xs font-medium text-[rgb(var(--fifteenth-rgb))]">
                In ảnh đẹp giá rẻ
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems
              .filter((item) => item.sideBar === false)
              .map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={`relative text-[16px] font-normal transition-colors duration-200 ${
                      isActive(item)
                        ? "text-[rgb(var(--fifteenth-rgb))] font-semibold border-b-2 border-[rgb(var(--fifteenth-rgb))] pb-1"
                        : "text-black"
                    } group-hover:text-[rgb(var(--fifteenth-rgb))] group-hover:font-semibold`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-[2px] bg-[rgb(var(--fifteenth-rgb))] transition-all duration-300 ease-in-out ${
                        isActive(item) ? "w-0" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </div>
              ))}
          </nav>

          {/* Right side navigation */}
          <div className="flex items-center lg:space-x-6">
            {/* Login/Register */}
            <LoginForm />

            <ShoppingBag
              size={18}
              strokeWidth={1.5}
              className="hidden lg:flex cursor-pointer hover:text-[rgb(var(--fifteenth-rgb))]"
            />

            {/* Divider */}
            <div className="hidden lg:flex h-5 w-px bg-gray-300"></div>

            {/* Cart */}
            <Link
              href="https://apps.apple.com/us/app/in-ảnh-trực-tuyến/id6745794485"
              target="_blank"
              className="group relative flex flex-col lg:flex-row gap-1 lg:gap-2 justify-center items-center text-black hover:text-gray-900 transition-colors lg:pr-0"
            >
              <div className="flex flex-row items-center gap-2 ">
                <Image
                  src={IMAGES.APP_STORE}
                  alt={IMAGES.APP_STORE}
                  width={1000}
                  height={1000}
                  className={`w-[18px] h-[18px]`}
                />
                <Image
                  src={IMAGES.GOOGLE_PLAY}
                  alt={IMAGES.GOOGLE_PLAY}
                  width={1000}
                  height={1000}
                  className={`w-[18px] h-[18px]`}
                />
              </div>
              <span className="text-[16px] font-normal group-hover:text-[rgb(var(--fifteenth-rgb))]">
                Tải app
              </span>
            </Link>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-25 z-20"></div>
      )}

      {open && (
        <div className="fixed top-0 left-0 right-[16%] bottom-0 bg-white z-[60] flex flex-col items-center justify-between space-y-4 shadow-lg lg:hidden px-4 pt-5 pb-5">
          <div className="w-full flex flex-col items-center space-y-4">
            <div className="flex flex-row items-center justify-between w-full mb-3">
              <Link href={ROUTES.HOME} className="flex items-center space-x-2">
                <Image
                  src={IMAGES.LOGO}
                  alt="In Ảnh Trực Tuyến"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col justify-center items-start">
                  <span className="text-base lg:text-lg font-bold">
                    IN ẢNH TRỰC TUYẾN
                  </span>
                  <span className="text-sm font-medium text-[rgb(var(--fifteenth-rgb))]">
                    In ảnh đẹp giá rẻ
                  </span>
                </div>
              </Link>
              <div onClick={() => setOpen(false)} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
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
                    className={`relative text-[16px] font-normal transition-colors duration-200 ${
                      isActive(item)
                        ? "text-[rgb(var(--fifteenth-rgb))] font-semibold border-b-2 border-[rgb(var(--fifteenth-rgb))]"
                        : "text-black"
                    } group-hover:text-[rgb(var(--fifteenth-rgb))] group-hover:font-semibold`}
                  >
                    <div
                      className={`flex flex-row items-center gap-1 text-[16px] mb-3`}
                    >
                      <div>
                        {item.icon && <item.icon className="w-5 h-5 mr-2" />}{" "}
                      </div>
                      <div className="relative">
                        {item.label}
                        <span
                          className={`absolute -bottom-0.5 left-0 h-[2px] bg-[rgb(var(--fifteenth-rgb))] transition-all duration-300 ease-in-out ${
                            isActive(item) ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        ></span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <LoginFormMobile />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
