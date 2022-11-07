import styled from "styled-components";

export const StyledScrollbar = styled.section`
  height: 15vh;
  margin-left: 5vw;
  width: 90vw;

  .categories {
    display: grid;
    grid-gap: 1em;
    margin: 1%;
    grid-template-columns: repeat(9, 1fr);
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
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .category-images {
    height: 3em;
    width: 3em;
  }
`;
