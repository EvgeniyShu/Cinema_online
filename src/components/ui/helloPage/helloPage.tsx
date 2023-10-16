import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Pagination from "@mui/material/Pagination";
import { motion } from "framer-motion";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { RotateCard } from "../../shared/rotateCard/rotate";
import { Banner } from "../banner/banner";
import { recomendetFilmData } from "../../redux/reducers/reduxReducers";
import { AppDispatch, useAppSelector } from "../../redux/store/reduxStore";
import {
  AllFilmRecomendations,
  BannerWrap,
  CardSize,
  FilmOffer,
  FilmRecomendations,
  HelloPageSection,
} from "./styledHelloPage";
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
  } = useAppSelector((state) => state.films);

  const { films: recomendet, pagesCount } = recomendetFilm;

  useEffect(() => {
    dispatch(recomendetFilmData(page));
  }, [page]);

  const animation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom: number): any => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const animationHorizontal = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  if (loading) {
    return (
      <div style={{ padding: 200 }}>
        <CircularProgress color="secondary" />{" "}
        <p>Загрузка данных с сервера...</p>
      </div>
    );
  }

  return (
    <HelloPageSection themestyles={themeContextData.themeStyle}>
      {error ? (
        <div style={{ padding: 200, height: "calc(100vh - 615px)" }}>
          <p> Ошибка в получении данных с сервера</p>
        </div>
      ) : (
        <>
          <BannerWrap>
            <Banner></Banner>
          </BannerWrap>

          <FilmOffer themestyles={themeContextData.themeStyle}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={animation}
              custom={1}
            >
              Премьеры
            </motion.div>
            <FilmRecomendations>
              {premiere.map((item) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={animationHorizontal}
                  viewport={{ amount: 0.15, once: true }}
                  key={item.kinopoiskId}
                  style={{ position: "relative" }}
                >
                  <CardSize>
                    <RotateCard
                      backgroundImg={item.posterUrl}
                      id={item.kinopoiskId}
                      text={item.nameRu}
                      rating={undefined}
                      choise={"film"}
                    />
                  </CardSize>
                </motion.div>
              ))}
            </FilmRecomendations>
          </FilmOffer>

          <FilmOffer themestyles={themeContextData.themeStyle}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={animation}
              custom={1}
            >
              Фильмы: топ 20
            </motion.div>
            <FilmRecomendations>
              {films.map((item) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={animationHorizontal}
                  viewport={{ amount: 0.1, once: true }}
                  key={item.kinopoiskId}
                  style={{ position: "relative" }}
                >
                  <CardSize>
                    <RotateCard
                      backgroundImg={item.posterUrl}
                      id={item.kinopoiskId}
                      text={item.nameRu}
                      rating={item.ratingImdb}
                      choise={"film"}
                    />
                  </CardSize>
                </motion.div>
              ))}
            </FilmRecomendations>
          </FilmOffer>
          <FilmOffer themestyles={themeContextData.themeStyle} key={page}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={animation}
              custom={1}
            >
              Рекомендации
            </motion.div>
            <AllFilmRecomendations>
              {recomendet.map((item, index) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={animation}
                  viewport={{ amount: 0.15, once: true }}
                  custom={(index + 1) % 2 ? 1 : 2}
                  key={item.kinopoiskId}
                  style={{
                    position: "relative",
                    alignSelf: "center",
                    justifySelf: "center",
                  }}
                >
                  <CardSize>
                    <RotateCard
                      backgroundImg={item.posterUrl}
                      id={item.kinopoiskId}
                      text={item.nameRu}
                      rating={Number(item.ratingImdb)}
                      choise={"film"}
                    />
                  </CardSize>
                </motion.div>
              ))}
            </AllFilmRecomendations>
            <div
              style={{
                margin: "0 auto",
                width: "342px",
              }}
            >
              <Pagination
                count={pagesCount}
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
