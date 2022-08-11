import setApi from './config/api' // API Initialize with axios

// Funtion that get GTA Y live streams with spécific language
const getStreamsByGameId = async (data, pag) => {
    const api = setApi(data.client_id, data.authorization);

    let result;
    // If we have a pagination or not (to get more streams, max 100 by request)
    if (pag) {
        result = await api.get(`https://api.twitch.tv/helix/streams?language=${data.language}&first=${data.limit}&game_id=${data.game_id}&after=${pag}`)
        // With a pagination, return after the cursor
        
    } else {
        result = await api.get(`https://api.twitch.tv/helix/streams?language=${data.language}&first=${data.limit}&game_id=${data.game_id}`)
    } // Without pagination return the first streams
       
    /* result.data Return an objet : { data: object,
                                       pagination: string }
    */
    return result.data  
}

export default getStreamsByGameId;