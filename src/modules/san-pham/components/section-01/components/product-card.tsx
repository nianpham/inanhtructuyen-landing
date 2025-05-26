import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  colors?: string[];
  onSale?: boolean;
  rating?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {product.onSale && (
          <span className="absolute top-2 left-2 bg-yellow-600 text-white px-2 py-1 text-xs font-medium rounded">
            Sale!
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-gray-800 font-medium mb-2">{product.name}</h3>

        <div className="flex items-center gap-2 mb-2">
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-gray-800 font-semibold">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-1">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
