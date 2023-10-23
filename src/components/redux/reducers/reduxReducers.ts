import Api from "../../api/axiosConfig";
import { AxiosError } from "axios";
import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  current,
} from "@reduxjs/toolkit";
import {
  BannerFilmsProps,
  FilmProps,
  PosterProps,
  PremierFilm,
  RecomendetFilm,
  ResultError,
  ResultOk,
  currentFilmProps,
} from "./propsReducers";
import { addFavoritesFirebase } from "../../../firebase";

export interface InitialStateProps {
  BannerFilmData: BannerFilmsProps[];
  TopFilmData: FilmProps[];
  Favorite: currentFilmProps[];
  currentFilm: currentFilmProps[];
  recomendetFilm: { films: RecomendetFilm[]; pagesCount: number };
  posterFilm: Array<PosterProps>;
  premieresFilm: PremierFilm[];
  similarFilm: any[];
  isFavorFilm: boolean;
  loading: boolean;
  error: string | null | unknown;
}

const initialState: InitialStateProps = {
  BannerFilmData: [],
  TopFilmData: [],
  premieresFilm: [],
  recomendetFilm: { films: [], pagesCount: 0 },
  Favorite: [],
  currentFilm: [],
  similarFilm: [],
  posterFilm: [],
  isFavorFilm: false,
  loading: false,
  error: null,
};

export const BannerFilmData = createAsyncThunk(
  "films/fetchBannerFilms",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(
        "v2.2/films/collections?type=CLOSES_RELEASES&page=1"
      );
      dispatch(fetchBannerFilms(result.dataArray.items));
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const premieresFilmData = createAsyncThunk(
  "films/fetchPremieresFilms",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(
        "v2.2/films/collections?type=FAMILY&page=1"
      );
      dispatch(fetchPremieresFilms(result.dataArray.items));
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const topFilmData = createAsyncThunk(
  "films/fetchTopFilms",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(
        `v2.2/films/collections?type=TOP_250_MOVIES&page=1`
      );
      dispatch(fetchFilms(result.dataArray.items));
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const recomendetFilmData = createAsyncThunk(
  "films/fetchRecomendetFilms",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      const originalPromiseResult: any = await Api.fetchData(
        `v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=${id}`
      );
      return {
        film: originalPromiseResult.dataArray.items,
        allPages: originalPromiseResult.dataArray.totalPages,
      };
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const currentFilmData = createAsyncThunk(
  "films/fetchCurrentFilm",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(`v2.2/films/${id}`);
      dispatch(fetchCurrentFilm(result.dataArray));
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const posterData = createAsyncThunk(
  "films/fetchPosterData",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(`v2.2/films/${id}/images`);
      dispatch(fetchPosterOfFilm(result.dataArray.items));
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const similarFilmsData = createAsyncThunk(
  "films/fetchSimilarFilms",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(`v2.2/films/${id}/similars`);
      dispatch(fetchSimilarFilm(result.dataArray.items));
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const filmSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    fetchBannerFilms: (
      state,
      action: PayloadAction<Array<BannerFilmsProps>>
    ) => {
      state.BannerFilmData = action.payload;
    },
    fetchFilms: (state, action: PayloadAction<Array<FilmProps>>) => {
      state.TopFilmData = action.payload;
    },
    fetchPremieresFilms: (state, action: PayloadAction<Array<PremierFilm>>) => {
      state.premieresFilm = action.payload;
    },

    fetchCurrentFilm: (state, action: PayloadAction<currentFilmProps>) => {
      state.currentFilm.length = 0;
      state.currentFilm.push(action.payload);
    },
    fetchPosterOfFilm: (state, action: PayloadAction<PosterProps[]>) => {
      state.posterFilm.length = 0;
      state.posterFilm = action.payload;
    },
    fetchSimilarFilm: (state, action: PayloadAction<any[]>) => {
      state.similarFilm = action.payload;
    },

    addToFavorites: (
      state,
      action: PayloadAction<{ id: string; filmId: number }>
    ) => {
      const [favorFilm] = current(state.currentFilm).filter(
        (item) => item.kinopoiskId === action.payload.filmId
      );

      const exzist = current(state.Favorite).filter(
        (item) => item.kinopoiskId === favorFilm.kinopoiskId
      );
      const addFavor = () => {
        return !exzist.length ? state.Favorite.push(favorFilm) : "";
      };

      addFavor();
      addFavoritesFirebase(action.payload.id, state.Favorite);
    },
    fetchFavoritesFromFirestore: (
      state,
      action: PayloadAction<currentFilmProps[]>
    ) => {
      state.Favorite = action.payload;
    },

    removeFromFavorites: (
      state,
      action: PayloadAction<{ id: string; filmId: number }>
    ) => {
      state.Favorite = current(state.Favorite).filter(
        (item) => item.kinopoiskId !== action.payload.filmId
      );
      addFavoritesFirebase(action.payload.id, state.Favorite);
    },
    isFavorite: (state, action: PayloadAction<number>) => {
      const isFavor = current(state.Favorite).filter(
        (item) => item.kinopoiskId === action.payload
      );
      state.isFavorFilm = isFavor.length ? true : false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(BannerFilmData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(BannerFilmData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(BannerFilmData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(premieresFilmData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(premieresFilmData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(premieresFilmData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(topFilmData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(topFilmData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(topFilmData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(currentFilmData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(currentFilmData.fulfilled, (state, action: any) => {
        state.loading = false;
      })
      .addCase(currentFilmData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(similarFilmsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(similarFilmsData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(similarFilmsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(recomendetFilmData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(recomendetFilmData.fulfilled, (state, action) => {
        state.recomendetFilm.films = action.payload.film;
        state.recomendetFilm.pagesCount = action.payload.allPages;
        state.loading = false;
      })
      .addCase(recomendetFilmData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const {
  fetchBannerFilms,
  fetchFilms,
  addToFavorites,
  removeFromFavorites,
  fetchCurrentFilm,
  fetchSimilarFilm,
  fetchPosterOfFilm,
  fetchPremieresFilms,

  isFavorite,
  fetchFavoritesFromFirestore,
} = filmSlice.actions;

export const filmsReducer = filmSlice.reducer;
