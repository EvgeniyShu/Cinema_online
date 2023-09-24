import styled from "styled-components";
import { Theme } from "../../themeContext/themes";

interface MyButtonProps {
  theme: Theme;
}

export const Themebutton = styled.button<MyButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  line-height: 44px;
  background-color: ${({ theme }) => theme.background};
  border: none;
  outline: 3px solid ${({ theme }) => theme.text};
  outline-offset: -2px;
  border-radius: 50%;
  transition: all 0.1s ease-out;

  border-radius: 50%;
  padding: 5px 6.5px;
  cursor: pointer;
  &:hover {
    outline-offset: 2px;
  }
`;
