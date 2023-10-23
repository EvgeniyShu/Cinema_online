import { styled } from "styled-components";
import { Theme } from "../../../themeContext/themes";

interface MenuProps {
  theme: Theme;
}

export const HeaderMenu = styled.div<MenuProps>`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};

  gap: 50px;

  @media (width < 640px) {
    flex-direction: column;
    height: 100vh;
    background-color: ${(props) => props.theme.background};
  }
`;
