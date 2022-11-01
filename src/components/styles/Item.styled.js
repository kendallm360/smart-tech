import styled from "styled-components";

export const StyledItem = styled.section`
  margin: 5vh;

  img {
    height: 30vh;
    width: 80vw;
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

  @media screen and (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      height: 40vh;
      width: 40vw;
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
`;
