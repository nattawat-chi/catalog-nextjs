import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Product } from "@/types/ProductsType";

const MarqueeProducts = () => {
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );
        // Get 8 random products from all products
        const shuffled = [...response.data.products].sort(
          () => 0.5 - Math.random()
        );
        setRandomProducts(shuffled.slice(0, 8));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  if (loading || !randomProducts.length) {
    return null;
  }

  return (
    <div className="w-full py-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Marquee speed={50} gradient={false} className="overflow-hidden">
        <div className="flex gap-4 px-4">
          {randomProducts.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="relative group"
            >
              <div className="w-[200px] overflow-hidden rounded-lg bg-background/50 p-3 hover:bg-background/80 transition-colors">
                <div className="relative aspect-square overflow-hidden rounded-md">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="pt-3 text-center">
                  <div className="text-sm font-medium leading-none line-clamp-1">
                    {product.title}
                  </div>
                  <p className="text-sm text-purple-500 font-semibold mt-2">
                    ${product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeProducts;
