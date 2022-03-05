import React, { useState } from 'react';
import './App.css';

function App() {
  const [highlightStyle, setHighlightStyle] = useState({left: 0, opacity: 0});

  const moveHighlight = (e) => {
    // update highlightStyle to move the highlight
    setHighlightStyle({
      // e.nativeEvent grabs the actual event instead of a synthetic event
      // (which is what React wraps over the actual event)
      // layerX is the pos of the mouse relative to the closest element, which is the tab div
      // -150 because that's the width of of the highlight
      left: e.nativeEvent.layerX - 150
    })
  }

  const hideHighlight = (e) => {
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
      opacity: 0
    })
  }

  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <div className="tab" onMouseMove={moveHighlight} onMouseOut={hideHighlight}>
            <div className="highlight" style={highlightStyle} />
            <a>Home</a>
          </div>
          <div className="tab">
            <a>About</a>
          </div>
          <div className="tab">
            <a>Features</a>
          </div>
        </div>

        <div className="viewport">Pages Go Here</div>
      </div>
    </div>
  );
}

export default App;
