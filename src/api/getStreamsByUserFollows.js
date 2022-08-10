import api from './api' // API Initialize with axios

// Need to approve authorization on user account to get user infos, see getOAuthToken() function in src/api/api.js
// and https://dev.twitch.tv/docs/authentication/getting-tokens-oauth#implicit-grant-flow

const getStreamsByUserFollows = async (userId) => {

    const result = await api.get(`https://api.twitch.tv/helix/streams/followed?user_id=${userId}`)

    console.log(result)
    console.log(result.data)
    return result.data
}

export default getStreamsByUserFollows;