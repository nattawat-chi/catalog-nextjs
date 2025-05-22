import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { Product } from "@/types/ProductsType";
import { GetAllProducts, GetFromFilter } from "@/lib/services/ProductApi";

const useFilteredProducts = (searchQuery: string, selectedCategory: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

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

        setProducts(data.sort(() => Math.random() - 0.5));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory, debouncedSearchQuery]);

  return products;
};

export default useFilteredProducts;
