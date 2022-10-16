import logo from "../../images/smartTechLogo.jpg";
import cart from "../../images/empty-cart.png";
import { StyledHeader } from "../styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <img className="logo" src={logo} alt="Smart Tech logo" />
      <img className="cart" src={cart} alt="cart emoji" />
    </StyledHeader>
  );
};

export default Header;
