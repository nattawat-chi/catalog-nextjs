"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">🛒 My Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">No products in the cart.</p>
      ) : (
        <div className="grid gap-4">
          {cart.map((item) => (
            <Card key={item.id} className="border-none">
              <CardHeader className="flex flex-row items-center gap-4">
                {item.images?.length ? (
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    width={150}
                    height={150}
                  />
                ) : (
                  <div className="w-24 h-24 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <p className="text-sm text-gray-400">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-sm text-purple-400 font-semibold">
                    Price: ${item.price} x {item.quantity} = $
                    {item.price * item.quantity}
                  </p>
                </div>
                <div className="ml-auto">
                  <Button
                    variant="destructive"
                    onClick={() => removeFromCart(item.id)}
                    className="cursor-pointer"
                  >
                    Remove
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}

          {/* Total and Clear Cart */}
          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <p className="text-xl font-bold text-white">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <Button
              variant="outline"
              onClick={clearCart}
              className="cursor-pointer"
            >
              Clear Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
