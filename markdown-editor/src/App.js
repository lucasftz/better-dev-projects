import React, { useState } from 'react';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="app">
      <textarea
        value={markdown}
        onChange={e => setMarkdown(e.target.value)}
      />

      <div className="preview">Render markdown here</div>
    </div>
  );
}

export default App;
