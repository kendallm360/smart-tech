import styled from "styled-components";

export const StyledCategory = styled.section`
  h2,
  h3 {
    text-align: center;
    font-size: 0.7em;
  }

  h3 {
    color: #df0000;
    font-size: 0.8em;
    font-weight: 900;
  }

  .item-card {
    border-bottom: solid 1px #df0000;
    margin-left: 5%;
    width: 90%;
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
  }

  .item-image {
    height: 5em;
    width: 6em;
  }

  .cart-button {
    background-color: #df0000;
    border: #df0000;
    border-radius: 0.4em;
    font-size: 100%;
    height: 2.5em;
    width: 4em;
  }
`;