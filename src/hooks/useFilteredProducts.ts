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
  page: number
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

        setProducts(data.products);
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
  }, [searchQuery, selectedCategory, page]);

  return { products, loading, total };
};

export default useFilteredProducts;
