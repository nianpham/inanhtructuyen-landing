"use client";

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import ProductContent from "./main";
import Sidebar from "./components/section-01/components/side-bar";
import { CircleX, SlidersVertical } from "lucide-react";
import { useState } from "react";

export default function ProductClient() {
  const [filters, setFilters] = useState({});
  const [viewFilter, setViewFilter] = useState(false);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    // Apply filtering logic here
  };

  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      <div className={`${viewFilter ? "z-0" : "z-50"} w-full`}>
        <Header />
      </div>
      {viewFilter && (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 bg-black opacity-25 z-10`}
        ></div>
      )}
      <div
        className={`lg:hidden fixed top-0 left-0 bottom-0 z-20 flex flex-row`}
      >
        {viewFilter && (
          <div
            className={`h-screen overflow-y-auto bg-white w-80 transition-transform duration-500 ease-in-out ${
              viewFilter ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Sidebar onFilterChange={handleFilterChange} />
          </div>
        )}

        <div className="relative w-9 h-screen z-80">
          <div
            onClick={() => setViewFilter(!viewFilter)}
            className={`absolute rounded-tr-lg rounded-br-lg flex justify-center items-center h-9 px-2 transition-transform duration-500 ease-in-out ${
              viewFilter
                ? "bg-white top-[50%] translate-x-[0px]"
                : "border border-gray-200 bg-gray-100 top-[50%] -translate-x-[s0px]"
            }`}
          >
            {!viewFilter ? (
              <SlidersVertical color="black" className="" size={20} />
            ) : (
              <CircleX size={18} />
            )}
          </div>
        </div>
      </div>
      <div className="w-full mb-0">
        <ProductContent viewFilter={viewFilter} />
      </div>
      <Footer />
    </div>
  );
}
