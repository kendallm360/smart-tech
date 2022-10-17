import logo from "../../images/smartTechLogo.jpg";
import cart from "../../images/empty-cart.png";
import { StyledHeader } from "../styles/Header.styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <StyledHeader data-cy="header">
        <img
          data-cy="smart-tech-logo"
          className="logo"
          src={logo}
          alt="Smart Tech logo"
        />
        <img data-cy="cart-logo" className="cart" src={cart} alt="cart emoji" />
      </StyledHeader>
    </Link>
  );
};

export default Header;
