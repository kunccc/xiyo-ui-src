import React from 'react';
import ReactMarkdown from 'react-markdown';

const Intro: React.FC = () => {
  return (
    <ReactMarkdown className="markdown-body">{require('!!raw-loader!./intro.md').default}</ReactMarkdown>
  );
};

export default Intro;