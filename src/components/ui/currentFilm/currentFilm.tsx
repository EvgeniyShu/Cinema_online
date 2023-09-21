import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import {
  BasicTabsrap,
  CurrentFilmImg,
  CurrentFilmText,
  FilmDescription,
  Player,
  SectionCurrentFilm,
  SimilarFilmsImg,
  SimilarFilmsWrap,
  SliderWrapper,
  Wrapper,
} from "./styledCurrentFilm";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import BasicTabs from "./swiper";
import { Slider } from "./slider";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../../redux/store/reduxStore";
import {
  currentFilmData,
  posterData,
  similarFilmsData,
} from "../../redux/reducers/reduxReducers";

export const CurrrentFilm = () => {
  const themeContextData: InitialContextProps = useThemeContext();

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(posterData(Number(params.id)));
    dispatch(currentFilmData(Number(params.id)));
    setTimeout(() => {
      dispatch(similarFilmsData(Number(params.id)));
    }, 1000);
  }, []);

  const {
    currentFilm: currentFilmArray,
    similarFilm,
    posterFilm: poster,
    error,
    loading,
  } = useAppSelector((state) => state);
  const [currentFilm] = currentFilmArray;

  if (loading) {
    return (
      <div style={{ padding: 200 }}>
        <CircularProgress color="secondary" /> Loading...
      </div>
    );
  }

  return (
    <SectionCurrentFilm
      background={
        poster.length
          ? poster[0].imageUrl
          : themeContextData.themeStyle.background
      }
      themeStyles={themeContextData.themeStyle}
    >
      {error ? (
        <div style={{ padding: 200 }}>Ошибка в получении данных с сервера</div>
      ) : (
        <>
          <p>{currentFilm?.slogan}</p>
          <FilmDescription
            themeStyles={themeContextData.themeStyle}
            background={
              poster.length
                ? poster[0].imageUrl
                : themeContextData.themeStyle.background
            }
          >
            <Wrapper>
              <CurrentFilmImg
                src={currentFilm?.posterUrlPreview}
                alt={currentFilm?.nameEn}
              />
              <CurrentFilmText themeStyles={themeContextData.themeStyle}>
                <h3>
                  {currentFilm?.nameRu} ({currentFilm?.year})
                </h3>

                <p>
                  IMDB:{" "}
                  {currentFilm?.ratingImdb ? currentFilm?.ratingImdb : "-"}
                </p>
                <p>
                  Kinopoisk:
                  {currentFilm?.ratingKinopoisk
                    ? currentFilm?.ratingKinopoisk
                    : "-"}
                </p>
                <p>
                  Жанр:
                  <div>
                    {currentFilm?.genres
                      .reduce((acc, item) => (acc += item.genre + ", "), "")
                      .slice(0, -2)}
                  </div>
                </p>
                <p>
                  Продолжительность:
                  {currentFilm?.filmLength
                    ? Math.floor(currentFilm.filmLength / 60) +
                      " ч " +
                      (currentFilm?.filmLength -
                        Math.floor(currentFilm.filmLength / 60) * 60) +
                      " мин"
                    : ""}
                </p>
                <p>{currentFilm?.description}</p>
              </CurrentFilmText>
            </Wrapper>
            <BasicTabsrap>
              <BasicTabs>
                <Player themeStyles={themeContextData.themeStyle}>
                  <div>Смотреть онлайн</div>
                  <PlayCircleOutlineIcon fontSize="large" />
                </Player>
                <div>
                  {similarFilm?.length ? (
                    <SimilarFilmsWrap themeStyles={themeContextData.themeStyle}>
                      {similarFilm.map((item) => (
                        <NavLink key={item.filmId} to={`/film/${item.filmId}`}>
                          <SimilarFilmsImg
                            src={item.posterUrlPreview}
                            alt={item.nameEn}
                          />
                          <div></div>
                          {item.nameRu}
                        </NavLink>
                      ))}
                    </SimilarFilmsWrap>
                  ) : (
                    <SliderWrapper>
                      Подборка похожих фильмов ещё не создана
                    </SliderWrapper>
                  )}
                </div>
                <div>
                  {poster.length ? (
                    <Slider>{poster}</Slider>
                  ) : (
                    <SliderWrapper>Нет постеров к данному фильму</SliderWrapper>
                  )}
                </div>
              </BasicTabs>
            </BasicTabsrap>
          </FilmDescription>
        </>
      )}
    </SectionCurrentFilm>
  );
};
