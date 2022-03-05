import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tab from './components/Tab'
import './App.css';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <div className="tabs">
            <Tab props={{title: "Home"}} />
            <Tab props={{title: "About"}} />
            <Tab props={{title: "Features"}} />
          </div>

          <div className="viewport">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
