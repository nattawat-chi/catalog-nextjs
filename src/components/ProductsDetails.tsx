"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import useFilteredProducts from "@/hooks/useFilteredProducts";
import { useSearchStore } from "@/hooks/useSearchStore";

const ProductsDetails = ({
  selectedCategory,
}: {
  selectedCategory: string;
}) => {
  const { searchQuery } = useSearchStore();
  const [page, setPage] = useState(1);
  const { products, loading, total } = useFilteredProducts(
    searchQuery,
    selectedCategory,
    page
  );
  const totalPages = Math.ceil(total / 6);
  const [expandedProductIds, setExpandedProductIds] = useState<number[]>([]);
  const { isSignedIn } = useAuth();
  const { addToCart } = useCartStore();

  const handleNext = () => page < totalPages && setPage((p) => p + 1);
  const handlePrev = () => page > 1 && setPage((p) => p - 1);

  const toggleExpand = (id: number) => {
    setExpandedProductIds((prev) =>
      prev.includes(id)
        ? prev.filter((pid) => pid !== id)
        : [...(prev || []), id]
    );
  };

  if (loading) {
    return (
      <div className="p-6 text-center text-lg text-purple-400">
        Loading products...
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="p-6 text-center text-lg text-red-400">
        No products found.
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => {
          const isExpanded = expandedProductIds.includes(product.id);
          const shortDescription =
            product.description.length > 100
              ? product.description.slice(0, 100) + " ..."
              : product.description;

          return (
            <Card key={product.id} className="min-w-64">
              <CardHeader>
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="mx-auto mb-2"
                  />
                </Link>
                <Link href={`/product-detail/${product.id}`}>
                  <CardTitle className="text-xl hover:text-purple-400 transition-colors duration-200">
                    {product.title}
                  </CardTitle>
                </Link>
                <CardDescription className=" text-sm mt-1">
                  {isExpanded ? product.description : shortDescription}
                  {product.description.length > 100 && (
                    <button
                      onClick={() => toggleExpand(product.id)}
                      className="ml-2 text-[12px] text-blue-500 hover:text-blue-700 transition-colors duration-200"
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                    </button>
                  )}
                </CardDescription>
                <div className="mt-2">
                  <CardTitle>
                    Category : <span>{product.category}</span>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="text-lg font-semibold text-purple-400">
                  Price: {product.price} $
                </div>
                {isSignedIn && (
                  <Button
                    onClick={() => {
                      const cartItem = {
                        id: product.id.toString(),
                        title: product.title,
                        price: product.price,
                        quantity: 1,
                        images: product.images,
                      };
                      toast.success(`${product.title} added to cart`, {
                        duration: 2000,
                      });
                      addToCart(cartItem);
                    }}
                    className=" font-bold py-2 px-4 rounded cursor-pointer"
                  >
                    Add to Cart
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <Button
          className="cursor-pointer"
          onClick={handlePrev}
          disabled={page <= 1}
        >
          {"⮜"}
        </Button>
        <span className="self-center">
          Page {page} of {totalPages}
        </span>
        <Button
          className="cursor-pointer"
          onClick={handleNext}
          disabled={page >= totalPages}
        >
          {"⮞"}
        </Button>
      </div>
    </div>
  );
};

export default ProductsDetails;
