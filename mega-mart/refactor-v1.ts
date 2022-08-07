import { get_buy_buttons_dom, set_cart_total_dom, set_tax_dom } from "./dom";

import { ICart } from "./types";

let shopping_cart: any[] = [];

// calculation
const make_cart_item = (name: string, price: number): ICart => ({
  name,
  price,
});

// calculation - general utils
const add_element_last = (array: any[], element: any) => [...array, element];

// calculation
const add_item = (cart: ICart[], item: ICart): ICart[] =>
  add_element_last(cart, item);

// calculation
const calc_tax = (amount: number): number => amount * 0.1;

// calculation
const get_free_shipping = (cart: ICart[]): boolean => calc_total(cart) >= 20;

// calculation
const calc_total = (cart: ICart[]): number => {
  let total = 0;
  // use reduce HOC to calculate total of cart
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    total += item.price;
  }
  return total;
};

// action
const add_item_to_cart = (name: string, price: number): void => {
  shopping_cart = add_item(shopping_cart, make_cart_item(name, price));
  const total = calc_total(shopping_cart);

  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
};

// action
const update_shipping_icons = (cart: ICart[]): void => {
  const buy_buttons: any[] = get_buy_buttons_dom();

  for (let i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i];
    const item = button.item;

    const new_cart = add_item(cart, make_cart_item(item.name, item.price));
    const free_shipping = get_free_shipping(new_cart);

    if (free_shipping) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
};

// action
const update_tax_dom = (total: number) => {
  set_tax_dom(calc_tax(total));
};
