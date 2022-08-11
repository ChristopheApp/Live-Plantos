import axios from 'axios'
// https://id.twitch.tv/oauth2/authorize?[parameters]
// parameters : client_id, redirect_uri, response_type, scope, state
// clientId  // Your app’s registered client ID.
// redirectUri  // Your app’s registered redirect URI.
// responseType  // The response type you want to use.
// scope // twitch scope to read user follows

//Access token for my twitch account with these parameters : 
//#access_token=gs6d188f7eus71a6kxlt5obfvgydum&scope=user%3Aread%3Afollows&token_type=bearer

//`https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

/* NE marche pas a cause du CORS, flemme de régler ce problème maintenant.

on peut mettre l'url dans le navigateur à la main avec les bons paramètres 
et connecter le compte twitch sur lequel on veut accéder aux follows par exemple

//Localhost
https://id.twitch.tv/oauth2/authorize?client_id=3qlhvtm78xgpq4nw63dqlgp07zb0zg&redirect_uri=http://localhost:3000/&response_type=token&scope=user:read:follows

//Production
https://id.twitch.tv/oauth2/authorize?client_id=5d9oikssa6poddqxko7stuz6a3kiis&redirect_uri=https://live-plantos.netlify.app/&response_type=token&scope=user:read:follows
return
#access_token=4rt893ylevqrvcamiybbmf0gsr7pyq&scope=user%3Aread%3Afollows&token_type=bearer

et récupéré l'access token dans l'url de retour, a mettre dans api.js 
#access_token=gs6d188f7eus71a6kxlt5obfvgydum&scope=user%3Aread%3Afollows&token_type=bearer

*/

const getOAuthToken = async (client_id, redirect_uri, response_type, scope) => {
      const result = await axios.get(`https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`)
      return result;
}
  

export default getOAuthToken