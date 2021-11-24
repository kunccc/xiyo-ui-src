import React from 'react';
import ReactMarkdown from 'react-markdown';

const Install: React.FC = () => {
  return (
    <ReactMarkdown className="markdown-body">{require('!!raw-loader!./install.md').default}</ReactMarkdown>
  );
};

export default Install;