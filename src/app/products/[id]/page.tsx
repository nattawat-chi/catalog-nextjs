import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) return notFound();
  const product = await res.json();

  return <ProductDetailClient product={product} />;
}

export const dynamic = "force-dynamic";
