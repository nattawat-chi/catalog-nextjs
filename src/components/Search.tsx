"use client";

import { SearchIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
// import { ChangeEvent } from "react";

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

  const handleClear = () => {
    setSearchQuery("");
  };

  return (
    <div className="relative w-full max-w-md">
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for products..."
        className="bg-gray-200 rounded-full border-none h-12 px-4 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button
        onClick={searchQuery ? handleClear : undefined}
        variant="outline"
        className="absolute right-0 top-0 cursor-pointer rounded-full h-12 w-12"
      >
        {searchQuery ? <X /> : <SearchIcon />}
      </Button>
    </div>
  );
};
export default Search;
