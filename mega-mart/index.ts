import {
  add_item,
  calc_tax,
  calc_total,
  get_free_shipping_with_item,
  get_shipping_button_item,
  make_cart_item,
  remove_item_by_name,
} from "./calculations";

import { get_buy_buttons_dom, set_cart_total_dom, set_tax_dom } from "./dom";

import { IBuyButton, ICart } from "./types";

let shopping_cart: ICart[] = [];

const set_free_shipping_icon = (button: IBuyButton, show: boolean): void => {
  show ? button.show_free_shipping_icon() : button.hide_free_shipping_icon();
};

const update_tax_dom = (total: number): void => {
  set_tax_dom(calc_tax(total));
};

const update_shipping_icons = (cart: ICart[]): void => {
  const buy_buttons: IBuyButton[] = get_buy_buttons_dom();

  for (let i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i];
    const item = get_shipping_button_item(button);
    const free_shipping = get_free_shipping_with_item(cart, item);

    set_free_shipping_icon(button, free_shipping);
  }
};

const add_item_to_cart = (name: string, price: number): void => {
  const item = make_cart_item(name, price);

  shopping_cart = add_item(shopping_cart, item);
  const total = calc_total(shopping_cart);

  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
  // update buy buttons(cart)
};

const delete_cart_item = (name: string): void => {
  shopping_cart = remove_item_by_name(shopping_cart, name);
  const total = calc_total(shopping_cart);

  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
  // update buy buttons(cart)
};

add_item_to_cart("milk", 1);
add_item_to_cart("eggs", 1);
add_item_to_cart("soap", 1);
add_item_to_cart("gas", 10);
add_item_to_cart("salt", 10);

delete_cart_item("milk");
delete_cart_item("eggs");
delete_cart_item("soap");
delete_cart_item("gas");
delete_cart_item("salt");
