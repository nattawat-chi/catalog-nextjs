export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductsCardProps {
  selectedCategory: string;
}

export interface FeatureRadioProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}
