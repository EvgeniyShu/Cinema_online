import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionAboutProps {
  themeStyles: Theme;
}

export const SectionAbout = styled.div<SectionAboutProps>`
  width: 100vw;
  height: calc(100vh - 100px);
  font-size: ${({ themeStyles }) => themeStyles.fontSize};
  background: ${({ themeStyles }) => themeStyles.background};
  color: ${({ themeStyles }) => themeStyles.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SectionAboutText = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
