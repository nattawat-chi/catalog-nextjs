"use client";

import ProductsDetails from "@/components/ProductsDetails";
import FeatureRadio from "@/components/FeatureRadio";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Search from "@/components/Search";
import { useSearchStore } from "@/hooks/useSearchStore";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("");
  const { searchQuery, setSearchQuery } = useSearchStore();

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  return (
    <div>
      <div className="flex flex-col justify-center md:flex-row items-center px-4 gap-4 mt-5 mb-3">
        <h2 className="flex-1">
          <span className="text-xl font-bold ">Our Products</span>
        </h2>
        <div className="flex-1">
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <div className="flex-1">
          <FeatureRadio
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </div>

      <ProductsDetails selectedCategory={selectedCategory} />
    </div>
  );
}
