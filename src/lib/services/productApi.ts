import axios from "axios";
import { Product } from "@/types/ProductsType";

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};
