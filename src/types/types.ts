export interface Product {
  id: number;
  name: string;
  attributes: (Color | Size | Weight)[];
}

export interface CodeNameInterface {
  code: string;
  name: string;
}

export interface Color extends CodeNameInterface {
  color: string;
}

export interface Size extends CodeNameInterface {
  size: {
    width: number;
    height: number;
  };
}

export interface Weight extends CodeNameInterface {
  weight: number;
}
