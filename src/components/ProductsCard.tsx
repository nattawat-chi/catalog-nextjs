"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types/ProductsType";
import { getAllProducts } from "@/lib/services/productApi";
import { useEffect, useState } from "react";
import { ProductsCardProps } from "@/types/ProductsType";

const ProductsCard = ({ selectedCategory }: ProductsCardProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [expandedProductIds, setExpandedProductIds] = useState<number[]>([]);

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => {
        return product.category === selectedCategory;
      })
    : products;

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
      const data = await getAllProducts();
      console.log("Fetched categories:", [
        ...new Set(data.map((p) => p.category)),
      ]);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
      {filteredProducts.map((product) => {
        const isExpanded = expandedProductIds.includes(product.id);
        const shortDescription =
          product.description.length > 100
            ? product.description.slice(0, 100) + " ..."
            : product.description;
        return (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
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
            <CardContent className="grid gap-4">
              <img src={product.image} />
              <div>Price: {product.price} $</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
export default ProductsCard;
