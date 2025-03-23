import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Artist from './components/artists/Artist';
import Artists from './components/artists/Artists';

const App = () => {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<Home />} /> 
        <Route path="/artists" element={<Artists />} /> 
        <Route path="/artist/:id" element={<Artist />} /> {/* Afficher le profil d'un artiste */}
      </Routes>
    </Router>
  );
};

export default App;
