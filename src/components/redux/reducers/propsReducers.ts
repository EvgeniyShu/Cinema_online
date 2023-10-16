export interface FilmProps {
  countries: { country: string }[];
  genres: { genre: string }[];

  imdbId: string;
  kinopoiskId: number;
  nameEn: null | string;
  nameOriginal: string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  ratingImdb: number;
  ratingKinopoisk: number;
  type: string;
  year: number;
}

export interface currentFilmProps {
  completed: boolean;
  countries: { country: string }[];
  coverUrl: string;
  description: string;
  editorAnnotation?: string;
  endYear?: number;
  filmLength: number;
  genres: { genre: string }[];
  has3D: boolean;
  hasImax: boolean;
  imdbId: string;
  isTicketsAvailable: boolean;
  kinopoiskHDId: string;
  kinopoiskId: number;
  lastSync: string;
  logoUrl: string;
  nameEn?: string;
  nameOriginal: string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  productionStatus?: boolean;
  ratingAgeLimits: string;
  ratingAwait?: string;
  ratingAwaitCount?: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingMpaa: string;
  ratingRfCritics?: string;
  ratingRfCriticsVoteCount?: number;
  reviewsCount?: number;
  serial: boolean;
  shortDescription: string;
  shortFilm: boolean;
  slogan: string;
  startYear?: number;
  type: string;
  webUrl: string;
  year: number;
}

export interface SimilarFilmProps {
  filmId: number;
  nameEn: string;
  nameOriginal: string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  relationType: string;
}

export interface PosterProps {
  imageUrl: string;
  previewUrl: string;
}

export interface PremierFilm {
  countries: { country: string }[];
  genres: { genre: string }[];

  imdbId: string;
  kinopoiskId: number;
  nameEn: null | string;
  nameOriginal: string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  ratingImdb: number;
  ratingKinopoisk: number;
  type: string;
  year: number;
}

export interface RecomendetFilm {
  countries: { country: string }[];
  genres: { genre: string }[];

  imdbId: string;
  kinopoiskId: number;
  nameEn: null | string;
  nameOriginal: string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  ratingImdb: number;
  ratingKinopoisk: number;
  type: string;
  year: number;
}

export interface BannerFilmsProps {
  countries: { country: string }[];
  genres: { genre: string }[];
  imdbId: string;
  kinopoiskId: number;
  nameEn: null | string;
  nameOriginal: string;
  nameRu: null | string;
  posterUrl: string;
  posterUrlPreview: string;
  ratingImdb: number;
  ratingKinopoisk: number;
  type: "FILM";
  year: number;
}

export interface FindDataProps {
  countries?: { country: string }[];

  genres?: { genre: string }[];
  imdbId?: string;
  kinopoiskId: number;
  nameEn: null | string;
  nameOriginal?: string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview?: string;
  ratingImdb?: number;
  ratingKinopoisk?: number;
  type?: string;
  year?: number;
  sex?: string;
  webUrl?: string;
}

export interface Person {
  age: number;
  birthday: string;
  birthplace: string;
  death: string | null;
  deathplace: string | null;
  facts: [];

  films: {
    description: string;
    filmId: number;
    general: boolean;
    nameEn: string;
    nameRu: string;
    professionKey: string;
    rating: string;
  }[];

  growth: number;
  hasAwards: number;
  nameEn: string;
  nameRu: string;
  personId: number;
  posterUrl: string;
  profession: string;
  sex: string;
  spouses: [];
}

export interface FindDataProps {
  countries?: { country: string }[];

  genres?: { genre: string }[];
  imdbId?: string;
  kinopoiskId: number;
  nameEn: null | string;
  nameOriginal?: string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview?: string;
  ratingImdb?: number;
  ratingKinopoisk?: number;
  type?: string;
  year?: number;
  sex?: string;
  webUrl?: string;
}

export interface ResultOk {
  status: number | undefined;
  dataArray: any;
}

export interface ResultError {
  status: number | undefined;
  errorText: string;
}

export interface FilterProps {
  countries: { id: number; country: string }[];
  genres: { id: number; genre: string }[];
}
