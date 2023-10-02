import { useState } from "react";
import { useSpring, animated } from "react-spring";

import { Link } from "react-router-dom";

import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { CustomButton } from "../customButton/customButton";
import { FilmRate } from "./rotateStyle";

interface RotateCardProps {
  backgroundImg: string;
  id: number;
  text: string;
  rating: number | undefined;
  choise: "film" | "person";
}

export const RotateCard = (props: RotateCardProps) => {
  const themeContextData: InitialContextProps = useThemeContext();

  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div onClick={() => set((state) => !state)}>
      <animated.div
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          width: "100%",
          height: "100%",
          background: `url( ${props.backgroundImg}) 100% 100% no-repeat`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "absolute",
          left: "0",

          borderRadius: 10,
        }}
      >
        {props.rating !== undefined ? (
          <FilmRate rate={props.rating}>{props.rating}</FilmRate>
        ) : (
          <></>
        )}
      </animated.div>
      <animated.div
        style={{
          opacity,
          transform,
          rotateY: "180deg",
          width: "100%",
          height: "100%",
          backgroundColor: `${themeContextData.themeStyle.body}`,

          position: "absolute",
          left: "0",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: 10,
        }}
        title={props.text}
      >
        <h3
          style={{
            color: themeContextData.themeStyle.color,
            wordBreak: "break-word",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {props.text}
        </h3>
        <Link
          key={props.id}
          to={`/${props.choise}/${props.id}`}
          style={{ textDecoration: "none" }}
        >
          <CustomButton themestyles={themeContextData.themeStyle}>
            перейти
          </CustomButton>
        </Link>
      </animated.div>
    </div>
  );
};
