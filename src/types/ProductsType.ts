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

export interface ProductsDetailsProps {
  selectedCategory: string;
  searchQuery: string;
}

export interface FeatureRadioProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export type SearchProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};
