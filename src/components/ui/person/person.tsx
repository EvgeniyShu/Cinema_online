import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, useAppSelector } from "../../redux/store/reduxStore";
import { personData } from "../../redux/reducers/reduxReducers";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import {
  Film,
  PersonImg,
  PersonText,
  SectionPeron,
  Wrapper,
} from "./styledPerson";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { CustomButton } from "../../shared/customButton/customButton";

export const Person = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const themeContextData: InitialContextProps = useThemeContext();

  useEffect(() => {
    dispatch(personData(Number(params.id)));
  }, []);

  const { Person, error, loading } = useAppSelector((state) => state);
  const [person] = Person;
  const [active, setActive] = useState(false);

  if (loading) {
    return (
      <div style={{ padding: 200 }}>
        <CircularProgress color="secondary" /> Загрузка...
      </div>
    );
  }
  console.log(person);

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
            <div>
              {person?.films.map((item) => {
                return (
                  <Film key={item.filmId + item.professionKey}>
                    <p style={{ width: "80%" }}>
                      {item.nameRu} {item.description},{item.professionKey}
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
            </div>
          ) : (
            <div></div>
          )}
        </>
      )}
    </SectionPeron>
  );
};
