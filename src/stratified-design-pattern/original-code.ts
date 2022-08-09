import { add_item, make_cart_item } from "mega-mart/calculations";
import { ICart } from "mega-mart/types";

const shopping_cart: ICart[] = [];

const freeTieClip = (cart: ICart[]) => {
  var hasTie = false;
  var hasTieClip = false;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    if (item.name === "tie") hasTie = true;
    if (item.name === "tie clip") hasTieClip = true;
  }
  if (hasTie && !hasTieClip) {
    var tieClip = make_cart_item("tie clip", 0);
    return add_item(cart, tieClip);
  }
  return cart;
};

freeTieClip(shopping_cart);
