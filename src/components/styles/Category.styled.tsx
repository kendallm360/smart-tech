import styled from "styled-components";

export const StyledCategory = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #df0000;
  color: black;

  .header {
    margin-top: 1%;
    text-align: center;
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      font-size: 72px;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 60px;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 48px;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 32px;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 26px;
    }
  }

  .category-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    border-bottom: solid 1px white;
    border-top: solid 1px white;
    margin-bottom: 3%;
    margin-top: -2%;
    width: 90vw;
  }

  .item-total {
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 1rem;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 0.9rem;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 0.8rem;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 0.7rem;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.7rem;
    }
  }

  .sort-dropdown {
    border-radius: 0.4rem;
    color: black;
    cursor: pointer;
    width: 15vw;
    text-align: center;
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      font-size: 1.2rem;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 0.95rem;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 0.85rem;
      width: 19vw;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 0.75rem;
      width: 25vw;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.7rem;
      width: 30vw;
    }
  }

  .item-card {
    display: flex;
    flex-direction: row;
    border-bottom: solid 1px white;
    margin-bottom: 3%;
    width: 90vw;
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
    align-content: center;
    align-items: center;
    background-color: white;
    border: solid 0.2rem #fff200;
    border-radius: 0.3rem;
    margin-bottom: 0.5%;
    width: 35%;
  }

  .item-image:hover {
    transform: scale(1.15);
  }

  .item-image {
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      height: 20vh;
      margin-left: 5%;
      width: 90%;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      height: 16.5vh;
      margin-left: 5%;
      width: 90%;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      height: 13.5vh;
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

  .item-info {
    display: flex;
    flex-direction: column;
    margin: 1%;
    text-align: center;
    width: 50%;
  }

  .item-name {
    color: #fff200;
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
      font-size: 0.9rem;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.7rem;
    }
  }

  .item-name:hover {
    transform: scale(1.05);
  }

  .additional-item-info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: #fff200;
  }

  .item-label {
    color: #fff200;
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

  .item-span {
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

  .price-cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
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
      font-size: 17px;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 11px;
    }
  }

  .cart-button {
    background-color: #fff200;
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
      font-size: 10px;
    }
  }

  .cart-button:hover {
    transform: scale(1.15);
  }

  .cart-button:disabled {
    display: none;
  }
`;
