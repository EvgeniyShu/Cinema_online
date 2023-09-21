import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionCurrentFilmProps {
  themeStyles: Theme;
  background: string;
}

interface FilmDescriptionProps {
  themeStyles: Theme;
  background: string;
}

interface CurrentFilmTextPops {
  themeStyles: Theme;
}

interface PlayerPops {
  themeStyles: Theme;
}

interface SimilarFilmPops {
  themeStyles: Theme;
}

export const SectionCurrentFilm = styled.div<SectionCurrentFilmProps>`
  hight: 100%;
  color: ${({ themeStyles }) => themeStyles.text};
  font-size: ${({ themeStyles }) => themeStyles.fontSize};

  background: ${({ themeStyles }) => themeStyles.background};
  text-align: center;
  font-family: "Sofia Sans", sans-serif;
`;

export const FilmDescription = styled.div<FilmDescriptionProps>`
  padding: 50px 0px;
  color: ${({ themeStyles }) => themeStyles.text};
  width: 90vw;
  margin: 0 auto;
  background: ${({ themeStyles }) => themeStyles.linear},
    url("${(props) => props.background}") 50% 50% no-repeat;
  background-size: cover, cover;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 90vw;
  box-sizing: border-box;
  @media (width < 1050px) {
    flex-direction: column;
  }
`;

export const CurrentFilmImg = styled.img`
  margin-left: 50px;
  border: 0px solid #000;
  border-radius: 10px;
  @media (width < 1050px) {
    margin: 0 10px;
  }
`;

export const CurrentFilmText = styled.div<CurrentFilmTextPops>`
  margin-right: 50px;
  padding: 50px;
  text-align: right;
  background: ${({ themeStyles }) => themeStyles.linear};
  @media (width < 1050px) {
    margin: 0 10px;
  }
`;

export const SimilarFilmsWrap = styled.div<SimilarFilmPops>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 50vh;
  overflow-x: scroll;
  margin: 0 auto 100px auto;
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

export const SimilarFilmsImg = styled.img`
  border-radius: 10px;
  height: 400px;
`;

export const BasicTabsrap = styled.div`
  width: 80vw;
  margin: 10px auto;
  box-sizing: border-box;
  color: orange;
`;

export const Player = styled.div<PlayerPops>`
  width: 90%;
  height: 50vh;
  margin: 0 auto 100px auto;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border: 1px solid ${({ themeStyles }) => themeStyles.text};
  }
`;

export const SliderWrapper = styled.div`
  height: 50vh;
  width: 70vw;
  margin: 0 auto;
  position: relative;
`;
