import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop';
import Header from './components/header.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header></Header>
      <Routes>
        <Route path='/portfolio' element={<Home />} />
        {/* <Route path='/portfolio/project' element={<Project />} /> */}
        <Route path='/portfolio/about' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
