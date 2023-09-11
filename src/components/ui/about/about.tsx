import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { SectionAbout, SectionAboutText } from "./styledAbout";

export const About = () => {
  const themeContextData: InitialContextProps = useThemeContext();

  return (
    <SectionAbout themeStyles={themeContextData.themeStyle}>
      <SectionAboutText>
        Самый популярный у пользователей онлайн-кинотеатр с очень большим
        количеством бесплатного контента. Специализируется на базе рынка
        легального профессионального видео – сериалов, художественных и
        документальных фильмов, телевизионных передач. Большую часть контента
        всех проектов можно просмотреть бесплатно и без регистрации. Мы
        сотрудничаем со многими российскими и зарубежными правообладателями.
        База контента обновляется быстро. При желании, можно приобрести ссылку
        на скачивание фильма. Большая часть видео поддерживает сразу несколько
        звуковых дорожек.
      </SectionAboutText>
    </SectionAbout>
  );
};
