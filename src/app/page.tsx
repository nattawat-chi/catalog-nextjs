"use client";

import ProductsDetails from "@/components/ProductsDetails";
import FeatureRadio from "@/components/FeatureRadio";
import { useState } from "react";
import Search from "@/components/Search";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <div className="flex justify-center items-center  py-2">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      <div className="flex justify-end  items-center px-4 py-2">
        <h1 className="text-2xl font-bold text-center w-full">Products List</h1>
        <div className="absolute right-12 lg:right-32">
          <FeatureRadio
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </div>
      <ProductsDetails
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />
    </div>
  );
}
