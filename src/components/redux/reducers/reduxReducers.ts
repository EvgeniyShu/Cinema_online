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
  FilterProps,
  FindDataProps,
  Person,
  PosterProps,
  PremierFilm,
  RecomendetFilm,
  Result,
  currentFilmProps,
} from "./propsReducers";

export interface InitialStateProps {
  BannerFilmData: BannerFilmsProps[];
  TopFilmData: FilmProps[];
  Favorite: currentFilmProps[];
  currentFilm: currentFilmProps[];
  recomendetFilm: { films: RecomendetFilm[]; pagesCount: number };
  findData: { data: FindDataProps[]; pagesCount: number };
  posterFilm: Array<PosterProps>;
  premieresFilm: PremierFilm[];
  filter: FilterProps;
  similarFilm: any[];
  isFavorFilm: boolean;
  Person: Person[];
  loading: boolean;
  error: string | null | unknown;
}

const initialState: InitialStateProps = {
  BannerFilmData: [],
  TopFilmData: [],
  premieresFilm: [],
  recomendetFilm: { films: [], pagesCount: 0 },
  findData: { data: [], pagesCount: 0 },
  Favorite: [],
  currentFilm: [],
  similarFilm: [],
  filter: { countries: [], genres: [] },
  posterFilm: [],
  isFavorFilm: false,
  Person: [],
  loading: false,
  error: null,
};

export const BannerFilmData = createAsyncThunk(
  "films/fetchBannerFilms",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(
        "v2.2/films/top?type=TOP_AWAIT_FILMS&page=1"
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
        "v2.2/films/premieres?year=2023&month=SEPTEMBER"
      );
      dispatch(fetchPremieresFilms(result.dataArray.items));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const topFilmData = createAsyncThunk(
  "films/fetchTopFilms",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData("v2.2/films/top");
      dispatch(fetchFilms(result.dataArray.films));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const recomendetFilmData = createAsyncThunk(
  "films/fetchRecomendetFilms",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(
        `v2.2/films/top?type=TOP_250_BEST_FILMS&page=${id}`
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
      const result: any = await Api.fetchData(`v2.2/films/${id}`);
      dispatch(fetchCurrentFilm(result.dataArray));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const posterData = createAsyncThunk(
  "films/fetchPosterData",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(`v2.2/films/${id}/images`);
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
      const result: any = await Api.fetchData(`v2.2/films/${id}/similars`);
      dispatch(fetchSimilarFilm(result.dataArray.items));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const personData = createAsyncThunk(
  "films/fetchPersonData",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(`/v1/staff/${id}`);

      dispatch(fetchPersonData(result.dataArray));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const filterData = createAsyncThunk(
  "films/fetchfilterData",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData("/v2.2/films/filters");
      dispatch(fetchFilterData(result.dataArray));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const findDataReqest = createAsyncThunk(
  "films/fetchFindData",
  async (url: string, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(`${url}`);
      dispatch(
        fetchFindData({
          data: result.dataArray.items,
          allPages: result.dataArray.totalPages,
        })
      );
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
    fetchPersonData: (state, action: PayloadAction<Person>) => {
      state.Person.length = 0;
      state.Person.push(action.payload);
    },
    fetchFindData: (
      state,
      action: PayloadAction<{ data: Array<FindDataProps>; allPages: number }>
    ) => {
      state.findData.data = action.payload.data;
      state.findData.pagesCount = action.payload.allPages;
    },
    addToFavorites: (state, action: PayloadAction<number>) => {
      const [favorFilm] = current(state.currentFilm).filter(
        (item) => item.kinopoiskId === action.payload
      );
      const exzist = current(state.Favorite).filter(
        (item) => item.kinopoiskId === favorFilm.kinopoiskId
      );
      const addFavor = () => {
        return !exzist.length ? state.Favorite.push(favorFilm) : "";
      };
      addFavor();
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.Favorite = current(state.Favorite).filter(
        (item) => item.kinopoiskId !== action.payload
      );
    },
    isFavorite: (state, action: PayloadAction<number>) => {
      const isFavor = current(state.Favorite).filter(
        (item) => item.kinopoiskId === action.payload
      );
      state.isFavorFilm = isFavor.length ? true : false;
    },
    fetchFilterData: (
      state,
      action: PayloadAction<{
        countries: { id: number; country: string }[];
        genres: { id: number; genre: string }[];
      }>
    ) => {
      state.filter.genres = action.payload.genres;
      state.filter.countries = action.payload.countries;
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
      .addCase(recomendetFilmData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(recomendetFilmData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(personData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(personData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(personData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(findDataReqest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(findDataReqest.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(findDataReqest.rejected, (state, action) => {
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
  isFavorite,
  fetchPersonData,
  fetchFilterData,
  fetchFindData,
} = filmSlice.actions;

export const filmsReducer = filmSlice.reducer;
