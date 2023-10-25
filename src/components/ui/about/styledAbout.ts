import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionAboutProps {
  themestyles: Theme;
}

interface CardProps {
  themestyles: Theme;
}

export const SectionAbout = styled.div<SectionAboutProps>`
  width: 100vw;
  height: calc(100vh - 191px);

  font-size: ${({ themestyles }) => themestyles.fontSize};
  background: ${({ themestyles }) => themestyles.background};
  color: ${({ themestyles }) => themestyles.text};
  overflow-y: scroll;
`;

export const CardsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  margin: 100px 0;
`;

export const Card = styled.div<CardProps>`
  padding: 30px;
  border-radius: 10px;
  width: 80vw;
  height: 30vh;
  background: ${({ themestyles }) => themestyles.linear};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ themestyles }) => themestyles.body};
    color: ${({ themestyles }) => themestyles.background};
  }
`;
