import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { CircularProgress } from "@mui/material";
import { AppDispatch, useAppSelector } from "../../../redux/store/reduxStore";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
} from "swiper/modules";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import {
  ButtonsWrap,
  FilmImg,
  PlayButtonWrapper,
  PlayButtonWrapperText,
  SectionPremiumSlider,
  Wrapper,
} from "./styledPremiumSlider";
import { findPremiumDataReqest } from "../../../redux/reducers/premiumSliderReducer";
import { CustomButton } from "../../../shared/customButton/customButton";
import {
  InitialContextProps,
  useThemeContext,
} from "../../../themeContext/themes";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";
import { ModalContent } from "../../../shared/portal/modal";

export const PremiumSlider = () => {
  const themeContextData: InitialContextProps = useThemeContext();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();
  const [showModal, setShowModal] = useState(false);

  let url = "";

  switch (params.search) {
    case "films": {
      url = "FILM";
      break;
    }
    case "serials": {
      url = "MINI_SERIES";
      break;
    }
    case "twshows": {
      url = "TV_SHOW";
      break;
    }
  }

  useEffect(() => {
    dispatch(findPremiumDataReqest(url));
  }, [params.search]);

  const {
    findData: films,
    error,
    loading,
  } = useAppSelector((state) => state.findPremium);

  if (loading) {
    return (
      <div style={{ padding: 200 }}>
        <CircularProgress color="secondary" />{" "}
        <p>Загрузка данных с сервера...</p>
      </div>
    );
  }

  return (
    <SectionPremiumSlider themestyles={themeContextData.themeStyle}>
      {error ? (
        <p style={{ margin: 0, padding: 200 }}>
          Ошибка в получении данных с сервера
        </p>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          style={
            themeContextData.theme === "dark"
              ? {
                  "--swiper-pagination-color": "orange",
                  "--swiper-navigation-color": "orange",
                }
              : {}
          }
        >
          {films.map((item) => (
            <SwiperSlide key={item.kinopoiskId}>
              <Wrapper>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 30,
                  }}
                >
                  <div>
                    <h1>{item.nameRu}</h1>

                    {item.genres ? (
                      item.genres.map((item) => (
                        <CustomButton
                          themestyles={themeContextData.themeStyle}
                          key={item.genre}
                          onClick={() =>
                            navigate(`/find/genre${item.genre}`, {
                              state: { find: item.genre, select: "genre" },
                            })
                          }
                        >
                          {item.genre}
                        </CustomButton>
                      ))
                    ) : (
                      <></>
                    )}
                    <PlayButtonWrapper>
                      <PlayCircleFilledOutlinedIcon
                        fontSize="large"
                        onClick={() => navigate(`/film/${item.kinopoiskId}`)}
                        style={{
                          width: 100,
                          height: 100,
                          margin: 0,
                          cursor: "pointer",
                        }}
                        titleAccess="смотреть"
                      />
                      <PlayButtonWrapperText id="play__p">
                        смотреть онлайн
                      </PlayButtonWrapperText>
                    </PlayButtonWrapper>
                    <CustomButton
                      themestyles={themeContextData.themeStyle}
                      onClick={() => setShowModal(true)}
                      style={{ marginTop: 50 }}
                    >
                      смотреть трейлер фильма
                    </CustomButton>
                  </div>
                </div>
                <FilmImg src={item.posterUrl} alt="" />
                <div style={{ width: 100 }}></div>
              </Wrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <ButtonsWrap>
        <CustomButton
          themestyles={themeContextData.themeStyle}
          onClick={() => navigate(`/premium/films`)}
          style={
            params.search === "films"
              ? {
                  background: themeContextData.themeStyle.color,
                  color: themeContextData.themeStyle.background,
                  margin: 0,
                  width: "30%",
                }
              : { margin: 0 }
          }
        >
          фильмы
        </CustomButton>
        <CustomButton
          themestyles={themeContextData.themeStyle}
          onClick={() => navigate(`/premium/serials`)}
          style={
            params.search === "serials"
              ? {
                  background: themeContextData.themeStyle.color,
                  color: themeContextData.themeStyle.background,
                  margin: 0,
                  width: "30%",
                }
              : { margin: 0 }
          }
        >
          сериалы
        </CustomButton>
        <CustomButton
          themestyles={themeContextData.themeStyle}
          onClick={() => navigate(`/premium/twshows`)}
          style={
            params.search === "twshows"
              ? {
                  background: themeContextData.themeStyle.color,
                  color: themeContextData.themeStyle.background,
                  margin: 0,
                  width: "30%",
                }
              : { margin: 0 }
          }
        >
          ТВ шоу
        </CustomButton>
      </ButtonsWrap>
      {showModal &&
        createPortal(
          <ModalContent
            onClose={() => setShowModal(false)}
            text="Успешный вход"
          />,
          document.body
        )}
    </SectionPremiumSlider>
  );
};
