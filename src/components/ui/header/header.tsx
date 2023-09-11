import { useState } from "react";
import { CustomInput, Menu, SectionHeader } from "./styledHeader";
import MenuIcon from "@mui/icons-material/Menu";

import LunchDiningIcon from "@mui/icons-material/LunchDining";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import ThemeButton from "../../shared/changeTheme/themeButton";
import { NavLink, useNavigate } from "react-router-dom";
import SelectSmall from "./select";

export const Header = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  const logo = require("./favicon.png");
  const [activeMenu, setActivMenu] = useState(false);

  const changeMenu = () => {
    setActivMenu((prev) => !prev);
  };

  return (
    <>
      <SectionHeader theme={themeContextData.themeStyle}>
        <div style={{ display: "flex", gap: 50 }}>
          {activeMenu ? (
            <LunchDiningIcon fontSize="large" onClick={changeMenu} />
          ) : (
            <MenuIcon fontSize="large" onClick={changeMenu} />
          )}
          <div style={{ display: "flex" }}>
            <img src={logo} alt="logo" />
            <div
              style={{ display: "flex", flexDirection: "column", margin: 0 }}
            >
              <p style={{ margin: 0 }}>Cinema</p>
              <p style={{ margin: 0 }}>Online</p>
            </div>
          </div>
        </div>

        <SelectSmall />

        <ThemeButton />
      </SectionHeader>
      {activeMenu ? (
        <Menu theme={themeContextData.themeStyle}>
          <NavLink
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
          <div>BurgerMenu</div>
          <div>BurgerMenu</div>
          <NavLink
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
