import styled from "styled-components";

export const StyledCategory = styled.section`
  select {
    align-items: center;
    border-radius: 0.4em;
    margin-bottom: 3%;
    margin-left: 30vw;
    width: 40vw;
    text-align: center;
    /* Desktops */
    @media screen and (min-width: 1025px) {
      font-size: 1em;
      height: 3em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1em;
      height: 3em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 0.9em;
      height: 2em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.8em;
      height: 2em;
    }
  }

  .header {
    text-align: center;
    /* Desktops */
    @media screen and (min-width: 1025px) {
      font-size: 2.5em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 2.3em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1.8em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 1.5em;
    }
  }

  .item-card {
    border-bottom: solid 1px #df0000;
    margin-bottom: 3%;
    margin-left: 5vw;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    /* Desktops */
    @media screen and (min-width: 1025px) {
      height: 18vh;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      height: 17vh;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      height: 16vh;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      height: 15vh;
    }
  }

  .item-image {
    margin-bottom: 2%;
    /* Desktops */
    @media screen and (min-width: 1025px) {
      height: 11em;
      width: 9em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      height: 10em;
      width: 8em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      height: 9em;
      width: 7em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      height: 5em;
      width: 6em;
    }
  }

  .item-name {
    text-align: center;
    /* Desktops */
    @media screen and (min-width: 1025px) {
      font-size: 1.7em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.4em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.7em;
    }
  }

  .price-cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .item-price {
    color: #df0000;
    font-weight: 900;
    text-align: center;
    /* Desktops */
    @media screen and (min-width: 1025px) {
      font-size: 1.4em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.2em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1.1em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.9em;
    }
  }

  .cart-button {
    background-color: #df0000;
    border: #df0000;
    border-radius: 0.4em;
    font-size: 100%;
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
      width: 4em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      height: 2.5em;
      width: 4em;
    }
  }
`;
