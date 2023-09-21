import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store/reduxStore";
import {
  BunnerC,
  BunnerFilmImg,
  FilmImgList,
  LeftScrollButton,
  RightScrollButton,
  Window,
} from "./styledBanner";

import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";

export const Banner = () => {
  const themeContextData: InitialContextProps = useThemeContext();

  const {
    BannerFilmData: films,
    error,
    loading,
  } = useAppSelector((state) => state);

  const handleMouseEnter = (event: any) => {
    event.target.style.height = "300px";
    event.target.style.width = "200px";

    const [img] = films.filter(
      (item) => item.filmId === Number(event.target.id)
    );
    const bg = document.getElementById("background");

    const setNewBackground = () =>
      bg
        ? (bg.style.background = `url(${img.posterUrl}) 50% 50% no-repeat, linear-gradient(to bottom, black 0%, transparent 250%), url(${img.posterUrl}) 50% 50% no-repeat, url(${img.posterUrl}) 50% 50% no-repeat, url(${img.posterUrl}) 50% 50% no-repeat`)
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
    <BunnerC
      id="background"
      backgroundImg={films.length ? films[0].posterUrl : "black"}
    >
      <FilmImgList>
        <LeftScrollButton
          onClick={() => scrollContainerBy(-400)}
          themeStyles={themeContextData.themeStyle}
        >
          ←
        </LeftScrollButton>
        <Window id="scroll">
          {films.map((item) => (
            <Link key={item.filmId} to={`/film/${item.filmId}`}>
              <BunnerFilmImg
                loading="lazy"
                id={String(item.filmId)}
                src={item.posterUrlPreview}
                alt={item.posterUrlPreview}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </Link>
          ))}
        </Window>
        <RightScrollButton
          onClick={() => scrollContainerBy(400)}
          themeStyles={themeContextData.themeStyle}
        >
          →
        </RightScrollButton>
      </FilmImgList>
    </BunnerC>
  );
};
