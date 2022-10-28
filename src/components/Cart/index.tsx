import { useContext } from "react";
import { myContext } from "../..";
const Cart = () => {
  const { cart } = useContext(myContext);

  let allCart = cart.map((e: any) => e);
  console.log(allCart, "worky?");
  return (
    <>
      <h2>Your Cart: </h2>
      <button disabled>Checkout</button>
    </>
  );
};

export default Cart;
