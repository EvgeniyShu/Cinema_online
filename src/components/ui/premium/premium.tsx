import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
  Background,
  BlackLogo,
  SectionPremium,
  Text,
  TextAreaPremium,
} from "./styledPremium";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { CustomButton } from "../../shared/customButton/customButton";

export const Premium = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  const navigate = useNavigate();

  const ref = useRef<IParallax>(null!);

  const bg1 = require("./img/Page1.jpg");
  const bg2 = require("./img/page2.jpg");
  const bg3 = require("./img/page3.webp");
  const logo = require("./img/LogoOrange.svg").default;
  const logo2 = require("./img/logo.svg").default;
  const logo3 = require("./img/LogoWhite.svg").default;
  return (
    <SectionPremium>
      <Parallax
        style={{ backgroundColor: themeContextData.themeStyle.background }}
        pages={5}
        ref={ref}
      >
        <TextAreaPremium themestyles={themeContextData.themeStyle}>
          <ParallaxLayer offset={0} speed={0.5}>
            <TextAreaPremium themestyles={themeContextData.themeStyle}>
              <h1>Фильмы</h1>
              <BlackLogo background={logo} />
            </TextAreaPremium>
            <TextAreaPremium
              themestyles={themeContextData.themeStyle}
            ></TextAreaPremium>
            <TextAreaPremium
              themestyles={themeContextData.themeStyle}
            ></TextAreaPremium>
            <TextAreaPremium themestyles={themeContextData.themeStyle}>
              <h1>Сериалы</h1>
              <BlackLogo
                background={themeContextData.theme === "dark" ? logo3 : logo2}
              />
            </TextAreaPremium>
            <TextAreaPremium
              themestyles={themeContextData.themeStyle}
            ></TextAreaPremium>
            <TextAreaPremium
              themestyles={themeContextData.themeStyle}
            ></TextAreaPremium>
            <TextAreaPremium themestyles={themeContextData.themeStyle}>
              <h1>ТВ шоу</h1>
              <BlackLogo background={logo} />
            </TextAreaPremium>
          </ParallaxLayer>
        </TextAreaPremium>
        <ParallaxLayer sticky={{ start: 1, end: 1 }} speed={-1}>
          <Background background={bg1}></Background>
          <ParallaxLayer offset={0.8} speed={0.5}>
            <Text themestyles={themeContextData.themeStyle}>
              <p>Более 100500 фильмов в хорошем качестве</p>
              <CustomButton
                onClick={() => navigate("/premium/films")}
                themestyles={themeContextData.themeStyle}
              >
                Перейти
              </CustomButton>
            </Text>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={-0.4}></ParallaxLayer>
        <ParallaxLayer sticky={{ start: 3, end: 3 }} speed={-1}>
          <Background background={bg2}></Background>
          <ParallaxLayer offset={1.9} speed={0.7}>
            <Text themestyles={themeContextData.themeStyle}>
              <p>Более 100500 сериалов в хорошем качестве</p>
              <CustomButton
                onClick={() => navigate("/premium/serials")}
                themestyles={themeContextData.themeStyle}
              >
                Перейти
              </CustomButton>
            </Text>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 5, end: 5 }} speed={-1}>
          <Background background={bg3}></Background>
          <ParallaxLayer offset={1.9} speed={0.4}>
            <Text themestyles={themeContextData.themeStyle}>
              <p>Более 100500 ТВ шоу в хорошем качестве</p>
              <CustomButton
                onClick={() => navigate("/premium/twshows")}
                themestyles={themeContextData.themeStyle}
              >
                Перейти
              </CustomButton>
              <CustomButton
                onClick={() => ref.current.scrollTo(0)}
                themestyles={themeContextData.themeStyle}
              >
                Наверх
              </CustomButton>
            </Text>
          </ParallaxLayer>
        </ParallaxLayer>
      </Parallax>
    </SectionPremium>
  );
};
