import styled from "styled-components";
import { Theme } from "../../themeContext/themes";

interface HelloPageSectionProps {
  themestyles: Theme;
}

interface filterButtonProps {
  themestyles: Theme;
}

interface StickyProps {
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
  width: 100%;
  height: 75vh;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

export const AllFilmRecomendations = styled.div`
  width: 70vw;
  height: 100%;
  min-height: 50vh;
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;

export const CardSize = styled.div`
  width: 200px;
  height: 300px;
  position: relative;
  align-self: center;
  justify-self: center;

  @media (width < 448px) {
    width: 200px;
    height: 330px;
  }
`;

export const FilterButton = styled.button<filterButtonProps>`
  margin: 0px;
  background: ${({ themestyles }) => themestyles.background};
  color: ${({ themestyles }) => themestyles.text};
  cursor: pointer;
  padding: 5px;
  border: 1px solid ${({ themestyles }) => themestyles.text};
  border-radius: 5px;
  transition: all 0.1s ease-out;

  &:active {
    background: ${({ themestyles }) => themestyles.text};
    color: ${({ themestyles }) => themestyles.background};
  }
`;

export const GenresSection = styled.div`
  width: 75vw;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Sticky = styled.div<StickyProps>`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100vw;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ themestyles }) => themestyles.background};
`;
