// hooks/useCartStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItem } from "@/types/CartItem";

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (status: boolean) => void;
  hydrated: boolean;
  setHydrated: (state: boolean) => void;
}

const initialState = {
  cart: [],
  isAuthenticated: false,
  hydrated: false,
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      ...initialState,
      setHydrated: (state) => {
        set({ hydrated: state });
      },
      setIsAuthenticated: (status) => {
        if (get().hydrated) {
          set({ isAuthenticated: status });
          if (!status) {
            set({ cart: [] });
          }
        }
      },
      addToCart: (item) => {
        if (!get().isAuthenticated || !get().hydrated) {
          return;
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
        if (!get().isAuthenticated || !get().hydrated) {
          return;
        }
        set({ cart: get().cart.filter((item) => item.id !== id) });
      },
      clearCart: () => {
        if (!get().isAuthenticated || !get().hydrated) {
          return;
        }
        set({ cart: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        cart: state.cart,
        isAuthenticated: state.isAuthenticated,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHydrated(true);
        }
      },
      version: 1, // Add version for future migrations if needed
    }
  )
);
