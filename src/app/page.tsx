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

      <div className="grid grid-cols-2 items-center container mx-auto px-4 py-2">
        <h1 className="text-2xl font-bold pl-1">Our Collection</h1>
        <div className="justify-self-end">
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
