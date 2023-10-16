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
  RightScrollButton,
  Window,
} from "./styledBanner";

export const Banner = () => {
  const themeContextData: InitialContextProps = useThemeContext();

  const { BannerFilmData: films } = useAppSelector((state) => state.films);

  const handleMouseEnter = (event: any) => {
    event.target.style.height = "300px";
    event.target.style.width = "200px";

    const [img] = films.filter(
      (item) => item.kinopoiskId === Number(event.target.id)
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
      backgroundimg={films.length ? films[0].posterUrl : "black"}
    >
      <FilmImgList>
        <LeftScrollButton
          onClick={() => scrollContainerBy(-400)}
          themestyles={themeContextData.themeStyle}
        >
          ←
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
          →
        </RightScrollButton>
      </FilmImgList>
    </BunnerC>
  );
};
