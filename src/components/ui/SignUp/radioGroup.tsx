import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { orange, blue } from "@mui/material/colors";
import { useAuthContext } from "../../authContext/authContext";

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup();
  const authData = useAuthContext();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
    //authData.setDaysOfPremium(radioGroup.value);
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

export default function UseRadioGroup() {
  const themeContextData: InitialContextProps = useThemeContext();
  return (
    <RadioGroup name="use-radio-group" defaultValue="60">
      <MyFormControlLabel
        sx={{ p: 3 }}
        value="60"
        control={
          <Radio
            sx={{
              color:
                themeContextData.theme === "dark" ? orange[600] : blue[300],
              "&.Mui-checked": {
                color:
                  themeContextData.theme === "dark" ? orange[600] : blue[300],
              },
            }}
          />
        }
        label="60 дней премиума"
      />
      <MyFormControlLabel
        sx={{ p: 3 }}
        value="600"
        control={
          <Radio
            sx={{
              color:
                themeContextData.theme === "dark" ? orange[600] : blue[300],
              "&.Mui-checked": {
                color:
                  themeContextData.theme === "dark" ? orange[600] : blue[300],
              },
            }}
          />
        }
        label="600 дней премиума"
        color="warning"
      />
      <MyFormControlLabel
        sx={{ p: 3 }}
        value="6000"
        control={
          <Radio
            sx={{
              color:
                themeContextData.theme === "dark" ? orange[600] : blue[300],
              "&.Mui-checked": {
                color:
                  themeContextData.theme === "dark" ? orange[600] : blue[300],
              },
            }}
          />
        }
        label="6000 дней премиума"
      />
    </RadioGroup>
  );
}
