import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionAboutProps {
  themestyles: Theme;
}

export const SectionAbout = styled.div<SectionAboutProps>`
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

export const SectionAboutText = styled.div`
  margin-top: 200px;
  width: 60vw;
  height: 100%;
`;
