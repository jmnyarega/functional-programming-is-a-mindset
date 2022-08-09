export interface ICart {
  name: string;
  price: number;
}

export interface ICart2 {
  [name: string]: number;
}

export interface IBuyButton<T> {
  item: T;
  show_free_shipping_icon: () => void;
  hide_free_shipping_icon: () => void;
}
