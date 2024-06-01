import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop';
import Project from './pages/Project';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/portfolio' element={<Home />} />
        <Route path='/portfolio/project' element={<Project />} />
        <Route path='/portfolio/about' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
