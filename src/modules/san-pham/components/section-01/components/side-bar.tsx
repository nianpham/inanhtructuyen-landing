import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import SliderRange from "@/components/ui/comp-251";

interface SidebarProps {
  onFilterChange: (filters: any) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    fashion: false,
    furniture: true,
    jewelry: false,
    organic: false,
    plant: false,
  });

  const [priceRange, setPriceRange] = useState([10, 820]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [value, setValue] = useState([25, 75]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const categories = [
    { id: "fashion", name: "Fashion", hasSubcategories: true },
    {
      id: "furniture",
      name: "Furniture",
      hasSubcategories: true,
      subcategories: [
        "Chairs",
        "Construction",
        "Decoration",
        "Education",
        "Lighting Lamp",
        "Sofas",
      ],
    },
    { id: "jewelry", name: "Jewelry", hasSubcategories: true },
    { id: "organic", name: "Organic", hasSubcategories: true },
    { id: "plant", name: "Plant", hasSubcategories: false },
  ];

  const colors = [
    "#000000",
    "#6B7280",
    "#EF4444",
    "#F97316",
    "#A3A3A3",
    "#D4A574",
  ];
  const sizes = ["L", "M", "S", "XL", "Xs"];

  const featuredProducts = [
    {
      name: "Promise Alyada 18K Yellow Gold",
      price: 10.0,
      image: "/api/placeholder/60/60",
    },
    {
      name: "18K Yellow Gold Diamond Ring",
      price: 10.0,
      image: "/api/placeholder/60/60",
    },
    {
      name: "Sparkle 18K Yellow Gold Emerald",
      price: 10.0,
      image: "/api/placeholder/60/60",
    },
  ];

  return (
    <div className="w-64 bg-white pr-6 h-full overflow-y-auto">
      {/* Product Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Product Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id}>
              <div
                className="flex items-center justify-between cursor-pointer py-1 hover:text-gray-600"
                onClick={() =>
                  category.hasSubcategories && toggleSection(category.id)
                }
              >
                <div className="flex items-center">
                  <div
                    className={`w-2 h-2 rounded-full mr-3 ${
                      category.id === "furniture"
                        ? "bg-black"
                        : "border border-gray-300"
                    }`}
                  />
                  <span className="text-gray-700">{category.name}</span>
                </div>
                {category.hasSubcategories &&
                  (expandedSections[category.id] ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  ))}
              </div>

              {category.hasSubcategories &&
                expandedSections[category.id] &&
                category.subcategories && (
                  <div className="ml-5 mt-2 space-y-1">
                    {category.subcategories.map((sub) => (
                      <div
                        key={sub}
                        className="text-gray-600 text-sm py-1 cursor-pointer hover:text-gray-800"
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Price</h3>
        <div className="space-y-4">
          <SliderRange />
          <button className="bg-black text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
            Filter →
          </button>
        </div>
      </div>

      {/* Color Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Color</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color, index) => (
            <button
              key={index}
              className={`w-6 h-6 rounded-full border-2 ${
                selectedColors.includes(color)
                  ? "border-gray-800"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => {
                setSelectedColors((prev) =>
                  prev.includes(color)
                    ? prev.filter((c) => c !== color)
                    : [...prev, color]
                );
              }}
            />
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Size</h3>
        <div className="space-y-2">
          {sizes.map((size) => (
            <label key={size} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 rounded"
                checked={selectedSizes.includes(size)}
                onChange={(e) => {
                  setSelectedSizes((prev) =>
                    e.target.checked
                      ? [...prev, size]
                      : prev.filter((s) => s !== size)
                  );
                }}
              />
              <span className="text-gray-700">{size} (1)</span>
            </label>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Featured Products
        </h3>
        <div className="space-y-4">
          {featuredProducts.map((product, index) => (
            <div key={index} className="flex items-center space-x-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <h4 className="text-sm font-medium text-gray-800 line-clamp-2">
                  {product.name}
                </h4>
                <p className="text-sm text-gray-600">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
