import React from 'react'
import { Routes, Route} from "react-router-dom";

import LoadingScreen from './screens/LoadingScreen';
import LivestreamsScreen from './screens/LivestreamsScreen';
import ScreenError404 from './screens/ScreenError404';
import GetApiAccessToken from './api/config/getApiAccessToken';
import './App.css';


function App() {
  return (
    <div className="LP-app">
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/livestreams" element={<LivestreamsScreen />} />
        <Route path="/getapiaccesstoken" element={<GetApiAccessToken />} />  
        
        <Route path="*" element={<ScreenError404 />} /> {/* LAISSER EN DERNIERE ROUTE */}

      </Routes>
      

    </div>
  );
}

export default App;
