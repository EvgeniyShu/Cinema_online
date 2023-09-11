import { useNavigate, useParams } from "react-router-dom";
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
  Wrapper,
} from "./styledCurrentFilm";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { SimilarFilmProps, currentFilmProps } from "./props";
import BasicTabs from "./swiper";

export const CurrrentFilm = () => {
  const themeContextData: InitialContextProps = useThemeContext();

  const params = useParams();
  const navigate = useNavigate();

  const [currentFilm, setCurrentFilm] = useState<currentFilmProps>();
  const [similarFilm, setSimilarFilm] = useState<SimilarFilmProps[]>();
  const [poster, setPoster] = useState<any>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const currentFilmData = () => {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${params.id}`, {
      method: "GET",
      headers: {
        "X-API-KEY": "992d39b4-9cf2-4a5a-b0f2-3c3fa2df9f90",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setError(!response.ok);
        return response.json();
      })
      .then((json) => {
        setCurrentFilm(json);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const similarFilmsData = () => {
    fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/${params.id}/similars`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "992d39b4-9cf2-4a5a-b0f2-3c3fa2df9f90",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setSimilarFilm(json.items);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const posterData = () => {
    fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/${params.id}/images`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "992d39b4-9cf2-4a5a-b0f2-3c3fa2df9f90",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setPoster(json);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);

    posterData();
    similarFilmsData();
    setTimeout(() => {
      currentFilmData();
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div style={{ padding: 200 }}>
        <CircularProgress color="secondary" /> Loading...
      </div>
    );
  }

  console.log();

  return (
    <SectionCurrentFilm
      background={poster?.items[0].imageUrl}
      themeStyles={themeContextData.themeStyle}
    >
      <p>{currentFilm?.slogan}</p>
      <FilmDescription
        themeStyles={themeContextData.themeStyle}
        background={poster?.items[0].imageUrl}
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
              IMDB: {currentFilm?.ratingImdb ? currentFilm?.ratingImdb : "-"}
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
            <Player>
              <div>Смотреть онлайн</div>
              <PlayCircleOutlineIcon fontSize="large" />
            </Player>
            <div>
              {similarFilm?.length ? (
                <SimilarFilmsWrap>
                  {similarFilm.map((item) => (
                    <div>
                      <SimilarFilmsImg
                        src={item.posterUrlPreview}
                        alt={item.nameEn}
                      />
                      <div></div>
                      {item.nameRu}
                    </div>
                  ))}
                </SimilarFilmsWrap>
              ) : (
                <div></div>
              )}
            </div>
          </BasicTabs>
        </BasicTabsrap>
      </FilmDescription>
    </SectionCurrentFilm>
  );
};
