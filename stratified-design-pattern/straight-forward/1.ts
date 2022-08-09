import { add_item, make_cart_item } from "../../mega-mart/calculations";
import { ICart } from "../../mega-mart/types";

const shopping_cart: ICart[] = [
  { name: "tie", price: 10 },
  { name: "shirt", price: 40 },
];

const isInCart = (cart: ICart[], item_name: string): boolean => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === item_name) return true;
  }
  return false;
};

const freeTieClip = (cart: ICart[]): ICart[] => {
  const hasTie = isInCart(cart, "tie");
  const hasTieClip = isInCart(cart, "tie clip");
  const tieClip = make_cart_item("tie clip", 5);

  if (hasTie && !hasTieClip) {
    return add_item(cart, tieClip);
  }

  return cart;
};

const new_cart: ICart[] = freeTieClip(shopping_cart);
console.log(new_cart);
