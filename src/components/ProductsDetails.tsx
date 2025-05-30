"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import useFilteredProducts from "@/hooks/useFilteredProducts";
import { useSearchStore } from "@/hooks/useSearchStore";
import { usePathname } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ProductsDetails = ({
  selectedCategory,
  sortBy = "name",
  sortOrder = "asc",
}: {
  selectedCategory: string;
  sortBy?: string;
  sortOrder?: string;
}) => {
  const { searchQuery } = useSearchStore();
  const pathname = usePathname();
  const [page, setPage] = useState(1);
  const { products, loading, total } = useFilteredProducts(
    searchQuery,
    selectedCategory,
    page,
    sortBy,
    sortOrder
  );
  const totalPages = Math.ceil(total / 12);

  const handlePageChange = (page: number) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => page < totalPages && handlePageChange(page + 1);
  const handlePrev = () => page > 1 && handlePageChange(page - 1);

  if (loading) {
    return (
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(12)].map((_, index) => (
            <Card key={index} className="mb-4 min-w-64 max-w-105">
              <CardHeader>
                <Skeleton className="h-[250px] w-[250px] mx-auto" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
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
          return (
            <Card
              key={product.id}
              className=" mb-4 min-w-64 max-w-105 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-300"
            >
              <CardHeader>
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={250}
                    height={250}
                    className="mx-auto scale-[1.1]"
                  />
                </Link>
                <Link
                  href={`/product-detail/${product.id}`}
                  className="flex justify-between "
                >
                  <CardTitle className="text-lg hover:text-purple-300 transition-colors duration-200">
                    {product.title}
                  </CardTitle>
                  <div className="font-semibold text-purple-500">
                    Price: {product.price} $
                  </div>
                </Link>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      {/* Pagination Controls */}
      {pathname === "/products" && (
        <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={handlePrev}
                  className={
                    page <= 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {/* First page */}
              {totalPages > 0 && page > 2 && (
                <PaginationItem>
                  <PaginationLink
                    onClick={() => setPage(1)}
                    isActive={page === 1}
                    className="cursor-pointer"
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
              )}

              {/* Show ellipsis if there are many pages before current */}
              {page > 3 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {/* Current page and surrounding */}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((pageNum) => {
                  if (totalPages <= 5) return true;
                  return Math.abs(pageNum - page) === 1 || pageNum === page;
                })
                .map((pageNum) => (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      onClick={() => setPage(pageNum)}
                      isActive={page === pageNum}
                      className="cursor-pointer"
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                ))}

              {/* Show ellipsis if there are many pages after current */}
              {page < totalPages - 2 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {/* Last page */}
              {totalPages > 1 && page < totalPages - 2 && (
                <PaginationItem>
                  <PaginationLink
                    onClick={() => setPage(totalPages)}
                    isActive={page === totalPages}
                    className="cursor-pointer"
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={handleNext}
                  className={
                    page >= totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default ProductsDetails;
