import axios from 'axios'

const getAppAccessToken = async (client_id, client_secret) => {

    const result = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`)
    return result.data;
    
}

export default getAppAccessToken;