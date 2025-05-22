// app/products/[id]/page.tsx
import { GetAllProducts } from "@/lib/services/ProductApi";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const allProducts = await GetAllProducts();
  const product = allProducts.find((p) => p.id.toString() === params.id);
  if (!product) return notFound();

  return <ProductDetailClient product={product} />;
}
