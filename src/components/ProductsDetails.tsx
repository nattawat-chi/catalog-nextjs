"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types/ProductsType";
import { GetAllProducts, GetFromFilter } from "@/lib/services/ProductApi";
import { useEffect, useState } from "react";
import { ProductsDetailsProps } from "@/types/ProductsType";
import useDebounce from "@/hooks/useDebounce";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useAuth } from "@clerk/nextjs";

const ProductsDetails = ({
  selectedCategory,
  searchQuery,
}: ProductsDetailsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [expandedProductIds, setExpandedProductIds] = useState<number[]>([]);

  const { isSignedIn } = useAuth();
  // debounce the search query to avoid excessive re-renders
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  // use the custom hook to manage the cart
  const { addToCart } = useCartStore();

  // Filter products based on the search query and selected category
  const filteredProducts = products.filter((p) => {
    const matchCategory = selectedCategory
      ? p.category === selectedCategory
      : true;
    const matchTitle = p.title
      .toLowerCase()
      .includes(debouncedSearchQuery.toLowerCase());
    return matchCategory && matchTitle;
  });

  // Function to toggle the expanded state of a product
  const toggleExpand = (id: number) => {
    setExpandedProductIds((prev) =>
      prev.includes(id)
        ? prev.filter((pid) => pid !== id)
        : [...(prev || []), id]
    );
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let data: Product[] = [];
        if (debouncedSearchQuery) {
          const all = selectedCategory
            ? await GetFromFilter({ category: selectedCategory })
            : await GetAllProducts();
          data = all.filter((product) =>
            product.title
              .toLowerCase()
              .includes(debouncedSearchQuery.toLowerCase())
          );
        } else {
          data = selectedCategory
            ? await GetFromFilter({ category: selectedCategory })
            : await GetAllProducts();
        }
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [selectedCategory, debouncedSearchQuery]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
      {filteredProducts.map((product) => {
        const isExpanded = expandedProductIds.includes(product.id);
        const shortDescription =
          product.description.length > 100
            ? product.description.slice(0, 100) + " ..."
            : product.description;
        return (
          <Card key={product.id} className="min-w-64">
            <CardHeader>
              <CardTitle className="text-xl">{product.title}</CardTitle>
              <CardDescription>
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
            <CardContent className="grid gap-4 items-center justify-center">
              <img
                src={product.images[0]}
                alt={product.title}
                className="max-w-62"
              />
              <div>Price: {product.price} $</div>
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
                    // console.log("Adding to cart:", cartItem);
                    toast("Product added to cart", {
                      description: `${product.title} has been added to your cart.`,
                      duration: 2000,
                    });
                    addToCart(cartItem);
                  }}
                  className=" font-bold py-2 px-4 rounded"
                >
                  Add to Cart
                </Button>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
export default ProductsDetails;
