import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'dataProd',
    initialState: {
        client_id: '3qlhvtm78xgpq4nw63dqlgp07zb0zg',
        client_secret: process.env.REACT_APP_CLIENT_SECRET_PROD,
        authorization : 'Bearer 4rt893ylevqrvcamiybbmf0gsr7pyq',
        redirect_uri: "https://live-plantos.netlify.app/",
        response_type: "token",
        scope: "user:read:follows",
        game_name: 'Grand Theft Auto V',
        game_id: '32982',
        language: 'fr',
        limit: '100',
        use_follows: false,
        user_id: '147359949', // Compte : Kin4y, compte pour le mode followed users
        // J'ai autorisé le read follow sur mon compte pour les 2 apps enregistrées sur Twitch.
        regExp21JC: /(21 *[jJ][uU][mM][pP] *[cC][lL][iI][cC][kK])|(21 *[jJ] *[cC])/,
        regExpLP: /([lL][oO][sS] *[pP][lL][aA][nN][tT][oO][sS])|([lL][pP])/,

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