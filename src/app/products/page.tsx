"use client";

import ProductsDetails from "@/components/ProductsDetails";
import FeatureRadio from "@/components/FeatureRadio";
import { useState } from "react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center px-4">
        <h2>
          <span className="text-xl font-bold text-white">Our Products</span>
        </h2>
        <FeatureRadio
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <ProductsDetails selectedCategory={selectedCategory} />
    </div>
  );
}
