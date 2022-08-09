import { ICartObject, TCart } from "../../mega-mart/types";

export const object_set = <T>(obj: { [k: string]: T }, k: string, v: T) => {
  const copy = Object.assign({}, obj);
  copy[k] = v;
  return copy;
};

export const object_remove = <T>(obj: { [k: string]: T }, k: string) => {
  const copy = Object.assign({}, obj);
  delete copy[k];
  return copy;
};

export const delete_cart_item = (
  cart: ICartObject,
  name: string
): ICartObject => {
  if (!contains(cart, name)) return cart;
  return object_remove(cart, name);
};

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
  let total = 0;
  const items = Object.keys(cart);
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    total += cart[item].price * cart[item].quantity;
  }
  return total;
};
