import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface BunnerCProps {
  backgroundimg: string;
}

interface ScrollButtonProps {
  themestyles: Theme;
}

interface NameOfCurrentFilmProps {
  themestyles: Theme;
}
export const BunnerC = styled.div<BunnerCProps>`
  max-width: 100%;
  height: 95%;

  background: url("${(props) => props.backgroundimg}") 50% 50% no-repeat,
    linear-gradient(to bottom, black 0%, transparent 250%),
    url("${(props) => props.backgroundimg}") 50% 50% no-repeat;
  background-size: contain, cover, cover;
  display: flex;
  flex-direction: column-reverse;
`;

export const FilmImgList = styled.div`
  position: relative;
`;

export const Window = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: flex-end;
  gap: 20px;

  overflow-x: auto;
  overflow-y: hidden;
  width: 85vw;
  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BunnerFilmImg = styled.img`
  position: relative;
  bottom: 0;
  left: 0;
  display: flex;
  width: 150px;
  height: 220px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  &: hover {
    transition-duration: 0.8s;
    transition-timing-function: cubic-bezier;
    cursor: pointer;
  }
`;

export const LeftScrollButton = styled.div<ScrollButtonProps>`
  position: absolute;
  bottom: 100px;
  left: 20px;

  font-size: 25px;
  color: ${({ theme }) => theme.text};
  width: 44px;
  height: 44px;
  line-height: 44px;
  cursor: pointer;
  border: none;
  outline: 3px solid ${({ theme }) => theme.text};
  outline-offset: -2px;
  border-radius: 50%;
  transition: all 0.1s ease-out;
  z-index: 1;

  &:hover {
    outline-offset: 2px;
  }
  @media (width<825px) {
    left: -5px;
    outline: none;
    outline-offset: none;
  }
`;

export const RightScrollButton = styled.div<ScrollButtonProps>`
  position: absolute;
  bottom: 100px;
  right: 20px;
  font-size: 25px;
  font-size: 25px;
  color: ${({ theme }) => theme.text};
  width: 44px;
  height: 44px;
  line-height: 44px;
  cursor: pointer;
  border: none;
  outline: 3px solid ${({ theme }) => theme.text};
  outline-offset: -2px;
  border-radius: 50%;
  transition: all 0.1s ease-out;
  z-index: 1;

  &:hover {
    outline-offset: 2px;
  }
  @media (width<825px) {
    right: -5px;
    outline: none;
    outline-offset: none;
  }
`;

export const NameOfCurrentFilm = styled.p<NameOfCurrentFilmProps>`
  margin: 0 auto;
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
