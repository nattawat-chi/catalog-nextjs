"use client";

import ProductsDetails from "@/components/ProductsDetails";
import Search from "@/components/Search";
import { useSearchStore } from "@/hooks/useSearchStore";
import FeatureRadio from "@/components/FeatureRadio";
import { useState } from "react";
import MarqueeProducts from "@/components/Marquee";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { searchQuery, setSearchQuery } = useSearchStore();

  return (
    <main className="min-h-screen">
      <section className="py-10 md:py-14 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Welcome to AllureMart
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Discover a modern selection of stylish, high-quality products
            designed to elevate your lifestyle — from sleek home decor and
            functional kitchen accessories to everyday essentials that blend
            design and simplicity.
          </p>
          <div className="flex flex-col space-y-8 items-center">
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <FeatureRadio
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30 backdrop-blur-sm">
        <div className="">
          <ProductsDetails selectedCategory={selectedCategory} />
        </div>
      </section>
      <MarqueeProducts />
    </main>
  );
}
