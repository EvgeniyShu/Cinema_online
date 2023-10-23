import { motion, useScroll, useSpring } from "framer-motion";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import "./scrollIndicator.css";

export const ScrollIndicator = () => {
  const themeContextData: InitialContextProps = useThemeContext();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="progress-bar"
      style={{ scaleX, backgroundColor: themeContextData.themeStyle.color }}
    />
  );
};
