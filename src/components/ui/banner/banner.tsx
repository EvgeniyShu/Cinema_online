import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store/reduxStore";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import {
  BunnerC,
  BunnerFilmImg,
  FilmImgList,
  LeftScrollButton,
  NameOfCurrentFilm,
  RightScrollButton,
  Window,
} from "./styledBanner";

export const Banner = () => {
  const themeContextData: InitialContextProps = useThemeContext();

  const { BannerFilmData: films } = useAppSelector((state) => state.films);

  const [name, setName] = useState(films.length ? films[0].nameRu : "");

  const handleMouseEnter = (event: any) => {
    event.target.style.height = "300px";
    event.target.style.width = "200px";

    const [currentFilm] = films.filter(
      (item) => item.kinopoiskId === Number(event.target.id)
    );

    setName(currentFilm.nameRu);
    const bg = document.getElementById("background");

    const setNewBackground = () =>
      bg
        ? (bg.style.background = `url(${currentFilm.posterUrl}) 50% 50% no-repeat, linear-gradient(to bottom, black 0%, transparent 250%), url(${currentFilm.posterUrl}) 50% 50% no-repeat, url(${currentFilm.posterUrl}) 50% 50% no-repeat, url(${currentFilm.posterUrl}) 50% 50% no-repeat`)
        : "";
    const setNewBackgroundSize = () =>
      bg ? (bg.style.backgroundSize = "contain, cover") : "";
    setNewBackground();
    setNewBackgroundSize();
  };

  const handleMouseLeave = (event: any) => {
    event.target.style.height = "220px";
    event.target.style.width = "150px";
  };

  const scrollContainerBy = (distance: number) => {
    document
      .getElementById("scroll")
      ?.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <>
      <BunnerC
        id="background"
        backgroundimg={films.length ? films[0].posterUrl : "black"}
      >
        <FilmImgList>
          <LeftScrollButton
            onClick={() => scrollContainerBy(-400)}
            themestyles={themeContextData.themeStyle}
          >
            <div style={{ marginTop: 5, marginLeft: 2 }}>
              <ArrowBackIosNewIcon fontSize="large" />
            </div>
          </LeftScrollButton>
          <Window id="scroll">
            {films.map((item) => (
              <Link key={item.kinopoiskId} to={`/film/${item.kinopoiskId}`}>
                <BunnerFilmImg
                  loading="lazy"
                  id={String(item.kinopoiskId)}
                  src={item.posterUrlPreview}
                  alt={item.posterUrlPreview}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={handleMouseEnter}
                  onTouchEnd={handleMouseLeave}
                />
              </Link>
            ))}
          </Window>
          <RightScrollButton
            onClick={() => scrollContainerBy(400)}
            themestyles={themeContextData.themeStyle}
          >
            <div style={{ marginTop: 5, marginLeft: 5 }}>
              <ArrowForwardIosIcon fontSize="large" />
            </div>
          </RightScrollButton>
        </FilmImgList>
      </BunnerC>
      <NameOfCurrentFilm themestyles={themeContextData.themeStyle}>
        {name}
      </NameOfCurrentFilm>
    </>
  );
};
