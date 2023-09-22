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
    <Themebutton
      onClick={changeTheme}
      themeStyles={themeContextData.themeStyle}
    >
      <div>
        {themeContextData.theme === "light" ? (
          <LightModeIcon color="warning" />
        ) : (
          <DarkModeIcon color="warning" />
        )}
      </div>
    </Themebutton>
  );
};

export default ThemeButton;
