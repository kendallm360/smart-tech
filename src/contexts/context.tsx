import { createContext, useState } from "react";

interface ICartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface AppContextInterface {
  cart: ICartItem[];
  //figure how to better declare functions:
  setCart: any;
}

export const Cart = createContext<AppContextInterface | null>(null);
const CartContext = ({ children }: any) => {
  const [cart, setCart] = useState([]);

  return <Cart.Provider value={{ cart, setCart }}>{children}</Cart.Provider>;
};

export default CartContext;
