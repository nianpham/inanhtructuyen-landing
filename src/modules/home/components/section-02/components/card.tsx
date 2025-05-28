import { useProduct } from "@/modules/san-pham/components/product-context";
import { HELPER } from "@/utils/helper";
import { Heart, Eye, BarChart3, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

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

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

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

  const { setSelectedProductId } = useProduct();

  const handleClick = (id: string, title: string) => {
    setSelectedProductId(id);
    localStorage.setItem("selectedProductId", id);
    // Append product ID as a query parameter
    router.push(`/products/${HELPER.convertSpacesToDash(title)}?id=${id}`);
  };

  return (
    <div
      onClick={() => handleClick(product._id, product.name)}
      className="cursor-pointer group relative bg-white overflow-hidden transition-all duration-300"
    >
      {Number(product._id.charAt(7)) % 2 !== 0 && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded">
            Sale!
          </span>
        </div>
      )}

      {/* Product Image Container */}
      <div className="relative aspect-square rounded-lg overflow-hidden">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
          <Image
            src={product.thumbnail}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-300 border border-gray-200  ${product.images[1]
              ? "group-hover:opacity-0"
              : "group-hover:opacity-100"
              } rounded-lg`}
          />
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={`${product.name} hover`}
              layout="fill"
              objectFit="cover"
              className="opacity-0 group-hover:opacity-100 border border-gray-200 transition-opacity duration-300 rounded-lg"
            />
          )}
        </div>
        <>
          <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Heart className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <BarChart3 className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Eye className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <div className="absolute -bottom-16 group-hover:bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-500 ease-in-out">
            <button className="w-full bg-[rgb(var(--primary-rgb))] text-gray-800 py-3 px-4 rounded font-medium hover:bg-[rgb(var(--fifteenth-rgb))] hover:text-[rgb(var(--primary-rgb))] transition-colors flex items-center justify-center space-x-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Thêm vào giỏ</span>
            </button>
          </div>
        </>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-row justify-between items-end">
        <div className="flex flex-col justify-between">
          <h3 className="font-medium text-gray-900 mb-2 text-sm">
            {product.name}
          </h3>
          <div className="flex items-center space-x-2">
            {Number(product._id.charAt(7)) % 2 !== 0 && (
              <span className="text-sm text-gray-500 line-through">
                {HELPER.formatVND(
                  HELPER.upPrice(product.product_option[0].price)
                )}
              </span>
            )}
            <span className="text-sm font-semibold text-gray-900">
              {HELPER.formatVND(product.product_option[0].price)}
            </span>
          </div>
        </div>

        {/* Color Options for Arctander Chair */}
        <div className="flex space-x-2 mt-3">
          {product.color.slice(0, 3).map((color, index) => (
            <div
              key={index}
              className={`w-4 h-4 ${HELPER.renderColor(
                color
              )} rounded-full border border-gray-200`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
