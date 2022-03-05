import React, { useState } from 'react';
import Tab from './Tab'
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <Tab props={{title: "Home"}} />
          <Tab props={{title: "About"}} />
          <Tab props={{title: "Features"}} />
        </div>

        <div className="viewport">Pages Go Here</div>
      </div>
    </div>
  );
}

export default App;
