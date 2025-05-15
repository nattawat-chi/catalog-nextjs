"use client";

import { Button } from "@/components/ui/button";
// import { useCart } from "@/hooks/useCart";
import { useCartStore } from "@/store/useCartStore";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div>
      <h1 className="text-2xl font-bold pb-3">My Cart</h1>
      {cart.length === 0 ? (
        <p>No products in the cart. </p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="gap-3 flex items-center">
              {item.images?.length ? (
                <img src={item.images[0]} alt={item.title} width={120} />
              ) : (
                <div>No image</div>
              )}
              {item.title} - {item.quantity} pcs
              <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <Button onClick={clearCart}>Clear Cart</Button>}
    </div>
  );
}
export default CartPage;
