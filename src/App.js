import React from 'react'
import { Routes, Route} from "react-router-dom";

import LoadingScreen from './screens/LoadingScreen';
import LivestreamsScreen from './screens/LivestreamsScreen';
import LoadFollowedStreams from './screens/LoadFollowedStreams';
import GetApiAccessToken from './api/config/getApiAccessToken';
import { Counter } from './features/counter/Counter';
import './App.css';


function App() {
  return (
    <div className="LP-app">
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/livestreams" element={<LivestreamsScreen />} />
        <Route path="/loadstreams" element={<LoadFollowedStreams />} />
        <Route path="/getapiaccesstoken" element={<GetApiAccessToken />} />  
        <Route path="/counter" element={<Counter />} />
      </Routes>
      

    </div>
  );
}

export default App;
