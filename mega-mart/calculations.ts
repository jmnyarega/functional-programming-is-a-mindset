import { IBuyButton, ICart } from "./types";

const add_element_last = (array: any[], element: any) => [...array, element];

export const add_item = (cart: ICart[], item: ICart): ICart[] =>
  add_element_last(cart, item);

export const make_cart_item = (name: string, price: number): ICart => ({
  name,
  price,
});

export const calc_tax = (amount: number): number => amount * 0.1;

export const calc_total = (cart: ICart[]): number => {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  return total;
};

export const get_shipping_button_item = (button: IBuyButton): ICart => {
  return button.item;
};

export const get_free_shipping_with_item = (
  cart: ICart[],
  item: ICart
): boolean => calc_total(add_item(cart, item)) >= 20;
