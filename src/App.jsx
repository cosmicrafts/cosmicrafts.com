// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './App.scss';
import PricingSlider from './pages/DAOcalc';
import Header from './components/header/Header';
import Home from './pages/Home';
import TeamPage from './pages/TeamPage';
import PrivacyPolicy from './pages/PrivacyPolicy'; // Import the new component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/factions" element={<PricingSlider />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Add this line */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
