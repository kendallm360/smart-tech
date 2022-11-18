import styled from "styled-components";
export const StyledCart = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .cart-header,
  .empty-cart-header {
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 2.1em;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
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
    margin-bottom: 3%;
    width: 75vw;
    display: flex;
    flex-direction: row;
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      height: 25vh;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      height: 22.5vh;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      height: 18vh;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      height: 16vh;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      height: 13.5vh;
    }
  }

  .image-third {
    background-color: white;
    margin: 1%;
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    /* Tablets */
    @media screen and (max-width: 768px) {
      margin: 2%;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      margin: 2%;
    }
  }

  .cart-item-image {
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      height: 18vh;
      /* margin-left: 5%; */
      width: 70%;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      height: 17vh;
      margin-left: 5%;
      width: 90%;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      height: 14.5vh;
      margin-left: 5%;
      width: 90%;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      height: 12.5vh;
      margin-left: 5%;
      width: 90%;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      height: 9.5vh;
      margin-left: 5%;
      width: 90%;
    }
  }

  .cart-item-image:hover,
  .cart-item-name:hover {
    transform: scale(1.15);
  }

  .cart-item-info {
    margin: 1%;
    text-align: center;
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .additional-cart-item-info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .cart-item-label {
    color: black;
    font-weight: 800;
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 1.1em;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 1em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 0.9em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 0.8em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.7em;
      margin-top: -1%;
    }
  }

  .cart-item-span {
    font-weight: 500;
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 0.9em;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 0.8em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 0.7em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 0.65em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.65em;
    }
  }

  .cart-item-name {
    color: black;
    text-align: center;
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      font-size: 1.5em;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 1.4em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.2em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 0.8em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.6em;
    }
  }

  .price-cart {
    margin: 2%;
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
  }

  .item-price {
    color: black;
    font-weight: 900;
    text-align: center;
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      font-size: 32px;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 26px;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 22px;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 9px;
    }
  }

  .quantity-dropdown {
    color: black;
    cursor: pointer;
  }

  .remove-item-button {
    background-color: #df0000;
    border: #df0000;
    border-radius: 0.3em;
    color: black;
    cursor: pointer;
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      font-size: 24px;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 18px;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 17px;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 13.5px;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 9px;
    }
  }

  .remove-item-button:hover {
    transform: scale(1.15);
  }

  .checkout-button {
    border: #df0000;
    border-radius: 0.4em;
    width: 70vw;
  }

  .empty-cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 50vw;
  }

  .empty-cart-logo {
    margin-bottom: 3%;
    margin-top: 5%;
    height: 50%;
    width: 50%;
    /* Large */
    @media screen and (min-width: 1350px) {
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
    }
  }

  .empty-cart-header {
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1.2em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 1em;
    }
  }

  .empty-cart-message {
    text-align: center;
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 2.1em;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 1.8em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.6em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.8em;
    }
  }
`;
