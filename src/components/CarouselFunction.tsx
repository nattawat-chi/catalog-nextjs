import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import useFilteredProducts from "@/hooks/useFilteredProducts";
import Image from "next/image";

function CarouselFunction({
  searchQuery,
  selectedCategory,
}: {
  searchQuery: string;
  selectedCategory: string;
}) {
  const products = useFilteredProducts(searchQuery, selectedCategory);

  return (
    <div className="w-full max-w-3xl mx-auto py-6">
      <Carousel plugins={[Autoplay({ delay: 3000 })]}>
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="flex justify-center">
              <div className="flex flex-col items-center gap-4 text-center">
                <Link
                  href={`/product-detail/${product.id}`}
                  className="relative w-80 md:w-90 aspect-square rounded-xl overflow-hidden"
                >
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    sizes="(min-width: 768px) 200px, 100vw "
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>
                <p className="text-white font-semibold">{product.title}</p>
                <span className="text-purple-400 font-bold">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
export default CarouselFunction;
