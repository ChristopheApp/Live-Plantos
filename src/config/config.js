const configLocalhost = {
    api: {
        headers: {
            client_id: '3qlhvtm78xgpq4nw63dqlgp07zb0zg',
            client_secret: process.env.REACT_APP_SECRET_TWITCH_LH,
            authorization : 'Bearer gs6d188f7eus71a6kxlt5obfvgydum',
            redirectUri: "http://localhost:3000/",
            responseType: "token",
            scope: "user:read:follows"
        },
    },
    global: {
        gameName: 'Grand Theft Auto V',
        gameId: '32982',
        language: 'fr',
        limit: '100',
        userId: '147359949', // Compte : Kin4y
        regExp21JC: /(21 *[jJ][uU][mM][pP] *[cC][lL][iI][cC][kK]) | (21 *[jJ] *[cC])/,
        regExpLP: /([lL][oO][sS] *[pP][lL][aA][nN][tT][oO][sS]) | ([lL][pP])/,
    }  

}

const configProduction = {
    api: {
        headers: {
            client_id: '5d9oikssa6poddqxko7stuz6a3kiis',
            client_secret: process.env.REACT_APP_SECRET_TWITCH_PROD,
            authorization : 'Bearer gs6d188f7eus71a6kxlt5obfvgydum',
            redirectUri: "https://live-plantos.netlify.app/",
            responseType: "token",
            scope: "user:read:follows"
        },
    },
    global: {
        gameName: 'Grand Theft Auto V',
        gameId: '32982',
        language: 'fr',
        limit: '100',
        userId: '147359949', // Compte : Kin4y
        regExp21JC: /(21 *[jJ][uU][mM][pP] *[cC][lL][iI][cC][kK]) | (21 *[jJ] *[cC])/,
        regExpLP: /([lL][oO][sS] *[pP][lL][aA][nN][tT][oO][sS]) | ([lL][pP])/,
    }
}

export default configLocalhost;