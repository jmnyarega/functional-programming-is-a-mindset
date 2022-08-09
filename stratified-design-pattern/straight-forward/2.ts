import { add_item, make_cart_item } from "../../mega-mart/calculations";
import { TCart } from "../../mega-mart/types";

const shopping_cart: TCart[] = [
  { name: "tie", price: 10, quantity: 1 },
  { name: "shirt", price: 40, quantity: 3 },
];

const index_of = (array: any[], property: string, item: any): number => {
  for (let i = 0; i < array.length; i++) {
    if (array[i][property] === item) return i;
  }
  return -1;
};

const array_set = (array: any[], index: number, value: any) => {
  const copy_array = array.slice();
  copy_array[index] = value;
  return copy_array;
};

const remove_items = (array: any[], startIndex: number, count: number) => {
  const copy_array = array.slice();
  copy_array.splice(startIndex, count);
  return copy_array;
};

const set_price_by_name = (
  cart: TCart[],
  name: string,
  price: number
): TCart[] => {
  const copy_cart = cart.slice();
  const index = index_of(copy_cart, "name", name);
  const value = { name: copy_cart[index].name, price };

  if (index > -1) return array_set(copy_cart, index, value);
  return copy_cart;
};

const remove_item_by_name = (cart: TCart[], name: string): TCart[] => {
  let index = index_of(cart, "name", name);
  if (index > -1) return remove_items(cart, index, 1);
  return cart;
};

const freeTieClip = (cart: TCart[]): TCart[] => {
  const hasTie = index_of(cart, "name", "tie");
  const hasTieClip = index_of(cart, "name", "tie clip");
  const tieClip = make_cart_item("tie clip", 5);

  if (hasTie > -1 && hasTieClip === -1) {
    return add_item(cart, tieClip);
  }

  return cart;
};

const new_cart: TCart[] = set_price_by_name(
  freeTieClip(shopping_cart),
  "shirt",
  100
);
console.log(new_cart);
