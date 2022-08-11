import axios from 'axios'

const getAccessToken = async (client_id, client_secret) => {

    let result = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`)

    console.log(result)
    return result.data;
    
}

export default getAccessToken;