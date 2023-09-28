import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  type: string | null;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  type: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        accessToken: action.payload,
      };
    },
  },
});

export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;
