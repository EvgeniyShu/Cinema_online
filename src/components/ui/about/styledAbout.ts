import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionAboutProps {
  themestyles: Theme;
}

interface CardProps {
  themestyles: Theme;
}

export const SectionAbout = styled.div<SectionAboutProps>`
  width: 99vw;
  height: 100vh;
  font-size: ${({ themestyles }) => themestyles.fontSize};
  background: ${({ themestyles }) => themestyles.background};
  color: ${({ themestyles }) => themestyles.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
`;

export const Card = styled.div<CardProps>`
  padding: 30px;
  border-radius: 10px;
  width: 230px;
  height: 30vh;
  background: ${({ themestyles }) => themestyles.linear};
  line-height: 32px;

  &:hover {
    background: ${({ themestyles }) => themestyles.body};
  }
`;
