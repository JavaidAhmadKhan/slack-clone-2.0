import React from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import {
  HeaderSearch,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderAvatar,
} from "./header.styles";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Clever Coder" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
