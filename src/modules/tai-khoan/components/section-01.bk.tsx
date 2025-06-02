"use client";

import React from "react";
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
      address: "744/2 Nguyên Kiệm, Phường 4, Quận Phú Nhuận, TP. Hồ Chí Minh",
      isDefault: false,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pre-order":
        return "text-blue-600";
      case "Completed":
        return "text-green-600";
      case "Cancelled":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <section className="w-[100%] h-full mx-auto lg:pt-10 lg:pb-2 relative overflow-hidden">
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Account Information Section */}
          <div className="bg-white rounded-lg border border-gray-100 p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Thông tin tài khoản
            </h2>

            <div className="flex items-start gap-6">
              {/* Profile Avatar */}
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
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

              {/* Profile Details */}
              <div className="flex-1">
                <div className="space-y-2 mb-4">
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

                <div className="flex gap-3">
                  <button className="bg-[rgb(var(--fifteenth-rgb))] text-white hover:opacity-80 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Cập nhật thông tin
                  </button>
                  <button className="bg-[rgb(var(--primary-rgb))] text-[rgb(var(--fifteenth-rgb))] hover:opacity-80 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Đổi mật khẩu
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-6 max-h-[400px]">
            {/* Delivery Addresses Section */}
            <div className="bg-white rounded-lg border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Địa chỉ giao hàng
              </h2>

              <div className="space-y-4">
                {addresses.map((address, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="w-6 h-6 mt-1">
                      <svg
                        className="w-6 h-6 text-gray-400"
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
                      <p className="text-gray-600 text-sm">{address.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order History Section */}
            <div className="bg-white rounded-lg border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Lịch sử mua hàng
              </h2>

              <div className="space-y-4 overflow-y-auto max-h-[400px] scroll-bar-style">
                {orders.map((order, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="grid grid-cols-4 gap-4 items-center text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Order ID:</p>
                        <p className="font-medium text-gray-900">{order.id}</p>
                      </div>

                      <div>
                        <p className="text-gray-500 mb-1">Date:</p>
                        <p className="text-gray-900">{order.date}</p>
                      </div>

                      <div>
                        <p className="text-gray-500 mb-1">Price:</p>
                        <p className="font-medium text-gray-900">
                          {order.price}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500 mb-1">Status:</p>
                        <p
                          className={`font-medium ${getStatusColor(
                            order.status
                          )}`}
                        >
                          ⚡ {order.status}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100">
                      <button className="text-red-600 hover:text-red-700 text-sm font-medium px-3 py-1 border border-red-200 hover:border-red-300 rounded transition-colors">
                        Cancel order
                      </button>
                      <button className="text-gray-600 hover:text-gray-700 text-sm font-medium px-3 py-1 border border-gray-200 hover:border-gray-300 rounded transition-colors">
                        View details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section01;
