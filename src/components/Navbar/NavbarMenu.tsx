"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
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
import { Suspense } from "react";

function NavbarMenuContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col items-start md:w-[100px] lg:w-[150px]">
              <ListItem
                href="/products"
                title="All Products"
                isActive={pathname === "/products" && !currentCategory}
              />
              <ListItem
                href="/products?category=beauty"
                title="Beauty"
                isActive={currentCategory === "beauty"}
              />
              <ListItem
                href="/products?category=womens-dresses"
                title="Women's Dresses"
                isActive={currentCategory === "womens-dresses"}
              />
              <ListItem
                href="/products?category=mens-shirts"
                title="Men's Shirts"
                isActive={currentCategory === "mens-shirts"}
              />
              <ListItem
                href="/products?category=smartphones"
                title="Smartphones"
                isActive={currentCategory === "smartphones"}
              />
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

export default function NavigationMenuDemo() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavbarMenuContent />
    </Suspense>
  );
}

interface ListItemProps {
  href: string;
  title: string;
  isActive?: boolean;
  children?: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ href, title, children, isActive, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              isActive && "bg-accent text-accent-foreground"
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && (
              <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </div>
            )}
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
