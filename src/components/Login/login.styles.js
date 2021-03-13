import styled from "styled-components";

export const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media screen and (max-width: 800px) {
    padding: 50px;
    margin: 20px;
  }

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;

    @media screen and (max-width: 800px) {
      height: 70px;
      margin-bottom: 20px;
    }
  }

  > h1 {
    @media screen and (max-width: 800px) {
      font-size: 20px;
    }
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    border-radius: 5px;
    color: white;

    @media screen and (max-width: 800px) {
      margin-top: 30px;
    }
  }
`;
