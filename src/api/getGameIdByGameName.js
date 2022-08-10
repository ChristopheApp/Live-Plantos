import api from './api' // API Initialize with axios

// Request that return a game ID on Twitch for a given game name.
const getGameIdByGameName = async(gameName) => {

    const result = await api.get(`https://api.twitch.tv/helix/games?name=${gameName}`)

    console.log(result.data.data[0]);
    return result.data.data
}

export default getGameIdByGameName;