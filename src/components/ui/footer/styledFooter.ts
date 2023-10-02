import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionEmptyProps {
  themestyles: Theme;
}

export const SectionFooter = styled.div<SectionEmptyProps>`
  width: 100vw;
  height: 110px;
  border-top: 1px solid ${({ themestyles }) => themestyles.text};
  font-size: ${({ themestyles }) => themestyles.fontSize};
  background: ${({ themestyles }) => themestyles.background};
  color: ${({ themestyles }) => themestyles.text} !important;
`;

export const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 50px;
`;

export const FooterText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;
