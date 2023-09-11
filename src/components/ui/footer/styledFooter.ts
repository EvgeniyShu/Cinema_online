import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionEmptyProps {
  themeStyles: Theme;
}

export const SectionFooter = styled.div<SectionEmptyProps>`
  width: 100vw;
  height: 200px;
  font-size: ${({ themeStyles }) => themeStyles.fontSize};
  background: ${({ themeStyles }) => themeStyles.background};
  color: ${({ themeStyles }) => themeStyles.text} !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 50px;
`;
