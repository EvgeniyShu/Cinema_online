import { motion } from "framer-motion";
import { Sticky } from "../styledHelloPage";
import {
  InitialContextProps,
  useThemeContext,
} from "../../../themeContext/themes";

interface StickyButtonsProps {
  children: React.ReactNode;
}

export const StickyButtons = ({ children }: StickyButtonsProps) => {
  const themeContextData: InitialContextProps = useThemeContext();
  return (
    <Sticky themestyles={themeContextData.themeStyle}>
      <motion.div
        whileInView={{
          backgroundColor: themeContextData.themeStyle.background,
          color: themeContextData.themeStyle.text,
        }}
        initial={{
          backgroundColor: themeContextData.themeStyle.color,
          color: themeContextData.themeStyle.background,
        }}
        viewport={{ amount: 1 }}
      >
        {children}
      </motion.div>
    </Sticky>
  );
};
