// import { all } from "cypress/types/bluebird";
import { useContext } from "react";
import { myContext } from "../..";
import { StyledCart } from "../styles/Cart.styled";
const Cart = () => {
  const { cart } = useContext(myContext);

  let entireCart = cart.map((e: any) => {
    return (
      <div key={e.name + Date.now} className="cart-item" data-cy="cart-item">
        <img className="cart-item-image" src={e.image} alt={e.name}></img>
        <div data-cy="cart-item-info" className="cart-item-info">
          <h3>{e.name}</h3>
          <h3>${e.price.toFixed(2)}</h3>
          <span>{e.quantity}</span>
          <button>Remove Item</button>
        </div>
      </div>
    );
  });

  return (
    <StyledCart>
      <h2>Your Cart: </h2>
      {entireCart}
      <button disabled>Checkout</button>
    </StyledCart>
  );
};

export default Cart;
