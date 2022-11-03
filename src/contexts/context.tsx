import { createContext, useState } from "react";

interface ICartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface AppContextInterface {
  cart: ICartItem[];
  //figure how to better declare functions:
  setCart: any;
}

const defaultContext = {
  cart: [],
  setCart: () => {},
};

export const CartContext = createContext<AppContextInterface>(defaultContext);
const Cart = ({ children }: any) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default Cart;
