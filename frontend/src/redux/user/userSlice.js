import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  currentuser: null,
  error: null,
  loading: false
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signinStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signinSuccess: (state, action) => {
      state.currentuser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signinFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateUserSuccess: (state, action) => {
      state.currentuser = {
        ...state.currentuser,
        others: action.payload,
      };
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteUserSuccess: (state) => {
      state.currentuser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    signoutUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signoutUserSuccess: (state) => {
      state.currentuser = null;
      state.loading = false;
      state.error = null;
    },
    signoutUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  }
});
export const { signinStart, signinSuccess, signinFailure, updateUserStart, updateUserSuccess, updateUserFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure, signoutUserStart, signoutUserSuccess, signoutUserFailure } = userSlice.actions;
export default userSlice.reducer;