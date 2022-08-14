import { calc_item_total } from "../../first-class-functions/cart";
import { reduce } from "../../_internals/arrays/_reduce";
import { contains } from "../../_internals/object/_contains";
import { object_remove } from "../../_internals/object/_remove";
import { object_set } from "../../_internals/object/_set";
import { ICartObject, TCart } from "../../mega-mart/types";

export const delete_cart_item = (
  cart: ICartObject,
  name: string
): ICartObject => {
  if (!contains(cart, name)) return cart;
  return object_remove(cart, name);
};

export const make_cart_item = (
  name: string,
  price: number,
  quantity: number = 1
): TCart => ({ name, price, quantity });

export const get_free_shipping_with_item = (
  cart: ICartObject,
  item: TCart
): boolean => calc_total(add_item(cart, item)) >= 20;

export const set_price = (item: TCart, price: number): TCart => {
  const copy = Object.assign({}, item);
  copy.price = price;
  return copy;
};

export const set_quantity = (item: TCart, quantity: number): TCart => {
  const copy = Object.assign({}, item);
  copy.quantity = quantity;
  return copy;
};

export const add_item = (cart: ICartObject, item: TCart): ICartObject =>
  object_set(cart, item.name, item);

export const set_price_by_name = (
  cart: ICartObject,
  name: string,
  price: number
): ICartObject => {
  const copy = set_price(cart[name], price);
  return object_set(cart, name, copy);
};

export const set_price_by_quantity = (
  cart: ICartObject,
  name: string,
  quantity: number
): ICartObject => {
  const copy = set_quantity(cart[name], quantity);
  return object_set(cart, name, copy);
};

export const calc_total = (cart: ICartObject) => {
  const items = Object.keys(cart);
  return reduce(
    items,
    (sum: number, item: string) => (sum += calc_item_total(cart[item])),
    0
  );
};
