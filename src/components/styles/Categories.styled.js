import styled from "styled-components";

export const StyledCategories = styled.section`
  background-color: #df0000;
  /* background-image: linear-gradient(to bottom right, #df0000, black); */
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .header {
    color: white;
    text-align: center;
    margin-top: 1%;
    @media screen and (min-width: 1350px) {
      font-size: 72px;
    }
    @media screen and (max-width: 1349px) {
      font-size: 68px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 56px;
    }
    @media screen and (max-width: 768px) {
      font-size: 36px;
    }
    /*
    @media screen and (max-width: 480px) {
      font-size: 2em;
    } */
  }

  .header-span {
    color: #fff200;
    font-weight: 800;
    @media screen and (min-width: 1350px) {
      font-size: 48px;
    }
    @media screen and (max-width: 1349px) {
      font-size: 40px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 32px;
    }
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
    /*
    @media screen and (max-width: 480px) {
      font-size: 2em;
    } */
  }

  .sub-header {
    color: white;
    margin-left: 5%;
    @media screen and (min-width: 1350px) {
      font-size: 1.4em;
      margin-top: -4%;
    }
    @media screen and (max-width: 1349px) {
      font-size: 1.4em;
      margin-top: -3%;
    }
    @media screen and (max-width: 1024px) {
      font-size: 1.2em;
      margin-top: -2%;
    }
    @media screen and (max-width: 768px) {
      font-size: 1em;
      margin-top: -2%;
    }
    /* 
    @media screen and (max-width: 480px) {
      font-size: 1.1em;
      margin-bottom: 5%;
    } */
  }

  .categories {
    display: grid;
    /* grid-gap: 0.1em; */
    /* margin: 0.5%; */
    @media screen and (min-width: 1350px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 1349px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    /* 
    @media screen and (max-width: 480px) {
      grid-template-columns: repeat(3, 1fr);
    } */
  }

  .category {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .category-body {
    background-color: white;
    border: solid 0.3em #fff200;
    border-radius: 50%;
    cursor: pointer;
    margin-top: 10%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    @media screen and (min-width: 1350px) {
      height: 12.5em;
      width: 12.5em;
    }
    @media screen and (max-width: 1349px) {
      height: 11.5em;
      width: 11.5em;
    }
    @media screen and (max-width: 1024px) {
      height: 11.5em;
      width: 11.5em;
    }
    @media screen and (max-width: 768px) {
      height: 7.5em;
      width: 7.5em;
    }
    /*
    @media screen and (max-width: 480px) {
      height: 6em;
      width: 6em;
    } */
  }

  .category:hover {
    transform: scale(1.15);
  }

  .category-images {
    @media screen and (min-width: 1350px) {
      height: 9em;
      width: 9em;
    }
    @media screen and (max-width: 1349px) {
      height: 8em;
      width: 8em;
    }
    @media screen and (max-width: 1024px) {
      height: 8em;
      width: 8em;
    }
    @media screen and (max-width: 768px) {
      height: 5.5em;
      width: 5.5em;
    }
    /* 
    @media screen and (max-width: 480px) {
      height: 4em;
      width: 4em;
    } */
  }

  .category-label {
    color: #fff200;
    margin-top: 2%;
    text-align: center;
    @media screen and (min-width: 1350px) {
      font-size: 1.4em;
    }
    @media screen and (max-width: 1349px) {
      font-size: 1.4em;
    }
    @media screen and (max-width: 1024px) {
      font-size: 1.2em;
    }
    @media screen and (max-width: 768px) {
      font-size: 1em;
    }
    /*
    @media screen and (max-width: 480px) {
      font-size: 1em;
    } */
  }
  .washers {
    @media screen and (min-width: 1025px) {
      margin-left: 205%;
      margin-top: -10%;
      text-align: start;
    }
  }
`;
