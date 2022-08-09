import { ICart2 } from "../../mega-mart/types";

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

export const delete_cart_item = (cart: ICart2, name: string): ICart2 => {
  if (!contains(cart, name)) return cart;
  return object_remove(cart, name);
};

export const contains = (cart: ICart2, name: string): boolean =>
  cart.hasOwnProperty(name);

export const make_cart_item = (name: string, price: number) =>
  object_set({}, name, price);

export const get_free_shipping_with_item = (
  cart: ICart2,
  item: ICart2
): boolean => calc_total(add_item(cart, item)) >= 20;

export const set_price = (cart: ICart2, price: number): ICart2 => {
  const copy = Object.assign({}, cart);
  const name = Object.keys(copy)[0];
  copy[name] = price;
  return copy;
};

export const add_item = (cart: ICart2, item: ICart2): ICart2 => {
  const name = Object.keys(item)[0];
  return object_set(cart, name, item[name]);
};

export const set_price_by_name = (
  cart: ICart2,
  name: string,
  price: number
): ICart2 => object_set(cart, name, price);

export const calc_total = (cart: ICart2) => {
  let total = 0;
  const names = Object.keys(cart);
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    total += cart[name];
  }
  return total;
};
