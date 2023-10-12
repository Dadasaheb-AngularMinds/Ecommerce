import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: "",
  editFlag: false,
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    toggleEditFlag(state, action) {
      state.editFlag = !state.editFlag;
    },
    setobjToStore(state, action) {
      console.log("action", action.payload);
      state.personalInfo = action.payload;
    },
  },
});
export const { toggleEditFlag, setobjToStore } = profileSlice.actions;
export default profileSlice.reducer;
