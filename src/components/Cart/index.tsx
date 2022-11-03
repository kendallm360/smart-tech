import { useContext } from "react";
// import { myContext } from "../..";
import { AppContextInterface, CartContext } from "../../contexts/context";
import { StyledCart } from "../styles/Cart.styled";
const Cart = () => {
  const { cart, setCart } = useContext<AppContextInterface>(CartContext);

  // const { cart } = useContext(myContext);

  // let entireCart = cart.map((e: any) => {
  //   return (
  //     <div key={e.id + Date.now} className="cart-item" data-cy="cart-item">
  //       <img className="cart-item-image" src={e.image} alt={e.name}></img>
  //       <div data-cy="cart-item-info" className="cart-item-info">
  //         <h3 className="item-title">{e.name}</h3>
  //         <h3 className="item-price">${e.price.toFixed(2)}</h3>
  //         <span>{e.quantity}</span>
  //         <button className="remove-item-button">Remove Item</button>
  //       </div>
  //     </div>
  //   );
  // });
  // console.log(entireCart);
  console.log(cart);
  return (
    <StyledCart>
      <h2 className="cart-header">Your Cart: </h2>
      {/* {entireCart} */}
      <button className="checkout-button" disabled>
        Checkout
      </button>
    </StyledCart>
  );
};

export default Cart;
