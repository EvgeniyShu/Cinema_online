import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { SectionFind, SectionFindWrapper } from "./styledFind";
import { useEffect, useState } from "react";
import { FindDataProps } from "./findProps";
import { RotateCard } from "../../shared/rotateCard/rotate";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/reduxStore";
import Pagination from "@mui/material/Pagination";

export const Find = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  const dataFromNavigate = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const [searchResult, setSearchResult] = useState<Array<FindDataProps>>([]);
  const [pages, setPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
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
            )}&page=${currentPage}`
          );
        }
        case "person": {
          return (
            result +
            `https://kinopoiskapiunofficial.tech/api/v1/persons?name=${encodeURI(
              find
            )}&page=${currentPage}`
          );
        }
        case "year": {
          return (
            result +
            `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=${find}&yearTo=${find}&page=${currentPage}`
          );
        }
      }
    } else {
      return (
        result +
        "https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&keyword=%D0%BC%D1%81%D1%82%D0%B8%D1%82%D0%B5%D0%BB%D0%B8&page=${currentPage}"
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
        console.log(json);
        setPages(json.totalPages);
        setSearchResult(json.items);
      });
  };
  useEffect(() => {
    filteredFilmsData();
  }, [find, select, currentPage]);

  return (
    <SectionFind themeStyles={themeContextData.themeStyle}>
      <div
        style={{
          margin: "10px auto",
        }}
      >
        <Pagination
          count={pages}
          variant="outlined"
          shape="rounded"
          color="standard"
          defaultPage={currentPage}
          onChange={(_, page: number) => setCurrentPage(page)}
          sx={{
            bgcolor: themeContextData.themeStyle.body,
          }}
        />
      </div>
      <SectionFindWrapper>
        {searchResult.map((item) => (
          <div key={item.kinopoiskId} style={{ position: "relative" }}>
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
