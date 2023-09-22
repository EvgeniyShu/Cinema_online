import styled from "styled-components";
import { Theme } from "../../themeContext/themes";

interface MyButtonProps {
  themeStyles: Theme;
}

export const Themebutton = styled.button<MyButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ themeStyles }) => themeStyles.background};
  border: 3px solid ${({ themeStyles }) => themeStyles.text};
  border-radius: 50%;
  padding: 5px 6.5px;
  cursor: pointer;
`;
