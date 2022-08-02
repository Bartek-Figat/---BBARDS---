import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface ConfigState {
  collapsed: boolean;
}

const initialState: ConfigState = {
  collapsed: false,
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setCollapsed: (state, { payload }: PayloadAction<Partial<ConfigState>>) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
});

export const { setCollapsed } = configSlice.actions;
export default configSlice.reducer;
export const selectConfig = (state: RootState) => state.config.collapsed;
