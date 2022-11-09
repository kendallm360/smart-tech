import styled from "styled-components";

export const StyledItem = styled.section`
  margin-left: 20vw;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .item-title {
    text-align: center;
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 28px;
      margin-top: 1%;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 24px;
      margin-top: 2%;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 20px;
      margin-top: 10%;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 18px;
      margin-top: 10%;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 17px;
      margin-top: 10%;
    }
  }

  .additional-item-info {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .item-label {
    /* Large */
    @media screen and (min-width: 1350px) {
      margin-top: 0%;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      margin-top: -1%;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      margin-top: 0%;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      margin-top: 0%;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      margin-top: 0%;
    }
  }

  .item-label,
  .description-header {
    font-weight: 800;
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 1.3em;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 1.3em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.1em;
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

  .item-span {
    font-size: 0.8em;
    font-weight: 500;
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 0.9em;
    }
  }

  .item-image {
    /* Large */
    @media screen and (min-width: 1350px) {
      height: 40vh;
      margin-bottom: 1%;
      width: 40vw;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      height: 30vh;
      margin-bottom: 0%;
      width: 45vw;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      height: 25vh;
      margin-bottom: 0%;
      margin-top: 5%;
      width: 50vw;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      height: 25vh;
      margin-bottom: 2%;
      margin-top: 5%;
      width: 50vw;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      height: 25vh;
      margin-bottom: 2%;
      margin-top: 5%;
      width: 50vw;
    }
  }

  .description-header {
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 1em;
    }
  }

  .description-text {
    margin-top: 0%;
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 1.3em;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 1.25em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.1em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1.1em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 1.1em;
    }
  }

  .item-price {
    font-weight: 900;
    text-align: center;
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 1.8em;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 1.6em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.4em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1.3em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 1.3em;
    }
  }

  .add-to-cart {
    background-color: #df0000;
    border: #df0000;
    border-radius: 0.4em;
    color: black;
    cursor: pointer;
    margin-top: -1.5%;
    width: 70vw;
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 1.7em;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 1.5em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.5em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1.5em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 1.4em;
    }
  }

  .add-to-cart:hover {
    transform: scale(1.15);
  }
`;
