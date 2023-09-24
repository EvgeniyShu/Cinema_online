import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { InitialContextProps, ThemeContext } from "../../themeContext/themes";
import { Themebutton } from "./styledThemeButton";

export const ThemeButton = () => {
  const themeContextData: InitialContextProps = useContext(ThemeContext);

  const changeTheme = () => {
    switch (themeContextData.theme) {
      case "light":
        themeContextData.changeTheme("dark");
        break;
      case "dark":
        themeContextData.changeTheme("light");
        break;
    }
  };

  return (
    <Themebutton onClick={changeTheme} theme={themeContextData.themeStyle}>
      <div style={{ marginTop: 15 }}>
        {themeContextData.theme === "light" ? (
          <LightModeIcon fontSize="large" color="warning" />
        ) : (
          <DarkModeIcon fontSize="large" color="warning" />
        )}
      </div>
    </Themebutton>
  );
};

export default ThemeButton;
