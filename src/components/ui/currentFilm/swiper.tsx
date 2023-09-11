import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
interface BasicTabsProps {
  children: React.ReactNode[];
}

export default function BasicTabs({ children }: BasicTabsProps) {
  const [value, setValue] = React.useState(0);
  const themeContextData: InitialContextProps = useThemeContext();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            style={{ color: themeContextData.themeStyle.text }}
            label="Смотреть онлайн"
            {...a11yProps(0)}
          />
          <Tab
            style={{ color: themeContextData.themeStyle.text }}
            label="Похожие фильмы"
            {...a11yProps(1)}
          />
          <Tab
            style={{ color: themeContextData.themeStyle.text }}
            label="Постеры к фильму"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div>{children[0]}</div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div>{children[1]}</div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
