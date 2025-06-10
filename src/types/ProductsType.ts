export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  // rating: {
  //   rate: number;
  //   count: number;
  // };
}

export interface ProductsDetailsProps {
  selectedCategory: string;
}

export interface FeatureRadioProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}
