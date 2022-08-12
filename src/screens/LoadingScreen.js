import React, {useState, useEffect} from 'react'

import LoadingComponent from '../components/LoadingTextAndProgress';
import TypographyLP from '../styled/TypographyLP';

import getWishesStreams from '../utils/getWishesStreams';
import loadStreams from '../utils/loadStreams';
import selectStreams from '../utils/selectStreams';

import { useNavigate } from "react-router-dom";

import { useSelector } from 'react-redux'
import { getData } from '../app/myApiReducer'

function LoadingScreen() {
  const [streamsNotFound, setStreamsNotFound] = useState(false);

  const [streams, setStreams] = useState([]);
  const [moreStreamsToLoad, setMoreStreamsToLoad] = useState(true)

  const [selectedStreams, setSelectedStreams] = useState([]);
  const [selectionFinished, setSelectionFinished] = useState();

  const [moreStreamsToSelect, setMoreStreamsToSelect] = useState()

  const [displayNoStreamsFound, setDisplayNoStreamsFound] = useState(false);

  let navigate = useNavigate();

  const apiData = useSelector(getData)

  

  // AU chargement de la page on récupère tous les streams
    useEffect( ()=> {
      //loadAllStreams(apiData);
      console.log('i fire once');

      wishesStreams(apiData);
    }, [])

    const wishesStreams = async(data) => {
      const result = await getWishesStreams(data);
      setStreams(result);
      console.log(result);
    }

    // Quand il n'y a plus de streams à charger on les tris pour récupéré que ceux qui nous interesse
    useEffect( () => {

      if(!moreStreamsToLoad)
      console.log('selectedStreams')
        selectWishesStreams(apiData, streams);
        
    }, [moreStreamsToLoad])

    useEffect( () => {
      
      console.log('SelectionFinished changed (no sense if display, i go die)')

      if(selectionFinished){
        console.log('Selection finie')
        console.log('selectedStreams.length > 0')
          console.log(selectedStreams.length > 0)
          console.log(selectedStreams)
          if(selectedStreams.length > 0){
            setStreamsNotFound(false);
            navigate('/livestreams', { state: selectedStreams });
        } else {
          console.log("pas de stream")
          setStreamsNotFound(true);
        }
      }
        
    }, [selectedStreams, selectionFinished])

    useEffect (() => {
      if(streamsNotFound){
        setDisplayNoStreamsFound(true);
      }
    }, [streamsNotFound])

    // Load all streams from twitch api
    const loadAllStreams = async (_data) => {
      let result = await loadStreams(_data);
      console.log(result)
      setStreams(result);
      setMoreStreamsToLoad(false);
    }


  // Select only streams we want to display
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
      {!selectionFinished ? <LoadingComponent /> : null}
      {displayNoStreamsFound && selectionFinished ? <TypographyLP>Il n'y a aucun stream en cours sur Los Plantos</TypographyLP> : null}

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