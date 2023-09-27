import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionFindProps {
  themeStyles: Theme;
}

interface AllFavoriteFilmsProps {
  themeStyles: Theme;
}

export const SectionAccount = styled.div<SectionFindProps>`
  width: 100vw;
  height: 100%;
  padding: 20px 0;

  font-size: ${({ themeStyles }) => themeStyles.fontSize};
  background: ${({ themeStyles }) => themeStyles.background};
  color: ${({ themeStyles }) => themeStyles.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
`;

export const AllFavoriteFilms = styled.div<AllFavoriteFilmsProps>`
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
