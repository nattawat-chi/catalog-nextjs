import { Suspense } from "react";
import ProductsPageClient from "@/app/products/ProductsPageClient";
import { ProductsPageSkeleton } from "@/components/ui/skeletons";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;

  return (
    <Suspense fallback={<ProductsPageSkeleton />}>
      <ProductsPageClient initialCategory={params.category || ""} />
    </Suspense>
  );
}
