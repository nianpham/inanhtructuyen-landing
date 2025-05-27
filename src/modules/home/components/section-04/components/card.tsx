import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";
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

  return (
    <div className="flex items-start space-x-4 py-4">
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
