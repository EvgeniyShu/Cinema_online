import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import { CustomInput } from "./styledHeader";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../shared/customButton/customButton";

export default function SelectSmall() {
  const [find, setFind] = React.useState("");
  const themeContextData: InitialContextProps = useThemeContext();

  const navigate = useNavigate();
  const handleChange = (event: SelectChangeEvent) => {
    setFind(event.target.value);
  };

  const ButtonClick = (event: any) => {
    const inputValue = event.target.previousElementSibling.value;

    navigate(`/find`, {
      replace: false,
      state: { find: inputValue, select: find },
    });
  };

  return (
    <CustomInput theme={themeContextData.themeStyle}>
      <div>
        <SearchIcon fontSize="large" />
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Критерий поиска</InputLabel>
          <Select
            color={themeContextData.theme === "dark" ? "warning" : "primary"}
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={find}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem
              color={themeContextData.theme === "dark" ? "warning" : "primary"}
              value={"name"}
            >
              Название
            </MenuItem>
            <MenuItem value={"actor"}>Актёр</MenuItem>
            <MenuItem value={"regisser"}>Режиссёр</MenuItem>
            <MenuItem value={"year"}>Год</MenuItem>
          </Select>
        </FormControl>
      </div>
      <input id="input" />
      <CustomButton
        themeStyles={themeContextData.themeStyle}
        onClick={ButtonClick}
      >
        ok
      </CustomButton>
    </CustomInput>
  );
}
