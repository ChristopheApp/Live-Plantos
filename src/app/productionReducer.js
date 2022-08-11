import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'dataProd',
    initialState: {
      value: 3,
      client_id: '3qlhvtm78xgpq4nw63dqlgp07zb0zg',
        client_secret: process.env.REACT_APP_CLIENT_SECRET_PROD,
        authorization : '',
        redirectUri: "http://localhost:3000/",
        responseType: "token",
        scope: "user:read:follows",
        gameName: 'Grand Theft Auto V',
        gameId: '32982',
        language: 'fr',
        limit: '100',
        userId: '147359949',

    },
    reducers: {
      increment: state => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
      },
      decrement: state => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      }
    }
  })

  export const { increment, decrement, incrementByAmount } = counterSlice.actions


  export const selectAll = state => state.dataProd



export default counterSlice.reducer