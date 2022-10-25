import { createContext, useState } from "react";

// export type TCartItem = {
//   name: string,
//   image: string,
//   price: number,
//   amount: number,
// };

export const CartContext = createContext();

const CartC = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartC;
