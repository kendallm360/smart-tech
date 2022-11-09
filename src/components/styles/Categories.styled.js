import styled from "styled-components";

export const StyledCategories = styled.section`
  background-color: #df0000;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .header {
    color: black;
    text-align: center;
    margin-top: 1%;
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
      font-size: 1.4em;
      margin-top: -4%;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      font-size: 1.4em;
      margin-top: -3%;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      font-size: 1.2em;
      margin-top: -2%;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      font-size: 1em;
      margin-top: -2%;
    }
    /* Cellphones */
    @media screen and (max-width: 480px) {
      font-size: 0.9em;
      margin-bottom: 5%;
    }
  }

  .categories {
    display: grid;
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      grid-template-columns: repeat(4, 1fr);
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      grid-template-columns: repeat(4, 1fr);
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    /* Cellphones */
    @media screen and (max-width: 480px) {
      grid-template-columns: repeat(3, 1fr);
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
    background-color: white;
    border: solid 0.3em #fff200;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      height: 12.5em;
      width: 12.5em;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      height: 11.5em;
      width: 11.5em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      height: 11.5em;
      width: 11.5em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      height: 7.5em;
      width: 7.5em;
    }
    /* Cellphones */
    @media screen and (max-width: 480px) {
      height: 6em;
      margin-top: 10%;
      width: 6em;
    }
  }

  .category:hover {
    transform: scale(1.15);
  }

  .category-images {
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      height: 9em;
      width: 9em;
    }
    /* Desktops */
    @media screen and (max-width: 1349px) {
      height: 8em;
      width: 8em;
    }
    /* Laptops */
    @media screen and (max-width: 1024px) {
      height: 8em;
      width: 8em;
    }
    /* Tablets */
    @media screen and (max-width: 768px) {
      height: 5.5em;
      width: 5.5em;
    }

    /* Cellphones */
    @media screen and (max-width: 480px) {
      height: 4.5em;
      width: 4.5em;
    }
  }

  .category-label {
    color: #fff200;
    margin-top: 2%;
    text-align: center;
    /* Large Screens */
    @media screen and (min-width: 1350px) {
      font-size: 1.4em;
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
      font-size: 1em;
    }

    /* Cellphones */
    @media screen and (max-width: 480px) {
      font-size: 0.9em;
    }
  }
  .washers {
    /* Larger Screens */
    @media screen and (min-width: 1025px) {
      margin-left: 205%;
      margin-top: -10%;
      text-align: start;
    }
  }
`;
