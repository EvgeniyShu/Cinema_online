import styled from "styled-components";
import { Theme } from "../../themeContext/themes";

interface FilmRateProps {
  rate: number;
}

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
  width: 100vw;
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
  width: 100vw;
  height: 70vh;
  box-sizing: border-box;
`;

export const FilmOffer = styled.div<FilmOfferProps>`
  margin-top: 50px;
  background-color: ${({ themeStyles }) => themeStyles.background};
  border: 1px solid ${({ themeStyles }) => themeStyles.text};
  padding: 10px;
  border-radius: 8px;
  width: 75vw;
  height: 380px;
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
`;

export const FilmRecomendations = styled.div<FilmRecomendationsProps>`
  width: 100%;
  height: 360px;
  padding: 10px;
  box-sizing: border-box;
  background-color: none;
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  box-sizing: border-box;
`;

export const FilmRecomendationsImg = styled.img`
  border-radius: 10px;
  width: 150px;
  height: 220px;
  position: relative;
  cursor: pointer;
`;

export const FilmText = styled.div<FilmTextProps>`
  width: 150px;
  height: 20px;
  color: ${({ themeStyles }) => themeStyles.text};
  margin: 0;
  padding: 0;
`;

export const FilmRate = styled.div<FilmRateProps>`
  padding: 2px;
  border-radius: 3px;
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${({ rate }) =>
    rate > 8 ? "green" : rate >= 6 ? "orange" : rate >= 4 ? "yelloy" : "red"};
`;
