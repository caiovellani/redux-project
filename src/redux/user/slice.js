import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    user: null,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action) => {
      console.log(state)
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          address: {
            location: 'Rua Centro',
            number: 123,
          },
        },
      }
    },
  },
})

export const { createUser } = userSlice.actions
export default userSlice.reducer
