import { styled } from "styled-components";
import { FilmProps } from "./filmProps";
import { Theme } from "../../themeContext/themes";

interface RaitingProps {
  rate: number;
}

interface BunnerCProps {
  backgroundImg: string;
}

interface ScrollButtonProps {
  themeStyles: Theme;
}
export const BunnerC = styled.div<BunnerCProps>`
  max-width: 100vw;
  height: 100%;
  background: url("${(props) => props.backgroundImg}") 50% 50% no-repeat,
    linear-gradient(to bottom, black 0%, transparent 250%),
    url("${(props) => props.backgroundImg}") 50% 50% no-repeat;
  background-size: contain, cover, cover;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
`;

export const FilmImgList = styled.div`
  position: relative;
`;

export const Window = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 80px;
  overflow-x: auto;
  width: 85vw;
  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BunnerFilmImg = styled.img`
  display: flex;
  width: 150px;
  height: 220px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  &: hover {
    position: relative;
    transition-duration: 0.8s;
    transition-timing-function: cubic-bezier;
    top: -20px;
    cursor: pointer;
  }
`;

export const Raiting = styled.div<RaitingProps>`
  position: absolute;
  top: 5px;
  left: 5px;
`;

export const LeftScrollButton = styled.div<ScrollButtonProps>`
  position: absolute;
  bottom: 100px;
  left: 20px;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ themeStyles }) => themeStyles.text};
  color: ${({ themeStyles }) => themeStyles.background};
  font-size: 25px;
`;

export const RightScrollButton = styled.div<ScrollButtonProps>`
  position: absolute;
  bottom: 100px;
  right: 20px;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ themeStyles }) => themeStyles.text};
  color: ${({ themeStyles }) => themeStyles.background};
  font-size: 25px;
`;
