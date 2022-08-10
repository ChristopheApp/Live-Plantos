let config = {
    api: {
        baseURL: 'https://api.twitch.tv/helix',
        headers: {
            client_Id: '3qlhvtm78xgpq4nw63dqlgp07zb0zg',
            authorization : 'Bearer gs6d188f7eus71a6kxlt5obfvgydum'
        },
        variables: {
            gameName: 'Grand Theft Auto V',
            GameId: '32982',
        }
    },
    global: {
        redirectUri: "http://localhost:3000/",

    }

}

export default config;