import styled from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionPeronProps {
  themestyles: Theme;
}

interface RateProps {
  rate: number;
}

interface FilmProps {
  themestyles: Theme;
}

export const SectionPeron = styled.div<SectionPeronProps>`
  hight: 100%;
  color: ${({ themestyles }) => themestyles.text};
  font-size: ${({ themestyles }) => themestyles.fontSize};
  background: ${({ themestyles }) => themestyles.background};
  font-family: "Sofia Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 350px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
  box-sizing: border-box;
  @media (width < 740px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PersonImg = styled.img`
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

export const PersonText = styled.div`
  margin-right: 50px;
  padding: 50px;
  text-align: right;
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

export const Film = styled.div<FilmProps>`
  height: 300px;
  width: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border-radius: 10px;
  justify-content: center;
  width: 80%;
  border: 1px solid orange;

  &:hover {
    background: ${({ themestyles }) => themestyles.body};
    #rate,
    #button {
      display: block;
    }
  }
`;

export const Rate = styled.div<RateProps>`
  display: none;
  padding: 2px;
  border-radius: 5px;
  padding: 5px;
  color: #000;
  background-color: ${({ rate }) =>
    rate > 8 ? "green" : rate >= 6 ? "orange" : rate >= 4 ? "yellow" : "red"};
`;

export const Grid = styled.div`
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
