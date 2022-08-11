import setApi from './config/api' // API Initialize with axios

// Request that return a game ID on Twitch for a given game name.
const getGameIdByGameName = async(data) => {
    const api = setApi(data.client_id, data.authorization);

    const result = await api.get(`https://api.twitch.tv/helix/games?name=${data.game_name}`)

    console.log(result.data.data[0]);
    return result.data.data
}

export default getGameIdByGameName;