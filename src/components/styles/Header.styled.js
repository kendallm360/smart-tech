import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #df0000;
  border-bottom: solid 1px white;
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;

  .logo {
    cursor: pointer;
    width: 20vw;
    height: 100%;
  }

  .cart-body {
    width: 15vw;
    height: 10vh;
    @media screen and (max-width: 600px) {
      width: 20vw;
    }
  }

  .cart-logo {
    align-self: center;
    cursor: pointer;
    height: 50%;
    margin-top: 2.5vh;
    position: relative;
    width: 50%;
    @media screen and (max-width: 600px) {
      height: 50%;
      width: 60%;
    }
  }

  .cart-quantity {
    background-color: #fff200;
    border: solid 0.15em black;
    border-radius: 50%;
    color: #df0000;
    cursor: pointer;
    margin-top: 1%;
    padding: 0.5%;
    position: absolute;
  }
`;
