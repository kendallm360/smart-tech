import logo from "../../images/smartTechLogo.jpg";
import cartLogo from "../../images/empty-cart.png";
import { StyledHeader } from "../styles/Header.styled";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContextInterface, CartContext } from "../../contexts/context";

const Header = () => {
  const { cart } = useContext<AppContextInterface>(CartContext);

  const totalCartQuantity = cart.reduce((acc, e) => {
    acc += e.quantity;
    return acc;
  }, 0);

  return (
    <StyledHeader data-cy="header">
      <Link to="/">
        <img
          data-cy="smart-tech-logo"
          className="logo"
          src={logo}
          alt="Smart Tech logo"
        />
      </Link>
      <Link to="/cart">
        <div className="cart-body">
          <img
            data-cy="cart-logo"
            className="cart-logo"
            src={cartLogo}
            alt="cart emoji"
          />
          <span data-cy="cart-quantity" className="cart-quantity">
            {totalCartQuantity}
          </span>
        </div>
      </Link>
    </StyledHeader>
  );
};

export default Header;
