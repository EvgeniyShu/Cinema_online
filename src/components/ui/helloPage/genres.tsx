import { Dispatch, SetStateAction, useState } from "react";
import { FilmProps } from "../../redux/reducers/propsReducers";
import { FilterButton, GenresSection } from "./styledHelloPage";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { AnimatePresence, motion } from "framer-motion";

interface GenresProps {
  array: FilmProps[];
  initArray: FilmProps[];
  setArray: Dispatch<SetStateAction<FilmProps[]>>;
}
type FilmsGenreType = (array: FilmProps[]) => String[];

export const Genres = ({ array, initArray, setArray }: GenresProps) => {
  const themeContextData: InitialContextProps = useThemeContext();
  const [searchResult, setSearchResult] = useState("");

  const animationHorizontal = {
    hidden: {
      x: "-100%",
      opacity: 0.5,
      transition: { duration: 1.5 },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5 },
    },
    exit: {
      x: "-100%",
      opacity: 0.5,
      transition: { duration: 1.5 },
    },
  };

  const filmsGenre: FilmsGenreType = (array) => {
    const genreArr = array
      .map((film) => film.genres.map((item) => item.genre))
      .toString()
      .split(",");
    return genreArr.filter((el, id) => genreArr.indexOf(el) === id).sort();
  };

  const handleClick = (currentItem: String) => {
    const filteredArray = array.filter((item) =>
      item.genres.map((item) => item.genre).includes(String(currentItem))
    );
    setArray(filteredArray);
    setSearchResult(String(currentItem));
  };
  const resetFilter = () => {
    setArray(initArray);
    setSearchResult("");
  };

  const genres = array.length === 20 ? filmsGenre(array) : [];

  return (
    <AnimatePresence>
      <div style={{ width: "100vw" }}>
        <GenresSection>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={animationHorizontal}
          >
            <p style={{ margin: 0 }}>{searchResult}</p>
          </motion.div>

          {array.length != 20 && (
            <FilterButton
              themestyles={themeContextData.themeStyle}
              onClick={resetFilter}
            >
              все
            </FilterButton>
          )}

          {genres.map((item) => (
            <FilterButton
              key={String(item)}
              themestyles={themeContextData.themeStyle}
              onClick={() => handleClick(item)}
            >
              {item}
            </FilterButton>
          ))}
        </GenresSection>
      </div>
    </AnimatePresence>
  );
};
