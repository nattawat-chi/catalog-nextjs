"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col items-start md:w-[100px] lg:w-[150px]">
              <ListItem href="/products" title="All Products"></ListItem>
              <ListItem
                href="/products?category=beauty"
                title="Beauty"
              ></ListItem>
              <ListItem
                href="/products?category=womens-dresses"
                title="Women's Dresses"
              ></ListItem>
              <ListItem
                href="/products?category=mens-shirts"
                title="Men's Shirts"
              ></ListItem>
              <ListItem
                href="/products?category=smartphones"
                title="Smartphones"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/about" className={navigationMenuTriggerStyle()}>
              About Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
