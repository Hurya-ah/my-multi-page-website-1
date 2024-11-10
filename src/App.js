// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import './App.css';  // Main CSS for App

const App = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          {/* Updated from <Switch> to <Routes> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
