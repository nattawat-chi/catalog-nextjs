import { Product } from "@/types/ProductsType";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { GetAllProducts, GetFromFilter } from "@/lib/services/ProductApi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

function CarouselFunction({
  searchQuery,
  selectedCategory,
}: {
  searchQuery: string;
  selectedCategory: string;
}) {
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
  return (
    <div className="w-full  max-w-3xl mx-auto py-6">
      <Carousel plugins={[Autoplay({ delay: 3000 })]}>
        <CarouselContent>
          {products.map((product) => {
            return (
              <CarouselItem key={product.id} className="flex justify-center">
                <div className="flex flex-col items-center gap-4">
                  <Link href={`/products/${product.id}`}>
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="lg:w-82 lg:h-82 w-50 h-50"
                      loading="lazy"
                    />
                  </Link>
                  <p className="text-white font-semibold">{product.title}</p>
                  <span className="text-purple-400 font-bold">
                    ${product.price}
                  </span>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
export default CarouselFunction;
