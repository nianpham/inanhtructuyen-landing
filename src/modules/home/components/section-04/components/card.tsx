import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  image: string;
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
          src={product.image}
          alt={product.name}
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
        <div className="flex items-center space-x-2">
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-lg font-semibold text-orange-600">
            ${product.price.toFixed(2)}
          </span>
        </div>
        {showRating && product.rating && (
          <div className="flex items-center mt-1">
            {renderStars(product.rating)}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
