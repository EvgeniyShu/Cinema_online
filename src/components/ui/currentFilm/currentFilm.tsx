import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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
import { useAuthContext } from "../../authContext/authContext";
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
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const auth = useAuthContext();

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
  } = useAppSelector((state) => state.films);
  const [currentFilm] = currentFilmArray;

  const handleAddToFavorite = () => {
    dispatch(
      addToFavorites({
        id: auth.id,
        filmId: Number(params.id),
      })
    );
    dispatch(isFavorite(Number(params.id)));
  };

  if (loading) {
    return (
      <div style={{ padding: 200, color: themeContextData.themeStyle.text }}>
        <CircularProgress color="secondary" />
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
        <div style={{ margin: 0, padding: 200, height: "calc(100vh - 590px)" }}>
          <p>Ошибка в получении данных с сервера</p>
        </div>
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
                  IMDB:{currentFilm?.ratingImdb ? currentFilm?.ratingImdb : "-"}
                </p>
                <p>
                  Kinopoisk:
                  {currentFilm?.ratingKinopoisk
                    ? currentFilm?.ratingKinopoisk
                    : "-"}
                </p>
                <p>Жанр:</p>
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

                <p>Страна: </p>
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

                <p>{currentFilm?.serial ? "Сериал" : ""}</p>
                <p>
                  Продолжительность{currentFilm?.serial ? " серии" : ""}:
                  {currentFilm?.filmLength
                    ? Math.floor(currentFilm.filmLength / 60) +
                      " ч " +
                      (currentFilm?.filmLength -
                        Math.floor(currentFilm.filmLength / 60) * 60) +
                      " мин"
                    : ""}
                </p>
                <p>{currentFilm?.description}</p>
                <CustomButton
                  onClick={() => {
                    navigate("/");
                  }}
                  themestyles={themeContextData.themeStyle}
                  title=" Вернуться на главную"
                >
                  <HomeIcon fontSize="large" />
                </CustomButton>
                {isFavorFilm ? (
                  <CustomButton
                    onClick={() => {
                      dispatch(
                        removeFromFavorites({
                          id: auth.id,
                          filmId: Number(params.id),
                        })
                      );
                      dispatch(isFavorite(Number(params.id)));
                    }}
                    themestyles={themeContextData.themeStyle}
                    title="Удалить из избранного"
                  >
                    <FavoriteIcon fontSize="large" color="error" />
                  </CustomButton>
                ) : (
                  <CustomButton
                    onClick={handleAddToFavorite}
                    themestyles={themeContextData.themeStyle}
                    title="Добавить в избранное"
                  >
                    <FavoriteIcon fontSize="large" />
                  </CustomButton>
                )}
                <CustomButton
                  onClick={() => {
                    navigate(-1);
                  }}
                  themestyles={themeContextData.themeStyle}
                  title=" Вернуться назад"
                >
                  <ArrowBackIcon fontSize="large" />
                </CustomButton>
              </CurrentFilmText>
            </Wrapper>

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
                        <div key={item.filmId}>
                          <NavLink to={`/film/${item.filmId}`}>
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
                        </div>
                      ))}
                    </SimilarFilmsWrap>
                  ) : (
                    <SliderWrapper>
                      <div>
                        <p>Подборка похожих фильмов ещё не создана</p>
                      </div>
                    </SliderWrapper>
                  )}
                </div>
                <div>
                  {poster.length ? (
                    <Slider>{poster}</Slider>
                  ) : (
                    <SliderWrapper>
                      <div>
                        <p>Нет постеров к данному фильму</p>
                      </div>
                    </SliderWrapper>
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
