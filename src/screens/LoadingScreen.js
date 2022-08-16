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
  const [selectionFinished, setSelectionFinished] = useState(false);

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
      setSelectionFinished(true);
      setStreams(result.data);
      console.log(result);
    }

    useEffect( ()=> {
      if(streams.length !== 0) {
        console.log('Stream found');
        navigate('/livestreams', { state: streams });
      } else if (selectionFinished) {
        console.log('No stream found');
        setStreamsNotFound(true);
      }
      
    }, [streams])

    useEffect( ()=> {
      if(streamsNotFound) {
        console.log('display no streams found');
        setDisplayNoStreamsFound(true);
      }
    }, [streamsNotFound])

 

  const handleClickBtnAfficher = () => {
    console.log(streams)
}

  return (
    <div className="LoadingScreen">
      {!selectionFinished ? <LoadingComponent /> : null}
      {streamsNotFound ? <TypographyLP>Il n'y a aucun stream en cours sur Los Plantos</TypographyLP> : null}

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