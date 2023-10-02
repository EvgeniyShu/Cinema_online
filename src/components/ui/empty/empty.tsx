import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../shared/customButton/customButton";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { SectionEmpty } from "./styledEmpty";

export const Empty = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  const navigate = useNavigate();

  return (
    <SectionEmpty themestyles={themeContextData.themeStyle}>
      <p>по данному запросу ничего не найдено</p>
      <CustomButton
        onClick={() => navigate("/")}
        themestyles={themeContextData.themeStyle}
      >
        Вернуться на Главную
      </CustomButton>
    </SectionEmpty>
  );
};
