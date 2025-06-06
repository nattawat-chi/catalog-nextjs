import axios from "axios";
import { Product } from "@/types/ProductsType";

export const GetAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data.products;
};
