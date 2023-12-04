import api from "@/provider/api";
import { Dispatch, createSlice } from "@reduxjs/toolkit";

interface Category {
  id: number;
  name: string;
  key: string;
  tier: string;
}

interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    fetchCategoriesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCategoriesSuccess(state, action) {
      state.loading = false;
      state.categories = action.payload;
    },
    fetchCategoriesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} = categorySlice.actions;

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const response = await api.get("/categories");
      dispatch(fetchCategoriesSuccess(response));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchCategoriesFailure(error.message));
      } else {
        dispatch(fetchCategoriesFailure("An unknown error occurred."));
      }
    }
  };
};
export default categorySlice.reducer;
