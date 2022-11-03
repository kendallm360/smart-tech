import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #df0000;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  /* Desktops */
  @media screen and (min-width: 1025px) {
    height: 11vh;
  }
  /* Laptops */
  @media screen and (max-width: 1024px) {
    height: 11vh;
  }
  /* Tablets */
  @media screen and (max-width: 768px) {
    height: 10vh;
  }
  /* Mobile */
  @media screen and (max-width: 480px) {
    height: 10vh;
  }

  .logo {
    cursor: pointer;
    width: 40vw;
    /* Desktops */
    @media screen and (min-width: 1025px) {
      height: 11vh;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      height: 11vh;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      height: 10vh;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      height: 10vh;
    }
  }

  .cart-body {
    width: 20vw;
    @media screen and (min-width: 1025px) {
      height: 11vh;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      height: 11vh;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      height: 10vh;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      height: 10vh;
    }
  }

  .cart-logo {
    align-self: center;
    cursor: pointer;
    height: 60%;
    margin-top: 15%;
    position: relative;
    width: 70%;
  }

  .cart-quantity {
    background-color: #facb35;
    border: solid 0.15em black;
    border-radius: 50%;
    color: #df0000;
    cursor: pointer;
    padding: 0.5%;
    position: absolute;
  }
`;
