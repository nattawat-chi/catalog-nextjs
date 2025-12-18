"use client";

import { usePathname } from "next/navigation";
import { useSearchStore } from "@/hooks/useSearchStore";
import useFilteredProducts from "@/hooks/useFilteredProducts";
import { usePagination } from "@/hooks/usePagination";
import { PRODUCTS_PER_PAGE } from "@/constants/config";
import { ProductCard } from "./ProductCard";
import { LoadingSkeleton } from "./LoadingSkeleton";
import { PaginationControls } from "./PaginationControls";
import { useState } from "react";

interface ProductsDetailsProps {
  selectedCategory: string;
  sortBy?: string;
  sortOrder?: string;
}

const ProductsDetails = ({
  selectedCategory,
  sortBy = "name",
  sortOrder = "asc",
}: ProductsDetailsProps) => {
  const { searchQuery } = useSearchStore();
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(1);

  const { products, loading, total } = useFilteredProducts(
    searchQuery,
    selectedCategory,
    currentPage,
    sortBy,
    sortOrder
  );

  const {
    totalPages,
    handlePageChange: onPageChange,
    handleNext,
    handlePrev,
    canNext,
    canPrev,
    visiblePages,
  } = usePagination({
    totalItems: total,
    itemsPerPage: PRODUCTS_PER_PAGE,
    initialPage: currentPage,
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  if (loading) {
    return (
      <div className="p-4">
        <LoadingSkeleton />
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
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {pathname === "/products" && total > PRODUCTS_PER_PAGE && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          visiblePages={visiblePages}
          onPageChange={handlePageChange}
          onNext={() => {
            handleNext();
            setCurrentPage((prev) => prev + 1);
          }}
          onPrev={() => {
            handlePrev();
            setCurrentPage((prev) => prev - 1);
          }}
          canNext={canNext}
          canPrev={canPrev}
        />
      )}
    </div>
  );
};

export default ProductsDetails;
