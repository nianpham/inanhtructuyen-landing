import React, { useEffect, useMemo, useState } from "react";
import { Grid, List, LayoutGrid, AlignJustify, Grip } from "lucide-react";
import ProductCard from "./product-card";
import Selection from "@/components/ui/comp-190";
import { ProductService } from "@/services/product";
import { useProduct } from "../../product-context";
import { useRouter, useSearchParams } from "next/navigation";
import { HELPER } from "@/utils/helper";

interface Product {
  _id: string;
  name: string;
  description: string;
  introduction: string;
  product_option: [
    {
      size: string;
      price: string;
    }
  ];
  category: string;
  color: string[];
  thumbnail: string;
  images: string[];
  sold: number;
  created_at: string;
}
interface ProductGridProps {
  viewFilter?: boolean;
  products: Product[];
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  viewFilter,
  products,
  viewMode,
  onViewModeChange,
}) => {
  const COUNT = 9;
  const [currenPage, setCurrenPage] = useState<number>(1);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Calculate total pages and current data using useMemo to avoid recomputation
  const totalPage = useMemo(
    () => Math.ceil(products.length / COUNT),
    [products]
  );

  const currenData = useMemo(() => {
    const start = (currenPage - 1) * COUNT;
    const end = currenPage * COUNT;
    return products.slice(start, end);
  }, [products, currenPage]);

  // Adjust current page if it exceeds total pages
  useEffect(() => {
    if (currenPage > totalPage && totalPage > 0) {
      setCurrenPage(totalPage);
    } else if (products.length === 0) {
      setCurrenPage(1);
    }
  }, [totalPage, currenPage, products.length]);

  // Handle URL parameter persistence and hiding
  useEffect(() => {
    const PARAMS_KEY = "__params";

    // Function to get parameters (from URL or sessionStorage)
    const getParams = () => {
      const urlParams = searchParams.toString();
      if (urlParams) {
        // Store URL parameters in sessionStorage if present
        sessionStorage.setItem(PARAMS_KEY, urlParams);
        return urlParams;
      }
      // Fallback to sessionStorage if no URL parameters
      return sessionStorage.getItem(PARAMS_KEY) || "";
    };

    // Hide parameters from address bar
    const hideParams = () => {
      const params = getParams();
      if (params && window.location.search) {
        // Replace URL with clean pathname, preserving parameters in sessionStorage
        window.history.replaceState(
          null,
          document.title,
          window.location.pathname
        );
      }
    };

    // Run on initial load
    hideParams();

    // Restore parameters on beforeunload to ensure they persist in shared URLs
    const handleBeforeUnload = () => {
      const params = sessionStorage.getItem(PARAMS_KEY) || "";
      if (params) {
        window.history.replaceState(
          null,
          document.title,
          `${window.location.pathname}?${params}`
        );
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup event listener
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [searchParams]);

  const selectPage = (pageSelected: number) => {
    setCurrenPage(pageSelected);
  };

  const prevPage = () => {
    if (currenPage > 1) {
      selectPage(currenPage - 1);
    }
  };

  const nextPage = () => {
    if (currenPage < totalPage) {
      selectPage(currenPage + 1);
    }
  };

  const { setSelectedProductId } = useProduct();

  const handleClick = (id: string, title: string) => {
    setSelectedProductId(id);
    localStorage.setItem("selectedProductId", id);
    // Append product ID as a query parameter
    router.push(`/products/${HELPER.convertSpacesToDash(title)}?id=${id}`);
  };

  return (
    <div className="flex-1 px-5 lg:px-0 pt-2">
      {/* Header */}
      <div className="flex justify-center lg:justify-between items-center my-6">
        <div className="hidden lg:flex text-gray-600">
          {products.length > 0 ? (
            <>
              Showing {(currenPage - 1) * COUNT + 1}-
              {Math.min(currenPage * COUNT, products.length)} of{" "}
              {products.length}
            </>
          ) : (
            "No products found"
          )}
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <span className="text-gray-600">Views:</span>
          <button
            onClick={() => onViewModeChange("grid")}
            className={`p-1 ${
              viewMode === "grid" ? "text-black" : "text-gray-400"
            }`}
          >
            <Grip size={20} />
          </button>
          <button
            onClick={() => onViewModeChange("list")}
            className={`p-1 ${
              viewMode === "list" ? "text-black" : "text-gray-400"
            }`}
          >
            <AlignJustify size={20} />
          </button>
        </div>
        <div className={`flex items-center gap-4 ${viewFilter ? "" : "z-30"}`}>
          <Selection />
        </div>
      </div>

      {/* Product Grid */}
      <div
        className={
          viewMode === "grid"
            ? `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
                viewFilter ? "z-0" : "z-30"
              }`
            : "space-y-4"
        }
      >
        {currenData.length > 0 ? (
          currenData.map((product) => (
            <div
              key={product._id}
              onClick={() => handleClick(product._id, product.name)}
            >
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500">
            No products available
          </div>
        )}
      </div>

      {/* Pagination */}
      {products.length > 0 && (
        <nav
          className="flex flex-col items-start justify-center mt-4 p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
          aria-label="Table navigation"
        >
          <ul className="inline-flex items-stretch -space-x-px">
            <li>
              <button
                onClick={prevPage}
                disabled={currenPage === 1}
                className="cursor-pointer flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
            {Array.from({ length: totalPage }, (_, i) => i + 1)?.map(
              (item: any, index: any) => {
                return (
                  <li key={index} onClick={() => selectPage(item)}>
                    <a
                      href="#"
                      className={`${
                        item === currenPage
                          ? "bg-indigo-50 hover:bg-indigo-100 text-gray-700"
                          : "bg-white"
                      } flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700`}
                    >
                      {item}
                    </a>
                  </li>
                );
              }
            )}
            <li>
              <button
                onClick={nextPage}
                disabled={currenPage === totalPage}
                className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default ProductGrid;
