import api from './api' // API Initialize with axios
import { useNavigate } from 'react-router-dom';

const gtaGameID = "32982"; // GTA V game ID
const language = 'fr';
const nbOfStreams = "100"; //Number of streams to get with one request
const userId = "147359949"; // User ID : Kin4y

// Need to approve authorization on user account to get user infos, see getOAuthToken() function in src/api/api.js
// and https://dev.twitch.tv/docs/authentication/getting-tokens-oauth#implicit-grant-flow

const getStreamsByUserFollows = async () => {

    const result = await api.get(`https://api.twitch.tv/helix/streams/followed?user_id=${userId}`)

    console.log(result)
    console.log(result.data)
    return result.data
}

export default getStreamsByUserFollows;