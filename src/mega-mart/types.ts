export type TCart = {
  price: number;
  quantity: number;
  name: string;
};

export interface ICartObject {
  [key: string]: TCart;
}

export type TField = keyof TCart;

export interface IBuyButton {
  item: TCart;
  show_free_shipping_icon: () => void;
  hide_free_shipping_icon: () => void;
}
