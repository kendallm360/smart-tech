import { useContext } from "react";
import { AppContextInterface, CartContext } from "../../contexts/context";
import { StyledCart } from "../styles/Cart.styled";
import cartLogo from "../../images/empty-cart.png";

const Cart = () => {
  const { cart, setCart } = useContext<AppContextInterface>(CartContext);

  const handleRemoveFromCart = (event: any) => {
    let sku = event.target.value;
    setCart(cart.filter((item: any) => item.id !== parseInt(sku)));
  };

  let entireCart = cart.map((e: any) => {
    return (
      <div key={e.id + Date.now} className="cart-item" data-cy="cart-item">
        <img className="cart-item-image" src={e.image} alt={e.name}></img>
        <div data-cy="cart-item-info" className="cart-item-info">
          <h3 className="item-title">{e.name}</h3>
          <h3 className="item-price">${e.price.toFixed(2)}</h3>
          <span>{e.quantity}</span>
          <button
            data-cy="remove-item-button"
            value={e.id}
            className="remove-item-button"
            onClick={handleRemoveFromCart}
          >
            Remove Item
          </button>
        </div>
      </div>
    );
  });

  return (
    <StyledCart>
      <h2 data-cy="cart-header" className="cart-header">
        Your Cart's Total:{" "}
      </h2>
      {cart.length !== 0 ? (
        entireCart
      ) : (
        <>
          <img src={cartLogo} alt="Empty cart logo" />
          <h2 data-cy="empty-cart-header" className="empty-cart-header">
            Your Cart is Currently empty
          </h2>
          <h3 data-cy="empty-cart-message" className="empty-cart-message">
            Before you are able to "checkout" you must add some products to your
            shopping cart.
          </h3>
        </>
      )}
      <button className="checkout-button" disabled>
        Checkout
      </button>
    </StyledCart>
  );
};

export default Cart;
