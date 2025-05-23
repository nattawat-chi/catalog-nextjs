"use client";

import { Input } from "./ui/input";
import { ChangeEvent } from "react";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  onEnter?: () => void;
}

const Search = ({ searchQuery, setSearchQuery, onEnter }: SearchProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnter) {
      e.preventDefault();
      onEnter();
    }
  };

  return (
    <Input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Search for products..."
      className="max-w-xs"
    />
  );
};
export default Search;
