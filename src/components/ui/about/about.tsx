import { motion } from "framer-motion";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { SectionAbout, Card, CardsWrap } from "./styledAbout";

export const About = () => {
  const themeContextData: InitialContextProps = useThemeContext();

  const array = [
    " Самый популярный у пользователей онлайн-кинотеатр с очень большим количеством бесплатного контента.",
    "Специализируется на базе рынка легального профессионального видео –  сериалов, художественных и документальных фильмов, телевизионных  передач.",
    "Мы сотрудничаем со многими российскими и зарубежными правообладателями.",
    "База контента обновляется быстро. При желании, можно приобрести ссылку на скачивание фильма.",
    " Большая часть видео поддерживает сразу несколько звуковых дорожек.",
  ];

  return (
    <SectionAbout themestyles={themeContextData.themeStyle}>
      <CardsWrap>
        {array.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              scale: 0.85,
              borderRadius: 10,
              backgroundColor: themeContextData.themeStyle.color,
              color: themeContextData.themeStyle.background,
            }}
            whileInView={{
              scale: 1,
              borderRadius: 10,
              backgroundColor: themeContextData.themeStyle.background,
              color: themeContextData.themeStyle.text,
            }}
            exit={{
              scale: 0.85,
              borderRadius: 10,
              backgroundColor: themeContextData.themeStyle.color,
              color: themeContextData.themeStyle.background,
            }}
            viewport={{ amount: 0.55 }}
          >
            <Card themestyles={themeContextData.themeStyle}>{item}</Card>
          </motion.div>
        ))}
      </CardsWrap>
    </SectionAbout>
  );
};
