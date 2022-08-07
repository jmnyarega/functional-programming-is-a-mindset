export interface ICart {
  name: string;
  price: number;
}

export interface IBuyButton {
  item: ICart;
  show_free_shipping_icon: () => void;
  hide_free_shipping_icon: () => void;
}
