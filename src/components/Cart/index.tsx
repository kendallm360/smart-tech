import { useContext } from "react";
import { AppContextInterface, CartContext } from "../../contexts/context";
import { StyledCart } from "../styles/Cart.styled";
import cartLogo from "../../images/empty-cart.png";
// import { Link } from "react-router-dom";
import { currencyFormatter } from "../../utils/utils";
// import { linkStyle } from "../Categories";
import CartElement from "../CartElement";

const Cart = () => {
  const { cart, setCart } = useContext<AppContextInterface>(CartContext);

  // const handleRemoveFromCart = (event: any) => {
  //   const sku = event.target.value;
  //   setCart(cart.filter((item: any) => item.id !== parseInt(sku)));
  // };

  // const handleItemQuantity = (event: any) => {
  //   const value = parseInt(event.target.value);
  //   const targetItemId = parseInt(event.target.id);
  //   const newCart = cart.map((item) => {
  //     if (item.id === targetItemId) {
  //       const updatedItem = {
  //         ...item,
  //         quantity: value,
  //       };
  //       return updatedItem;
  //     }
  //     return item;
  //   });
  //   setCart(newCart);
  // };

  const entireCart = cart.map((e: any) => {
    return <CartElement key={e.id} cartElement={e} />;
    // <div key={e.id + Date.now} className="cart-item" data-cy="cart-item">
    //   <div className="image-third">
    //     <Link to={`/${e.category}/${e.name}`} style={linkStyle}>
    //       <img className="cart-item-image" src={e.image} alt={e.name}></img>
    //     </Link>
    //   </div>
    //   <div data-cy="cart-item-info" className="cart-item-info">
    //     <Link to={`/${e.category}/${e.name}`} style={linkStyle}>
    //       <h3 className="cart-item-name">{e.name}</h3>
    //     </Link>
    //     <div className="additional-cart-item-info">
    //       <Link to={`/${e.category}/${e.name}`} style={linkStyle}>
    //         <h3 className="cart-item-label">
    //           Model:<span className="cart-item-span"> {e.modelNumber}</span>
    //         </h3>
    //       </Link>
    //       <Link to={`/${e.category}/${e.name}`} style={linkStyle}>
    //         <h3 className="cart-item-label">
    //           SKU:<span className="cart-item-span"> {e.id}</span>
    //         </h3>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="price-cart">
    //     <h3 className="item-price">{currencyFormatter.format(e.price)}</h3>
    //     <select
    //       data-cy="quantity-dropdown"
    //       className="quantity-dropdown"
    //       id={e.id}
    //       onChange={handleItemQuantity}
    //       defaultValue={e.quantity}
    //     >
    //       <option value="1">1</option>
    //       <option value="2">2</option>
    //       <option value="3">3</option>
    //       <option value="4">4</option>
    //       <option value="5">5</option>
    //       <option value="6">6</option>
    //       <option value="7">7</option>
    //       <option value="8">8</option>
    //       <option value="9">9</option>
    //       <option value="10">10</option>
    //     </select>
    //     <button
    //       data-cy="remove-item-button"
    //       value={e.id}
    //       className="remove-item-button"
    //       onClick={handleRemoveFromCart}
    //     >
    //       Remove Item
    //     </button>
    //   </div>
    // </div>
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
