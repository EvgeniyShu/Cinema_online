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
import { fetchRecomendetFilmData } from "../../redux/reducers/reduxReducers";
import { useEffect, useState } from "react";
import React from "react";

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
    dispatch(fetchRecomendetFilmData(page + 1));
  }, [page]);

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
                <div key={item.kinopoiskId} style={{ position: "relative" }}>
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
                <div key={item.filmId} style={{ position: "relative" }}>
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
          <FilmOffer themeStyles={themeContextData.themeStyle} key={page}>
            <div>Рекомендаии</div>
            <AllFilmRecomendations themeStyles={themeContextData.themeStyle}>
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
    </HelloPageSection>
  );
};
