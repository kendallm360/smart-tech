import styled from "styled-components";

export const StyledCategories = styled.section`
  //Mobile
  @media screen and (max-width: 480px) {
    height: 95vh;
    width: 100vw;
    display: flex;
    flex-direction: column;

    h3 {
      margin-bottom: 4vh;
    }

    p {
      font-size: 1em;
    }

    .header {
      font-size: 2em;
    }

    .sub-header {
      font-size: 1.1em;
    }

    .category-body {
      border: solid 0.1em #df0000;
      height: 6em;
      width: 6em;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
    }

    .category-images {
      height: 4em;
      padding: 0.1em;
      width: 4em;
    }

    .categories {
      display: grid;
      margin: 1%;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1em;
    }

    .category-label {
      text-align: center;
      color: #df0000;
    }
  }

  //Desktops
  @media screen and (min-width: 1025px) {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 3em;
      margin-top: 1%;
      text-align: center;
    }

    h3 {
      font-size: 1.5em;
      margin-left: 3.5%;
      margin-top: 0%;
    }

    /* p {
      font-size: 1.5em;
    } */

    .category {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
    }

    /* .categories {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 0.5em;
      margin-top: -1%;
    } */

    /* .category-images {
      height: 6em;
      padding: 0.1em;
      width: 6em;
    } */

    /* .category-body {
      border: solid 0.1em #df0000;
      height: 8em;
      width: 8em;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
    } */

    .washers {
      margin-left: 210%;
      text-align: start;
    }
  }

  //Laptops
  @media screen and (max-width: 1024px) {
    h2 {
      font-size: 3em;
      margin-top: 1%;
      text-align: center;
    }

    h3 {
      font-size: 1.5em;
      margin-left: 3.5%;
      margin-top: 0%;
    }

    /* p {
      font-size: 1.3em;
    } */
    /* .category-body {
      border: solid 0.1em #df0000;
      height: 8em;
      width: 8em;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
    } */

    /* .category-images {
      height: 6em;
      padding: 0.1em;
      width: 6em;
    } */

    .category {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
    }
  }
`;
