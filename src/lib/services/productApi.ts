import axios from "axios";
import { Product } from "@/types/ProductsType";

export const GetAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data.products;
};

export const GetFromFilter = async ({
  category,
}: {
  category: string;
}): Promise<Product[]> => {
  const response = await axios.get(
    `https://dummyjson.com/products/category/${category}`
  );
  return response.data.products;
};
