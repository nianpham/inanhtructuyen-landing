import React from "react";
import { Grid, List, LayoutGrid, AlignJustify } from "lucide-react";
import ProductCard from "./product-card";

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
interface ProductGridProps {
  products: Product[];
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  viewMode,
  onViewModeChange,
}) => {
  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-gray-600">Showing 1-12 of 30 results</div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Views:</span>
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-1 ${
                viewMode === "grid" ? "text-black" : "text-gray-400"
              }`}
            >
              <LayoutGrid size={20} />
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

          <select className="border border-gray-300 rounded px-3 py-1 text-gray-700">
            <option>Default Sorting</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Name: A to Z</option>
            <option>Name: Z to A</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"
        }
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button className="px-3 py-2 rounded bg-gray-100 text-gray-600 hover:bg-gray-200">
          1
        </button>
        <button className="px-3 py-2 rounded text-gray-600 hover:bg-gray-100">
          2
        </button>
        <button className="px-3 py-2 rounded text-gray-600 hover:bg-gray-100">
          3
        </button>
        <button className="px-3 py-2 rounded text-gray-600 hover:bg-gray-100">
          →
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
