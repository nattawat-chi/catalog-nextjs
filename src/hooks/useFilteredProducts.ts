import { useState, useEffect } from "react";
import { Product, ProductsResponse } from "@/types/Product";
import { API_ENDPOINTS, PRODUCTS_PER_PAGE } from "@/constants/config";

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
        let url = `${API_ENDPOINTS.products}?limit=${PRODUCTS_PER_PAGE}&skip=${
          (page - 1) * PRODUCTS_PER_PAGE
        }`;

        if (searchQuery) {
          url = `${
            API_ENDPOINTS.search
          }?q=${searchQuery}&limit=${PRODUCTS_PER_PAGE}&skip=${
            (page - 1) * PRODUCTS_PER_PAGE
          }`;
        }

        if (selectedCategory) {
          url = `${API_ENDPOINTS.category(
            selectedCategory
          )}?limit=${PRODUCTS_PER_PAGE}&skip=${(page - 1) * PRODUCTS_PER_PAGE}`;
        }

        const response = await fetch(url);
        const data: ProductsResponse = await response.json();
        const sortedProducts = [...data.products];

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
