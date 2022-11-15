import styled from "styled-components";

export const StyledCategory = styled.section`
  background-color: #df0000;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    border-bottom: solid 1px white;
    border-top: solid 1px white;
    margin-top: -2%;
    margin-bottom: 3%;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }

  .item-total {
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 1em;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 0.9em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 0.8em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 0.7em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.7em;
    }
  }

  .sort-dropdown {
    border-radius: 0.4em;
    color: black;
    cursor: pointer;
    width: 15vw;
    text-align: center;
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      font-size: 1.2em;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 0.95em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 0.85em;
      width: 19vw;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 0.75em;
      width: 25vw;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.7em;
      width: 30vw;
    }
  }

  .item-card {
    border-bottom: solid 1px white;
    margin-bottom: 3%;
    width: 90vw;
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
    border: solid 0.2em #fff200;
    border-radius: 0.3em;
    margin-bottom: 0.5%;
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .item-image:hover {
    transform: scale(1.15);
  }

  .item-image {
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      height: 21vh;
      margin-left: 5%;
      width: 90%;
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

  .item-info {
    margin: 1%;
    text-align: center;
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .item-name {
    color: #fff200;
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
      font-size: 0.9em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.7em;
    }
  }

  .item-name:hover {
    transform: scale(1.05);
  }

  .additional-item-info {
    color: #fff200;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .item-label {
    color: #fff200;
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

  .item-span {
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

  .price-cart {
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
      font-size: 10px;
    }
  }

  .cart-button:hover {
    transform: scale(1.15);
  }
`;
