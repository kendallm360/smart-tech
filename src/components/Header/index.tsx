import logo from "../../images/smartTechLogo.jpg";
import cart from "../../images/empty-cart.png";
import { StyledHeader } from "../styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} />
      <h1>smart Tech</h1>
      <img src={cart} />
    </StyledHeader>
  );
};

export default Header;
