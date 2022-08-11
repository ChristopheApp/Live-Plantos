import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

import loadStreams from '../utils/loadStreams';
import selectStreams from '../utils/selectStreams';

import { useSelector } from 'react-redux'
import { getData } from '../app/myApiReducer'

function LoadingScreen() {
  const [streamsNotFound, setStreamsNotFound] = useState(false);

  const [streams, setStreams] = useState([]);
  const [moreStreamsToLoad, setMoreStreamsToLoad] = useState(true)

  const [selectedStreams, setSelectedStreams] = useState([]);
  const [selectionFinished, setSelectionFinished] = useState(false);

  const [moreStreamsToSelect, setMoreStreamsToSelect] = useState(true)

  let navigate = useNavigate();

  const apiData = useSelector(getData)

  

  // AU chargement de la page on récupère tous les streams
    useEffect( ()=> {
      loadAllStreams(apiData);
    }, [])

    // Quand il n'y a plus de streams à charger on les tris pour récupéré que ceux qui nous interesse
    useEffect( () => {

      if(!moreStreamsToLoad)
      console.log('selectedStreams')
        selectWishesStreams(apiData, streams);
        
    }, [moreStreamsToLoad])

    useEffect( () => {
      
      console.log('moreStreamToSelect changed (no sense if display, i go die)')

      if(!moreStreamsToLoad)
      console.log('more stream to select changed to false')
        
    }, [moreStreamsToSelect])

    // Quand le tri est fini, on change de page si on a des streams à afficher
    useEffect( () => {

      console.log("ca vient quand ici bordel")
      if(selectionFinished && selectedStreams.length > 0){
        console.log('ready to display')
        console.log(selectedStreams)
        navigate('/livestreams', { state: selectedStreams });


      } else {
        console.log("pas de stream")
        setStreamsNotFound(true);

      }
    }, [selectedStreams, selectionFinished])


    const loadAllStreams = async (_data) => {
      let result = await loadStreams(_data);
      console.log(result)
      setStreams(result);
      setMoreStreamsToLoad(false);
    }


  // Select only streams with "21 jump click" in the title
  const selectWishesStreams = async (_data, _streamsArray) => {
    let result = await selectStreams(_data, _streamsArray);
    console.log(result)
    setSelectedStreams(result);
    setSelectionFinished(true);
  }
 

  const handleClickBtnAfficher = () => {
    console.log(streams)
}

  return (
    <div className="LoadingScreen">
      <h1>Recherche de stream en cours</h1>
      {streamsNotFound && selectionFinished ? <h1>Pas de stream trouvé</h1> : null}

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