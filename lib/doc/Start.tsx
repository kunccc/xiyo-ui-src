import React from 'react';
import ReactMarkdown from 'react-markdown';

const Start: React.FC = () => {
  return (
    <ReactMarkdown className="markdown-body">{require('!!raw-loader!./start.md').default}</ReactMarkdown>
  );
};

export default Start;