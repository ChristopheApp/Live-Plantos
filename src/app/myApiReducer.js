import { createSlice } from '@reduxjs/toolkit'

export const myAPI = createSlice({
    name: 'apiData',
    initialState: {
        client_id: '3qlhvtm78xgpq4nw63dqlgp07zb0zg',
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        authorization : 'Bearer gs6d188f7eus71a6kxlt5obfvgydum',
        redirect_uri: "http://localhost:3000/",
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
        regExpLP: /([lL][oO][sS] *[pP][lL][aA][nN][tT][oO][sS])/,
    
    }
  })

  export const getData = state => state.apiData



export default myAPI.reducer