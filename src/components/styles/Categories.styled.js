import styled from "styled-components";

export const StyledCategories = styled.section`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
  }

  .categories {
    display: grid;
    margin: 2%;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5em;
  }

  .category-images {
    height: 5em;
    padding: 0.1em;
    width: 5em;
  }

  .category-body {
    border: solid 0.1em #df0000;
    border-radius: 100%;
    padding: 1em;
  }

  .category-label {
    text-align: center;
    color: #df0000;
  }

  @media screen and (min-width: 1025px) {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 3em;
      text-align: center;
    }

    h3 {
      font-size: 1.5em;
      margin-left: 3.5%;
    }

    p {
      font-size: 1.5em;
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
      /* margin: 2%; */
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2em;
    }

    .category-images {
      height: 8em;
      padding: 0.1em;
      width: 8em;
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
      /* padding: 1em; */
    }

    /*
  .category-label {
    text-align: center;
    color: #df0000;
  } */
  }
`;
