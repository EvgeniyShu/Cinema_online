import { useTransition, animated } from "react-spring";
import React from "react";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { CustomButton } from "../../shared/customButton/customButton";
import { SliderWrapper, Wrapper } from "./styledCurrentFilm";

export const Slider = (array: any) => {
  const [index, setIndex] = React.useState(0);
  const items = array.children;

  const themeContextData: InitialContextProps = useThemeContext();

  const transitions = useTransition(items[index], {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <>
      <SliderWrapper>
        {transitions((style, item) => (
          <animated.div
            style={{
              ...style,
              width: "100%",
              height: "100%",
              background: `url( ${item.imageUrl}) 100% 100% no-repeat`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              position: "absolute",
              left: "0",
              margin: "0 auto",
            }}
          ></animated.div>
        ))}
      </SliderWrapper>

      <CustomButton
        themeStyles={themeContextData.themeStyle}
        onClick={() => setIndex((state) => (state - 1) % items.length)}
      >
        Предыдущий
      </CustomButton>
      <CustomButton
        themeStyles={themeContextData.themeStyle}
        onClick={() => setIndex((state) => (state + 1) % items.length)}
      >
        Следующий
      </CustomButton>
    </>
  );
};
