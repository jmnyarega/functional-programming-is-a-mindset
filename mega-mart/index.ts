import {
  add_item,
  calc_tax,
  calc_total,
  get_free_shipping_with_item,
  get_shipping_button_item,
  make_cart_item,
} from "./calculations";

import { get_buy_buttons_dom, set_cart_total_dom, set_tax_dom } from "./dom";

import { IBuyButton, ICart } from "./types";

let shopping_cart: ICart[] = [];

const set_free_shipping_icon = (button: IBuyButton, show: boolean): void => {
  show ? button.show_free_shipping_icon() : button.hide_free_shipping_icon();
};

const update_tax_dom = (total: number) => {
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

add_item_to_cart("juice", 10);
add_item_to_cart("juice", 10);
add_item_to_cart("juice", 10);
add_item_to_cart("juice", 10);
add_item_to_cart("juice", 10);
add_item_to_cart("juice", 50);
