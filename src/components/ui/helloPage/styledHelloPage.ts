import styled from "styled-components";
import { Theme } from "../../themeContext/themes";

interface HelloPageSectionProps {
  themestyles: Theme;
}

interface FilmOfferProps {
  themestyles: Theme;
}

export const HelloPageSection = styled.div<HelloPageSectionProps>`
  background-color: ${({ themestyles }) => themestyles.background};
  padding-bottom: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ themestyles }) => themestyles.fontSize};
  color: ${({ themestyles }) => themestyles.text};
`;

export const BannerWrap = styled.div`
  background-color: #000;
  width: 100%;
  height: 70vh;
  box-sizing: border-box;
`;

export const FilmOffer = styled.div<FilmOfferProps>`
  margin-top: 50px;
  background-color: ${({ themestyles }) => themestyles.background};

  border-radius: 8px;
  width: 75vw;
  min-height: 390px;
  overflow: hidden;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: ${({ themestyles }) => themestyles.background};
    border: 1px solid ${({ themestyles }) => themestyles.text};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ themestyles }) => themestyles.text};
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({ themestyles }) => themestyles.text};
  }

  @media (width < 600px) {
    min-height: 101vh;
  }
`;

export const FilmRecomendations = styled.div`
  display: flex;
  gap: 20px;
  height: 300px;
  padding: 20px 20px 40px 20px;
  overflow-x: scroll;

  @media (width < 600px) {
    height: 100vh;
    flex-direction: column;
    padding: 0px;
    align-items: center;
    overflow-x: visible;
    overflow-y: scroll;
  }
`;

export const AllFilmRecomendations = styled.div`
  display: grid;
  grid-gap: 20px;
  height: 100%;
  padding: 20px 20px 40px 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 300px);

  @media (width < 1160px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(7, 300px);
  }
  @media (width < 880px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, 300px);
  }
  @media (width < 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(20, 400px);
  }
`;

export const CardSize = styled.div`
  width: 200px;
  height: 300px;
  position: relative;

  @media (width < 600px) {
    width: 250px;
    height: 400px;
  }
  @media (width < 400px) {
    width: 200px;
    height: 300px;
  }
`;
