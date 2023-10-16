import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Person } from "./propsReducers";
import Api from "../../api/axiosConfig";
import { AxiosError } from "axios";

export interface InitialPersonStateProps {
  Person: Person[];
  loading: boolean;
  error: string | null | unknown;
}

const initialState: InitialPersonStateProps = {
  Person: [],
  loading: false,
  error: null,
};

export const personData = createAsyncThunk(
  "personData/fetchPersonData",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      const result: any = await Api.fetchData(`/v1/staff/${id}`);
      console.log(result);
      dispatch(fetchPersonData(result.dataArray));
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const personSlice = createSlice({
  name: "personData",
  initialState,
  reducers: {
    fetchPersonData: (state, action: PayloadAction<Person>) => {
      state.Person.length = 0;
      state.Person.push(action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
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
      }),
});

export const { fetchPersonData } = personSlice.actions;

export const personReducer = personSlice.reducer;
