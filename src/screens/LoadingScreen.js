import React, {useState, useEffect} from 'react'
import LivestreamsScreen from './LivestreamsScreen';

import LoadingComponent from '../components/LoadingTextAndProgress';
import TypographyLP from '../styled/TypographyLP';

import getWishesStreams from '../utils/getWishesStreams';

import { useSelector } from 'react-redux'
import { getData } from '../app/myApiReducer'

function LoadingScreen() {
  
  const [streams, setStreams] = useState([]);
  const [displayStreams, setDisplayStreams] = useState(false)
  const [selectionFinished, setSelectionFinished] = useState(false);
  const [streamsNotFound, setStreamsNotFound] = useState(false);

  const apiData = useSelector(getData)


  // AU chargement de la page on récupère tous les streams
    useEffect( ()=> {
      //loadAllStreams(apiData);
      console.log('i fire once');

      loadStreams(apiData);
    }, [])

    const loadStreams = async(data) => {
      console.log('i fire again');
      const result = await getWishesStreams(data);
      console.log('waiting for result');
      setSelectionFinished(true);
      setStreams(result.data);
      console.log(result);
    }

    useEffect( ()=> {
      if(streams.length !== 0) {
        console.log('Stream found');
        setDisplayStreams(true)
        //navigate('/livestreams', { state: streams });
      } else if (selectionFinished) {
        console.log('No stream found');
        setStreamsNotFound(true);
      }
      
    }, [streams])
 

  const handleClickBtnAfficher = () => {
    console.log(streams)
}

  return (
    <div>
      {displayStreams ? 
      <LivestreamsScreen streams={streams} /> : 
      <div className="LoadingScreen"> 
      {!selectionFinished ? <LoadingComponent /> : null}
      {streamsNotFound ? <TypographyLP mb={7}>Il n'y a aucun stream en cours sur Los Plantos</TypographyLP> : null}

      {/* <a
        className="LP-link"
        href="http://discord.gg/losplantos"
        target="_blank"
        rel="noopener noreferrer"
      > */}

        <img onClick={handleClickBtnAfficher} src='images/Los_Plantos_LoadingScreen.png' className="LP-logo" alt="emote LP" />
      {/* </a> */}
      </div>
      }
    </div>
  );
}
export default LoadingScreen;