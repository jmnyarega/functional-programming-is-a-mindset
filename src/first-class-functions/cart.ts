import { ICartObject, TCart } from "../mega-mart/types";

export const object_set = <T>(obj: { [k: string]: T }, k: string, v: T) => {
  const copy = Object.assign({}, obj);
  copy[k] = v;
  return copy;
};

const object_keys = (obj: {}) => Object.keys(obj);

export const object_remove = <T>(obj: { [k: string]: T }, k: string) => {
  const copy = Object.assign({}, obj);
  delete copy[k];
  return copy;
};

export const delete_cart_item = (
  cart: ICartObject,
  name: string
): ICartObject => (!contains(cart, name) ? cart : object_remove(cart, name));

export const contains = (cart: ICartObject, name: string): boolean =>
  cart.hasOwnProperty(name);

export const make_cart_item = (
  name: string,
  price: number,
  quantity: number = 1
): TCart => ({ name, price, quantity });

export const get_free_shipping_with_item = (
  cart: ICartObject,
  item: TCart
): boolean => calc_cart_total(add_item(cart, item)) >= 20;

export const set_field = <V>(
  item: TCart,
  field: keyof TCart,
  value: V
): TCart => {
  const copy = Object.assign({}, item);
  copy[field] = value;
  return copy;
};
export const add_item = (cart: ICartObject, item: TCart): ICartObject =>
  object_set(cart, item.name, item);

export const set_field_by_name = <T>(
  cart: ICartObject,
  name: string,
  field: keyof TCart,
  value: T
): ICartObject => object_set(cart, name, set_field(cart[name], field, value));

export const calc_item_total = (item: TCart) => item.price * item.quantity;

export const calc_cart_total = (cart: ICartObject) => {
  let total = 0;
  const items = object_keys(cart);
  for (let i = 0; i < object_keys(cart).length; i++)
    total += calc_item_total(cart[items[i]]);
  return total;
};
