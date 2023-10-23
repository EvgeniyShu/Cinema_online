import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionFindProps {
  themestyles: Theme;
}

export const SectionFind = styled.div<SectionFindProps>`
  width: 100vw;
  height: 100%;
  padding: 10px 20px;
  font-size: ${({ themestyles }) => themestyles.fontSize};
  background: ${({ themestyles }) => themestyles.background};
  color: ${({ themestyles }) => themestyles.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionFindWrapper = styled.div`
  width: calc(100vw - 40px);
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;

export const SectionFindImg = styled.div`
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
