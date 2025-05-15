"use client";

import { DarkMode } from "./DarkMode";
import { ShoppingCart } from "lucide-react";
import DropdownListMenu from "./DropdownListMenu";
import Logo from "./Logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";

const Navbar = () => {
  const { cart } = useCartStore();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // useEffect(() => {}, [totalItems, cart]);
  // console.log("Total items in cart:", totalItems); // Debugging line to check the total items in the cart
  return (
    <nav>
      <div
        className="container flex flex-col justify-between py-8 
        sm:flex-row sm:items-center gap-4"
      >
        {/* Logo */}
        <Logo />
        {/* DarkMode & Profile */}
        <div className="flex gap-4">
          <DarkMode />
          <Link href="/cart">
            <Button className="cursor-pointer relative" variant="outline">
              <ShoppingCart />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-2 py-[2px] rounded-full">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
          <DropdownListMenu />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
