import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #df0000;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: 100%;
    width: 40%;
  }

  .cart {
    height: 60%;
    width: 20%;
  }
`;
