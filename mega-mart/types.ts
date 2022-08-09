export type TCart = {
  price: number;
  quantity: number;
  name: string;
};

export interface ICartObject {
  [name: string]: TCart;
}

export interface IBuyButton {
  item: TCart;
  show_free_shipping_icon: () => void;
  hide_free_shipping_icon: () => void;
}
