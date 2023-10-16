import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../api/axiosConfig";
import { FilterProps, FindDataProps } from "./propsReducers";
import { AxiosError } from "axios";

export interface InitialFindStateProps {
  findData: { data: FindDataProps[]; pagesCount: number };
  filter: FilterProps;
  loading: boolean;
  error: string | null | unknown;
}

const initialState: InitialFindStateProps = {
  findData: { data: [], pagesCount: 0 },
  filter: { countries: [], genres: [] },
  loading: false,
  error: null,
};

export const filterData = createAsyncThunk(
  "findData/fetchfilterData",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData("/v2.2/films/filters");
      dispatch(fetchFilterData(result.dataArray));
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const findDataReqest = createAsyncThunk(
  "findData/fetchFindData",
  async (url: string, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(`${url}`);

      dispatch(
        fetchFindData({
          data: result.dataArray.items,
          allPages: result.dataArray.totalPages,
        })
      );
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const findDataSlice = createSlice({
  name: "findData",
  initialState,
  reducers: {
    fetchFindData: (
      state,
      action: PayloadAction<{ data: Array<FindDataProps>; allPages: number }>
    ) => {
      state.findData.data = action.payload.data;
      state.findData.pagesCount = action.payload.allPages;
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
      })
      .addCase(filterData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(filterData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(filterData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const { fetchFindData, fetchFilterData } = findDataSlice.actions;

export const findDataReducer = findDataSlice.reducer;
