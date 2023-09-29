import styled from "styled-components";
import { Theme } from "../../themeContext/themes";

interface BackgroundProps {
  background: string;
}

interface LogoProps {
  index?: number;
  background: string;
}

interface TextAreaPremiumProps {
  themeStyles: Theme;
}

export const SectionPremium = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const Background = styled.div<BackgroundProps>`
  background: url("${(props) => props.background}") 100% 100% no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: relative;

  color: orange;
`;

export const TextAreaPremium = styled.div<TextAreaPremiumProps>`
  font-size: ${({ themeStyles }) => themeStyles.fontSize};
  background: ${({ themeStyles }) => themeStyles.background};
  color: ${({ themeStyles }) => themeStyles.text};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 10;
`;

export const Text = styled.div<TextAreaPremiumProps>`
  font-size: ${({ themeStyles }) => themeStyles.fontSize};
  background: ${({ themeStyles }) => themeStyles.background};
  color: ${({ themeStyles }) => themeStyles.text};
  width: 100vw;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 10;
`;

export const BlackLogo = styled.div<LogoProps>`
  background: url("${(props) => props.background}") 100% 100% no-repeat;
  background-size: cover;
  width: 200px;
  height: 200px;
  position: relative;
  left: 0;
  top: 0;
  z-index: ${(props) => props.index};
`;

export const OrangeLogo = styled.div<LogoProps>`
  background: url("${(props) => props.background}") 100% 100% no-repeat;
  background-size: cover;
  width: 200px;
  height: 200px;
  position: relative;
  left: 0;
  top: 0;
  z-index: ${(props) => props.index};
`;

export const ParallaxH1 = styled.h1`
  color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
`;
