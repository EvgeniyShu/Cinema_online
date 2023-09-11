import { useLocation, useNavigate } from "react-router-dom";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { SectionFind } from "./styledFind";

export const Find = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  const dataFromNavigate = useLocation();

  console.log(dataFromNavigate);
  return (
    <SectionFind themeStyles={themeContextData.themeStyle}>find</SectionFind>
  );
};
