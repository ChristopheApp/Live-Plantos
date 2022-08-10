import api from './api' // API Initialize with axios

// Funtion that get GTA Y live streams with spécific language
const getStreamsByGameId = async (language, nbOfStreams, gtaGameID, pagination) => {

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
   console.log(result)
   console.log(result.data)
    return result.data  
}

export default getStreamsByGameId;