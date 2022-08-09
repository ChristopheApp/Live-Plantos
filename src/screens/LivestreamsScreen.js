import React, {useState, useEffect} from "react"
import CardStream from '../components/CardStream'
import getStreams from '../api/getStreams'
import ButtonLp from '../styled/ButtonLp'
import ColorButton from "../styled/ColorButton"
import { useLocation } from "react-router-dom"

const gtaGameID = "32982";

const location = useLocation;

function LivestreamsScreen(props) {

    const [streams, setStreams] = useState([]);
    const [pagination, setPagination] = useState();
    const [moreStreams, setMoreStreams] = useState(true)

    const [stream, setStream] = useState({});
    const [displayCard, setDisplayCard] = useState(false);

    const [streamToDisplay, setStreamToDisplay] = useState()


    useEffect( ()=> {

        console.log(location)
    
        // Only for the test i guess, i should already have the data
        const fetchData = async () => {
            let result = await getStreams();
            setStreams(result.data)
            setStream(result.data[1])

            const display = result.data.map((stream, i) => {
                if(stream.title.includes("21 Jumpclick") || stream.title.includes("21 Jump Click") || stream.title.includes("21 Jump click")) {
                    return(<CardStream key={i} data={stream} />);
                }
            })

            setStreamToDisplay(display)
        }
        fetchData();

    }, [])

    // Display a card with stream props if stream is not empty
    useEffect( ()=> {
        if(Object.keys(stream).length !== 0) { // test if stream is not empty and display card
            setDisplayCard(true);
        }
        
    }, [stream])

    
    const handleClickBtn = async () => {

        // If we have more stream to search with theses parameters
        if (moreStreams) {

            let result = await getStreams(pagination);
            setStreams([...streams, ...result.data])
            setPagination(result.pagination.cursor)
            console.log(result.data)
            
            if(!result.data[0])
                setMoreStreams(false)

        } else { // 
            console.log('No more streams, no need to search')
        }
    }


    const handleClickBtnAfficher = () => {
        console.log(streams)
        console.log(streamToDisplay);        
    }

    return(
        <div className="displayStreams">
            {/* <p>Salut</p>
            <ButtonLp variant='contained' onClick={handleClickBtn} >
                Load more streams
            </ButtonLp>

            <ColorButton onClick={handleClickBtnAfficher} >
                Afficher
            </ColorButton> */}

            {/* {displayCard
                ? <CardStream data={stream} />
                : <div/>
            } */}

            {streamToDisplay}

        </div>
    );
}

export default LivestreamsScreen;