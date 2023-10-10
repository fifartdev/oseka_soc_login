// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LikePage from './components/LikePage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/like" element={<LikePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
