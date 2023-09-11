import styled from "styled-components";
import { Theme } from "../../themeContext/themes";

interface CustomLinkMenuProps {
  themeStyles: Theme;
}

export const CustomButton = styled.div<CustomLinkMenuProps>`
  margin: 10px auto 0px auto;
  color: ${({ themeStyles }) => themeStyles.text};
  cursor: pointer;
  padding: 10px;
  border: none;
  outline: 1px solid ${({ themeStyles }) => themeStyles.text};
  outline-offset: -2px;
  font-size: ${({ themeStyles }) => themeStyles.fontSize};
  border-radius: 3px;
  transition: all 0.1s ease-out;

  &:hover {
    outline-offset: 2px;
  }
`;
