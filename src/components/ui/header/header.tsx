import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import {
  LogoTextWrapper,
  LogoWrapper,
  SectionHeader,
  Wrapper,
} from "./styledHeader";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import ThemeButton from "../../shared/changeTheme/themeButton";
import { CustomInputElement } from "./customInput/customInput";
import { SearchButton } from "./customInput/styledCustomInput";
import {
  AuthContextProps,
  useAuthContext,
} from "../../authContext/authContext";
import { Menu } from "./menu/menu";
import { SignIn } from "../signIn/signIn";

export const Header = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  const authContext: AuthContextProps = useAuthContext();
  const logo = require("./favicon.png");
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);

  const changeMenu = () => {
    setActiveMenu((prev) => !prev);
  };

  const changeSearch = () => {
    setActiveSearch((prev) => !prev);
  };

  return (
    <SectionHeader theme={themeContextData.themeStyle}>
      <Wrapper>
        {activeMenu ? (
          <div style={{ cursor: "pointer" }} title="закрыть меню">
            <CloseIcon fontSize="large" onClick={changeMenu} />
          </div>
        ) : (
          <div style={{ cursor: "pointer" }} title="меню">
            <MenuIcon fontSize="large" onClick={changeMenu} />
          </div>
        )}

        <LogoWrapper theme={themeContextData.themeStyle}>
          <NavLink to={"/"} title="на главную">
            <img src={logo} alt="logo" />
          </NavLink>
          <LogoTextWrapper>
            <p style={{ margin: 0 }}>Cinema</p>
            <p style={{ margin: 0 }}>Online</p>
          </LogoTextWrapper>
        </LogoWrapper>
      </Wrapper>

      {activeSearch ? <CustomInputElement /> : <></>}
      <div style={{ display: "flex", gap: 20 }}>
        <SearchButton
          theme={themeContextData.themeStyle}
          onClick={() => changeSearch()}
          title="открыть/закрыть окно поиска"
        >
          <div style={{ marginTop: 5, marginLeft: 5 }}>
            {activeSearch ? (
              <SearchOffIcon fontSize="large" />
            ) : (
              <SearchIcon fontSize="large" />
            )}
          </div>
        </SearchButton>
        <ThemeButton />
      </div>
      {authContext.signUpVisible && <SignIn />}
      {activeMenu && <Menu changeMenu={setActiveMenu} />}
    </SectionHeader>
  );
};
