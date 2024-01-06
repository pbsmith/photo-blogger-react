import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home.js'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/gallery' />
        </Routes>
      </Router>
    </>
  );
}

export default App;
