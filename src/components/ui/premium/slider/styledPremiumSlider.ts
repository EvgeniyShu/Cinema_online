import { styled } from "styled-components";
import { Theme } from "../../../themeContext/themes";

interface SectionPremiumSliderProps {
  themestyles: Theme;
}

export const SectionPremiumSlider = styled.div<SectionPremiumSliderProps>`
  height: calc(100vh - 190px);
  width: 100vw;
  color: orange;
  background-color: ${({ themestyles }) => themestyles.background};
  @media (width < 740px) {
    height: 100%;
  }
`;

export const FilmImg = styled.img`
  border: 0px solid #000;
  border-radius: 10px;
  width: 38vw;
  height: 97%;

  @media (width < 1050px) {
    margin-left: 20px;
    margin: 0;
    padding: 10px;
    height: 50vh;
    width: 30vw;
  }
  @media (width < 740px) {
    height: 50vh;
    width: 60vw;
  }
  @media (width < 600px) {
    width: 80%;
  }
  @media (width < 400px) {
    width: 90%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 190px);
  width: 100vw;
  padding: 0px 100px;
  box-sizing: border-box;
  @media (width < 740px) {
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
`;

export const PlayButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 3px solid orange;
  border-radius: 50px;
  width: 100px;
  margin-top: 50px;
  &:hover {
    width: 185px;
    transition: width 0.5s;
    #play__p {
      display: block;
    }
  }
`;

export const PlayButtonWrapperText = styled.p`
  display: none;
`;

export const ButtonsWrap = styled.div`
  position: fixed;
  bottom: 110px;
  left: 50px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
  width: 100%;
  align-items: flex-start;
  @media (width < 740px) {
    padding-top: 20px;
    position: relative;
    bottom: 10px;
    left: 0px;
    flex-direction: row;
    height: 50px;
  }
`;
