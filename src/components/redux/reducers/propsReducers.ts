export interface FilmProps {
  filmId: number;
  nameRu: string;
  nameEn: string;
  year: string;
  filmLength: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  rating: number;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
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
  duration: number;
  genres: { genre: string }[];
  kinopoiskId: number;
  nameEn: string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  premiereRu: string;
  year: number;
}

export interface RecomendetFilm {
  countries: { country: string }[];
  filmId: number;
  filmLength: string;
  genres: { genre: string }[];
  isAfisha: number;
  isRatingUp: null | boolean;
  nameEn: null | string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  rating: string;
  ratingChange?: null;
  ratingVoteCount: number;
  year: string;
}

export interface BannerFilmsProps {
  countries: { country: string }[];
  filmId: number;
  filmLength: string;
  genres: { genre: string }[];
  isAfisha: number;
  isRatingUp: null | boolean;
  nameEn: null | string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  rating: string;
  ratingChange?: null;
  ratingVoteCount: number;
  year: string;
}
