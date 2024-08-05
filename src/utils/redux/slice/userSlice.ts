import { createSlice } from "@reduxjs/toolkit";

const initialStateOfUser = {
  username: "",
  role: ""
}

const userSlice = createSlice({
  name: 'cart',
  initialState: initialStateOfUser,
  reducers: {
    updateUser: (state, action) => {
      state.username = action.payload.username;
      state.role = action.payload.role
    }
  }
  ,
})

export const {updateUser} = userSlice.actions;
export default userSlice.reducer;