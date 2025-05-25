"use client";

import CarouselFunction from "@/components/Carousel";
import SampleProducts from "@/components/SampleProducts";
import { useState } from "react";

export default function Home() {
  // const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main>
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Welcome to AllureMart</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover a modern selection of stylish, high-quality products designed
          to elevate your lifestyle — from sleek home decor and functional
          kitchen accessories to everyday essentials that blend design and
          simplicity.
        </p>
        <section>
          <CarouselFunction
            searchQuery={searchQuery}
            selectedCategory="furniture"
          />
        </section>
        <SampleProducts
          searchQuery={searchQuery}
          selectedCategory="kitchen-accessories"
        />
      </section>
    </main>
  );
}
