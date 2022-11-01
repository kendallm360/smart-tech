import styled from "styled-components";

export const StyledCategory = styled.section`
  h2,
  h3 {
    text-align: center;
    font-size: 0.7em;
  }

  h3 {
    color: #df0000;
    font-size: 0.8em;
    font-weight: 900;
  }

  select {
    align-items: center;
    margin-bottom: 5%;
    margin-left: 25%;
    width: 50vw;
  }

  .header {
    font-size: 1.5em;
  }

  .item-card {
    border-bottom: solid 1px #df0000;
    margin-bottom: 3%;
    margin-left: 5%;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }

  .item-image {
    height: 5em;
    margin-bottom: 2%;
    width: 6em;
  }

  .item-name {
    align-self: center;
  }

  .cart-button {
    background-color: #df0000;
    border: #df0000;
    border-radius: 0.4em;
    font-size: 100%;
    height: 2.5em;
    width: 4em;
  }

  //Desktops
  @media screen and (min-width: 1025px) {
    h2,
    h3 {
      font-size: 1.8em;
    }

    h3 {
      color: #df0000;
      font-weight: 900;
    }

    select {
      border-radius: 0.4em;
      font-size: medium;
      height: 3em;
      margin-left: 30vw;
      text-align: center;
      width: 40vw;
    }

    .cart-button {
      height: 3em;
      width: 6em;
    }

    .header {
      font-size: 2.5em;
    }

    .item-image {
      height: 11em;
      width: 9em;
    }

    .item-card {
      height: 18vh;
      width: 90vw;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-content: center;
      align-items: center;
    }

    .item-info {
      display: flex;
      flex-direction: row;
      align-items: space-between;
    }

    .price-cart {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
    }
  }

  //Laptops
  @media screen and (max-width: 1024px) {
    h2,
    h3 {
      font-size: 1.3em;
    }

    h3 {
      color: #df0000;
      font-weight: 900;
    }

    select {
      border-radius: 0.4em;
      font-size: medium;
      height: 3em;
      margin-left: 30vw;
      text-align: center;
      width: 40vw;
    }

    .cart-button {
      height: 3em;
      width: 6em;
    }

    .header {
      font-size: 2.5em;
    }

    .item-image {
      height: 5em;
      width: 5em;
    }

    .item-card {
      height: 14vh;
      width: 90vw;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-content: center;
      align-items: center;
    }

    .item-info {
      display: flex;
      flex-direction: row;
      align-items: space-between;
    }

    .price-cart {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
    }
  }
`;
