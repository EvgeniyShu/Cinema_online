import styled from "styled-components";
import { Theme } from "../../themeContext/themes";

interface HelloPageSectionProps {
  themeStyles: Theme;
}

interface FilmOfferProps {
  themeStyles: Theme;
}

interface FilmTextProps {
  themeStyles: Theme;
}

interface FilmRecomendationsProps {
  themeStyles: Theme;
}

export const HelloPageSection = styled.div<HelloPageSectionProps>`
  background-color: ${({ themeStyles }) => themeStyles.background};

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ themeStyles }) => themeStyles.fontSize};
  color: ${({ themeStyles }) => themeStyles.text};
`;

export const BannerWrap = styled.div`
  background-color: #000;
  width: 100%;
  height: 70vh;
  box-sizing: border-box;
`;

export const FilmOffer = styled.div<FilmOfferProps>`
  margin-top: 50px;
  background-color: ${({ themeStyles }) => themeStyles.background};

  border-radius: 8px;
  width: 75vw;
  min-height: 390px;
  overflow: hidden;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: ${({ themeStyles }) => themeStyles.background};
    border: 1px solid ${({ themeStyles }) => themeStyles.text};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ themeStyles }) => themeStyles.text};
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({ themeStyles }) => themeStyles.text};
  }

  @media (width < 600px) {
    min-height: 101vh;
  }
`;

export const FilmRecomendations = styled.div<FilmRecomendationsProps>`
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

export const AllFilmRecomendations = styled.div<FilmRecomendationsProps>`
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
