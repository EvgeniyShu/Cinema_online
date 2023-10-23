import { styled } from "styled-components";
import { Theme, ThemeType } from "../../themeContext/themes";

interface SectionSignInProps {
  themestyles: Theme;
  currenttheme: string;
}

interface SignInFormProps {
  themestyles: Theme;
}

interface SignInInputProps {
  themestyles: Theme;
}

interface SignInLabelProps {
  themestyles: Theme;
}

export const SectionSignIn = styled.div<SectionSignInProps>`
  width: 100vw;
  height: 100vh;
  font-size: ${({ themestyles }) => themestyles.fontSize};

  color: ${({ currenttheme, themestyles }) =>
    currenttheme === "light" ? themestyles.body : themestyles.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;

  top: 0;
  left: 0;
  z-index: 9;
  background: rgba(38, 35, 35, 0.44);
  display: block;
  transition: 0.5s all;
`;

export const SignInForm = styled.form<SignInFormProps>`
  width: 60vw;
  height: 70vh;
  background: transparent;
  backdrop-filter: blur(20px);
  border: 1px solid ${({ themestyles }) => themestyles.text};
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  position: relative;
  gap: 20px;

  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);

  @media (width<650px) {
    width: 80vw;
  }
`;

export const SignInLabel = styled.label<SignInLabelProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 60%;

  font-size: 25px;
`;

export const SignInInput = styled.input<SignInInputProps>`
  padding: 10px;
  width: 70%;

  background: ${({ themestyles }) => themestyles.text};
  color: ${({ themestyles }) => themestyles.background};
  border-radius: 10px;
  border: 1px solid #000;

  @media (width < 1000px) {
    width: 80%;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 19px;
  right: 30px;
  display: flex;
  gap: 20px;

  @media (width<650px) {
    top: 6px;
    right: 10px;
  }
`;
