import { styled } from "styled-components";
import { Theme } from "../../themeContext/themes";

interface SectionAboutProps {
  themeStyles: Theme;
}

export const SectionAbout = styled.div<SectionAboutProps>`
  width: 100vw;
  height: 100%;
  font-size: ${({ themeStyles }) => themeStyles.fontSize};
  background: ${({ themeStyles }) => themeStyles.background};
  color: ${({ themeStyles }) => themeStyles.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SectionAboutText = styled.div`
  border-bottom: 800px solid #2f73b6; /*высота трапеции и её фоновый цвет*/
  border-left: 180px solid transparent; /*наклон левой границы*/
  border-right: 180px solid transparent; /*наклон правой границы*/
  height: 0; /*это значение высоты должно быть равным 0*/
  width: 500px; /*ширина трапеции*/
  margin: 20px auto; /*выравнивание блока по центру и отступы сверху и снизу*/

  line-height: 50px; /*высота строки текста*/
  transform: rotateX(50deg);
  text-align: left;
  font-size: 50px;
`;
