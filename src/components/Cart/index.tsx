import { useContext } from "react";
import { AppContextInterface, CartContext } from "../../contexts/context";
import { StyledCart } from "../styles/Cart.styled";
import cartLogo from "../../images/empty-cart.png";
import { currencyFormatter } from "../../utils/utils";
import CartElement from "../CartElement";

const Cart = () => {
  const { cart } = useContext<AppContextInterface>(CartContext);

  const entireCart = cart.map((e: any) => {
    return <CartElement key={e.id} cartElement={e} />;
  });

  const entireCartTotal = cart.reduce((acc, item) => {
    acc += item.price * item.quantity;
    return acc;
  }, 0);

  return (
    <StyledCart>
      <h2 data-cy="cart-header" className="cart-header">
        Your Cart's Total: {currencyFormatter.format(entireCartTotal)}
      </h2>
      {cart.length !== 0 ? (
        entireCart
      ) : (
        <div className="empty-cart">
          <img
            className="empty-cart-logo"
            src={cartLogo}
            alt="Empty cart logo"
          />
          <h2 data-cy="empty-cart-header" className="empty-cart-header">
            Your Cart is Currently empty
          </h2>
          <h3 data-cy="empty-cart-message" className="empty-cart-message">
            Before you are able to 'checkout' you must add some products to your
            shopping cart.
          </h3>
        </div>
      )}
      <button className="checkout-button" disabled>
        Checkout
      </button>
    </StyledCart>
  );
};

export default Cart;
