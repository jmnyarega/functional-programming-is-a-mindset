import { calc_tax, get_shipping_button_item } from "../mega-mart/calculations";
import {
  get_buy_buttons_dom,
  set_cart_total_dom,
  set_tax_dom,
} from "../mega-mart/dom";
import { IBuyButton, ICartObject } from "../mega-mart/types";
import {
  contains,
  make_cart_item,
  add_item,
  set_field_by_name,
  calc_cart_total,
  get_free_shipping_with_item,
} from "./cart";

let shopping_cart: ICartObject = {
  tie: {
    name: "tie",
    price: 10,
    quantity: 5,
  },
  shirt: {
    name: "shirt",
    price: 40,
    quantity: 5,
  },
};

export const set_free_shipping_icon = (
  button: IBuyButton,
  show: boolean
): void => {
  show ? button.show_free_shipping_icon() : button.hide_free_shipping_icon();
};

export const update_tax_dom = (total: number): void => {
  set_tax_dom(calc_tax(total));
};

export const update_shipping_icons = (cart: ICartObject): void => {
  const buy_buttons: IBuyButton[] = get_buy_buttons_dom();

  for (let i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i];
    const item = get_shipping_button_item(button);
    const free_shipping = get_free_shipping_with_item(cart, item);

    set_free_shipping_icon(button, free_shipping);
  }
};

const freeTieClip = (cart: ICartObject): ICartObject => {
  const hasTie = contains(cart, "tie");
  const hasTieClip = contains(cart, "tie clip");
  const tieClip = make_cart_item("tie clip", 5);

  return hasTie && hasTieClip ? add_item(cart, tieClip) : cart;
};

export const add_item_to_cart = (
  cart: ICartObject,
  name: string,
  price: number,
  quantity?: number
): void => {
  const item = make_cart_item(name, price, quantity);

  const new_cart = add_item(cart, item);
  const total = calc_cart_total(new_cart);

  set_cart_total_dom(total);
  update_shipping_icons(new_cart);
  update_tax_dom(total);

  console.log(new_cart);
};

const cart1 = set_field_by_name(shopping_cart, "tie", "price", 56);
const cart2 = set_field_by_name(cart1, "shirt", "quantity", 10);

const new_cart = freeTieClip(cart2);

add_item_to_cart(new_cart, "shirt", 50, 1);
