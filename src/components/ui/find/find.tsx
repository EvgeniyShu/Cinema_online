import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { SectionFind, SectionFindImg, SectionFindWrapper } from "./styledFind";
import { useEffect, useState } from "react";
import { FilmProps } from "../banner/filmProps";
import { FindDataProps } from "./findProps";
import { RotateCard } from "../../shared/rotateCard/rotate";

export const Find = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  const dataFromNavigate = useLocation();

  interface ISearchProps {}
  const [searchResult, setSearchResult] = useState<Array<FindDataProps>>([]);

  const { find, select } = dataFromNavigate.state;

  const Url = (find: string, select: string): RequestInfo => {
    const result = "";
    if (find) {
      switch (select) {
        case "name": {
          return (
            result +
            `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&keyword=${encodeURI(
              find
            )}&page=1`
          );
        }
        case "person": {
          return (
            result +
            `https://kinopoiskapiunofficial.tech/api/v1/persons?name=${encodeURI(
              find
            )}&page=1`
          );
        }
        case "year": {
          return (
            result +
            `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=${find}&yearTo=${find}&page=1`
          );
        }
      }
    } else {
      return (
        result +
        "https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&keyword=%D0%BC%D1%81%D1%82%D0%B8%D1%82%D0%B5%D0%BB%D0%B8&page=1"
      );
    }
    return result;
  };

  const filteredFilmsData = () => {
    fetch(Url(find, select), {
      method: "GET",
      headers: {
        "X-API-KEY": "992d39b4-9cf2-4a5a-b0f2-3c3fa2df9f90",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setSearchResult(json.items);
      });
  };
  useEffect(() => {
    filteredFilmsData();
  }, [find, select]);

  console.log(searchResult);

  return (
    <SectionFind themeStyles={themeContextData.themeStyle}>
      <SectionFindWrapper>
        {searchResult.map((item) => (
          <div style={{ position: "relative" }}>
            <RotateCard
              backgroundImg={item.posterUrl}
              id={item.kinopoiskId}
              text={item.nameRu}
              rating={item.ratingKinopoisk}
            />
          </div>
        ))}
      </SectionFindWrapper>
    </SectionFind>
  );
};
