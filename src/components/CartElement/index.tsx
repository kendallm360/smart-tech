import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContextInterface, CartContext } from "../../contexts/context";
import { currencyFormatter } from "../../utils/utils";
import { linkStyle } from "../Categories";

const CartElement = ({ cartElement }: any) => {
  const { cart, setCart } = useContext<AppContextInterface>(CartContext);

  const handleRemoveFromCart = (event: any) => {
    const sku = event.target.value;
    setCart(cart.filter((item: any) => item.id !== parseInt(sku)));
  };

  const handleItemQuantity = (event: any) => {
    const value = parseInt(event.target.value);
    const targetItemId = parseInt(event.target.id);
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

  return (
    <>
      <div
        // key={cartElement.id + Date.now}
        key={cartElement.sku}
        className="cart-item"
        data-cy="cart-item"
      >
        <div className="image-third">
          <Link
            to={`/${cartElement.category}/${cartElement.name}`}
            style={linkStyle}
          >
            <img
              className="cart-item-image"
              src={cartElement.image}
              alt={cartElement.name}
            ></img>
          </Link>
        </div>
        <div data-cy="cart-item-info" className="cart-item-info">
          <Link
            to={`/${cartElement.category}/${cartElement.name}`}
            style={linkStyle}
          >
            <h3 className="cart-item-name">{cartElement.name}</h3>
          </Link>
          <div className="additional-cart-item-info">
            <Link
              to={`/${cartElement.category}/${cartElement.name}`}
              style={linkStyle}
            >
              <h3 className="cart-item-label">
                Model:
                <span className="cart-item-span">
                  {" "}
                  {cartElement.modelNumber}
                </span>
              </h3>
            </Link>
            <Link
              to={`/${cartElement.category}/${cartElement.name}`}
              style={linkStyle}
            >
              <h3 className="cart-item-label">
                SKU:<span className="cart-item-span"> {cartElement.id}</span>
              </h3>
            </Link>
          </div>
        </div>
        <div className="price-cart">
          <h3 className="item-price">
            {currencyFormatter.format(cartElement.price)}
          </h3>
          <select
            data-cy="quantity-dropdown"
            className="quantity-dropdown"
            id={cartElement.id}
            onChange={handleItemQuantity}
            defaultValue={cartElement.quantity}
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
            value={cartElement.id}
            className="remove-item-button"
            onClick={handleRemoveFromCart}
          >
            Remove Item
          </button>
        </div>
      </div>
    </>
  );
};
export default CartElement;
