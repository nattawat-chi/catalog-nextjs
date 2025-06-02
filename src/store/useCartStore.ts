// hooks/useCartStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem } from "@/types/CartItem";

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (status: boolean) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      isAuthenticated: false,
      setIsAuthenticated: (status) => {
        set({ isAuthenticated: status });
        if (!status) {
          // Clear cart when user signs out
          set({ cart: [] });
        }
      },
      addToCart: (item) => {
        if (!get().isAuthenticated) {
          return; // Don't add to cart if not authenticated
        }
        const existing = get().cart.find((i) => i.id === item.id);
        if (existing) {
          set({
            cart: get().cart.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          });
        } else {
          set({ cart: [...get().cart, item] });
        }
      },
      removeFromCart: (id) => {
        if (!get().isAuthenticated) {
          return; // Don't remove from cart if not authenticated
        }
        set({ cart: get().cart.filter((item) => item.id !== id) });
      },
      clearCart: () => {
        if (!get().isAuthenticated) {
          return; // Don't clear cart if not authenticated
        }
        set({ cart: [] });
      },
    }),
    { name: "cart-storage" } // ใช้ localStorage
  )
);
