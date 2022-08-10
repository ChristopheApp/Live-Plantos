import api from './api' // API Initialize with axios

import { useSelector, useDispatch } from 'react-redux'
import {    globalVar  } from '../app/localhostReducer'

const gtaGameID = globalVar.gameId; // GTA V game ID
const language = globalVar.language; // Language of the streams
const nbOfStreams = globalVar.limit; //Number of streams to get with one request

// Funtion that get GTA Y live streams with spécific language
const getStreamsByGameId = async (pagination) => {

    let result;
    // If we have a pagination or not (to get more streams, max 100 by request)
    if (pagination) {
        result = await api.get(`https://api.twitch.tv/helix/streams?language=${language}&first=${nbOfStreams}&game_id=${gtaGameID}&after=${pagination}`)
        // With a pagination, return after the cursor
        
    } else {
        result = await api.get(`https://api.twitch.tv/helix/streams?language=${language}&first=${nbOfStreams}&game_id=${gtaGameID}`)
    } // Without pagination return the first streams
       
    /* result.data Return an objet : { data: object,
                                       pagination: string }
    */
    return result.data  
}

export default getStreamsByGameId;