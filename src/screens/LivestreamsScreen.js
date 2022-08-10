import React, {useState, useEffect} from "react"
import CardStream from '../components/CardStream'
import getStreams from '../api/getStreams'
import ButtonLp from '../styled/ButtonLp'
import ColorButton from "../styled/ColorButton"
import { useLocation } from "react-router-dom"

const gtaGameID = "32982";

// Store in variable a RegExp to match the title of the stream with "21 Jumpclick" or "21 JUMPCLICK" or "21 jumpclick" or "21 Jump Click" or "21 Jump click" or "21 JUMP ClICK" or "21 JUMP CLICK" or "21 Jump Click" or "21 Jump click" or "21 Jump ClICK"
const regexp21JC = /(21 *[jJ][uU][mM][pP] *[cC][lL][iI][cC][kK]) | (21 *[jJ] *[cC])/;

// Store in variable a RegExp to match the title of the stream with "Los Plantos" or "Los plantos" or "LosPlantos" or "LOSPLANTOS" or "LOS PLANTOS"
const regexpLP = /([lL][oO][sS] *[pP][lL][aA][nN][tT][oO][sS]) | ([lL][pP])/;



function LivestreamsScreen(props) {
    const location = useLocation();

    const [streams, setStreams] = useState([]);
    const [pagination, setPagination] = useState();
    const [moreStreams, setMoreStreams] = useState(true)

    const [stream, setStream] = useState({});
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
        console.log(streamsToDisplay);        
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

            {streamsToDisplay}

        </div>
    );
}

export default LivestreamsScreen;