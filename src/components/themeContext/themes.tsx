import React, { FC, useContext, useState } from "react";

export const ThemeContext = React.createContext({} as InitialContextProps);
export const useThemeContext = () => useContext(ThemeContext);

enum Colors {
  light = "#e6e5ee",
  Scarlet = "#FF2400",
  DARK = "#000000",
  Turquoise = "#3F888F",
  BLUE = "#ABCDEF",
  CORAL = "#FF7F50",
  Orange = "#FFB02E",
  DARK_BLUE = "#1164B4",
  DARK_GREEN = "#01796F",
}

export type ThemeType = "light" | "dark";

export interface Theme {
  body: Colors;
  text: Colors;
  color: Colors;
  background: Colors;
  fontSize: string;
  linear: string;
}

type ThemesType = Record<ThemeType, Theme>;

export const Themes: ThemesType = {
  light: {
    body: Colors.BLUE,
    text: Colors.DARK,
    color: Colors.DARK,
    background: Colors.light,
    fontSize: "18px",
    linear: "linear-gradient(to bottom, white 0%, transparent 50%)",
  },
  dark: {
    body: Colors.DARK_GREEN,
    text: Colors.Orange,
    color: Colors.Orange,
    background: Colors.DARK,
    fontSize: "14px",
    linear: "linear-gradient(to bottom, black 0%, transparent 13%)",
  },
};

export interface InitialContextProps {
  themeStyle: Theme;
  theme: string;
  changeTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>("dark");
  const initialContext: InitialContextProps = {
    themeStyle: Themes[theme],
    theme: theme,
    changeTheme: setTheme,
  };

  return (
    <ThemeContext.Provider value={initialContext}>
      <div className="container">{children}</div>
    </ThemeContext.Provider>
  );
};
