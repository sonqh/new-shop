import api from "@/provider/api";
import { ProductItemProps } from "@/widgets/Item/models/types";
import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { first, identity, pickBy } from "lodash";

interface ProductsState {
  products: ProductItemProps[];
  loading: boolean;
  error: string | null;
  latestTime: string;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  latestTime: "",
};

export interface SearchParams {
  price?: string;
  theme?: string;
  time?: string;
  tier?: string;
  _order?: string;
  _sort?: string;
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchLatestTimeSuccess(state, action) {
      state.latestTime = action.payload;
    },
    fetchLatestTimeFailure(state, action) {
      state.error = action.payload;
    },
    updateProducts(state, action) {
      const updatedProducts = action.payload;
      state.products = updatedProducts;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  updateProducts,
} = productsSlice.actions;

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchProductsStart());
    try {
      const response = await api.get("/products");
      dispatch(fetchProductsSuccess(response));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchProductsFailure(error.message));
      } else {
        dispatch(fetchProductsFailure("An unknown error occurred."));
      }
    }
  };
};

export const fetchLatestTime = async () => {
  try {
    const response: ProductItemProps[] = await api.get("/products", {
      params: {
        _sort: "time",
        _order: "desc",
        _limit: 1,
      },
    });
    const latestTime = first(response);
    return latestTime;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred.");
    }
  }
};

export const searchProducts = ({ price, theme, time, tier }: SearchParams) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchProductsStart());
    try {
      let timeToSearch = time;
      if (time) {
        const latestTime = await fetchLatestTime();
        timeToSearch = latestTime?.time;
      }

      const params: SearchParams = {
        theme: theme,
        time: timeToSearch,
        tier: tier,
      };

      if (price) {
        params._sort = "price";
        params._order = price === "lowToHigh" ? "asc" : "desc";
      }

      const validParams = pickBy(params, identity);

      const response = await api.get("/products", { params: validParams });

      dispatch(fetchProductsSuccess(response));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchProductsFailure(error.message));
      } else {
        dispatch(fetchProductsFailure("An unknown error occurred."));
      }
    }
  };
};

export const selectAllProducts = (state: { products: ProductsState }) =>
  state?.products?.products || [];

export const selectProductsByFilter = (
  state: { products: ProductsState },
  filterCallback: (product: ProductItemProps) => boolean,
) => state.products.products.filter(filterCallback);

export default productsSlice.reducer;
