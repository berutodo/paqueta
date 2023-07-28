interface Price {
    value: number;
    discount: number;
  }
export interface Product {
    id: string;
    name: string;
    price: Price;
    soldout: boolean;
    image: string;
    description: string;
  }