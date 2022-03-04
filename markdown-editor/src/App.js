import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="app">
      <textarea
        value={markdown}
        onChange={e => setMarkdown(e.target.value)}
      />

      <ReactMarkdown className="preview">{markdown}</ReactMarkdown>
    </div>
  );
}

export default App;
