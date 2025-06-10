import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

// Workaround for Next.js dynamic route param bug
export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  if (!res.ok) return notFound();
  const product = await res.json();

  return <ProductDetailClient product={product} />;
}

export const dynamic = "force-dynamic";
