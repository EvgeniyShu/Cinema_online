import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { FooterText, SectionFooter, Wrapper } from "./styledFooter";

export const Footer = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  return (
    <>
      <SectionFooter themeStyles={themeContextData.themeStyle}>
        <Wrapper>
          <a
            style={{ color: themeContextData.themeStyle.text }}
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon fontSize="large" />
          </a>
          <a
            style={{ color: themeContextData.themeStyle.text }}
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon fontSize="large" />
          </a>
          <a
            style={{ color: themeContextData.themeStyle.text }}
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon fontSize="large" />
          </a>
          <a
            style={{ color: themeContextData.themeStyle.text }}
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon fontSize="large" />
          </a>
        </Wrapper>
        <FooterText>2023</FooterText>
      </SectionFooter>
    </>
  );
};
