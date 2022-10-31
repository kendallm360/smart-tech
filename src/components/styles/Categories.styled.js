import styled from "styled-components";

export const StyledCategories = styled.section`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
  }

  h3 {
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
`;
