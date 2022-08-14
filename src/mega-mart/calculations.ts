import { calc_item_total } from "../first-class-functions/cart";
import { reduce } from "../_internals/arrays/_reduce";
import { get_index_of } from "../_internals/arrays/_get_index";
import { splice } from "../_internals/arrays/_splice";
import { IBuyButton, TCart } from "./types";

const add_element_last = (array: any[], element: any) => [...array, element];

export const remove_item_by_name = (cart: TCart[], name: string): TCart[] => {
  const index = get_index_of(cart, (item: TCart) => item.name === name);
  if (index > -1) return splice(cart, index);
  return cart;
};

export const add_item = (cart: TCart[], item: TCart): TCart[] =>
  add_element_last(cart, item);

export const make_cart_item = (
  name: string,
  price: number,
  quantity: number = 1
): TCart => ({
  name,
  price,
  quantity,
});

export const calc_tax = (amount: number): number => amount * 0.1;

export const calc_total = (cart: TCart[]): number =>
  reduce(cart, (sum: number, item: TCart) => (sum += calc_item_total(item)), 0);

export const get_shipping_button_item = (button: IBuyButton) => {
  return button.item;
};

export const get_free_shipping_with_item = (
  cart: TCart[],
  item: TCart
): boolean => calc_total(add_item(cart, item)) >= 20;
