import { useContext } from "react";
import { AppContextInterface, CartContext } from "../../contexts/context";
import { StyledCart } from "../styles/Cart.styled";
import cartLogo from "../../images/empty-cart.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext<AppContextInterface>(CartContext);

  const handleRemoveFromCart = (event: any) => {
    let sku = event.target.value;
    setCart(cart.filter((item: any) => item.id !== parseInt(sku)));
  };

  const handleItemQuantity = (event: any) => {
    let value = parseInt(event.target.value);
    let targetItemId = parseInt(event.target.id);
    const newCart = cart.map((item) => {
      if (item.id === targetItemId) {
        const updatedItem = {
          ...item,
          quantity: value,
        };
        return updatedItem;
      }
      return item;
    });
    setCart(newCart);
  };

  let entireCart = cart.map((e: any) => {
    return (
      <div key={e.id + Date.now} className="cart-item" data-cy="cart-item">
        <img className="cart-item-image" src={e.image} alt={e.name}></img>
        <div data-cy="cart-item-info" className="cart-item-info">
          <Link to={`/${e.category}/${e.name}`}>
            <h3 className="item-title">{e.name}</h3>
          </Link>
          <h3 className="item-price">${e.price.toFixed(2)}</h3>
          <select
            data-cy="quantity-dropdown"
            className="quantity-dropdown"
            id={e.id}
            onChange={handleItemQuantity}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
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

  let entireCartTotal = cart.reduce((acc, item) => {
    acc += item.price * item.quantity;
    return acc;
  }, 0);

  return (
    <StyledCart>
      <h2 data-cy="cart-header" className="cart-header">
        Your Cart's Total: ${entireCartTotal}
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
            Before you are able to 'checkout' you must add some products to your
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
