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
