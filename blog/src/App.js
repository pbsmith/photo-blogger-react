import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home.js'
import GalleryPage from './components/pages/GalleryPage.js'
import AboutContactPage from './components/pages/AboutContactPage.js'
import Gallery from './components/Gallery.js';

function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/gallery' exact Component={GalleryPage} />
          <Route path='/about' exact Component={AboutContactPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
