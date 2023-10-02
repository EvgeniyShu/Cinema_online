import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionEmptyProps {
  themestyles: Theme;
}

export const SectionEmpty = styled.div<SectionEmptyProps>`
  width: 100vw;
  height: 100vh;
  font-size: ${({ themestyles }) => themestyles.fontSize};
  background: ${({ themestyles }) => themestyles.background};
  color: ${({ themestyles }) => themestyles.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
