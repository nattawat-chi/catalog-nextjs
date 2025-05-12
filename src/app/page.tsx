"use client";

import ProductsCard from "@/components/ProductsCard";
import FeatureRadio from "@/components/FeatureRadio";
import { useState } from "react";

export default function Home({}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <h1 className="text-2xl font-bold flex justify-center">Product List</h1>
      <FeatureRadio
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ProductsCard selectedCategory={selectedCategory} />
    </div>
  );
}
