import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MarvelProvider } from './context/MarvelContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AlphabetButtons from './components/AlphabetButtons';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Favorites from './components/Favorites';
import './index.css';

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState('');

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  return (
    <MarvelProvider>
      <Router>
        <Navbar />
        <SearchBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AlphabetButtons onLetterClick={handleLetterClick} />
                <CharacterList letter={selectedLetter} />
              </>
            }
          />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </MarvelProvider>
  );
};

export default App;
