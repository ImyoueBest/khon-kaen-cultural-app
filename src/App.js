import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import CulturalCollection from './pages/CulturalCollection';
import FestivalCalendar from './pages/FestivalCalendar';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/collection">Cultural Collection</Link></li>
            <li><Link to="/calendar">Festival Calendar</Link></li>
            <li><Link to="/profile">User Profile</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<CulturalCollection />} />
          <Route path="/calendar" element={<FestivalCalendar />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
