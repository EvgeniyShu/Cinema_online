import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { AppDispatch, useAppSelector } from "../../redux/store/reduxStore";
import { personData } from "../../redux/reducers/personReducer";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import {
  Film,
  Grid,
  PersonImg,
  PersonText,
  Rate,
  SectionPeron,
  Wrapper,
} from "./styledPerson";
import { CustomButton } from "../../shared/customButton/customButton";

export const Person = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const themeContextData: InitialContextProps = useThemeContext();

  useEffect(() => {
    dispatch(personData(Number(params.id)));
  }, []);

  const { Person, error, loading } = useAppSelector((state) => state.person);
  const [person] = Person;
  const [active, setActive] = useState(false);

  if (loading) {
    return (
      <div style={{ padding: 200 }}>
        <CircularProgress color="secondary" />{" "}
        <p>Загрузка данных с сервера...</p>
      </div>
    );
  }

  return (
    <SectionPeron themestyles={themeContextData.themeStyle}>
      {error ? (
        <div style={{ padding: 200 }}>Ошибка в получении данных с сервера</div>
      ) : (
        <>
          <Wrapper>
            <PersonImg src={person?.posterUrl} alt={person?.nameEn} />
            <PersonText>
              <p>Имя: {person?.nameRu}</p>
              <p>Возраст: {person?.age}</p>
              <p>Дата Рождения: {person?.birthday}</p>
              <p>Место рождения: {person?.birthplace}</p>
              <p>{person?.profession}</p>
            </PersonText>
          </Wrapper>
          <div style={{ width: "80%" }}>
            {person?.facts.map((item) => {
              return <p key={item}>{item}</p>;
            })}
          </div>
          {active ? (
            <CustomButton
              themestyles={themeContextData.themeStyle}
              onClick={() => setActive(false)}
            >
              Скрыть
            </CustomButton>
          ) : (
            <CustomButton
              themestyles={themeContextData.themeStyle}
              onClick={() => setActive(true)}
            >
              Фильмография
            </CustomButton>
          )}
          {active ? (
            <Grid>
              {person?.films.map((item, index) => {
                return (
                  <Film
                    themestyles={themeContextData.themeStyle}
                    key={index + item.filmId + item.professionKey}
                  >
                    <Rate id="rate" rate={Number(item.rating)}>
                      {item.rating}
                    </Rate>
                    <p>
                      {item.nameRu} {item.description}, {item.professionKey}
                    </p>
                    <CustomButton
                      themestyles={themeContextData.themeStyle}
                      onClick={() => navigate(`/film/${item.filmId}`)}
                      style={{ margin: 0 }}
                    >
                      Перейти к фильму
                    </CustomButton>
                  </Film>
                );
              })}
            </Grid>
          ) : (
            <div></div>
          )}
        </>
      )}
    </SectionPeron>
  );
};
