import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionHeaderProps {
  theme: Theme;
}

interface MenuProps {
  theme: Theme;
}

interface LogoWrapperProps {
  theme: Theme;
}

export const SectionHeader = styled.div<SectionHeaderProps>`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.background};

  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  box-sizing: border-box;

  color: ${(props) => props.theme.color};
  @media (width < 380px) {
    padding: 10px;
    gap: 5px;
  }
`;

export const Menu = styled.div<MenuProps>`
  width: 100vw;
  height: 80px;
  position: absolute;
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
  @media (width < 640px) {
    flex-direction: column;
    height: 100vh;
    background-color: ${(props) => props.theme.background};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;

  @media (width < 800px) {
    gap: 20px;
  }
  @media (width < 600px) {
    gap: 10px;
  }
  @media (width < 380px) {
    gap: 2px;
  }
`;

export const LogoWrapper = styled.div<LogoWrapperProps>`
  display: flex;
  gap: 5px;
  color: ${(props) => props.theme.text};

  @media (width < 380px) {
    gap: 2px;
  }
`;

export const LogoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  font-size: 19px;
  @media (width < 380px) {
    gap: 2px;
  }
`;
