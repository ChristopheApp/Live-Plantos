import React, {useState, useEffect} from "react"
import CardStream from '../components/CardStream'
import { useLocation } from "react-router-dom"


function LivestreamsScreen() {
    const location = useLocation();

    const [streams, setStreams] = useState([]);

    const [displayCard, setDisplayCard] = useState(false);

    const [streamsToDisplay, setStreamsToDisplay] = useState([])


    useEffect( ()=> {

        console.log(location.state)
        if(location.state) {
            console.log('set streams')
            setStreams(location.state)
        } 
        
    }, [])

    // Display a card with stream props if stream is not empty
    useEffect( ()=> {
        displayStreams(streams);
        
    }, [streams])

    // Display a card with stream props if stream is not empty
    useEffect( ()=> {
        if(streamsToDisplay.length !== 0) { // test if stream is not empty and display card
            console.log("display card")
            setDisplayCard(true);
        }
        
    }, [streamsToDisplay])

    function displayStreams(streams) {
        const array = []; 
        streams.map((stream, i) => {
            array.push(<CardStream key={i} data={stream} />);
        })
        setStreamsToDisplay(array);
    }

    return(
        <div className="displayStreams">

            {streamsToDisplay}

        </div>
    );
}

export default LivestreamsScreen;