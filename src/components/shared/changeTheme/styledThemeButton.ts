import styled from "styled-components";
import { Theme } from "../../themeContext/themes";

interface MyButtonProps {
  themeStyles: Theme;
}

export const Themebutton = styled.button<MyButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  width: 80px;
  height: 40px;
  background-color: ${({ themeStyles }) => themeStyles.background};
  color: ${({ themeStyles }) => themeStyles.text};
  font-size: ${({ themeStyles }) => themeStyles.fontSize};
  border-color: ${({ themeStyles }) => themeStyles.text};
  border-radius: 7px;
  cursor: pointer;
`;
