import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Navalsys from './pages/Navalsys';
import Lifescience from './pages/Lyfscience';
import MissileDashboard from './pages/MissileDashboard';
import LyfscienceQuiz from './pages/lyfscienceQuiz';
import Missilequiz from './pages/Missilequiz';
import Navalquiz from './pages/Navalquiz';
import LandingPage from './pages/LandingPage';
import './index.css';
import './App.css';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/NQ" element={<Navalquiz />} />
        <Route path="/MQ" element={<Missilequiz />} />
        <Route path="/MissileDash" element={<MissileDashboard />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/LC" element={<Lifescience />} />
        <Route path="/NavalSystem" element={<Navalsys />} />
        <Route path="/LCQ" element={<LyfscienceQuiz />} />
        <Route path="/admin1" element={<Admin />} />
        <Route path="/LP" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
