import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { findDataReqest } from "../../redux/reducers/findReducer";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { Url } from "./functions";
import { AppDispatch, useAppSelector } from "../../redux/store/reduxStore";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { SectionFind, SectionFindWrapper } from "./styledFind";
import { RotateCard } from "../../shared/rotateCard/rotate";
import { ScrollIndicator } from "../../shared/scrollIndicator/scrollIndicator";

export const Find = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  const dataFromNavigate = useLocation();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { find, select } = dataFromNavigate.state;
  const { filter } = useAppSelector((state) => state.find);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    dispatch(findDataReqest(Url(find, select, currentPage, filter)));
  }, [find, select, currentPage]);

  const { findData, error, loading } = useAppSelector((state) => state.find);
  const { data: searchResult, pagesCount: pages } = findData;

  if (loading) {
    return (
      <div style={{ padding: 200, color: themeContextData.themeStyle.text }}>
        <CircularProgress color="secondary" />{" "}
        <p>Загрузка данных с сервера...</p>
      </div>
    );
  }

  return (
    <SectionFind themestyles={themeContextData.themeStyle}>
      {error ? (
        <p style={{ padding: 200, height: "calc(100vh - 670px)" }}>
          Ошибка в получении данных с сервера
        </p>
      ) : (
        <>
          <div
            style={{
              margin: "10px auto",
            }}
          >
            <p>Поиск по запросу: {find}</p>
          </div>
          <SectionFindWrapper>
            {searchResult.map((item) => (
              <div key={item.kinopoiskId} style={{ position: "relative" }}>
                <RotateCard
                  backgroundImg={item.posterUrl}
                  id={item.kinopoiskId}
                  text={item.nameRu}
                  rating={item.ratingKinopoisk}
                  choise={select === "person" ? "person" : "film"}
                />
              </div>
            ))}
          </SectionFindWrapper>
          <ScrollIndicator />

          <Pagination
            count={pages}
            variant="outlined"
            shape="rounded"
            color="standard"
            page={currentPage}
            onChange={handleChange}
            sx={{
              bgcolor: themeContextData.themeStyle.body,
            }}
          />
        </>
      )}
    </SectionFind>
  );
};
