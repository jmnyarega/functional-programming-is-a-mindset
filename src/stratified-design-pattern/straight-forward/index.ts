import { get_index_of } from "../../_internals/arrays/_get_index";
import { array_set } from "../../_internals/arrays/_set";
import { splice } from "../../_internals/arrays/_splice";
import { add_item, make_cart_item } from "../../mega-mart/calculations";
import { TCart } from "../../mega-mart/types";
import { contains } from "../../_internals/arrays/_contains";

const shopping_cart: TCart[] = [
  { name: "tie", price: 10, quantity: 1 },
  { name: "shirt", price: 40, quantity: 3 },
];

const set_price_by_name = (
  cart: TCart[],
  name: string,
  price: number
): TCart[] => {
  const index = get_index_of(cart, (cart: TCart) => cart.name === name);
  const item = make_cart_item(cart[index].name, price, 1);

  if (index > -1) return array_set(cart, index, item);
  return cart;
};

const remove_item_by_name = (cart: TCart[], name: string): TCart[] => {
  let index = get_index_of(cart, (cart: TCart) => cart.name === name);
  if (index > -1) return splice(cart, index);
  return cart;
};

const freeTieClip = (cart: TCart[]): TCart[] => {
  const hasTie = contains(cart, (cart: TCart) => cart.name === "tie");
  const hasTieClip = contains(cart, (cart: TCart) => cart.name === "tie clip");
  const tieClip = make_cart_item("tie clip", 5);

  if (!hasTieClip && hasTie) {
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
