import React, { useState, useEffect } from 'react'

import getAppAccessToken from './getAppAccessToken'
import getOAuthUserToken from './getOAuthUserToken'

import { useSelector  } from 'react-redux'
import { getData  } from '../../app/myApiReducer'

import ButtonLp from '../../styled/ButtonLp'

export default function InitApi() {
    
    const globalVar = useSelector(getData)

    const getAccessToken = async(client_id, client_secret) =>{

        const resp = await getAppAccessToken(client_id, client_secret);
        console.log(resp)        
    }

    const getOAuthToken = async(client_id, redirect_uri, response_type, scope) =>{

        const resp = await getOAuthUserToken(client_id, redirect_uri, response_type, scope);
        console.log(resp)   
    }

    return(
        <>
        <ButtonLp onClick={() => getAccessToken(globalVar.client_id, globalVar.client_secret)}>Get Access Token</ButtonLp>
        <ButtonLp onClick={() => getOAuthToken(globalVar.client_id, globalVar.redirect_uri, globalVar.response_type, globalVar.scope)}>Get OAuth Token</ButtonLp>
        </>
    )
}