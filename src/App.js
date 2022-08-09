import React from 'react'
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";

import LoadingScreen from './screens/LoadingScreen';
import LivestreamsScreen from './screens/LivestreamsScreen';
import { Counter } from './features/counter/Counter';
import './App.css';


function App() {
  return (
    <div className="LP-app">
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="livestreams" element={<LivestreamsScreen />} /> 
        <Route path="counter" element={<Counter />} />
      </Routes>
      

    </div>
  );
}

export default App;
