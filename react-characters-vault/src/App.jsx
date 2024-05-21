import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MarvelProvider } from './context/MarvelContext';
import Navbar from './components/Navbar';
import AlphabetButtons from './components/AlphabetButtons';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import SearchBar from './components/SearchBar';
import Favorites from './components/Favorites';
import './index.css';

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState('A');

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  return (
    <MarvelProvider>
      <Router>
        <Navbar />
        <SearchBar />
        <AlphabetButtons onLetterClick={handleLetterClick} />
        <Routes>
          <Route path="/" element={<CharacterList letter={selectedLetter} />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </MarvelProvider>
  );
};

export default App;
