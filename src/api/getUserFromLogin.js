import setApi from './config/api' // API Initialize with axios

// Request that return User infos for a given user login.
const getUserFromLogin = async(data) => {

  const api = setApi(data.client_id, data.authorization);

    let user;

    await api.get(`https://api.twitch.tv/helix/users?login=${data.user_login}`)
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