import axios from 'axios'

const setApi = (client_id, authorization) => {

  let api = axios.create({
    headers: {
      'Client-ID': client_id,
      // To use GetFollewedStreams, need OAuth token
      'Authorization' : authorization
    }
  })
  return api
}
export default setApi