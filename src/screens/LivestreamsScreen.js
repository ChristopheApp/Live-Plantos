import React, {useState, useEffect} from "react"
import CardStream from '../components/CardStream'
import getStreams from '../api/getStreams'
import ButtonLp from '../styled/ButtonLp'
import ColorButton from "../styled/ColorButton"

const gtaGameID = "32982";

const data = {
    game_id: "32982",
    game_name: "Grand Theft Auto V",
    id: "45866229756",
    is_mature: false,
    language: "fr",
    started_at: "2022-08-04T08:00:52Z",
    tag_ids: ['6f655045-9989-4ef7-8f85-1edcec42d648'],
    thumbnail_url: "https://static-cdn.jtvnw.net/previews-ttv/live_user_dylan_del_rey-{width}x{height}.jpg",
    title: "Honneur et fidélité. [EP28/S3] | 21 Jumpclick !discord !RP",
    type: "live",
    user_id: "83822427",
    user_login: "dylan_del_rey",
    user_name: "Dylan_Del_Rey",
    viewer_count: 205,
}

function LivestreamsScreen() {

    const [streams, setStreams] = useState([]);
    const [pagination, setPagination] = useState();
    const [moreStreams, setMoreStreams] = useState(true)

    const [stream, setStream] = useState({});
    const [displayCard, setDisplayCard] = useState(false);

    useEffect( ()=> {
    
        // Only for the test i guess, i should already have the data
        const fetchData = async () => {
            let result = await getStreams();
            setStream(result.data[1])
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
        console.log(streams);        
    }

    return(
        <div className="embed">
            <p>Salut</p>
            <ButtonLp variant='contained' onClick={handleClickBtn} >
                Load more streams
            </ButtonLp>

            <ColorButton onClick={handleClickBtnAfficher} >
                Afficher
            </ColorButton>

            {displayCard
                ? <CardStream data={stream} />
                : <div/>
            }

        </div>
    );
}

export default LivestreamsScreen;