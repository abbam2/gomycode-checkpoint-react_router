import './App.css';
import React from 'react';
import Home from './component/Home';
import {Routes, Route} from "react-router-dom";
import Info from './component/Info';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
  return (
    <div className="App">
    <Header /> 

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/info" element={<Info />}/>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
