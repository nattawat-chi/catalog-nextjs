"use client";

import { ThemeProvider } from "./theme-provider";
import { CartProvider } from "@/providers/CartProvider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
};

export default Provider;
