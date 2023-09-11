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

export const SectionCurrentFilm = styled.div<SectionCurrentFilmProps>`
  hight: 100%;
  color: ${({ themeStyles }) => themeStyles.text};
  font-size: ${({ themeStyles }) => themeStyles.fontSize};
  padding-top: 120px;
  background: ${({ themeStyles }) => themeStyles.background};
  text-align: center;
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
`;

export const CurrentFilmImg = styled.img`
  margin-left: 50px;
  border: 0px solid #000;
  border-radius: 10px;
`;

export const CurrentFilmText = styled.div<CurrentFilmTextPops>`
  margin-right: 50px;
  padding: 50px;
  text-align: right;
  background: ${({ themeStyles }) => themeStyles.linear};
`;

export const SimilarFilmsWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  height: 370px;
  overflow-x: scroll;
`;

export const SimilarFilmsImg = styled.img`
  height: 280px;
`;

export const BasicTabsrap = styled.div`
  width: 80vw;
  margin: 10px auto;
  box-sizing: border-box;
  color: orange;
`;

export const Player = styled.div`
  width: 80%;
  height: 500px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
