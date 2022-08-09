import * as _ from "lodash";

import { update_shipping_icons, update_tax_dom } from "../mega-mart";
import {
  add_item,
  calc_total,
  make_cart_item,
} from "../mega-mart/calculations";
import { set_cart_total_dom } from "../mega-mart/dom";
import { ICart } from "../mega-mart/types";

let shopping_cart: ICart[] = [];

const add_item_to_cart = (name: string, price: number): void => {
  let item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);

  let total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);

  const cart_copy = _.cloneDeep(shopping_cart);

  // the code we don't trust - we don't share structure references
  const new_cart = _.cloneDeep(black_friday_promotion(cart_copy));
  console.log(new_cart);
};

const black_friday_promotion = (shopping_cart: ICart[]): ICart[] => {
  shopping_cart[0].price = 9000; // this code mutates our state
  return shopping_cart;
};

add_item_to_cart("maize floor", 10);
