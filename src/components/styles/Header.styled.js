import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #df0000;
  cursor: pointer;
  height: 10vh;
  width: 100vw;

  span {
    background-color: #facb35;
    border: solid 0.1em black;
    border-radius: 50%;
    color: #df0000;
    /* margin-top: 10%; */
    padding: 1%;
    vertical-align: 280%;
  }

  .logo {
    height: 100%;
    margin-right: 34%;
    width: 40%;
  }

  .cart-logo {
    align-self: center;
    height: 60%;
    margin-bottom: 3%;
    width: 20%;
  }

  //Desktops
  @media screen and (min-width: 1025px) {
    height: 12vh;
    justify-content: space-between;

    span {
      background-color: #facb35;
      border: solid 0.1em black;
      border-radius: 50%;
      color: #df0000;
      height: 3.5em;
      padding: 1%;
      width: 3.5em;
      vertical-align: 400%;
    }
    .logo {
      height: 100%;
      width: 40%;
    }

    .cart-logo {
      cursor: pointer;
      height: 60%;
      margin-bottom: 3%;
      width: 15%;
    }
  }
`;
