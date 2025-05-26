import { Heart, Eye, BarChart3, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  onSale?: boolean;
  color?: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group relative bg-white overflow-hidden transition-all duration-300">
      {product.onSale && (
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
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-300  ${
              product.hoverImage
                ? "group-hover:opacity-0"
                : "group-hover:opacity-100"
            } rounded-lg`}
          />
          {product.hoverImage && (
            <Image
              src={product.hoverImage}
              alt={`${product.name} hover`}
              layout="fill"
              objectFit="cover"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
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
            <button className="w-full bg-gray-900 text-white py-3 px-4 rounded font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Add To Cart</span>
            </button>
          </div>
        </>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-row justify-between items-end">
        <div>
          <h3 className="font-medium text-gray-900 mb-2 text-sm">
            {product.name}
          </h3>
          <div className="flex items-center space-x-2">
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-sm font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Color Options for Arctander Chair */}
        <div className="flex space-x-2 mt-3">
          <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-gray-300"></div>
          <div className="w-4 h-4 bg-gray-400 rounded-full border border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
