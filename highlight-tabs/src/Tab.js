import React, { useState } from 'react';

const Tab = ({ props }) => {
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
    <div className="tab" onMouseMove={moveHighlight} onMouseOut={hideHighlight}>
      <div className="highlight" style={highlightStyle} />
      <a>{props.title}</a>
    </div>
  )
}

export default Tab