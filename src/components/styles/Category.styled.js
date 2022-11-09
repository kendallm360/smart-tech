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
    /* @media screen and (max-width: 768px) {
      font-size: 1.8em;
    } */
    /* Mobile */
    /* @media screen and (max-width: 480px) {
      font-size: 1.5em;
    } */
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
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
    }
  }

  .sort-dropdown {
    border-radius: 0.4em;
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
      font-size: 0.7em;
    }
    /* Tablets */
    /* @media screen and (max-width: 768px) {
      font-size: 0.9em;
      height: 2em;
    } */
    /* Mobile */
    /* @media screen and (max-width: 480px) {
      font-size: 0.8em;
      height: 2em;
    } */
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
    /* @media screen and (max-width: 768px) {
      height: 16vh;
    } */
    /* Mobile */
    /* @media screen and (max-width: 480px) {
      height: 15vh;
    } */
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
    /* @media screen and (max-width: 768px) {
      height: 7em;
      width: 7em;
    } */
    /* Mobile */
    /* @media screen and (max-width: 480px) {
      height: 5em;
      width: 5em;
    } */
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
    /* @media screen and (max-width: 768px) {
      font-size: 1em;
    } */
    /* Mobile */
    /* @media screen and (max-width: 480px) {
      font-size: 0.7em;
    } */
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
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
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
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
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
    /* @media screen and (max-width: 768px) {
      font-size: 1.1em;
    } */
    /* Mobile */
    /* @media screen and (max-width: 480px) {
      font-size: 0.9em;
    } */
  }

  .cart-button {
    background-color: #fff200;
    border: #df0000;
    border-radius: 0.3em;
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
    /* @media screen and (max-width: 768px) {
      height: 2.5em;
      width: 4em;
    } */
    /* Mobile */
    /* @media screen and (max-width: 480px) {
      height: 2.5em;
      width: 4em;
    } */
  }

  .cart-button:hover {
    transform: scale(1.15);
  }
`;
