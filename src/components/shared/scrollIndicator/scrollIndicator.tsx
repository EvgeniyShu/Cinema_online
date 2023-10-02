import { useEffect, useState } from "react";
import { ProgressBar, ProgressContainer } from "./styledScrollIndicator";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";

export const ScrollIndicator = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    setScroll(
      (window.scrollY /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
        100
    );
  };

  return (
    <ProgressContainer theme={themeContextData.themeStyle}>
      <ProgressBar
        theme={themeContextData.themeStyle}
        width={scroll}
      ></ProgressBar>
    </ProgressContainer>
  );
};
