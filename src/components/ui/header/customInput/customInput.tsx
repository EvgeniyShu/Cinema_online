import React, { useEffect, useState } from "react";
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
  const [find, setFind] = React.useState("");
  const [select, setSelect] = React.useState("name");
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFind(event.target.value);
  };

  function changeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelect(event.target.value);
  }

  const ButtonClick = (event: any) => {
    navigate(`/find/${select + find}`, {
      replace: false,
      state: { find: find, select: select },
    });
  };

  return (
    <CustomInputWrapper theme={themeContextData.themeStyle}>
      <SearchIcon fontSize="large" />
      <form>
        <CustomSelect
          theme={themeContextData.themeStyle}
          value={select}
          onChange={changeSelect}
        >
          <CustomOption theme={themeContextData.themeStyle} value="name">
            Название
          </CustomOption>
          <CustomOption theme={themeContextData.themeStyle} value="person">
            Режиссёр/актер
          </CustomOption>
          <CustomOption theme={themeContextData.themeStyle} value="year">
            Год
          </CustomOption>
          <CustomOption theme={themeContextData.themeStyle} value="country">
            Страна
          </CustomOption>
          <CustomOption theme={themeContextData.themeStyle} value="genre">
            Жанр
          </CustomOption>
        </CustomSelect>
      </form>
      <CustomInput
        theme={themeContextData.themeStyle}
        id="find"
        onChange={handleChange}
      />
      <CustomButton
        themestyles={themeContextData.themeStyle}
        onClick={ButtonClick}
      >
        ok
      </CustomButton>
    </CustomInputWrapper>
  );
};
