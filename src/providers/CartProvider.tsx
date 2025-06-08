"use client";

import { useCartStore } from "@/store/useCartStore";
import { useEffect } from "react";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { setHydrated } = useCartStore();

  useEffect(() => {
    setHydrated(true);
  }, [setHydrated]);

  return <>{children}</>;
}
