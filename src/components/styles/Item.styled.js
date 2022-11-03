import styled from "styled-components";

export const StyledItem = styled.section`
  margin: 3vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .item-title {
    text-align: center;
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
      font-size: 1.6em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 1.1em;
    }
  }

  .item-image {
    /* Desktops */
    @media screen and (min-width: 1025px) {
      height: 25vh;
      width: 50vw;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      height: 20vh;
      width: 40vw;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      height: 20vh;
      width: 40vw;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      height: 30vh;
      width: 60vw;
    }
  }

  .description-header,
  .item-price {
    font-weight: 900;
    text-align: center;
    /* Desktops */
    @media screen and (min-width: 1025px) {
      font-size: 1.6em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.5em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1.3em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 1em;
    }
  }

  .description-text {
    margin-top: -1%;
    /* Desktops */
    @media screen and (min-width: 1025px) {
      font-size: 1.4em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.3em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1.2em;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 1.1em;
    }
  }

  .sku {
    font-weight: 600;
    margin-top: 0%;
    /* Desktops */
    @media screen and (min-width: 1025px) {
      font-size: 1.1em;
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
      font-size: 0.9em;
    }
  }

  button {
    background-color: #df0000;
    border: #df0000;
    border-radius: 0.4em;
    cursor: pointer;
    width: 70vw;
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
      font-size: 1.5em;
    }
  }
`;
