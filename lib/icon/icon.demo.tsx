import React from 'react';
import Demo from '../../Demo';
import IconExample from './examples/icon.example';

const IconDemo: React.FC = () => {
  return (
    <Demo code={require('!!raw-loader!./examples/icon.example').default}><IconExample/></Demo>
  );
};

export default IconDemo;