import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="app">
      <textarea
        value={markdown}
        onChange={e => setMarkdown(e.target.value)}
      />

      <ReactMarkdown className="preview"  remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}

export default App;
