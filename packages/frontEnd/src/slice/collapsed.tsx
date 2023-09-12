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

export default configSlice.reducer;

export const { setCollapsed } = configSlice.actions;

export const selectConfigSlice = (state: RootState) => state.collapsed;
