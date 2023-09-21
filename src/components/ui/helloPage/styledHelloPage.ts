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
  padding-top: 80px;
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
  width: 100%;
  height: 360px;
  padding: 20px;
  box-sizing: border-box;
  background-color: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  overflow-x: scroll;
  box-sizing: border-box;

  @media (width < 600px) {
    height: 100vh;
    flex-direction: column;
    padding: 0px;

    overflow-x: visible;
    overflow-y: scroll;
  }
`;

export const CardSize = styled.div`
  width: 200px;
  height: 200px;

  @media (width < 600px) {
    width: calc(100% - 150px);
    height: 40vh;
  }
`;
