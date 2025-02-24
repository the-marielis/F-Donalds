import { useContext } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { CartContext } from "../contexts/cart";
import CartProductItem from "./cart-product-item";

const CartSheet = () => {
  const { isOpen, toggleCart, products } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-[85%]">
        <SheetHeader>
          <SheetTitle>Sacola</SheetTitle>
          <SheetDescription>

          </SheetDescription>
        </SheetHeader>
        {products.map((product) => (
          <CartProductItem key={product.id} product={ product } />
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;