import React, { useEffect } from 'react'
import axios from 'axios'
import config from '../config/config';

const header = config.api.headers;

function Live() {
    const fetchData = async () => {
      await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${header.client_id}&client_secret=${header.client_secret}&grant_type=client_credentials`)
      .then(response => console.log(response.data))
    }
    fetchData()

}
export default Live