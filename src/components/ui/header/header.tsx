import { useState } from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import SearchOffIcon from "@mui/icons-material/SearchOff";
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
import {
  AuthContextProps,
  useAuthContext,
} from "../../authContext/authContext";
import { CustomButton } from "../../shared/customButton/customButton";
import { SignIn } from "../signIn/signIn";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/reduxStore";
import { removeUser } from "../../redux/reducers/authReducer";
import { auth } from "../../../firebase";

export const Header = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  const authContext: AuthContextProps = useAuthContext();
  const logo = require("./favicon.png");
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const changeMenu = () => {
    setActiveMenu((prev) => !prev);
  };

  const changeSearch = () => {
    setActiveSearch((prev) => !prev);
  };

  const handleLogOut = async () => {
    await signOut(auth);
    authContext.visible();
    dispatch(removeUser());
    setTimeout(changeMenu, 1000);
  };

  return (
    <>
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
      </SectionHeader>

      {activeMenu ? (
        <Menu theme={themeContextData.themeStyle}>
          {authContext.userAuth ? (
            <>
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
                onClick={() => {
                  setTimeout(changeMenu, 1000);
                }}
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
                to="/account"
              >
                Личный кабинет
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
                to="/about"
              >
                О нас
              </NavLink>

              <div style={{ width: 86 }}>
                <CustomButton
                  onClick={handleLogOut}
                  themestyles={themeContextData.themeStyle}
                >
                  Выйти
                </CustomButton>
              </div>
            </>
          ) : (
            <>
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
                создать аккаунт
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
                to="/about"
              >
                О нас
              </NavLink>
            </>
          )}
        </Menu>
      ) : (
        ""
      )}
    </>
  );
};
