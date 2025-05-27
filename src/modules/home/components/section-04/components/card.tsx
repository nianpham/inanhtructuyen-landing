import React, { useEffect } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { HELPER } from "@/utils/helper";
import { useProduct } from "@/modules/san-pham/components/product-context";
import { useRouter, useSearchParams } from "next/navigation";

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

interface ProductCardProps {
  product: Product;
  showRating?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showRating = false,
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

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
      className="flex items-start space-x-4 py-4 cursor-pointer"
    >
      <div className="w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={product.name}
          width={1000}
          height={1000}
          className="object-cover w-full h-full rounded-md border border-gray-200"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
        <div className="flex items-center space-x-2">
          {Number(product._id.charAt(7)) % 2 !== 0 && (
            <span className="text-sm text-gray-500 line-through">
              {HELPER.formatVND(
                HELPER.upPrice(product.product_option[0].price)
              )}
            </span>
          )}
          <span className="text-lg font-semibold text-orange-600">
            {HELPER.formatVND(product.product_option[0].price)}
          </span>
        </div>
        {showRating && (
          <div className="flex items-center mt-1">
            {renderStars(Math.floor(Math.random() * 2) + 4)}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
