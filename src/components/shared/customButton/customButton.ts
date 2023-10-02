import styled from "styled-components";
import { Theme } from "../../themeContext/themes";

interface CustomLinkMenuProps {
  themestyles: Theme;
}

export const CustomButton = styled.button<CustomLinkMenuProps>`
  margin: 0px auto 0px auto;
  background: transparent;
  color: ${({ themestyles }) => themestyles.text};
  cursor: pointer;
  padding: 10px;
  border: none;
  outline: 1px solid ${({ themestyles }) => themestyles.text};
  outline-offset: -2px;
  font-size: ${({ themestyles }) => themestyles.fontSize};
  border-radius: 3px;
  transition: all 0.1s ease-out;

  &:hover {
    outline-offset: 2px;
  }
`;
