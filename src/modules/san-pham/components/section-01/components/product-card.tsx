import { HELPER } from "@/utils/helper";
import { BarChart3, Eye, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "@/types/product";
import { useProduct } from "../../product-context";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="cursor-pointer group relative bg-white overflow-hidden transition-all duration-300">
      {Number(product._id.charAt(7)) % 2 !== 0 && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded">
            Sale!
          </span>
        </div>
      )}

      {/* Product Image Container */}
      <div className="relative aspect-square rounded-lg overflow-hidden">
        <div>
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <Image
              src={product.thumbnail}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className={`transition-opacity duration-300 border border-gray-200  ${
                product.images[1]
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
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg border border-gray-200"
              />
            )}
          </div>
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
            <button className="w-full bg-gray-900 text-white py-3 px-4 rounded font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Add To Cart</span>
            </button>
          </div>
        </>
      </div>

      {/* Product Info */}
      <div className="py-4 flex flex-row justify-between items-end">
        <div>
          <h3 className="font-medium text-gray-900 mb-2 text-sm lg:text-md">
            {product.name}
          </h3>
          <div className="flex items-center space-x-2">
            {Number(product._id.charAt(7)) % 2 !== 0 && (
              <span className="text-sm lg:text-base text-gray-500 line-through">
                {HELPER.formatVND(
                  HELPER.upPrice(product.product_option[0].price)
                )}
              </span>
            )}
            <span className="text-sm lg:text-base font-semibold text-gray-900">
              {HELPER.formatVND(product.product_option[0].price)}
            </span>
          </div>
        </div>
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
