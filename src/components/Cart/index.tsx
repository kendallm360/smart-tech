// import { all } from "cypress/types/bluebird";
import { useContext } from "react";
import { myContext } from "../..";
const Cart = () => {
  const { cart } = useContext(myContext);

  let entireCart = cart.map((e: any) => {
    return (
      <div className="cart-item" data-cy="cart-item">
        <img src={e.image} alt={e.name}></img>
        <div data-cy="cart-item-info" className="cart-item-info">
          <h3>{e.name}</h3>
          <h3>{e.price}</h3>
          <span>{e.quantity}</span>
          <button>Remove Item</button>
        </div>
      </div>
    );
  });

  return (
    <>
      <h2>Your Cart: </h2>
      {entireCart}
      <button disabled>Checkout</button>
    </>
  );
};

export default Cart;
