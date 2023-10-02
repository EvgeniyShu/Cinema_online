import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import BasicTabs from "./swiper";
import { Slider } from "./slider";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { AppDispatch, useAppSelector } from "../../redux/store/reduxStore";
import {
  addToFavorites,
  currentFilmData,
  isFavorite,
  posterData,
  removeFromFavorites,
  similarFilmsData,
} from "../../redux/reducers/reduxReducers";
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
import { CustomButton } from "../../shared/customButton/customButton";
import { ScrollIndicator } from "../../shared/scrollIndicator/scrollIndicator";

export const CurrentFilm = () => {
  const themeContextData: InitialContextProps = useThemeContext();

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(posterData(Number(params.id)));
    dispatch(currentFilmData(Number(params.id)));
    dispatch(isFavorite(Number(params.id)));
    setTimeout(() => {
      dispatch(similarFilmsData(Number(params.id)));
    }, 1000);
  }, [params.id]);

  const {
    currentFilm: currentFilmArray,
    similarFilm,
    posterFilm: poster,
    isFavorFilm,
    error,
    loading,
  } = useAppSelector((state) => state);
  const [currentFilm] = currentFilmArray;

  if (loading) {
    return (
      <div style={{ padding: 200, color: themeContextData.themeStyle.text }}>
        <CircularProgress color="secondary" />{" "}
        <p>Загрузка данных с сервера...</p>
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
      themestyles={themeContextData.themeStyle}
    >
      {error ? (
        <p style={{ padding: 200, height: "calc(100vh - 670px)" }}>
          Ошибка в получении данных с сервера
        </p>
      ) : (
        <>
          <p style={{ paddingTop: 20, margin: 0 }}>{currentFilm?.slogan}</p>
          <FilmDescription
            key={params.id}
            themestyles={themeContextData.themeStyle}
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
              <CurrentFilmText themestyles={themeContextData.themeStyle}>
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
                    {currentFilm?.genres.map((item) => (
                      <CustomButton
                        themestyles={themeContextData.themeStyle}
                        key={item.genre}
                        onClick={() =>
                          navigate(`/find/genre${item.genre}`, {
                            state: { find: item.genre, select: "genre" },
                          })
                        }
                      >
                        {item.genre}
                      </CustomButton>
                    ))}
                  </div>
                </p>
                <p>
                  Страна:
                  <div>
                    {currentFilm?.countries.map((item) => (
                      <CustomButton
                        themestyles={themeContextData.themeStyle}
                        key={item.country}
                        onClick={() =>
                          navigate(`/find/country${item.country}`, {
                            state: { find: item.country, select: "country" },
                          })
                        }
                      >
                        {item.country}
                      </CustomButton>
                    ))}
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
            {isFavorFilm ? (
              <CustomButton
                onClick={() => {
                  dispatch(removeFromFavorites(Number(params.id)));
                  dispatch(isFavorite(Number(params.id)));
                }}
                themestyles={themeContextData.themeStyle}
              >
                Удалить из избранного
              </CustomButton>
            ) : (
              <CustomButton
                onClick={() => {
                  dispatch(addToFavorites(Number(params.id)));
                  dispatch(isFavorite(Number(params.id)));
                }}
                themestyles={themeContextData.themeStyle}
              >
                Добавить в избранное
              </CustomButton>
            )}
            <BasicTabsrap>
              <BasicTabs>
                <Player themestyles={themeContextData.themeStyle}>
                  <p>Смотреть онлайн</p>

                  <PlayCircleOutlineIcon fontSize="large" />
                </Player>
                <div>
                  {similarFilm?.length ? (
                    <SimilarFilmsWrap themestyles={themeContextData.themeStyle}>
                      {similarFilm.map((item) => (
                        <NavLink key={item.filmId} to={`/film/${item.filmId}`}>
                          <SimilarFilmsImg
                            src={item.posterUrlPreview}
                            alt={item.nameEn}
                          />
                          <p
                            style={{
                              textDecoration: "none",
                              color: themeContextData.themeStyle.text,
                            }}
                          >
                            {item.nameRu}
                          </p>
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
      <ScrollIndicator />
    </SectionCurrentFilm>
  );
};
