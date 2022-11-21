import styled from "styled-components";

export const StyledItem = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20vw;
  width: 60vw;

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
      font-size: 15px;
      margin-top: 10%;
    }
  }

  .additional-item-info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
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
      font-size: 1.3rem;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 1.3rem;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.1rem;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  .item-span {
    font-size: 0.8rem;
    font-weight: 500;
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 0.9rem;
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
      font-size: 1rem;
    }
  }

  .description-text {
    margin-top: 0%;
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 1.3rem;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 1.25rem;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.1rem;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 0.95rem;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  .item-price {
    font-weight: 900;
    text-align: center;
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 1.8rem;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 1.6rem;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.4rem;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 1.3rem;
    }
  }

  .add-to-cart {
    background-color: #df0000;
    border: #df0000;
    border-radius: 0.4rem;
    color: black;
    cursor: pointer;
    margin-top: -1.5%;
    width: 70vw;
    /* Large */
    @media screen and (min-width: 1350px) {
      font-size: 1.7rem;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 1.5rem;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.5rem;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
    /* Mobile */
    @media screen and (max-width: 480px) {
      font-size: 1.4rem;
    }
  }

  .add-to-cart:hover {
    transform: scale(1.15);
  }

  .add-to-cart:disabled {
    display: none;
  }
`;
