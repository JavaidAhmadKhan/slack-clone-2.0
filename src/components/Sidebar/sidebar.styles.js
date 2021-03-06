import styled from "styled-components";

export const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  overflow-y: scroll;

  @media screen and (max-width: 800px) {
    flex: 0.5;
  }

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border-top: 1px solid #49274b;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  @media screen and (max-width: 800px) {
    padding: 5px;
  }

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;

    @media screen and (max-width: 800px) {
      font-size: 10px;
      padding: 3px;
    }
  }

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

export const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;

    @media screen and (max-width: 800px) {
      font-size: 12px;
    }
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
    @media screen and (max-width: 800px) {
      font-size: 10px;
    }
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
    @media screen and (max-width: 800px) {
      font-size: 10px;
    }
  }
`;
