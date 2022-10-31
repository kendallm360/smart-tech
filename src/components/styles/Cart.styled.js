import styled from "styled-components";
export const StyledCart = styled.section`
  h3 {
    text-align: center;
    font-size: 0.9em;
  }
  .cart-item {
    border: solid 1px #df0000;
    border-radius: 1em;
    margin: 2%;
    padding: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .cart-item-info {
    text-align: center;
  }

  .cart-item-image {
    align-self: center;
    height: 7em;
    margin-bottom: 5%;
    width: 7em;
  }

  .cart-item-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3%;
  }
`;
