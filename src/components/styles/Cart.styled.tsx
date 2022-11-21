import styled from "styled-components";
export const StyledCart = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .cart-header,
  .empty-cart-header {
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 2.1rem;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 2rem;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.8rem;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1.7rem;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 1.7rem;
    }
  }

  .cart-item {
    display: flex;
    flex-direction: row;
    border: solid 1px #df0000;
    border-radius: 1rem;
    margin-bottom: 3%;
    width: 75vw;
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
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: white;
    margin: 1%;
    width: 35%;
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
      font-size: 1.1rem;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 1rem;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 0.9rem;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.7rem;
      margin-top: -1%;
    }
  }

  .cart-item-span {
    font-weight: 500;
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 0.9rem;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 0.8rem;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 0.7rem;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 0.65rem;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.65rem;
    }
  }

  .cart-item-name {
    color: black;
    text-align: center;
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      font-size: 1.5rem;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 1.4rem;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.2rem;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.6rem;
    }
  }

  .price-cart {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    margin: 2%;
    width: 15%;
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
    border-radius: 0.3rem;
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
    border-radius: 0.4rem;
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
  }

  .empty-cart-header {
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }

  .empty-cart-message {
    text-align: center;
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 2.1rem;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 1.8rem;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.6rem;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;
