import { FilterProps } from "../../redux/reducers/propsReducers";
import { useAppSelector } from "../../redux/store/reduxStore";

export const getGenreId = (genre: string, filter: FilterProps) => {
  const { genres } = filter;
  const arr = genres.filter((item) => item.genre === genre);
  return arr[0].id;
};

export const getCountryId = (country: string, filter: FilterProps) => {
  const { countries } = filter;
  const arr = countries.filter((item) => item.country === country);
  return arr[0].id;
};

export const Url = (
  find: string,
  select: string,
  currentPage: number,
  filter: FilterProps
): string => {
  const result = "";
  if (find) {
    switch (select) {
      case "name": {
        return (
          result +
          `/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&keyword=${encodeURI(
            find
          )}&page=${currentPage}`
        );
      }
      case "person": {
        return (
          result + `/v1/persons?name=${encodeURI(find)}&page=${currentPage}`
        );
      }
      case "year": {
        return (
          result +
          `/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=${find}&yearTo=${find}&page=${currentPage}`
        );
      }

      case "genre": {
        return (
          result +
          `/v2.2/films?genres=${getGenreId(
            find,
            filter
          )}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=${currentPage}`
        );
      }
      case "country": {
        return (
          result +
          `/v2.2/films?countries=${getCountryId(
            find,
            filter
          )}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=${currentPage}`
        );
      }
    }
  } else {
    return (
      result +
      "/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&keyword=%D0%BC%D1%81%D1%82%D0%B8%D1%82%D0%B5%D0%BB%D0%B8&page=${currentPage}"
    );
  }
  return result;
};
