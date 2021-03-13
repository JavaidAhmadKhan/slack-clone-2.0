import styled from "styled-components";

export const ChatBottom = styled.div`
  padding-bottom: 200px;

  @media screen and (max-width: 800px) {
    padding-bottom: 150px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid lightgray;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
`;

export const ChatMessages = styled.div``;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;

    @media screen and (max-width: 800px) {
      font-size: 15px;
    }
  }

  > h4 .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

export const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;

    @media screen and (max-width: 800px) {
      font-size: 10px;
    }
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

export const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
