import { add_item, make_cart_item } from "../../mega-mart/calculations";
import { TCart } from "../../mega-mart/types";

const shopping_cart: TCart[] = [
  { name: "tie", price: 10, quantity: 1 },
  { name: "shirt", price: 40, quantity: 2 },
];

const isInCart = (cart: TCart[], item_name: string): boolean => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === item_name) return true;
  }
  return false;
};

const freeTieClip = (cart: TCart[]): TCart[] => {
  const hasTie = isInCart(cart, "tie");
  const hasTieClip = isInCart(cart, "tie clip");
  const tieClip = make_cart_item("tie clip", 5);

  if (hasTie && !hasTieClip) {
    return add_item(cart, tieClip);
  }

  return cart;
};

const new_cart: TCart[] = freeTieClip(shopping_cart);
console.log(new_cart);
