"use client";

import ProductsDetails from "@/components/ProductsDetails";
import FeatureRadio from "@/components/FeatureRadio";
import Search from "@/components/Search";
import { useState } from "react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container mx-auto px-4 py-10 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FeatureRadio
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <ProductsDetails
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />
    </div>
  );
}
