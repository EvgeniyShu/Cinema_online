import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { SectionAbout, Card } from "./styledAbout";

export const About = () => {
  const themeContextData: InitialContextProps = useThemeContext();

  return (
    <SectionAbout themestyles={themeContextData.themeStyle}>
      <Card themestyles={themeContextData.themeStyle}>
        <p>
          Самый популярный у пользователей онлайн-кинотеатр с очень большим
          количеством бесплатного контента.
        </p>
      </Card>
      <Card themestyles={themeContextData.themeStyle}>
        <p>
          Специализируется на базе рынка легального профессионального видео –
          сериалов, художественных и документальных фильмов, телевизионных
          передач.
        </p>
      </Card>
      <Card themestyles={themeContextData.themeStyle}>
        <p>
          Мы сотрудничаем со многими российскими и зарубежными
          правообладателями.
        </p>
      </Card>
      <Card themestyles={themeContextData.themeStyle}>
        <p>
          База контента обновляется быстро. При желании, можно приобрести ссылку
          на скачивание фильма.
        </p>
      </Card>
      <Card themestyles={themeContextData.themeStyle}>
        <p>
          Большая часть видео поддерживает сразу несколько звуковых дорожек.
        </p>
      </Card>
    </SectionAbout>
  );
};
