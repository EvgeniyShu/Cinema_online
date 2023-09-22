import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import {
  LogoTextWrapper,
  LogoWrapper,
  Menu,
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

export const Header = () => {
  const themeContextData: InitialContextProps = useThemeContext();
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
    <>
      <SectionHeader theme={themeContextData.themeStyle}>
        <Wrapper>
          {activeMenu ? (
            <LunchDiningIcon fontSize="large" onClick={changeMenu} />
          ) : (
            <MenuIcon fontSize="large" onClick={changeMenu} />
          )}
          <LogoWrapper>
            <img src={logo} alt="logo" />
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
          >
            Поиск
          </SearchButton>
          <ThemeButton />
        </div>
      </SectionHeader>
      {activeMenu ? (
        <Menu theme={themeContextData.themeStyle}>
          <NavLink
            onClick={() => setTimeout(changeMenu, 1000)}
            style={({ isActive }) => ({
              backgroundColor: isActive
                ? themeContextData.themeStyle.body
                : themeContextData.themeStyle.background,
              borderBottom: isActive
                ? `3px solid ${themeContextData.themeStyle.text}`
                : "",
              textDecoration: "none",
              color: themeContextData.themeStyle.text,
              padding: 10,
              borderRadius: 3,
            })}
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            onClick={() => setTimeout(changeMenu, 1000)}
            style={({ isActive }) => ({
              backgroundColor: isActive
                ? themeContextData.themeStyle.body
                : themeContextData.themeStyle.background,
              borderBottom: isActive
                ? `3px solid ${themeContextData.themeStyle.text}`
                : "",
              textDecoration: "none",
              color: themeContextData.themeStyle.text,
              padding: 10,
              borderRadius: 3,
            })}
            to="/premium"
          >
            Премиум
          </NavLink>
          <div>BurgerMenu</div>
          <NavLink
            onClick={() => setTimeout(changeMenu, 1000)}
            style={({ isActive }) => ({
              backgroundColor: isActive
                ? themeContextData.themeStyle.body
                : themeContextData.themeStyle.background,
              borderBottom: isActive
                ? `3px solid ${themeContextData.themeStyle.text}`
                : "",
              textDecoration: "none",
              color: themeContextData.themeStyle.text,
              padding: 10,
              borderRadius: 3,
            })}
            to="/about"
          >
            О нас
          </NavLink>
          <NavLink
            onClick={() => setTimeout(changeMenu, 1000)}
            style={({ isActive }) => ({
              backgroundColor: isActive
                ? themeContextData.themeStyle.body
                : themeContextData.themeStyle.background,
              borderBottom: isActive
                ? `3px solid ${themeContextData.themeStyle.text}`
                : "",
              textDecoration: "none",
              color: themeContextData.themeStyle.text,
              padding: 10,
              borderRadius: 3,
            })}
            to="/login"
          >
            Войти
          </NavLink>
        </Menu>
      ) : (
        ""
      )}
    </>
  );
};
