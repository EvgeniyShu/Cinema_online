import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Pagination from "@mui/material/Pagination";
import { motion } from "framer-motion";
import { recomendetFilmData } from "../../redux/reducers/reduxReducers";
import { AppDispatch, useAppSelector } from "../../redux/store/reduxStore";
import { RotateCard } from "../../shared/rotateCard/rotate";
import { Banner } from "../banner/banner";
import { Genres } from "./genres";
import { StickyButtons } from "./stickyButtons/stickyButtons";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import {
  AuthContextProps,
  useAuthContext,
} from "../../authContext/authContext";
import {
  AllFilmRecomendations,
  BannerWrap,
  CardSize,
  FilterButton,
  HelloPageSection,
} from "./styledHelloPage";
import { ScrollIndicator } from "../../shared/scrollIndicator/scrollIndicator";

export const HelloPage = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  const authContext: AuthContextProps = useAuthContext();
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
  const [filmArray, setFilmArray] = useState(recomendet);
  const [initArray, setInitArray] = useState(recomendet);
  const [title, setTitle] = useState("Рекомендации");

  useEffect(() => {
    dispatch(recomendetFilmData(page))
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        setFilmArray(originalPromiseResult.film);
        setInitArray(originalPromiseResult.film);
      });
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
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
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
          <motion.div
            whileInView={{
              width: "100%",
              backgroundColor: themeContextData.themeStyle.background,
              color: themeContextData.themeStyle.text,
            }}
            initial={{
              width: "100%",
              backgroundColor: themeContextData.themeStyle.color,
              color: themeContextData.themeStyle.background,
            }}
            viewport={{ amount: 1 }}
          >
            <BannerWrap>
              <Banner />
            </BannerWrap>
          </motion.div>
          <StickyButtons>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <FilterButton
                onClick={() => {
                  setFilmArray(premiere);
                  setInitArray(premiere);
                  setTitle("Премьеры");
                }}
                themestyles={themeContextData.themeStyle}
              >
                Премьеры
              </FilterButton>
              <FilterButton
                onClick={() => {
                  setFilmArray(films);
                  setInitArray(films);
                  setTitle("Топ 20");
                }}
                themestyles={themeContextData.themeStyle}
              >
                Фильмы Топ 20
              </FilterButton>
              <FilterButton
                onClick={() => {
                  setFilmArray(recomendet);
                  setInitArray(recomendet);
                  setTitle("Рекомендации");
                }}
                themestyles={themeContextData.themeStyle}
              >
                Рекомендации
              </FilterButton>
            </div>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {title}
            </p>
            {authContext.userAuth && (
              <Genres
                array={filmArray}
                setArray={setFilmArray}
                initArray={initArray}
              />
            )}
          </StickyButtons>
          <AllFilmRecomendations>
            {filmArray.map((item, index) => (
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
            {title === "Рекомендации" && (
              <Pagination
                count={pagesCount}
                variant="outlined"
                shape="rounded"
                color="standard"
                page={page}
                defaultPage={page}
                onChange={handleChange}
                style={{ marginTop: 20 }}
                sx={{
                  bgcolor: themeContextData.themeStyle.body,
                }}
              />
            )}
          </div>
        </>
      )}
      <ScrollIndicator />
    </HelloPageSection>
  );
};
