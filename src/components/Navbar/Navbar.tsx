"use client";

import { DarkMode } from "./DarkMode";
import DropdownListMenu from "./DropdownListMenu";
import Logo from "./Logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import Search from "../Search";
import { useSearchStore } from "@/hooks/useSearchStore";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect } from "react";
import { DrawerDemo } from "../Drawer";

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useSearchStore();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isProductsPage = pathname === "/products";

  useEffect(() => {
    const initial = searchParams.get("search") || "";
    setSearchQuery(initial);
  }, []);

  // const handleSearchChange = (value: string) => {
  //   setSearchQuery(value);
  //   const newParams = new URLSearchParams(searchParams.toString());
  //   if (value) {
  //     newParams.set("search", value);
  //   } else {
  //     newParams.delete("search");
  //   }
  //   router.replace(`?${newParams.toString()}`, { scroll: false });
  // };

  const { cart } = useCartStore();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav>
      <div
        className="container flex flex-col justify-between py-4
        sm:flex-row sm:items-center gap-4"
      >
        {/* Logo */}
        <div className="flex items-center gap-4 px-4 py-2">
          <Logo />
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:underline"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-muted-foreground hover:underline"
          >
            Browse all products →
          </Link>
        </div>
        {/* Search */}
        {isProductsPage && (
          <div className="flex-1 px-4 py-2">
            <Search
              searchQuery={searchQuery}
              setSearchQuery={(q) => {
                setSearchQuery(q);
              }}
              onEnter={() => {
                if (searchQuery.trim()) {
                  router.push(
                    `/products?search=${encodeURIComponent(searchQuery)}`
                  );
                }
              }}
            />
          </div>
        )}

        {/* DarkMode & Profile */}
        <div className="flex gap-4">
          <DarkMode />
          {/* <Link href="/cart"> */}
          <DrawerDemo />
          {/* </Link> */}
          <DropdownListMenu />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
