"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { toast } from "sonner";
import { useState } from "react";
import { Product } from "@/types/ProductsType";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addToCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  const { isSignedIn } = useAuth();

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id.toString(),
      title: product.title,
      price: product.price,
      quantity,
      images: product.images,
    };

    addToCart(cartItem);
    toast.success(`${product.title} added to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <Image
          src={product.images[0]}
          alt={product.title}
          width={600}
          height={600}
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold  mb-2">{product.title}</h1>
        <p className="text-purple-400 text-2xl font-semibold mb-4">
          ${product.price}
        </p>
        <p className=" mb-6 dark:text-gray-400">{product.description}</p>

        <p className="text-sm text-gray-400 mb-4">
          Category: <span className="capitalize">{product.category}</span>
        </p>

        <div className="flex gap-4 mb-4 ">
          {isSignedIn && (
            <>
              <Input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-16 px-2 py-1 border border-gray-600"
              />
              <Button
                onClick={handleAddToCart}
                className="cursor-pointer px-4 py-2 mb-2"
              >
                Add to Cart
              </Button>
            </>
          )}
        </div>

        <Link href="/" className="text-sm text-blue-400 hover:underline ">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
