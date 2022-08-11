import React, { useState, useEffect } from 'react'
import getAccessToken from './getAccessToken'

import { useSelector, useDispatch } from 'react-redux'
import { getData, setAuthorization  } from '../app/localhostReducer'
import { selectAll } from '../app/productionReducer'

const client_id = "3qlhvtm78xgpq4nw63dqlgp07zb0zg";
const client_secret = process.env.REACT_APP_CLIENT_SECRET;

export default function InitApi() {
    
    const globalVar = useSelector(getData)
    const count = useSelector(selectAll)
    const dispatch = useDispatch()



    
    useEffect(() => {  
        console.log(globalVar)
        initAccessToken(globalVar.client_id, globalVar.client_secret)
    } , [])

    const initAccessToken = async(client_id, client_secret) =>{

        const resp = await getAccessToken(client_id, client_secret);
        console.log(resp)
        const authorization = `Bearer ${resp.access_token}`
        dispatch(setAuthorization(authorization));
        
    }

    return(
        <>
        </>
    )
}