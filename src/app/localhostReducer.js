import { createSlice } from '@reduxjs/toolkit'

export const myAPI = createSlice({
    name: 'globalVar',
    initialState: {
        client_id: '3qlhvtm78xgpq4nw63dqlgp07zb0zg',
        client_secret: process.env.REACT_APP_SECRET_TWITCH_LH,
        authorization : '',
        redirectUri: "http://localhost:3000/",
        responseType: "token",
        scope: "user:read:follows",
        gameName: 'Grand Theft Auto V',
        gameId: '32982',
        language: 'fr',
        limit: '100',
        userId: '147359949', // Compte : Kin4y
        // regExp21JC: /(21 *[jJ][uU][mM][pP] *[cC][lL][iI][cC][kK]) | (21 *[jJ] *[cC])/,
        // regExpLP: /([lL][oO][sS] *[pP][lL][aA][nN][tT][oO][sS]) | ([lL][pP])/,
    
    },
    reducers: {
      setAuthorization: state => {
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

  export const { setAuthorization, decrement, incrementByAmount } = myAPI.actions


  export const getData = state => state.globalVar



export default myAPI.reducer