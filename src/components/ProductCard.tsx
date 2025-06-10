import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/Product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="cursor-pointer mb-4 min-w-64 max-w-105 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
      <CardHeader>
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.images[0]}
            alt={product.title}
            width={250}
            height={250}
            className="mx-auto scale-[1.1]"
            priority
          />
        </Link>
        <Link href={`/products/${product.id}`} className="flex justify-between">
          <CardTitle className="text-lg hover:text-purple-300 transition-colors duration-200">
            {product.title}
          </CardTitle>
          <div className="font-semibold text-purple-500">
            Price: {product.price} $
          </div>
        </Link>
      </CardHeader>
    </Card>
  );
};
