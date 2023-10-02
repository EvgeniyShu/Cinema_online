import { AppDispatch, useAppSelector } from "../../redux/store/reduxStore";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Pagination from "@mui/material/Pagination";

import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { RotateCard } from "../../shared/rotateCard/rotate";
import { Banner } from "../banner/banner";
import {
  AllFilmRecomendations,
  BannerWrap,
  CardSize,
  FilmOffer,
  FilmRecomendations,
  HelloPageSection,
} from "./styledHelloPage";
import { useDispatch } from "react-redux";
import { recomendetFilmData } from "../../redux/reducers/reduxReducers";
import { useEffect, useState } from "react";
import { ScrollIndicator } from "../../shared/scrollIndicator/scrollIndicator";

export const HelloPage = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState(1);

  const {
    TopFilmData: films,
    premieresFilm: premiere,
    recomendetFilm,
    error,
    loading,
  } = useAppSelector((state) => state);

  const { films: recomendet, pagesCount } = recomendetFilm;

  useEffect(() => {
    dispatch(recomendetFilmData(page + 1));
  }, [page]);

  if (loading) {
    return (
      <div style={{ padding: 200 }}>
        <CircularProgress color="secondary" /> Loading...
      </div>
    );
  }

  return (
    <HelloPageSection themestyles={themeContextData.themeStyle}>
      {error ? (
        <div style={{ padding: 200, height: "calc(100vh - 670px)" }}>
          Ошибка в получении данных с сервера
        </div>
      ) : (
        <>
          <BannerWrap>
            <Banner></Banner>
          </BannerWrap>

          <FilmOffer themestyles={themeContextData.themeStyle}>
            <div>Премьеры</div>
            <FilmRecomendations>
              {premiere.map((item) => (
                <div key={item.kinopoiskId} style={{ position: "relative" }}>
                  <CardSize>
                    <RotateCard
                      backgroundImg={item.posterUrl}
                      id={item.kinopoiskId}
                      text={item.nameRu}
                      rating={undefined}
                      choise={"film"}
                    />
                  </CardSize>
                </div>
              ))}
            </FilmRecomendations>
          </FilmOffer>

          <FilmOffer themestyles={themeContextData.themeStyle}>
            <div>Топ фильмы</div>
            <FilmRecomendations>
              {films.map((item) => (
                <div key={item.filmId} style={{ position: "relative" }}>
                  <CardSize>
                    <RotateCard
                      backgroundImg={item.posterUrl}
                      id={item.filmId}
                      text={item.nameRu}
                      rating={item.rating}
                      choise={"film"}
                    />
                  </CardSize>
                </div>
              ))}
            </FilmRecomendations>
          </FilmOffer>
          <FilmOffer themestyles={themeContextData.themeStyle} key={page}>
            <div>Рекомендаии</div>
            <AllFilmRecomendations>
              {recomendet.map((item) => (
                <div
                  key={item.filmId}
                  style={{
                    position: "relative",
                    alignSelf: "center",
                    justifySelf: "center",
                  }}
                >
                  <CardSize>
                    <RotateCard
                      backgroundImg={item.posterUrl}
                      id={item.filmId}
                      text={item.nameRu}
                      rating={Number(item.rating)}
                      choise={"film"}
                    />
                  </CardSize>
                </div>
              ))}
            </AllFilmRecomendations>
            <div
              style={{
                margin: "0 auto",
                width: "342px",
              }}
            >
              <Pagination
                count={pagesCount - 1}
                variant="outlined"
                shape="rounded"
                color="standard"
                defaultPage={page}
                onChange={(_, page: number) => setPage(page)}
                sx={{
                  bgcolor: themeContextData.themeStyle.body,
                }}
              />
            </div>
          </FilmOffer>
        </>
      )}
      <ScrollIndicator />
    </HelloPageSection>
  );
};
