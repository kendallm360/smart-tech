import styled from "styled-components";

export const StyledCategories = styled.section`
  border: solid 1px red;
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .categories {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }

  .category-images {
    height: 5em;
    width: 5em;
    /* border: solid 0.1em #df0000;
    border-radius: 100%;
    padding: 0.7em; */
  }

  .category-body {
    border: solid 0.1em #df0000;
    border-radius: 100%;
    padding: 1em;
  }

  .category-label {
    color: #df0000;
  }
`;
