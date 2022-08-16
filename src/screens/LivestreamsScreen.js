import React, {useState, useEffect} from "react"
import CardStream from '../components/CardStream'
import { Box } from '@mui/system';

function LivestreamsScreen(props) {

    const [streams] = useState(props.streams);

    const [streamsToDisplay, setStreamsToDisplay] = useState([])

    useEffect( ()=> {
        displayStreams(streams);
        
    }, [])

    function displayStreams(streams) {
        const array = streams.map((stream, i) => {
            return(<CardStream key={i} data={stream} />);
        })
        setStreamsToDisplay(array);
    }

    return(
        <Box style={{ width: '100%', display: 'flex',   
        flexFlow: 'row wrap', transform: 'scale(0.9)' }}>

            {streamsToDisplay}

        </Box>
    );
}

export default LivestreamsScreen;