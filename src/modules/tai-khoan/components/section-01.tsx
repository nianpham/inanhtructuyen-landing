"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/utils/image";
import Link from "next/link";
import { ROUTES } from "@/utils/route";
import "@/styles/hide-scroll.css";

interface Order {
  id: string;
  date: string;
  price: string;
  status: "Pre-order" | "Completed" | "Cancelled";
}

interface Address {
  type: String;
  address: string;
  isDefault?: boolean;
}

const Section01 = () => {
  const orders: Order[] = [
    {
      id: "#FWB127364372",
      date: "20.12.2023",
      price: "$4,756",
      status: "Pre-order",
    },
    {
      id: "#FWB127364372",
      date: "20.12.2023",
      price: "$4,756",
      status: "Pre-order",
    },
    {
      id: "#FWB127364372",
      date: "20.12.2023",
      price: "$4,756",
      status: "Pre-order",
    },
    {
      id: "#FWB127364372",
      date: "20.12.2023",
      price: "$4,756",
      status: "Pre-order",
    },
    {
      id: "#FWB127364372",
      date: "20.12.2023",
      price: "$4,756",
      status: "Pre-order",
    },
    {
      id: "#FWB127364372",
      date: "20.12.2023",
      price: "$4,756",
      status: "Pre-order",
    },
  ];

  const addresses: Address[] = [
    {
      type: "Địa chỉ",
      address: "744/2 Nguyễn Kiệm, Phường 4, Quận Phú Nhuận, TP. Hồ Chí Minh",
      isDefault: false,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pre-order":
        return "text-[rgb(var(--fifteenth-rgb))]";
      case "Completed":
        return "text-green-600";
      case "Cancelled":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showTopGradient, setShowTopGradient] = useState(false);
  const [showBottomGradient, setShowBottomGradient] = useState(true);

  // Handle scroll for size filter
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          scrollContainerRef.current;
        setShowTopGradient(scrollTop > 0);
        setShowBottomGradient(scrollTop + clientHeight < scrollHeight);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section className="w-[100%] h-full mx-auto py-5 lg:py-10 relative">
      <div className="max-w-7xl h-full mx-auto px-5 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white">
            <h2 className="text-xl font-semibold text-gray-900 mb-3.5">
              Thông tin tài khoản
            </h2>
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="w-full lg:w-1/6 flex justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <div className="space-y-2 mb-2.5">
                    <p className="text-gray-900">
                      <span className="font-medium">Họ và tên:</span> Phạm Thanh
                      Nghiêm
                    </p>
                    <p className="text-gray-900">
                      <span className="font-medium">Email:</span>{" "}
                      nghiempt.dev@gmail.com
                    </p>
                    <p className="text-gray-900">
                      <span className="font-medium">Số điện thoại:</span>{" "}
                      0911558539
                    </p>
                  </div>
                  <div className="w-full flex flex-col lg:flex-row gap-3">
                    <button className="bg-[rgb(var(--fifteenth-rgb))] text-white hover:opacity-80 px-4 py-2 rounded text-[16px] font-medium transition-colors">
                      Cập nhật thông tin
                    </button>
                    <button className="bg-[rgb(var(--primary-rgb))] text-[rgb(var(--fifteenth-rgb))] hover:opacity-80 px-4 py-2 rounded text-[16px] font-medium transition-colors">
                      Đổi mật khẩu
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3.5">
              Địa chỉ giao hàng
            </h2>
            <div className="relative">
              <div className="relative space-y-2 h-full">
                {addresses.map((address, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="w-7 h-7 mt-0">
                      <svg
                        className="w-7 h-7 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-gray-900">
                          {address.type}
                        </span>
                        {address.isDefault && (
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            mặc định
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-base">
                        {address.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order History Section */}
          <div className="bg-white">
            <h2 className="text-xl font-semibold text-gray-900 mb-3.5">
              Lịch sử mua hàng
            </h2>

            <div className="relative">
              <div
                className={`absolute top-0 inset-x-0 bg-gradient-to-b from-white z-20 to-transparent pointer-events-none transition-opacity duration-300 ${
                  showTopGradient ? "opacity-100" : "opacity-0"
                }`}
                style={{ height: "40px" }}
              />
              <div
                className="relative space-y-2 h-[346px] overflow-y-auto scroll-bar-style"
                ref={scrollContainerRef}
              >
                {orders.map((order, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                      <div>
                        <p className="text-gray-500 mb-1">ID Đơn hàng:</p>
                        <p className="font-medium text-gray-900">{order.id}</p>
                      </div>

                      <div>
                        <p className="text-gray-500 mb-1">Ngày đặt:</p>
                        <p className="text-gray-900 font-medium">
                          {order.date}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500 mb-1">Giá:</p>
                        <p className="font-medium text-gray-900">200.000đ</p>
                      </div>

                      <div>
                        <p className="text-gray-500 mb-1">Trạng thái:</p>
                        <p
                          className={`font-medium ${getStatusColor(
                            order.status
                          )}`}
                        >
                          ⚡ Chờ xác nhận
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-4 pt-4 border-t border-gray-100">
                      <div className="lg:hidden flex text-base mb-3">
                        <span className="text-gray-500">Loại đơn hàng:</span>{" "}
                        <span className="font-medium text-gray-900">
                          &nbsp; Khung Ảnh
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-red-600 hover:text-red-700 text-base font-medium px-3 py-2 border border-red-200 hover:border-red-300 rounded transition-colors">
                          Hủy đơn hàng
                        </button>
                        <button className="text-gray-900 hover:text-gray-700 text-base font-medium px-3 py-2 border border-gray-200 hover:border-gray-300 rounded transition-colors">
                          Xem chi tiết
                        </button>
                      </div>
                      <div className="hidden lg:flex text-base">
                        <span className="text-gray-500">Loại đơn hàng:</span>{" "}
                        <span className="font-medium text-gray-900">
                          &nbsp; Khung Ảnh
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-white to-transparent pointer-events-none transition-opacity duration-300 ${
                  showBottomGradient ? "opacity-100" : "opacity-0"
                }`}
                style={{ height: "40px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section01;
