import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionCurrentFilmProps {
  themestyles: Theme;
  background: string;
}

interface FilmDescriptionProps {
  themestyles: Theme;
  background: string;
}

interface CurrentFilmTextPops {
  themestyles: Theme;
}

interface PlayerPops {
  themestyles: Theme;
}

interface SimilarFilmPops {
  themestyles: Theme;
}

export const SectionCurrentFilm = styled.div<SectionCurrentFilmProps>`
  hight: 100%;
  color: ${({ themestyles }) => themestyles.text};
  font-size: ${({ themestyles }) => themestyles.fontSize};

  background: ${({ themestyles }) => themestyles.background};
  text-align: center;
  font-family: "Sofia Sans", sans-serif;
`;

export const FilmDescription = styled.div<FilmDescriptionProps>`
  padding: 50px 0px;
  color: ${({ themestyles }) => themestyles.text};
  width: 90vw;
  margin: 0 auto;
  background: ${({ themestyles }) => themestyles.linear},
    url("${(props) => props.background}") 50% 50% no-repeat;
  background-size: cover, cover;
  @media (width < 1050px) {
    background: ${({ themestyles }) => themestyles.linear},
      ${({ themestyles }) => themestyles.body};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 90vw;
  box-sizing: border-box;
  @media (width < 740px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CurrentFilmImg = styled.img`
  margin-left: 50px;
  border: 0px solid #000;
  border-radius: 10px;
  @media (width < 1050px) {
    margin-left: 20px;
    margin: 0;
    padding: 10px;
    height: 50vh;
    width: 30vw;
  }
  @media (width < 740px) {
    height: 50vh;
    width: 40vw;
  }
  @media (width < 600px) {
    width: 80%;
  }
  @media (width < 400px) {
    width: 90%;
  }
`;

export const CurrentFilmText = styled.div<CurrentFilmTextPops>`
  margin-right: 50px;
  padding: 50px;
  text-align: right;
  background: ${({ themestyles }) => themestyles.linear};
  @media (width < 1050px) {
    margin-right: 20px;
    padding: 10px;
    margin: 0;
    height: 100%;
    width: 65vw;
  }
  @media (width < 740px) {
    width: 90%;
  }
`;

export const SimilarFilmsWrap = styled.div<SimilarFilmPops>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  margin: 0 auto 100px auto;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: ${({ themestyles }) => themestyles.background};
    border: 1px solid ${({ themestyles }) => themestyles.text};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ themestyles }) => themestyles.text};
  }

  &::-webkit-scrollbar-corner {
    background-color: ${({ themestyles }) => themestyles.text};
  }

  @media (width < 600px) {
    min-height: 101vh;
  }
`;

export const SimilarFilmsImg = styled.img`
  border-radius: 10px;
  height: 340px;
`;

export const BasicTabsrap = styled.div`
  width: 83vw;

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

  border: 1px solid ${({ themestyles }) => themestyles.text};
`;

export const SliderWrapper = styled.div`
  height: 50vh;
  width: 70vw;
  margin: 0 auto;
  position: relative;
`;
