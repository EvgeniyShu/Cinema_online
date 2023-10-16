import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { SectionFind } from "./styledFind";

export const FindPage = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  return (
    <SectionFind themestyles={themeContextData.themeStyle}>
      <h3>Введите данные для поиска</h3>
    </SectionFind>
  );
};
