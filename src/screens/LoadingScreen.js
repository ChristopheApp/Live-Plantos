import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

import loadStreams from '../utils/loadStreams';

import getStreamsByGameId from '../api/getStreamsByGameId'
import getUserFromLogin from '../api/getUserFromLogin';
import getStreamsByUserFollows from '../api/getStreamsByUserFollows';

import { useSelector, useDispatch } from 'react-redux'
import {    getData  } from '../app/localhostReducer'


const data = {
  useFollows: false,
  userId: "147359949",
  language: "fr",
  limit: "100",
  gameId: "32982",
  pagination: "",
}

function LoadingScreen() {

  let navigate = useNavigate();

  const globalVar = useSelector(getData)
  const dispatch = useDispatch()

  console.log(globalVar)
  const regexp21JC = /(21.*[jJ][uU][mM][pP].*[cC][lL][iI][cC][kK])|(.*21 *[jJ] *[cC].*)/;
  const regexpLP = /([lL][oO][sS] *[pP][lL][aA][nN][tT][oO][sS])/;

  const [readyToDisplay, setReadyToDisplay] = useState(false);
  const [streamsNotFound, setStreamsNotFound] = useState(false);

  const [streams, setStreams] = useState([]);
  const [pagination, setPagination] = useState("");
  
  const [moreStreams, setMoreStreams] = useState(true)

  const [streamsToDisplay, setStreamsToDisplay] = useState([])


    useEffect( ()=> {
      // AU chargement de la page on récupère tous les streams
      //loadStreamsByGame();
      loadAllStreams(data);
    }, [])

    // Quand il n'y a plus de streams à charger on les tris pour récupéré que ceux qui nous interesse
    useEffect( () => {

      if(!moreStreams)
        selectStreams(streams);
        
    }, [moreStreams])

    // Quand on a des stream prêt à etre afficher, on change de page
    useEffect( () => {
      if(streamsToDisplay.length > 0){
        console.log('ready to display')
        console.log(streamsToDisplay)
        navigate('/livestreams', { state: streamsToDisplay });

        setReadyToDisplay(true);

      } else {
        console.log("pas de stream")
        setStreamsNotFound(true);

      }
    }, [streamsToDisplay])


    const loadAllStreams = async (_data) => {
      let result = await loadStreams(_data);
      console.log(result)
      setStreams(result);
      setMoreStreams(false);
    }

    // Function that request twitch API to load streams
    const loadStreamsByGame = async () => {

      let loading = true;
      let pag = pagination;
      let array = [];

      // If we have more stream to search with theses parameters
      while (loading) {

          let result = await getStreamsByGameId(pag);
          console.log(result.data)
          array = array.concat(result.data)
          //setStreams([...streams, ...result.data])
          pag = result.pagination.cursor;
          
          if(!result.data[0]){
            loading = false;
            setPagination(pag);
            setStreams(array);
            setMoreStreams(false);
            return array;
          }

      }
  }

  const loadStreamsByFollow = async () => {

    // .then( (streams) => {
    //   setStreams(streams);
    //   setReadyToDisplay(true);
    // }).catch( (error) => {
    //   console.log(error);
    // } )
  
  }



  // Select only streams with "21 jump click" in the title
  const selectStreams = (streamsArray) => {
    console.log(streamsArray)
    const array = [];
    streamsArray.map((stream, i) => {
      if(stream.title.match(regexp21JC)) {
        array.push(stream);
    }
      // if(stream.title.includes("21 Jumpclick") || stream.title.includes("21 Jump Click") || stream.title.includes("21 Jump click")) {
      //     array.push(<CardStream key={i} data={stream} />);
      // }
    })
    setStreamsToDisplay(array);
  }
 

  const handleClickBtnAfficher = () => {
    console.log(streams)
}

  return (
    <div className="LoadingScreen">
      {!streamsNotFound ? <h1>Recherche de stream en cours</h1> : <h1>Pas de stream trouvé</h1>}

      {/* <a
        className="LP-link"
        href="http://discord.gg/losplantos"
        target="_blank"
        rel="noopener noreferrer"
      > */}

        <img onClick={handleClickBtnAfficher} src='images/Los_Plantos_LoadingScreen.png' className="LP-logo" alt="emote LP" />
      {/* </a> */}
      

      {/* {readyToDisplay && <Navigate replace to="/livestreams" state={{state: "test"}} />} */}

    </div>
  );
}
export default LoadingScreen;