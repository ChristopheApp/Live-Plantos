import api from './api' // API Initialize with axios

import config from '../config/config';

const globalVar = config.api.global;

// Request that return User infos for a given user login.
const getUserFromLogin = async(user_login) => {

    let user;

    await api.get(`https://api.twitch.tv/helix/users?login=${user_login}`)
    .catch(error => {
        console.log(error)
      } )
      .then(result => {
        console.log(result)
        user = result.data.data[0];
      })

      console.log('user : ' + JSON.stringify(user))

    return {user: user, userId: user.id}
}

export default getUserFromLogin;