import React from "react";
import { Grid, List, LayoutGrid, AlignJustify, Grip } from "lucide-react";
import ProductCard from "./product-card";
import Selection from "@/components/ui/comp-190";

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
  return (
    <div className="flex-1 px-5 lg:px-0 pt-2">
      {/* Header */}
      <div className="flex justify-center lg:justify-between items-center my-6">
        <div className="hidden lg:flex text-gray-600">
          Showing 1-12 of 30 results
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
