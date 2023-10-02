import { useAuthContext } from "../../authContext/authContext";
import { useAppSelector } from "../../redux/store/reduxStore";
import { RotateCard } from "../../shared/rotateCard/rotate";
import { ScrollIndicator } from "../../shared/scrollIndicator/scrollIndicator";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { AllFavoriteFilms, CardSize, SectionAccount } from "./styledAccount";

export const Account = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  const authData = useAuthContext();

  const { Favorite: favorite } = useAppSelector((state) => state);

  return (
    <SectionAccount themestyles={themeContextData.themeStyle}>
      <h2>Добро пожаловать в личный кабинет</h2>
      <p>Тариф: {authData.daysOfPremium} дней премиума</p>
      <p>Имя: {authData.values.firstName}</p>
      <p>Фамилия: {authData.values.lastName}</p>
      <p>Почта: {authData.values.email}</p>
      <p>Понравившиеся фильмы</p>
      {favorite.length ? (
        <AllFavoriteFilms themestyles={themeContextData.themeStyle}>
          {favorite.map((item) => (
            <div
              key={item.kinopoiskId}
              style={{
                position: "relative",
                alignSelf: "center",
                justifySelf: "center",
              }}
            >
              <CardSize>
                <RotateCard
                  backgroundImg={item.posterUrl}
                  id={item.kinopoiskId}
                  text={item.nameRu}
                  rating={Number(item.ratingImdb)}
                  choise={"film"}
                />
              </CardSize>
            </div>
          ))}
        </AllFavoriteFilms>
      ) : (
        <p>Список пуст</p>
      )}
      <ScrollIndicator />
    </SectionAccount>
  );
};
