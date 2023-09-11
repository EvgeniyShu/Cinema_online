import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionHeaderProps {
  theme: Theme;
}
interface CustomInputProps {
  theme: Theme;
}

interface MenuProps {
  theme: Theme;
}

export const SectionHeader = styled.div<SectionHeaderProps>`
  width: 100%;
  background-color: ${(props) => props.theme.background};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  box-sizing: border-box;
  color: ${(props) => props.theme.color};
`;

export const CustomInput = styled.div<CustomInputProps>`
  width: 40%;
  height: 50px;
  border-radius: 25px;
  border: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div<MenuProps>`
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 70px;
  left: 0;
  z-index: 10;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;
