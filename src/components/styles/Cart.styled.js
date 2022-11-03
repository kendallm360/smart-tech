import styled from "styled-components";
export const StyledCart = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .cart-header {
    /* Desktops */
    @media screen and (min-width: 1025px) {
      font-size: 2em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.8em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1.7em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 1.7em;
    }
  }

  .cart-item {
    border: solid 1px #df0000;
    border-radius: 1em;
    padding: 2%;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* Desktops */
    @media screen and (min-width: 1025px) {
      height: 18vh;
      margin-bottom: 3vh;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      height: 17vh;
      margin-bottom: 3vh;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      height: 16vh;
      margin-bottom: 2vh;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      height: 17vh;
      margin-bottom: 2vh;
    }
  }

  .cart-item-image {
    align-self: center;
    /* Desktops */
    @media screen and (min-width: 1025px) {
      height: 10em;
      width: 10em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      height: 9em;
      width: 9em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      height: 7em;
      width: 7em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      height: 5em;
      width: 5em;
    }
  }

  .cart-item-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .item-title {
    text-align: center;
    /* Desktops */
    @media screen and (min-width: 1025px) {
      font-size: 1.8em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.5em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1.2em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.9em;
    }
  }

  .item-price {
    font-weight: 900;
    margin-top: 0%;
    text-align: center;
    /* Desktops */
    @media screen and (min-width: 1025px) {
      font-size: 1.5em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.2em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.9em;
    }
  }

  .remove-item-button {
    background-color: #df0000;
    border: #df0000;
    border-radius: 0.4em;
    cursor: pointer;
    margin-bottom: 3%;
    /* Desktops */
    @media screen and (min-width: 1025px) {
      height: 3em;
      width: 6em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      height: 3em;
      width: 6em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      height: 2.5em;
      width: 5em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      height: 2.5em;
      width: 5em;
    }
  }

  .checkout-button {
    border: #df0000;
    border-radius: 0.4em;
    /* cursor: pointer; */
    width: 70vw;
  }
`;
