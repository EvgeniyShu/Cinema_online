import { useAppSelector } from "../../redux/store/reduxStore";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { RotateCard } from "../../shared/rotateCard/rotate";
import { Banner } from "../banner/banner";
import {
  BannerWrap,
  CardSize,
  FilmOffer,
  FilmRecomendations,
  HelloPageSection,
} from "./styledHelloPage";

export const HelloPage = () => {
  const themeContextData: InitialContextProps = useThemeContext();

  const {
    TopFilmData: films,
    premieresFilm: premiere,
    recomendetFilm: recomendet,
    error,
    loading,
  } = useAppSelector((state) => state);

  if (loading) {
    return (
      <div style={{ padding: 200 }}>
        <CircularProgress color="secondary" /> Loading...
      </div>
    );
  }

  return (
    <HelloPageSection themeStyles={themeContextData.themeStyle}>
      {error ? (
        <div style={{ padding: 200 }}>Ошибка в получении данных с сервера</div>
      ) : (
        <>
          <BannerWrap>
            <Banner></Banner>
          </BannerWrap>

          <FilmOffer themeStyles={themeContextData.themeStyle}>
            <div>Премьеры</div>
            <FilmRecomendations themeStyles={themeContextData.themeStyle}>
              {premiere.map((item) => (
                <div style={{ position: "relative" }}>
                  <CardSize>
                    <RotateCard
                      backgroundImg={item.posterUrl}
                      id={item.kinopoiskId}
                      text={item.nameRu}
                      rating={undefined}
                    />
                  </CardSize>
                </div>
              ))}
            </FilmRecomendations>
          </FilmOffer>

          <FilmOffer themeStyles={themeContextData.themeStyle}>
            <div>Топ фильмы</div>
            <FilmRecomendations themeStyles={themeContextData.themeStyle}>
              {films.map((item) => (
                <div style={{ position: "relative" }}>
                  <CardSize>
                    <RotateCard
                      backgroundImg={item.posterUrl}
                      id={item.filmId}
                      text={item.nameRu}
                      rating={item.rating}
                    />
                  </CardSize>
                </div>
              ))}
            </FilmRecomendations>
          </FilmOffer>
          <FilmOffer themeStyles={themeContextData.themeStyle}>
            <div>Рекомендаии</div>
            <FilmRecomendations themeStyles={themeContextData.themeStyle}>
              {recomendet.map((item) => (
                <div style={{ position: "relative" }}>
                  <CardSize>
                    <RotateCard
                      backgroundImg={item.posterUrl}
                      id={item.filmId}
                      text={item.nameRu}
                      rating={Number(item.rating)}
                    />
                  </CardSize>
                </div>
              ))}
            </FilmRecomendations>
          </FilmOffer>
        </>
      )}
    </HelloPageSection>
  );
};
