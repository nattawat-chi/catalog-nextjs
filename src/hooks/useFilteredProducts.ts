import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { Product } from "@/types/ProductsType";

interface UseFilteredProductsResult {
  products: Product[];
  total: number;
  loading: boolean;
}

const useFilteredProducts = (
  searchQuery: string,
  selectedCategory: string,
  page: number = 1
): UseFilteredProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const limit = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const skip = (page - 1) * limit;

        const url =
          selectedCategory && !debouncedSearchQuery.trim()
            ? `https://dummyjson.com/products/category/${encodeURIComponent(
                selectedCategory
              )}?limit=${limit}&skip=${skip}`
            : debouncedSearchQuery.trim()
            ? `https://dummyjson.com/products/search?q=${encodeURIComponent(
                debouncedSearchQuery
              )}&limit=${limit}&skip=${skip}`
            : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

        const res = await fetch(url);
        const json = await res.json();
        let results = json.products || [];

        setProducts(results);
        setTotal(json.total || results.length);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setProducts([]);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [debouncedSearchQuery, selectedCategory, page]);

  return { products, loading, total };
};

export default useFilteredProducts;
