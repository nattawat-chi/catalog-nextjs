"use client";

import * as React from "react";
import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useCartStore } from "@/store/useCartStore";
import { Card, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { toast } from "sonner";

export function DrawerDemo() {
  const { cart, removeFromCart, clearCart } = useCartStore();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="relative cursor-pointer">
          <ShoppingCart />
          {totalItems > 0 && (
            <span className=" absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-2 py-[2px] rounded-full">
              {totalItems}
            </span>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-0">
        <div className="flex flex-col h-[75vh] mx-auto w-full max-w-2xl">
          <DrawerHeader className="shrink-0">
            <DrawerTitle className="text-xl">🛒 My Cart</DrawerTitle>
          </DrawerHeader>

          {/* Scrollable body */}
          <div className="overflow-y-auto flex-1 px-4">
            {cart.length === 0 ? (
              <p className="text-gray-400">No products in the cart.</p>
            ) : (
              <div className="grid gap-4 pb-3">
                {cart.map((item) => (
                  <Card key={item.id} className="border-none py-2">
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
                          onClick={() => {
                            removeFromCart(item.id);
                            toast.warning(`${item.title} removed from cart`, {
                              duration: 2000,
                            });
                          }}
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
                  <p className="text-xl font-bold">
                    Total: ${totalPrice.toFixed(2)}
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      clearCart();
                      toast.warning(`Cart cleared`, {
                        duration: 2000,
                      });
                    }}
                    className="cursor-pointer"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            )}
          </div>
          {/* Footer (fiexd at bottom) */}
          <DrawerFooter className="shrink-0 border-t">
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
