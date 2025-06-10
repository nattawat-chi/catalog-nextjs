"use client";

import ProductsDetails from "@/components/ProductsDetails";
import FeatureRadio from "@/components/FeatureRadio";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Search from "@/components/Search";
import { useSearchStore } from "@/hooks/useSearchStore";
import { Button } from "@/components/ui/button";

interface ProductsPageClientProps {
  initialCategory: string;
}

export default function ProductsPageClient({
  initialCategory,
}: ProductsPageClientProps) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const { searchQuery, setSearchQuery } = useSearchStore();
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category) {
      router.push(`/products?category=${category}`);
    } else {
      router.push("/products");
    }
  };

  const handleSort = (type: "name" | "price") => {
    if (sortBy === type) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(type);
      setSortOrder("asc");
    }
  };

  return (
    <div>
      <div className="flex flex-col  justify-between md:flex-row items-center px-4 gap-4 mt-5 mb-3">
        {/* Category */}
        <div className="flex justify-center md:justify-start w-1/2">
          <FeatureRadio
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Search */}
        <div className="w-3/4 md:w-1/2">
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>

        {/* Sort */}
        <div className="w-1/2 flex gap-2 justify-center md:justify-end">
          <Button
            onClick={() => handleSort("name")}
            className={`px-3 py-1 rounded ${sortBy === "name"}`}
          >
            Sort by Name{" "}
            {sortBy === "name" && (sortOrder === "asc" ? "↑" : "↓")}
          </Button>
          <Button
            onClick={() => handleSort("price")}
            className={`px-3 py-1 rounded ${sortBy === "price"}`}
          >
            Sort by Price{" "}
            {sortBy === "price" && (sortOrder === "asc" ? "↑" : "↓")}
          </Button>
          <Button
            onClick={() => {
              setSortBy("name");
              setSortOrder("asc");
            }}
            className="cursor-pointer"
            variant="outline"
          >
            Clear
          </Button>
        </div>
      </div>

      <ProductsDetails
        selectedCategory={selectedCategory}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />
    </div>
  );
}
