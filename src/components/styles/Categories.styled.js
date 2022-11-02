import styled from "styled-components";

export const StyledCategories = styled.section`
  //Shared for all
  height: 95vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
  }

  h3 {
    margin-top: -2%;
  }

  .categories {
    display: grid;
  }

  .category-body {
    border: solid 0.1em #df0000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .category-label {
    color: #df0000;
    text-align: center;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    h2 {
      font-size: 3em;
    }

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
    .categories {
      grid-gap: 1em;
      grid-template-columns: repeat(3, 1fr);
      margin: 1%;
    }

    .category-body {
      height: 6em;
      width: 6em;
    }

    .category-images {
      height: 4em;
      padding: 0.1em;
      width: 4em;
    }
  }

  //Tablets
  @media screen and (max-width: 768px) {
  }

  //Laptops
  @media screen and (max-width: 1024px) {
  }

  //Desktops
  @media screen and (min-width: 1025px) {
  }

  /* } */

  //Desktops
  /* @media screen and (min-width: 1025px) {
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
      margin-bottom: 5vh;
      margin-left: 3.5%;
      margin-top: -2%;
    }

    p {
      font-size: 1.5em;
      text-align: center;
    }

    .category {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
    }

    .categories {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 0.5em;
      margin-top: -1%;
    }

    .category-images {
      height: 6em;
      padding: 0.1em;
      width: 6em;
    }

    .category-body {
      border: solid 0.1em #df0000;
      height: 10em;
      width: 10em;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
    }

    .washers {
      margin-left: 210%;
      text-align: start;
    }
  } */

  //Laptops
  /* @media screen and (max-width: 1024px) {
     h2 {
      font-size: 3em;
      margin-top: 0%;
      text-align: center;
    } 

    h3 {
      font-size: 1.5em;
      margin-bottom: 6vh;
      margin-left: 3.5%;
      margin-top: -2%;
    }

    p {
      font-size: 1.5em;
      text-align: center;
    }

    .categories {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0.5em;
      margin-top: -1%;
    }

    .category-body {
      border: solid 0.1em #df0000;
      height: 10em;
      width: 10em;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
    }

    .category-images {
      height: 7em;
      width: 7em;
    }

    .category {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
    }
  } */
`;
