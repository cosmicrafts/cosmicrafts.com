// App component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './App.scss';

import Header from './components/header/Header';
import Home from './pages/Home';
import TeamPage from './pages/TeamPage'; // Corrected import

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<TeamPage />} /> {/* Corrected route path */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
