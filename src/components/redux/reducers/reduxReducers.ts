import Api from "../../api/axiosConfig";

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
  currentFilmProps,
} from "./propsReducers";

export interface InitialStateProps {
  BannerFilmData: BannerFilmsProps[];
  TopFilmData: FilmProps[];
  Favorite: Array<any>;
  currentFilm: currentFilmProps[];
  recomendetFilm: { films: RecomendetFilm[]; pagesCount: number };
  posterFilm: Array<PosterProps>;
  premieresFilm: PremierFilm[];
  similarFilm: any[];
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
  loading: false,
  error: null,
};

export const BannerFilmData = createAsyncThunk(
  "films/fetchBannerFilms",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(
        "/top?type=TOP_AWAIT_FILMS&page=1"
      );
      dispatch(fetchBannerFilms(result.dataArray.films));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const premieresFilmData = createAsyncThunk(
  "films/fetchPremieresFilms",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(
        "/premieres?year=2023&month=SEPTEMBER"
      );
      dispatch(fetchPremieresFilms(result.dataArray.items));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchTopFilmData = createAsyncThunk(
  "films/fetchTopFilms",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData("/top");
      dispatch(fetchFilms(result.dataArray.films));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchRecomendetFilmData = createAsyncThunk(
  "films/fetchRecomendetFilms",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(
        `/top?type=TOP_250_BEST_FILMS&page=${id}`
      );
      dispatch(
        fetchRecomendetFilms({
          film: result.dataArray.films,
          allPages: result.dataArray.pagesCount,
        })
      );
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const currentFilmData = createAsyncThunk(
  "films/fetchCurrentFilm",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(`/${id}`);
      dispatch(fetchCurrentFilm(result.dataArray));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const posterData = createAsyncThunk(
  "films/fetchCurrentFilm",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(`/${id}/images`);
      dispatch(fetchPosterOfFilm(result.dataArray.items));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const similarFilmsData = createAsyncThunk(
  "films/fetchSimilarFilms",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(`/${id}/similars`);
      dispatch(fetchSimilarFilm(result.dataArray.items));
    } catch (error: any) {
      return rejectWithValue(error.message);
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
    fetchRecomendetFilms: (
      state,
      action: PayloadAction<{ film: Array<RecomendetFilm>; allPages: number }>
    ) => {
      state.recomendetFilm.films = action.payload.film;
      state.recomendetFilm.pagesCount = action.payload.allPages;
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
    addToFavorites: (state, action: PayloadAction<number>) => {
      const [favorFilm] = current(state.TopFilmData).filter(
        (item) => item.filmId === action.payload
      );
      const exzist = current(state.Favorite).filter(
        (item) => item.filmId === favorFilm.filmId
      );
      const addFavor = () =>
        !exzist.length ? state.Favorite.push(favorFilm) : "";
      addFavor();
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.Favorite = current(state.Favorite).filter(
        (item) => item.filmId !== action.payload
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTopFilmData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopFilmData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchTopFilmData.rejected, (state, action) => {
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
      .addCase(similarFilmsData.fulfilled, (state, action: any) => {
        state.loading = false;
      })
      .addCase(similarFilmsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchRecomendetFilmData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecomendetFilmData.fulfilled, (state, action: any) => {
        state.loading = false;
      })
      .addCase(fetchRecomendetFilmData.rejected, (state, action) => {
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
  fetchRecomendetFilms,
} = filmSlice.actions;

export const filmsReducer = filmSlice.reducer;
