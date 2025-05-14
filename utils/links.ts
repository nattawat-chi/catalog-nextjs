type NavLinks = {
  href: string;
  label: string;
};

export const links: NavLinks[] = [
  { href: "/", label: "Home" },
  {
    href: "/favorites",
    label: "Favorites",
  },
  {
    href: "/products",
    label: "Products",
  },
  { href: "/cart", label: "Cart" },
];
