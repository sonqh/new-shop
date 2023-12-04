import api from "@/provider/api";
import { Dispatch, createSlice } from "@reduxjs/toolkit";

interface Tier {
  id: number;
  name: string;
  key: string;
}

interface TierState {
  tiers: Tier[];
  loading: boolean;
  error: string | null;
}

const initialState: TierState = {
  tiers: [],
  loading: false,
  error: null,
};

const tierSlice = createSlice({
  name: "tier",
  initialState,
  reducers: {
    fetchTiersData(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTiersSuccess(state, action) {
      state.loading = false;
      state.tiers = action.payload;
    },
    fetchTiersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTiersData, fetchTiersSuccess, fetchTiersFailure } =
  tierSlice.actions;

export const fetchTiers = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchTiersData());
    try {
      const response = await api.get("/tiers");
      dispatch(fetchTiersSuccess(response));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchTiersFailure(error.message));
      } else {
        dispatch(fetchTiersFailure("An unknown error occurred."));
      }
    }
  };
};

export const selectAllTiers = (state: { tier: TierState }) => state.tier.tiers;

export default tierSlice.reducer;
