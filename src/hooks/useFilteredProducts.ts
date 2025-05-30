import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
}

interface UseFilteredProductsResult {
  products: Product[];
  loading: boolean;
  total: number;
}

const useFilteredProducts = (
  searchQuery: string,
  selectedCategory: string,
  page: number,
  sortBy: string = "name",
  sortOrder: string = "asc"
): UseFilteredProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = `https://dummyjson.com/products?limit=12&skip=${
          (page - 1) * 12
        }`;

        // Add search query if present
        if (searchQuery) {
          url = `https://dummyjson.com/products/search?q=${searchQuery}&limit=12&skip=${
            (page - 1) * 12
          }`;
        }

        // Use category endpoint if selected
        if (selectedCategory) {
          url = `https://dummyjson.com/products/category/${selectedCategory}?limit=12&skip=${
            (page - 1) * 12
          }`;
        }

        const response = await fetch(url);
        const data = await response.json();
        const sortedProducts = [...data.products];

        // Apply sorting
        sortedProducts.sort((a, b) => {
          if (sortBy === "name") {
            return sortOrder === "asc"
              ? a.title.localeCompare(b.title)
              : b.title.localeCompare(a.title);
          } else if (sortBy === "price") {
            return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
          }
          return 0;
        });

        setProducts(sortedProducts);
        setTotal(data.total);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
        setTotal(0);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery, selectedCategory, page, sortBy, sortOrder]);

  return { products, loading, total };
};

export default useFilteredProducts;
