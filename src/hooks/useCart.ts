"use client";

import { useState, useEffect, use } from "react";
import { CartItem } from "@/types/CartItem";

const CART_KEY = "shopping-cart";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem(CART_KEY);
      if (storedCart) {
        try {
          const parsed = JSON.parse(storedCart);
          console.log("📦 Parsed cart from localStorage:", parsed);
          setCart(parsed);
        } catch (err) {
          console.error("❌ Failed to parse cart:", err);
        }
      } else {
        console.log("📦 No cart data in localStorage.");
      }
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (loaded) {
      // console.log("💾 Saving to localStorage:", cart); // ✅ ดูว่าเก็บถูกไหม
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
  }, [cart, loaded]);

  const addToCart = (item: CartItem) => {
    // console.log("🛒 Adding to cart:", item); // ✅ Debug ตรงนี้
    setCart((prev) => {
      const exiting = prev.find((i) => i.id === item.id);
      if (exiting) {
        const updated = prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
        // console.log("🛒 Updated cart state:", updated); // ✅ Debug ตรงนี้
        return updated;
      }
      const updated = [...prev, item];
      console.log("🧾 Updated cart state", updated);
      return updated;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return { cart, addToCart, removeFromCart, clearCart };
}
