import React, { useEffect} from "react"
import { useNavigate } from "react-router-dom";

function ScreenError404() {
    const navigate = useNavigate();

    // useEffect that redirect to home page after 5 secondes
    useEffect( ()=> {
        setTimeout(() => {
            navigate('/');
        }, 5000);
    } , [])




    return(
        <div className="ScreenError404">
            <h1>Error 404</h1>
            <h2>Page not found</h2>
            <h3>Redirecting to home page</h3>
        </div>
    );
}

export default ScreenError404;