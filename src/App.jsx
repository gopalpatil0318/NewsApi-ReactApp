import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import NewsDetail from './Components/NewsDetail';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:index" element={<NewsDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
