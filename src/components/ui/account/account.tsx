import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store/reduxStore";
import { CustomButton } from "../../shared/customButton/customButton";
import { RotateCard } from "../../shared/rotateCard/rotate";
import { ScrollIndicator } from "../../shared/scrollIndicator/scrollIndicator";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { AllFavoriteFilms, CardSize, SectionAccount } from "./styledAccount";

export const Account = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  const { Favorite: favorite } = useAppSelector((state) => state.films);
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <SectionAccount themestyles={themeContextData.themeStyle}>
      <h2>Добро пожаловать в личный кабинет</h2>

      <p>Почта: {user.email}</p>
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
        <p style={{ height: "100vh" }}>
          Список пуст{" "}
          <CustomButton
            onClick={() => navigate("/")}
            themestyles={themeContextData.themeStyle}
          >
            Перейти к фильмам
          </CustomButton>
        </p>
      )}
      <ScrollIndicator />
    </SectionAccount>
  );
};
