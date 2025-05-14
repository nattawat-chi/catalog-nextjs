"use client";

import { Input } from "./ui/input";
import { ChangeEvent } from "react";
import { SearchProps } from "@/types/ProductsType";

const Search = ({ searchQuery, setSearchQuery }: SearchProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Input
      type="text"
      value={searchQuery}
      onChange={handleChange}
      placeholder="Search Your Products..."
      className="max-w-xs"
    />
  );
};
export default Search;
