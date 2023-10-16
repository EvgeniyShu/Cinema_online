import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionEmptyProps {
  themestyles: Theme;
}

export const SectionFooter = styled.div<SectionEmptyProps>`
  position: relative;
  width: 100vw;
  height: 110px;
  border-top: 1px solid ${({ themestyles }) => themestyles.text};
  font-size: ${({ themestyles }) => themestyles.fontSize};
  background: ${({ themestyles }) => themestyles.background};
  color: ${({ themestyles }) => themestyles.text} !important;
  font-family: "Sofia Sans", sans-serif;
`;

export const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 50px;
  @media (width<506px) {
    align-items: flex-end;
    justify-content: end;
    padding-right: 10px;
  }
  @media (width<400px) {
    gap: 20px;
  }
`;

export const FooterText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 70px;

  display: grid;
  grid-template-areas:
    "ar1 ar1 ar1"
    "ar2 ar3 ar3"
    "ar2 ar3 ar3";
`;

export const Cinema = styled.p`
  grid-area: ar1;
  height: 35px;
  margin: 0;
  padding: 0;
  align-self: center;
  justify-self: center;
  font-size: 28px;
`;
export const On = styled.p`
  grid-area: ar2;
  height: 25px;
  margin: 0;
  padding: 3px;
  writing-mode: vertical-rl;
  transform: scale(-1);
  align-self: center;
  justify-self: center;
  border: 1px solid red;
  background-color: red;
  border-radius: 5px;
  color: white;
`;

export const Line = styled.p`
  grid-area: ar3;
  height: 35px;
  margin: 0;
  padding: 0;
  align-self: end;
  justify-self: end;
  font-size: 28px;
`;
