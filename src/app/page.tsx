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
      <div className="flex justify-center items-center py-2">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      <h1 className="text-2xl font-bold flex justify-center py-1">
        Product List
      </h1>
      <FeatureRadio
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ProductsDetails
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />
    </div>
  );
}
