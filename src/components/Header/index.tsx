import logo from "../../images/smartTechLogo.jpg";
import cartLogo from "../../images/empty-cart.png";
import { StyledHeader } from "../styles/Header.styled";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { myContext } from "../..";

const Header = () => {
  const [cartLength, setCartLength] = useState(0);
  const { cart } = useContext(myContext);
  console.log(cart.length);

  useEffect(() => {
    setCartLength(cart.length);
  }, []);

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
          {/* <span>{cart.length}</span> */}
          <span className="cart-quantity">{cartLength}</span>
        </div>
      </Link>
    </StyledHeader>
  );
};

export default Header;
