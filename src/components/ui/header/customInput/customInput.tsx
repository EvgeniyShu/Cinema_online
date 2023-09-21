import React from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import {
  InitialContextProps,
  useThemeContext,
} from "../../../themeContext/themes";
import {
  CustomInput,
  CustomInputWrapper,
  CustomOption,
  CustomSelect,
} from "./styledCustomInput";
import { CustomButton } from "../../../shared/customButton/customButton";

export const CustomInputElement = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  const [find, setFind] = React.useState("name");
  const navigate = useNavigate();
  const handleChange = (event: any) => {
    setFind(event.target.value);
  };

  const ButtonClick = (event: any) => {
    const inputValue = event.target.previousElementSibling.value;

    navigate(`/find/${find + inputValue}`, {
      replace: false,
      state: { find: inputValue, select: find },
    });
  };
  return (
    <CustomInputWrapper>
      <SearchIcon fontSize="large" />
      <form>
        <CustomSelect
          theme={themeContextData.themeStyle}
          id="fruits"
          name="fruits"
          onChange={handleChange}
        >
          <CustomOption theme={themeContextData.themeStyle} value={"name"}>
            Название
          </CustomOption>
          <CustomOption theme={themeContextData.themeStyle} value={"person"}>
            Режиссёр/актер
          </CustomOption>
          <CustomOption theme={themeContextData.themeStyle} value={"year"}>
            Год
          </CustomOption>
        </CustomSelect>
      </form>
      <CustomInput theme={themeContextData.themeStyle} id="input" />
      <CustomButton
        themeStyles={themeContextData.themeStyle}
        onClick={ButtonClick}
      >
        ok
      </CustomButton>
    </CustomInputWrapper>
  );
};
