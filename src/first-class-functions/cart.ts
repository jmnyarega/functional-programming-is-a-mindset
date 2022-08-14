import { reduce } from "../_internals/arrays/_reduce";
import { contains } from "../_internals/object/_contains";
import { object_keys } from "../_internals/object/_keys";
import { object_remove } from "../_internals/object/_remove";
import { object_set } from "../_internals/object/_set";
import { ICartObject, TCart, TField } from "../mega-mart/types";

export const delete_cart_item = (
  cart: ICartObject,
  name: string
): ICartObject => (!contains(cart, name) ? cart : object_remove(cart, name));

export const make_cart_item = (
  name: string,
  price: number,
  quantity: number = 1
): TCart => ({ name, price, quantity });

export const get_free_shipping_with_item = (
  cart: ICartObject,
  item: TCart
): boolean => calc_cart_total(add_item(cart, item)) >= 20;

export const set_field = <TValue>(
  item: TCart,
  field: TField,
  value: TValue
): TCart => object_set<TCart, TField, TValue>(item, field, value);
export const add_item = (cart: ICartObject, item: TCart): ICartObject =>
  object_set<ICartObject, string, TCart>(cart, item.name, item);

export const set_field_by_name = <TValue>(
  cart: ICartObject,
  name: string,
  field: TField,
  value: TValue
): ICartObject =>
  object_set<ICartObject, string, TCart>(
    cart,
    name,
    set_field<TValue>(cart[name], field, value)
  );

export const calc_item_total = (item: TCart) => item.price * item.quantity;

export const calc_cart_total = (cart: ICartObject) => {
  const items = object_keys(cart);
  return reduce(
    items,
    (acc: number, item: string) => (acc += calc_item_total(cart[item])),
    0
  );
};
