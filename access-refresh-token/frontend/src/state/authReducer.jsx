import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: true
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload
      state.isLoading = false
    },
  },
})

export const { addUser } = authSlice.actions
export default authSlice.reducer
