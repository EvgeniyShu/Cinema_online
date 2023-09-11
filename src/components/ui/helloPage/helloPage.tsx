import { useEffect, useState } from "react";
import { Banner } from "../banner/banner";
import {
  BannerWrap,
  FilmOffer,
  FilmRate,
  FilmRecomendations,
  FilmRecomendationsImg,
  FilmText,
  HelloPageSection,
} from "./styledHelloPage";
import { FilmProps } from "../banner/filmProps";
import { Link } from "react-router-dom";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { Footer } from "../footer/footer";

export const HelloPage = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  const [films, setFilms] = useState<Array<FilmProps>>([]);
  const [premiere, setPremiere] = useState<Array<FilmProps>>([]);
  const [recomendetFilms, setrecomendetFilms] = useState<Array<FilmProps>>([]);

  const topFilmsData = () => {
    fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/top", {
      method: "GET",
      headers: {
        "X-API-KEY": "992d39b4-9cf2-4a5a-b0f2-3c3fa2df9f90",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setFilms(json.films);
      });
  };

  const premiereData = () => {
    fetch(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=SEPTEMBER",
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
        setPremiere(json.items);
      });
  };

  const recomendetFilmsData = () => {
    fetch(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=10",
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
        setrecomendetFilms(json.films);
      });
  };

  useEffect(() => {
    premiereData();
    setTimeout(() => {
      topFilmsData();
    }, 1000);
    setTimeout(() => {
      recomendetFilmsData();
    }, 2000);
  }, []);

  return (
    <HelloPageSection themeStyles={themeContextData.themeStyle}>
      <BannerWrap>
        <Banner></Banner>
      </BannerWrap>

      <FilmOffer themeStyles={themeContextData.themeStyle}>
        <div>Премьеры</div>
        <FilmRecomendations themeStyles={themeContextData.themeStyle}>
          {premiere.map((item) => (
            <div style={{ position: "relative" }}>
              <Link
                key={item.filmId}
                to={`/film/${item.filmId}`}
                style={{ textDecoration: "none" }}
              >
                <FilmRecomendationsImg
                  id={String(item.filmId)}
                  src={item.posterUrlPreview}
                  alt={item.posterUrlPreview}
                />
                <FilmText themeStyles={themeContextData.themeStyle}>
                  {item.nameRu} ({item.year})
                </FilmText>
              </Link>
            </div>
          ))}
        </FilmRecomendations>
      </FilmOffer>

      <FilmOffer themeStyles={themeContextData.themeStyle}>
        <div>Топ фильмы</div>
        <FilmRecomendations themeStyles={themeContextData.themeStyle}>
          {films.map((item) => (
            <div style={{ position: "relative" }}>
              <Link
                key={item.filmId}
                to={`/film/${item.filmId}`}
                style={{ textDecoration: "none" }}
              >
                <FilmRecomendationsImg
                  id={String(item.filmId)}
                  src={item.posterUrlPreview}
                  alt={item.posterUrlPreview}
                />
                <FilmText themeStyles={themeContextData.themeStyle}>
                  {item.nameRu} ({item.year})
                </FilmText>
                <FilmRate rate={item.rating}>{item.rating}</FilmRate>
              </Link>
            </div>
          ))}
        </FilmRecomendations>
      </FilmOffer>
      <FilmOffer themeStyles={themeContextData.themeStyle}>
        <div>Рекомендаии</div>
        <FilmRecomendations themeStyles={themeContextData.themeStyle}>
          {recomendetFilms.map((item) => (
            <div style={{ position: "relative" }}>
              <Link
                key={item.filmId}
                to={`/film/${item.filmId}`}
                style={{ textDecoration: "none" }}
              >
                <FilmRecomendationsImg
                  id={String(item.filmId)}
                  src={item.posterUrlPreview}
                  alt={item.posterUrlPreview}
                />
                <FilmText themeStyles={themeContextData.themeStyle}>
                  {item.nameRu} ({item.year})
                </FilmText>
                <FilmRate rate={item.rating}>{item.rating}</FilmRate>
              </Link>
            </div>
          ))}
        </FilmRecomendations>
      </FilmOffer>
      <Footer />
    </HelloPageSection>
  );
};
