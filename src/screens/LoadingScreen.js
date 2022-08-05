import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

import CardStream from '../components/CardStream'
import getStreams from '../api/getStreams'

let navigate = useNavigate();

function LoadingScreen() {

  const [readyToDisplay, setReadyToDisplay] = useState(false);

  const [streams, setStreams] = useState([]);
  const [pagination, setPagination] = useState("");
  
  const [moreStreams, setMoreStreams] = useState(true)

  const [streamsToDisplay, setStreamsToDisplay] = useState(null)


    useEffect( ()=> {
      // AU chargement de la page on récupère tous les streams
      loadStreams();

    }, [])

    // Quand il n'y a plus de streams à charger on les tris pour récupéré que ceux qui nous interesse
    useEffect( () => {

      if(!moreStreams)
        selectStreams(streams);
        
    }, [moreStreams])

    // QUand on a des stream prêt à etre afficher, on dit qu'on est prêt
    useEffect( () => {
      if(streamsToDisplay)
        setReadyToDisplay(true);
    }, [streamsToDisplay])

    // Quand on est prêt à afficher on change d'écran
    useEffect( () => {
      if(readyToDisplay)
        redirectLS();
    }, [readyToDisplay])

    // Function that request twitch API to load streams
    const loadStreams = async () => {

      let loading = true;
      let pag = pagination;
      let array = [];

      // If we have more stream to search with theses parameters
      while (loading) {

          let result = await getStreams(pag);
          console.log(result.data)
          array = array.concat(result.data)
          //setStreams([...streams, ...result.data])
          pag = result.pagination.cursor;
          
          if(!result.data[0]){
            loading = false;
            setPagination(pag);
            setStreams(array);
            setMoreStreams(false);
          }

      }
  }

  // Select only streams with "21 jump click" in the title
  const selectStreams = (streamsArray) => {
    const display = streamsArray.map((stream, i) => {
      if(stream.title.includes("21 Jumpclick") || stream.title.includes("21 Jump Click") || stream.title.includes("21 Jump click")) {
          return(<CardStream key={i} data={stream} />);
      }
    })
    setStreamsToDisplay(display);
  }


  const redirectLS = () => {
    navigate('/livestream')
  }


  const handleClickBtnAfficher = () => {
    console.log(streams)
}

  return (
    <div className="LoadingScreen">
      <p>
        Recherche de stream en cours
      </p>
      
      {/* <a
        className="LP-link"
        href="http://discord.gg/losplantos"
        target="_blank"
        rel="noopener noreferrer"
      > */}

        <img onClick={handleClickBtnAfficher} src='images/Los_Plantos_LoadingScreen.png' className="LP-logo" alt="emote LP" />
      {/* </a> */}
      
    </div>
  );
}
export default LoadingScreen;