import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionFindProps {
  themeStyles: Theme;
}

export const SectionFind = styled.div<SectionFindProps>`
  width: 100vw;
  height: 100vh;
  font-size: ${({ themeStyles }) => themeStyles.fontSize};
  background: ${({ themeStyles }) => themeStyles.background};
  color: ${({ themeStyles }) => themeStyles.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
