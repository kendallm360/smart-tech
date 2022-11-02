import styled from "styled-components";

export const StyledCategories = styled.section`
  height: 95vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .header {
    text-align: center;
    @media screen and (max-width: 480px) {
      font-size: 2em;
    }
    @media screen and (max-width: 768px) {
      font-size: 2.8em;
    }
    @media screen and (max-width: 1024px) {
      font-size: 2.8em;
    }
    @media screen and (min-width: 1025px) {
      font-size: 2.8em;
      margin-top: 1%;
    }
  }

  .sub-header {
    @media screen and (max-width: 480px) {
      font-size: 1.1em;
      margin-bottom: 5%;
      margin-top: -2%;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.1em;
    }
    @media screen and (max-width: 1024px) {
      font-size: 1.4em;
      margin-top: -2%;
    }
    @media screen and (min-width: 1025px) {
      font-size: 1.4em;
      margin-top: -2%;
    }
  }

  .categories {
    display: grid;
    @media screen and (max-width: 480px) {
      grid-gap: 1em;
      grid-template-columns: repeat(3, 1fr);
      margin: 1%;
    }
    @media screen and (max-width: 768px) {
      grid-gap: 1em;
      grid-template-columns: repeat(3, 1fr);
      margin: 1%;
    }
    @media screen and (max-width: 1024px) {
      grid-gap: 1em;
      grid-template-columns: repeat(3, 1fr);
      margin: 1%;
    }
    @media screen and (min-width: 1025px) {
      grid-template-columns: repeat(4, 1fr);
      margin: 1%;
    }
  }

  .category {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .category-body {
    border: solid 0.1em #df0000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    @media screen and (max-width: 480px) {
      height: 6em;
      width: 6em;
    }
    @media screen and (max-width: 768px) {
      height: 9em;
      width: 9em;
    }
    @media screen and (max-width: 1024px) {
      height: 10em;
      width: 10em;
    }
    @media screen and (min-width: 1025px) {
      height: 11em;
      width: 11em;
    }
  }

  .category-images {
    @media screen and (max-width: 480px) {
      height: 4em;
      width: 4em;
    }
    @media screen and (max-width: 768px) {
      height: 6em;
      width: 6em;
    }
    @media screen and (max-width: 1024px) {
      height: 7em;
      width: 7em;
    }
    @media screen and (min-width: 1025px) {
      height: 7.5em;
      width: 7.5em;
    }
  }

  .category-label {
    color: #df0000;
    text-align: center;
    @media screen and (max-width: 480px) {
      font-size: 1em;
    }
    @media screen and (max-width: 768px) {
      font-size: 1em;
    }
    @media screen and (max-width: 1024px) {
      font-size: 1.4em;
    }
    @media screen and (min-width: 1025px) {
      font-size: 1.4em;
    }
  }
  .washers {
    @media screen and (min-width: 1025px) {
      margin-left: 205%;
      text-align: start;
    }
  }
`;
