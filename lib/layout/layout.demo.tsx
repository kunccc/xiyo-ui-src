import React from 'react';
import Demo from '../../Demo';
import LayoutExample from './examples/layout.example';

const LayoutDemo: React.FC = () => {
  return (
    <Demo code={require('!!raw-loader!./examples/layout.example').default}><LayoutExample/></Demo>
  );
};

export default LayoutDemo;