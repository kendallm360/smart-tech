import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #df0000;
  border-bottom: solid 1px white;
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
    width: 20vw;
    height: 100%;
    /* Desktops */
    @media screen and (min-width: 1025px) {
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      /* height: 11vh; */
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      /* height: 10vh; */
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      /* height: 10vh; */
    }
  }

  .cart-body {
    width: 15vw;
    height: 10vh;
    @media screen and (min-width: 1025px) {
      /* height: 11vh; */
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      /* height: 11vh; */
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      /* height: 10vh; */
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      /* height: 10vh; */
    }
  }

  .cart-logo {
    align-self: center;
    cursor: pointer;
    height: 50%;
    margin-top: 10%;
    position: relative;
    width: 50%;
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
