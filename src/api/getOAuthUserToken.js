import React, { useEffect } from 'react'
import axios from 'axios'

// https://id.twitch.tv/oauth2/authorize?[parameters]
// parameters : client_id, redirect_uri, response_type, scope, state
const clientId = "3qlhvtm78xgpq4nw63dqlgp07zb0zg"; // Your app’s registered client ID.
const redirectUri = "http://localhost:3000/";
const responseType = "token";
// twitch scope to read user follows
const scope = "user:read:follows";
//Access token for my twitch account with these parameters : 
//#access_token=gs6d188f7eus71a6kxlt5obfvgydum&scope=user%3Aread%3Afollows&token_type=bearer

//`https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

/* NE marche pas a cause du CORS, flemme de régler ce problème maintenant.

on peut mettre l'url dans le navigateur à la main avec les bons paramètres 
et connecter le compte twitch sur lequel on veut accéder aux follows par exemple

https://id.twitch.tv/oauth2/authorize?client_id=3qlhvtm78xgpq4nw63dqlgp07zb0zg&redirect_uri=http://localhost:3000/&response_type=token&scope=user:read:follows

et récupéré l'access token dans l'url de retour, a mettre dans api.js 
#access_token=gs6d188f7eus71a6kxlt5obfvgydum&scope=user%3Aread%3Afollows&token_type=bearer

*/

function Live() {
    const fetchData = async () => {
      await axios.get(`https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`)
      .then(response => console.log(response))
    }
    fetchData()
  
}
export default Live