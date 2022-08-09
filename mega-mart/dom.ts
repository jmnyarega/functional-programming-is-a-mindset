import { IBuyButton } from "./types";

export function set_cart_total_dom(total: number) {
  console.log(`<p> cart-total:  ${total} </p>`);
}

export const set_tax_dom = (total: number) => {
  console.log(`<p> tax: ${total} </p>`);
};

export const get_buy_buttons_dom = <T>(): IBuyButton<T>[] => [
  {
    item: { name: "goods", price: 1 },
    show_free_shipping_icon: () => console.log("show free shipping icon"),
    hide_free_shipping_icon: () => console.log("hide free shipping icon"),
  },
];
