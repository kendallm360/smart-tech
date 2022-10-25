import logo from "../../images/smartTechLogo.jpg";
import cart from "../../images/empty-cart.png";
import { StyledHeader } from "../styles/Header.styled";
import { Link } from "react-router-dom";

const Header = () => {
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
        <img data-cy="cart-logo" className="cart" src={cart} alt="cart emoji" />
      </Link>
    </StyledHeader>
  );
};

export default Header;
