import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";

interface BasicTabsProps {
  children: React.ReactNode[];
}

export default function LabTabs({ children }: BasicTabsProps) {
  const [value, setValue] = React.useState("1");
  const themeContextData: InitialContextProps = useThemeContext();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              style={{
                color: themeContextData.themeStyle.text,
                fontSize: 10,
                background: themeContextData.themeStyle.background,
                padding: 5,
                fontFamily: '"Sofia Sans", sans-serif',
              }}
              label="Смотреть онлайн"
              value="1"
            />
            <Tab
              style={{
                color: themeContextData.themeStyle.text,
                fontSize: 10,
                background: themeContextData.themeStyle.background,
                padding: 5,
                fontFamily: '"Sofia Sans", sans-serif',
              }}
              label="Похожие фильмы"
              value="2"
            />
            <Tab
              style={{
                color: themeContextData.themeStyle.text,
                fontSize: 10,
                background: themeContextData.themeStyle.background,
                padding: 5,
                fontFamily: '"Sofia Sans", sans-serif',
              }}
              label="Постеры к фильму"
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1">{children[0]}</TabPanel>
        <TabPanel value="2">{children[1]}</TabPanel>
        <div
          style={{
            background: `linear-gradient(to bottom, ${themeContextData.themeStyle.background} 50%, transparent 130%)`,
            borderRadius: 10,
          }}
        >
          <TabPanel value="3">{children[2]}</TabPanel>
        </div>
      </TabContext>
    </Box>
  );
}
