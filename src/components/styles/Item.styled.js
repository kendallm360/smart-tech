import styled from "styled-components";

export const StyledItem = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3vh;

  .item-image {
    height: 20vh;
    width: 20vw;
  }

  h2,
  h3 {
    font-size: 1.1em;
    text-align: center;
  }

  button {
    background-color: #df0000;
    border: #df0000;
    border-radius: 0.4em;
    font-size: 100%;
    height: 2.5em;
    width: 80vw;
  }

  //Desktops
  @media screen and (min-width: 1025px) {
    .item-image {
      height: 30vh;
      width: 30vw;
    }

    h2,
    h3 {
      font-size: 1.8em;
    }

    h3 {
      font-weight: 800;
    }

    p {
      margin-bottom: 1%;
      margin-top: 0%;
    }
  }

  //Laptops
  @media screen and (max-width: 1024px) {
    .item-image {
      height: 30vh;
      width: 30vw;
    }
  }
`;
