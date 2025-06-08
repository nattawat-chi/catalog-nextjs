export const API_BASE_URL = "https://dummyjson.com";
export const PRODUCTS_PER_PAGE = 12;

export const API_ENDPOINTS = {
  products: `${API_BASE_URL}/products`,
  search: `${API_BASE_URL}/products/search`,
  category: (category: string) =>
    `${API_BASE_URL}/products/category/${category}`,
} as const;
