import styled from "styled-components";
export const StyledCart = styled.section`
  h3 {
    text-align: center;
    font-size: 0.9em;
  }

  button {
    cursor: pointer;
  }

  .cart-item {
    border: solid 1px #df0000;
    border-radius: 1em;
    margin: 2%;
    padding: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .cart-item-info {
    text-align: center;
  }

  .cart-item-image {
    align-self: center;
    height: 5em;
    margin-bottom: 5%;
    width: 5em;
  }

  .cart-item-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3%;
  }

  @media screen and (min-width: 1025px) {
    h2,
    h3 {
      font-size: 1.6em;
    }

    h3 {
      font-weight: 800;
    }

    .cart-item-image {
      height: 9em;
      margin: 2%;
      width: 9em;
    }

    .cart-item {
      height: 18vh;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-content: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 1024px) {
    h2,
    h3 {
      font-size: 1.2em;
    }

    h3 {
      font-weight: 800;
    }

    .cart-item-image {
      height: 7em;
      margin: 1.5%;
      width: 7em;
    }

    .cart-item {
      height: 18vh;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-content: center;
      align-items: center;
    }
  }
`;
