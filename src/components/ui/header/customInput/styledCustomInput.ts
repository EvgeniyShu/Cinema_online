import { styled } from "styled-components";
import { Theme } from "../../../themeContext/themes";

interface CustomInputWrapperProps {
  theme: Theme;
}

interface CustomSelectProps {
  theme: Theme;
}

interface CustomOptionProps {
  theme: Theme;
}

interface CustomInputProps {
  theme: Theme;
}

interface SearchButtonProps {
  theme: Theme;
}

export const CustomInputWrapper = styled.div<CustomInputWrapperProps>`
  width: 35%;
  height: 50px;
  border-radius: 25px;
  border: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  @media (width < 890px) {
    position: absolute;

    z-index: 6;
    margin: 0 auto;
    width: calc(100% - 84px);
    top: 80px;
  }
  @media (width < 380px) {
    width: calc(100% - 44px);
  }
`;

export const CustomSelect = styled.select<CustomSelectProps>`
  width: 100%;
  height: 47px;
  border: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

export const CustomOption = styled.option<CustomOptionProps>`
  flex-shrink: 2;
  border: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

export const CustomInput = styled.input<CustomInputProps>`
  display: flex;
  width: 120px;
  height: 80%;
  flex-shrink: 6;
  flex-grow: 1;
  border: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

export const SearchButton = styled.div<SearchButtonProps>`
  color: ${({ theme }) => theme.text};
  width: 44px;
  height: 44px;
  line-height: 44px;
  cursor: pointer;
  border: none;
  outline: 3px solid ${({ theme }) => theme.text};
  outline-offset: -2px;
  border-radius: 50%;
  transition: all 0.1s ease-out;

  &:hover {
    outline-offset: 2px;
  }

  @media (width < 890px) {
    display: block;
  }
`;
