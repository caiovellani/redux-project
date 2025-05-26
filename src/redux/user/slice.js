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

    addAdress: (state, action) => {
      if (action.payload.location === '' || action.payload.number === '') {
        alert('Preencha todos os campos')

        return { ...state }
      }
      if (state.user === null) {
        alert('Faça um login para um cadastrar o endereço.')

        return { ...state }
      }

      alert('Dados atualizados!')

      return {
        ...state,
        user: {
          ...state.user,
          address: {
            location: action.payload.location,
            number: action.payload.number,
          },
        },
      }
    },
  },
})

export const { createUser, logoutUser, addAdress } = userSlice.actions
export default userSlice.reducer
