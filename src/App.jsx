import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import NewsDatail from './Components/NewsDatail';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:index" element={<NewsDatail/>} />
      </Routes>
    </Router>
  );
}

export default App;
