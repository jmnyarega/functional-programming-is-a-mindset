import {
  calc_tax,
  get_shipping_button_item,
} from "../../mega-mart/calculations";
import {
  get_buy_buttons_dom,
  set_cart_total_dom,
  set_tax_dom,
} from "../../mega-mart/dom";
import { IBuyButton, ICart2 } from "../../mega-mart/types";
import {
  contains,
  make_cart_item,
  add_item,
  set_price_by_name,
  calc_total,
  get_free_shipping_with_item,
} from "./cart";

let shopping_cart: ICart2 = {
  tie: 10,
  shirt: 40,
};

export const set_free_shipping_icon = (
  button: IBuyButton<ICart2>,
  show: boolean
): void => {
  show ? button.show_free_shipping_icon() : button.hide_free_shipping_icon();
};

export const update_tax_dom = (total: number): void => {
  set_tax_dom(calc_tax(total));
};

export const update_shipping_icons = (cart: ICart2): void => {
  const buy_buttons: IBuyButton<ICart2>[] = get_buy_buttons_dom();

  for (let i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i];
    const item = get_shipping_button_item(button);
    const free_shipping = get_free_shipping_with_item(cart, item);

    set_free_shipping_icon(button, free_shipping);
  }
};

const freeTieClip = (cart: ICart2): ICart2 => {
  const hasTie = contains(cart, "tie");
  const hasTieClip = contains(cart, "tie clip");
  const tieClip = make_cart_item("tie clip", 5);

  if (hasTie && hasTieClip) {
    return add_item(cart, tieClip);
  }

  return cart;
};

export const add_item_to_cart = (name: string, price: number): void => {
  const item = make_cart_item(name, price);

  shopping_cart = add_item(shopping_cart, item);
  const total = calc_total(shopping_cart);

  set_cart_total_dom(total);
  // update_shipping_icons(shopping_cart);
  update_tax_dom(total);
  // update buy buttons(cart)
};

add_item_to_cart("shirt", 50);
set_price_by_name(shopping_cart, "shirt", 56);

const new_cart = freeTieClip(shopping_cart);

console.log(new_cart);
