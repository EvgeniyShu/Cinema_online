import { styled } from "styled-components";

interface FilmRateProps {
  rate: number;
}

export const FilmRate = styled.div<FilmRateProps>`
  padding: 2px;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  color: #000;
  background-color: ${({ rate }) =>
    rate > 8 ? "green" : rate >= 6 ? "orange" : rate >= 4 ? "yellow" : "red"};
`;
