import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionEmptyProps {
  themeStyles: Theme;
}

export const SectionFooter = styled.div<SectionEmptyProps>`
  width: 100vw;
  height: 100px;
  font-size: ${({ themeStyles }) => themeStyles.fontSize};
  background: ${({ themeStyles }) => themeStyles.background};
  color: ${({ themeStyles }) => themeStyles.text} !important;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 50px;
`;

export const FooterText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;
