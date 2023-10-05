import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface ConfigState {
  checked: boolean;
}

const initialState: ConfigState = {
  checked: false,
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setCheck: (state, { payload }: PayloadAction<Partial<ConfigState>>) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
});

export default configSlice.reducer;

export const { setCheck } = configSlice.actions;

export const selectCheckSlice = (state: RootState) => state.checked;
