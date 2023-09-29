import styled from "styled-components";
import { Theme } from "../../../themeContext/themes";

interface ProgressContainerProps {
  theme: Theme;
}

interface ProgressBarProps {
  theme: Theme;
  width: number;
}

export const ProgressContainer = styled.div<ProgressContainerProps>`
  position: fixed;
  top: 5px;
  z-index: 10;
  left: 0;
  width: 100%;
  height: 3px;
  background: transparent;
`;

export const ProgressBar = styled.div<ProgressBarProps>`
  height: 3px;
  background: ${(props) => props.theme.text};
  width: ${(props) => props.width}%;
`;
