import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    user: null,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export default userSlice.reducer
