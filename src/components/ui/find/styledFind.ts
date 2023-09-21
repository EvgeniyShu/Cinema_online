import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionFindProps {
  themeStyles: Theme;
}

export const SectionFind = styled.div<SectionFindProps>`
  width: 100vw;
  padding: 20px 0;

  font-size: ${({ themeStyles }) => themeStyles.fontSize};
  background: ${({ themeStyles }) => themeStyles.background};
  color: ${({ themeStyles }) => themeStyles.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SectionFindWrapper = styled.div`
  width: 90vw;
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 400px);
  grid-gap: 20px;
  @media (width < 1000px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(7, 400px);
  }
  @media (width < 880px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, 50vh);
  }
  @media (width < 580px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(20, 50vh);
  }
`;

export const SectionFindImg = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  
  
  }
`;
