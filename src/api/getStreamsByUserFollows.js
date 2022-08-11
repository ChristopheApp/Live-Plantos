import setApi from './config/api' // API Initialize with axios

// Need to approve authorization on user account to get user infos, see getOAuthToken() function in src/api/api.js
// and https://dev.twitch.tv/docs/authentication/getting-tokens-oauth#implicit-grant-flow

const getStreamsByUserFollows = async (data) => {
    const api = setApi(data.client_id, data.authorization);

    const result = await api.get(`https://api.twitch.tv/helix/streams/followed?user_id=${data.user_id}`)

    return result.data
}

export default getStreamsByUserFollows;