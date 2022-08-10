import axios from 'axios'
import config from '../config/config';

const header = config.api.headers;

let api = axios.create({
  headers: {
    'Client-ID': header.client_id,
    // To use GetFollewedStreams, need OAuth token
    'Authorization' : header.authorization
  }
})
export default api