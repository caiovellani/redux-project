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
      if (action.payload.name.length <= 4) {
        alert('Preencha um nome com mais de 4 letras')
        return { ...state }
      }

      console.log(state)
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          address: null,
        },
      }
    },

    logoutUser: (state) => {
      return {
        ...state,
        user: null,
      }
    },
  },
})

export const { createUser, logoutUser } = userSlice.actions
export default userSlice.reducer
