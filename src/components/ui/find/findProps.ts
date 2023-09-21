import { NumberLiteralType } from "typescript";

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
