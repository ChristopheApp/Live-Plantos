import React, { useEffect } from 'react'
import axios from 'axios'
function Live() {
  useEffect(() => {
    const fetchData = async () => {
      await axios.post('https://id.twitch.tv/oauth2/token?client_id=3qlhvtm78xgpq4nw63dqlgp07zb0zg&client_secret=6rbtjmukvpr59ejt9gjfzna2mljmge&grant_type=client_credentials')
      .then(response => console.log(response.data))
    }
    fetchData()
  })
}
export default Live