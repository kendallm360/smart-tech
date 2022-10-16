import logo from "../../images/smartTechLogo.jpg";
import cart from "../../images/empty-cart.png";

const Header = () => {
  return (
    <>
      <img src={logo} />
      <h1>smart Tech</h1>
      <img src={cart} />
    </>
  );
};

export default Header;
