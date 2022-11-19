import styled from "styled-components";

export const StyledCategories = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #df0000;
  height: 100%;
  width: 100vw;

  .header {
    color: black;
    margin-top: 1%;
    text-align: center;
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      font-size: 72px;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 68px;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 56px;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 36px;
    }
    /* Cellphones */
    @media screen and (max-width: 480px) {
      font-size: 28px;
      margin-top: 5%;
    }
  }

  .header-span {
    color: #fff200;
    font-weight: 800;
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      font-size: 48px;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 40px;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 32px;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
    /* Cellphones */
    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
  }

  .sub-header {
    color: black;
    margin-left: 5%;
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      font-size: 1.4rem;
      margin-top: -4%;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 1.4rem;
      margin-top: -3%;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.2rem;
      margin-top: -2%;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1rem;
      margin-top: -2%;
    }
    /* Cellphones */
    @media screen and (max-width: 480px) {
      font-size: 0.9rem;
      margin-bottom: 5%;
    }
  }

  .categories {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* Cellphones */
    @media screen and (max-width: 480px) {
      margin: 3%;
    }
  }

  .category {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .category-body {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: white;
    border: solid 0.3rem #fff200;
    border-radius: 50%;
    cursor: pointer;
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      height: 12.5rem;
      width: 12.5rem;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      height: 11.5rem;
      width: 11.5rem;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      height: 11.5rem;
      width: 11.5rem;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      height: 7.5rem;
      width: 7.5rem;
    }
    /* Cellphones */
    @media screen and (max-width: 480px) {
      height: 6rem;
      margin-top: 10%;
      width: 6rem;
    }
  }

  .category:hover {
    transform: scale(1.15);
  }

  .category-images {
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      height: 9rem;
      width: 9rem;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      height: 8rem;
      width: 8rem;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      height: 8rem;
      width: 8rem;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      height: 5.5rem;
      width: 5.5rem;
    }
    /* Cellphones */
    @media screen and (max-width: 480px) {
      height: 3.8rem;
      width: 3.8rem;
    }
  }

  .category-label {
    color: #fff200;
    margin-top: 2%;
    text-align: center;
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      font-size: 1.4rem;
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
      font-size: 1rem;
    }
    /* Cellphones */
    @media screen and (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;
