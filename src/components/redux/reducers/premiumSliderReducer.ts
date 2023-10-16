import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../api/axiosConfig";
import { FindDataProps } from "./propsReducers";
import { AxiosError } from "axios";

export interface InitialFindStateProps {
  findData: FindDataProps[];

  loading: boolean;
  error: string | null | unknown;
}

const initialState: InitialFindStateProps = {
  findData: [],

  loading: false,
  error: null,
};

export const findPremiumDataReqest = createAsyncThunk(
  "findPremiumData/fetchFindPremiumData",
  async (url: string, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(
        `/v2.2/films?order=RATING&type=${url}&ratingFrom=8&ratingTo=9&yearFrom=1000&yearTo=3000&page=1`
      );

      dispatch(fetchFindPremiumData(result.dataArray.items));
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const findPremiumDataSlice = createSlice({
  name: "findPremiumData",
  initialState,
  reducers: {
    fetchFindPremiumData: (
      state,
      action: PayloadAction<Array<FindDataProps>>
    ) => {
      state.findData.length = 0;
      state.findData = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(findPremiumDataReqest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(findPremiumDataReqest.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(findPremiumDataReqest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const { fetchFindPremiumData } = findPremiumDataSlice.actions;

export const findPremiumDataReducer = findPremiumDataSlice.reducer;
