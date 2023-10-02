import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface RaitingProps {
  rate: number;
}

interface BunnerCProps {
  backgroundimg: string;
}

interface ScrollButtonProps {
  themestyles: Theme;
}
export const BunnerC = styled.div<BunnerCProps>`
  max-width: 100vw;
  height: 100%;
  padding-top: 10px;
  background: url("${(props) => props.backgroundimg}") 50% 50% no-repeat,
    linear-gradient(to bottom, black 0%, transparent 250%),
    url("${(props) => props.backgroundimg}") 50% 50% no-repeat;
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
  align-items: flex-end;
  gap: 20px;

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

    cursor: pointer;
  }
`;

export const LeftScrollButton = styled.div<ScrollButtonProps>`
  position: absolute;
  bottom: 100px;
  left: 20px;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ themestyles }) => themestyles.text};
  color: ${({ themestyles }) => themestyles.background};
  font-size: 25px;
`;

export const RightScrollButton = styled.div<ScrollButtonProps>`
  position: absolute;
  bottom: 100px;
  right: 20px;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ themestyles }) => themestyles.text};
  color: ${({ themestyles }) => themestyles.background};
  font-size: 25px;
`;
