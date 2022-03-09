import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './Editor.css';

function Editor() {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="editor">
      <textarea
        value={markdown}
        onChange={e => setMarkdown(e.target.value)}
      />

      <ReactMarkdown className="preview"  remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}

export default Editor;
